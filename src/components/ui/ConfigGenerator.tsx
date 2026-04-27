import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  Clipboard,
  Settings2,
  Download,
  RotateCcw,
  ChevronDown,
  Plus,
  X,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  buildDefaults,
  loc,
  type ConfigSchema,
  type FormField,
  type Lang,
  type Localized,
} from '../../lib/config-schema';

export type { ConfigSchema, FormField } from '../../lib/config-schema';

interface ConfigGeneratorProps {
  /** One schema = single panel. Multiple schemas = tabs (e.g. multi-file configs). */
  schemas: ConfigSchema[];
  /** Title shown on the top of the builder. Defaults to a generic one. */
  title?: Localized;
  /** Optional subtitle / instructions. */
  description?: Localized;
  /** Color accent for active tab and primary button (hex or rgb()). */
  accent?: string;
}

const T = {
  defaultTitle: { en: 'Configuration Builder', es: 'Constructor de Configuración' },
  defaultDescription: {
    en: 'Tweak the values and copy the result. The output is guaranteed to be valid Lua.',
    es: 'Ajusta los valores y copia el resultado. La salida está garantizada como Lua válido.',
  },
  copy: { en: 'Copy', es: 'Copiar' },
  copied: { en: 'Copied!', es: '¡Copiado!' },
  download: { en: 'Download', es: 'Descargar' },
  reset: { en: 'Reset', es: 'Restablecer' },
  add: { en: 'Add', es: 'Añadir' },
  enabled: { en: 'Enabled', es: 'Activado' },
  disabled: { en: 'Disabled', es: 'Desactivado' },
} as const;

