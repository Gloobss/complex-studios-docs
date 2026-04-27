/**
 * Declarative schema for the ConfigGenerator. Each script's config builder
 * is just a list of these field descriptors plus a `toLua(values)` function.
 */
export type Lang = 'en' | 'es';
export type Localized = Record<Lang, string>;

interface FieldBase {
  id: string;
  label: Localized;
  description?: Localized;
}

export interface SelectField extends FieldBase {
  type: 'select';
  options: { value: string; label: Localized | string }[];
  default: string;
}

export interface MultiSelectField extends FieldBase {
  type: 'multi-select';
  options: { value: string; label: Localized | string }[];
  default: string[];
}

export interface StringField extends FieldBase {
  type: 'string';
  default: string;
  placeholder?: string;
  maxLength?: number;
  pattern?: string; // regex source
  patternError?: Localized;
}

export interface NumberField extends FieldBase {
  type: 'number';
  default: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

export interface SliderField extends FieldBase {
  type: 'slider';
  default: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
}

export interface BooleanField extends FieldBase {
  type: 'boolean';
  default: boolean;
}

export interface ColorField extends FieldBase {
  type: 'color';
  default: string;
}

export interface ArrayStringField extends FieldBase {
  type: 'array-string';
  default: string[];
  itemPlaceholder?: string;
  /** Optional max number of entries. */
  max?: number;
}

export interface NullableStringField extends FieldBase {
  /**
   * Like a string, but with a toggle to set the value to nil (Lua).
   * Used for things like Config.Command which can be nil to disable.
   */
  type: 'nullable-string';
  default: string | null;
  placeholder?: string;
}

export interface GroupField {
  id: string;
  type: 'group';
  label: Localized;
  description?: Localized;
  collapsed?: boolean;
  fields: FormField[];
}

export type FormField =
  | SelectField
  | MultiSelectField
  | StringField
  | NumberField
  | SliderField
  | BooleanField
  | ColorField
  | ArrayStringField
  | NullableStringField
  | GroupField;

export interface ConfigSchema {
  /** File name displayed on the code panel, e.g. 'config.lua'. */
  fileName: string;
  /** Tab label when multiple schemas are stacked. Optional. */
  tabLabel?: Localized;
  title?: Localized;
  description?: Localized;
  fields: FormField[];
  /** Render the entire Lua file from current values. Must always return valid Lua. */
  toLua: (values: Record<string, any>) => string;
}

/**
 * Walks the schema and collects default values into a flat `{ [id]: default }` map.
 * Group ids are unused at runtime — only their inner fields contribute values.
 */
export function buildDefaults(fields: FormField[]): Record<string, any> {
  const out: Record<string, any> = {};
  const visit = (list: FormField[]) => {
    list.forEach((f) => {
      if (f.type === 'group') visit(f.fields);
      else out[f.id] = f.default;
    });
  };
  visit(fields);
  return out;
}

/**
 * Convenience to localise a Localized | string field label/description.
 */
export function loc(value: Localized | string | undefined, lang: Lang): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[lang] ?? value.en;
}