export function ConfigGenerator({
  schemas,
  title,
  description,
  accent = '#c6ff3d',
}: ConfigGeneratorProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  // Single bag of values keyed by schema index. Each schema has its own.
  const [values, setValues] = useState<Record<number, Record<string, any>>>(() => {
    const initial: Record<number, Record<string, any>> = {};
    schemas.forEach((s, i) => {
      initial[i] = buildDefaults(s.fields);
    });
    return initial;
  });

  // If schemas change (rare), reset values for new ones.
  useEffect(() => {
    setValues((prev) => {
      const next: Record<number, Record<string, any>> = {};
      schemas.forEach((s, i) => {
        next[i] = prev[i] ?? buildDefaults(s.fields);
      });
      return next;
    });
  }, [schemas]);

  const activeSchema = schemas[activeTab];
  const activeValues = values[activeTab] ?? {};

  const lua = useMemo(() => {
    try {
      return activeSchema.toLua(activeValues);
    } catch (err) {
      return `-- ERROR generating config\n-- ${err instanceof Error ? err.message : 'unknown'}`;
    }
  }, [activeSchema, activeValues]);

  const updateValue = (id: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [activeTab]: { ...prev[activeTab], [id]: value },
    }));
  };

  const resetActive = () => {
    setValues((prev) => ({ ...prev, [activeTab]: buildDefaults(activeSchema.fields) }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(lua);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard might be blocked in some browsers */
    }
  };

  const handleDownload = () => {
    const blob = new Blob([lua], { type: 'text/x-lua;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeSchema.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-12 rounded-3xl bg-[#080808]/90 border border-white/[0.08] flex flex-col overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between gap-4 px-6 md:px-8 pt-7 pb-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0"
            style={{
              background: `${accent}1a`,
              borderColor: `${accent}33`,
            }}
          >
            <Settings2 className="w-5 h-5" style={{ color: accent }} />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg md:text-xl font-bold font-display text-white truncate">
              {loc(title ?? T.defaultTitle, language)}
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 truncate">
              {loc(description ?? T.defaultDescription, language)}
            </p>
          </div>
        </div>

        <button
          onClick={resetActive}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-medium transition-colors border border-white/[0.05]"
          title={loc(T.reset, language)}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {loc(T.reset, language)}
        </button>
      </div>

      {/* Tabs row (only visible when more than one schema) */}
      {schemas.length > 1 && (
        <div className="flex items-center gap-1 px-4 md:px-6 pt-4 overflow-x-auto custom-scrollbar">
          {schemas.map((s, i) => {
            const isActive = i === activeTab;
            return (
              <button
                key={s.fileName + i}
                onClick={() => setActiveTab(i)}
                className={`relative px-4 py-2 text-[13px] font-medium rounded-t-lg whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-white bg-[#020202]/60'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {loc(s.tabLabel, language) || s.fileName}
                {isActive && (
                  <motion.span
                    layoutId="cpx-config-tab"
                    className="absolute inset-x-2 -bottom-px h-[2px] rounded-full"
                    style={{ background: accent }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Body — form on left, preview on right */}
      <div className="flex flex-col lg:flex-row min-h-[480px]">
        {/* FORM */}
        <div className="flex-1 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/[0.06] space-y-5 max-h-[800px] overflow-y-auto custom-scrollbar">
          {activeSchema.fields.map((field) => (
            <FieldRenderer
              key={field.id}
              field={field}
              values={activeValues}
              onChange={updateValue}
              language={language}
              accent={accent}
            />
          ))}
        </div>

        {/* PREVIEW */}
        <div className="flex-1 bg-[#030303] flex flex-col relative w-full lg:w-1/2">
          <div className="flex items-center justify-between gap-2 px-6 py-3 border-b border-white/[0.05] bg-black/30">
            <span className="text-xs font-mono text-zinc-500 truncate">{activeSchema.fileName}</span>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors border border-white/[0.05]"
                title={loc(T.download, language)}
              >
                <Download className="w-3.5 h-3.5 text-zinc-400" />
                <span className="hidden sm:inline">{loc(T.download, language)}</span>
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors border"
                style={{
                  background: copied ? `${accent}22` : 'rgba(255,255,255,0.05)',
                  borderColor: copied ? `${accent}55` : 'rgba(255,255,255,0.05)',
                  color: copied ? accent : 'white',
                }}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Clipboard className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{loc(copied ? T.copied : T.copy, language)}</span>
              </button>
            </div>
          </div>
          <div className="p-5 md:p-6 overflow-auto custom-scrollbar flex-1 max-h-[800px]">
            <pre className="text-[12.5px] font-mono leading-relaxed text-[#e2e8f0]">
              <code className="whitespace-pre">{lua}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Field renderer (the dispatcher per field type)
 * ------------------------------------------------------------------------- */

function FieldRenderer({
  field,
  values,
  onChange,
  language,
  accent,
}: {
  field: FormField;
  values: Record<string, any>;
  onChange: (id: string, value: any) => void;
  language: Lang;
  accent: string;
}) {
  if (field.type === 'group') {
    return (
      <GroupRow field={field} values={values} onChange={onChange} language={language} accent={accent} />
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-col">
        <span className="font-mono text-[13px] text-zinc-200 font-semibold">
          {loc(field.label, language)}
        </span>
        {field.description && (
          <span className="text-[12px] text-zinc-500 mt-0.5">
            {loc(field.description, language)}
          </span>
        )}
      </div>

      {field.type === 'select' && (
        <SelectInput field={field} value={values[field.id]} onChange={(v) => onChange(field.id, v)} language={language} accent={accent} />
      )}
      {field.type === 'multi-select' && (
        <MultiSelectInput field={field} value={values[field.id]} onChange={(v) => onChange(field.id, v)} language={language} accent={accent} />
      )}
      {field.type === 'string' && (
        <StringInput field={field} value={values[field.id]} onChange={(v) => onChange(field.id, v)} language={language} accent={accent} />
      )}
      {field.type === 'nullable-string' && (
        <NullableStringInput field={field} value={values[field.id]} onChange={(v) => onChange(field.id, v)} language={language} accent={accent} />
      )}
      {field.type === 'number' && (
        <NumberInput field={field} value={values[field.id]} onChange={(v) => onChange(field.id, v)} accent={accent} />
      )}
      {field.type === 'slider' && (
        <SliderInput field={field} value={values[field.id]} onChange={(v) => onChange(field.id, v)} accent={accent} />
      )}
      {field.type === 'boolean' && (
        <BooleanInput field={field} value={values[field.id]} onChange={(v) => onChange(field.id, v)} language={language} accent={accent} />
      )}
      {field.type === 'color' && (
        <ColorInput field={field} value={values[field.id]} onChange={(v) => onChange(field.id, v)} accent={accent} />
      )}
      {field.type === 'array-string' && (
        <ArrayStringInput field={field} value={values[field.id]} onChange={(v) => onChange(field.id, v)} language={language} accent={accent} />
      )}
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Per-type inputs
 * ------------------------------------------------------------------------- */

function SelectInput({ field, value, onChange, language, accent }: any) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-[#121212] border border-white/10 rounded-xl pl-4 pr-10 py-2.5 text-sm text-white outline-none transition-colors focus:bg-[#161616]"
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        onFocus={(e) => (e.currentTarget.style.borderColor = `${accent}55`)}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
      >
        {field.options.map((o: any) => (
          <option key={o.value} value={o.value}>
            {typeof o.label === 'string' ? o.label : loc(o.label, language)}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
    </div>
  );
}

function MultiSelectInput({ field, value, onChange, language, accent }: any) {
  const selected: string[] = Array.isArray(value) ? value : [];
  const toggle = (v: string) => {
    onChange(selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v]);
  };
  return (
    <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-[#121212] border border-white/10">
      {field.options.map((o: any) => {
        const isOn = selected.includes(o.value);
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => toggle(o.value)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
            style={{
              background: isOn ? `${accent}22` : 'rgba(255,255,255,0.03)',
              borderColor: isOn ? `${accent}55` : 'rgba(255,255,255,0.08)',
              color: isOn ? accent : '#a1a1aa',
            }}
          >
            {typeof o.label === 'string' ? o.label : loc(o.label, language)}
          </button>
        );
      })}
    </div>
  );
}

function StringInput({ field, value, onChange, language, accent }: any) {
  const [touched, setTouched] = useState(false);
  const error =
    field.pattern && touched && value && !new RegExp(field.pattern).test(value)
      ? field.patternError
        ? loc(field.patternError, language)
        : 'Invalid value'
      : null;
  return (
    <>
      <input
        type="text"
        value={value ?? ''}
        placeholder={field.placeholder}
        maxLength={field.maxLength}
        onBlur={() => setTouched(true)}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors focus:bg-[#161616]"
        onFocus={(e) => (e.currentTarget.style.borderColor = `${accent}55`)}
      />
      {error && <p className="text-[11px] text-rose-400 mt-1">{error}</p>}
    </>
  );
}

function NullableStringInput({ field, value, onChange, language, accent }: any) {
  const enabled = value !== null && value !== undefined;
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-3 select-none cursor-pointer">
        <Toggle checked={enabled} onChange={(b) => onChange(b ? (field.default || '') : null)} accent={accent} />
        <span className="text-[12px] text-zinc-400">
          {enabled ? loc(T.enabled, language) : loc(T.disabled, language)}
        </span>
      </label>
      {enabled && (
        <input
          type="text"
          value={value ?? ''}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors focus:bg-[#161616]"
          onFocus={(e) => (e.currentTarget.style.borderColor = `${accent}55`)}
        />
      )}
    </div>
  );
}

function NumberInput({ field, value, onChange, accent }: any) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        value={value ?? 0}
        min={field.min}
        max={field.max}
        step={field.step ?? 1}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="flex-1 bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors focus:bg-[#161616]"
        onFocus={(e) => (e.currentTarget.style.borderColor = `${accent}55`)}
      />
      {field.unit && <span className="text-[12px] text-zinc-500 font-mono">{field.unit}</span>}
    </div>
  );
}

function SliderInput({ field, value, onChange, accent }: any) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[12px] font-mono">
        <span className="text-zinc-500">{field.min}{field.unit ?? ''}</span>
        <span className="text-white font-semibold">
          {value}{field.unit ?? ''}
        </span>
        <span className="text-zinc-500">{field.max}{field.unit ?? ''}</span>
      </div>
      <input
        type="range"
        min={field.min}
        max={field.max}
        step={field.step ?? 1}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-current"
        style={{ accentColor: accent }}
      />
    </div>
  );
}

function BooleanInput({ field, value, onChange, language, accent }: any) {
  return (
    <label className="flex items-center gap-3 select-none cursor-pointer">
      <Toggle checked={!!value} onChange={onChange} accent={accent} />
      <span className="text-[12px] text-zinc-400">
        {value ? loc(T.enabled, language) : loc(T.disabled, language)}
      </span>
    </label>
  );
}

function ColorInput({ field, value, onChange, accent }: any) {
  return (
    <div className="flex items-center gap-3">
      <label
        className="w-12 h-12 rounded-xl border border-white/10 cursor-pointer relative overflow-hidden"
        style={{ background: value || field.default }}
      >
        <input
          type="color"
          value={value || field.default}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
        />
      </label>
      <input
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-mono text-white outline-none uppercase transition-colors focus:bg-[#161616]"
        onFocus={(e) => (e.currentTarget.style.borderColor = `${accent}55`)}
      />
    </div>
  );
}

function ArrayStringInput({ field, value, onChange, language, accent }: any) {
  const [draft, setDraft] = useState('');
  const items: string[] = Array.isArray(value) ? value : [];
  const canAdd = !!draft.trim() && (!field.max || items.length < field.max);

  const add = () => {
    if (!canAdd) return;
    onChange([...items, draft.trim()]);
    setDraft('');
  };
  const remove = (idx: number) => onChange(items.filter((_, i) => i !== idx));

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">
        {items.map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-lg text-xs font-mono"
            style={{
              background: `${accent}1a`,
              border: `1px solid ${accent}33`,
              color: accent,
            }}
          >
            {it}
            <button
              type="button"
              onClick={() => remove(i)}
              className="hover:bg-white/10 rounded p-0.5"
              aria-label="Remove"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        {items.length === 0 && (
          <span className="text-[11px] text-zinc-600 italic">empty</span>
        )}
      </div>
      <div className="flex items-stretch gap-2">
        <input
          type="text"
          value={draft}
          placeholder={field.itemPlaceholder}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              add();
            }
          }}
          className="flex-1 bg-[#121212] border border-white/10 rounded-xl px-4 py-2 text-sm text-white outline-none transition-colors focus:bg-[#161616]"
          onFocus={(e) => (e.currentTarget.style.borderColor = `${accent}55`)}
        />
        <button
          type="button"
          onClick={add}
          disabled={!canAdd}
          className="inline-flex items-center gap-1 px-3 rounded-xl text-sm font-medium border transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: `${accent}1a`,
            borderColor: `${accent}55`,
            color: accent,
          }}
        >
          <Plus className="w-4 h-4" />
          {loc(T.add, language)}
        </button>
      </div>
    </div>
  );
}

function GroupRow({ field, values, onChange, language, accent }: any) {
  const [open, setOpen] = useState(!field.collapsed);
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div>
          <div className="text-[13px] text-zinc-200 font-semibold font-display">
            {loc(field.label, language)}
          </div>
          {field.description && (
            <div className="text-[11px] text-zinc-500 mt-0.5">
              {loc(field.description, language)}
            </div>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 space-y-4 border-t border-white/[0.05]">
              {field.fields.map((f: FormField) => (
                <FieldRenderer
                  key={f.id}
                  field={f}
                  values={values}
                  onChange={onChange}
                  language={language}
                  accent={accent}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  accent,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  accent: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="relative inline-flex h-6 w-11 items-center rounded-full border transition-colors"
      style={{
        background: checked ? `${accent}33` : 'rgba(255,255,255,0.06)',
        borderColor: checked ? `${accent}66` : 'rgba(255,255,255,0.08)',
      }}
    >
      <motion.span
        animate={{ x: checked ? 22 : 4 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="block w-4 h-4 rounded-full"
        style={{ background: checked ? accent : '#71717a' }}
      />
    </button>
  );
}
