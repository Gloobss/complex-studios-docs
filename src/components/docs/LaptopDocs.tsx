import { motion } from 'motion/react';
import {
  Package,
  Laptop as LaptopIcon,
  Shield,
  Mail,
  FileText,
  Settings2,
  Languages,
  Download,
  Database,
  Palette,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { YouTubeHero } from '../ui/YouTubeHero';
import { ConfigGenerator } from '../ui/ConfigGenerator';
import { laptopConfigSchema } from '../../lib/configs/laptop-config';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

const ACCENT = '#c6ff3d';

export function LaptopDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
  const { language } = useLanguage();
  const isEs = language === 'es';

  return (
    <div className="max-w-[920px] mx-auto pt-20 pb-32 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* ── HERO ────────────────────────── */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c6ff3d]/10 border border-[#c6ff3d]/20 text-[#c6ff3d] text-[13px] font-medium mb-6">
          <Package className="w-4 h-4" />
          <span>v1.3.1</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c6ff3d] to-[#8de000]">
            CPX Laptop
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Sistema de laptop completo con apps integradas, soporte multi-framework y configuración interactiva.'
            : 'A complete laptop system with built-in apps, multi-framework support and interactive configuration.'}
        </p>

        <YouTubeHero
          videoId="a0C0lolGTBs"
          title="CPX Laptop preview"
          accent={ACCENT}
          badge={
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
              <LaptopIcon className="w-3.5 h-3.5 text-[#c6ff3d]" />
              {isEs ? 'Demo en vivo' : 'Live demo'}
            </span>
          }
        />

        {/* ── INTRODUCTION ─────────────────── */}
        <motion.section
          id="laptop-intro"
          className="mt-24 mb-20 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-5">
            {isEs ? 'Introducción' : 'Introduction'}
          </h2>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed mb-4">
            {isEs
              ? 'CPX Laptop es un dispositivo digital totalmente funcional para tu servidor de roleplay. Reemplaza decenas de scripts dispersos (correo, chat oscuro, documentos, gestión de empresas) con una sola interfaz nativa.'
              : 'CPX Laptop is a fully functional digital device for your roleplay server. It replaces dozens of disconnected scripts (mail, dark chat, documents, business management) with a single native interface.'}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'Auto-detecta tu framework (qb, qbx, esx o standalone), instala su propia base de datos y se integra con el resto del ecosistema Complex Studios cuando hay otros recursos cargados.'
              : 'Auto-detects your framework (qb, qbx, esx or standalone), installs its own database and integrates with the rest of the Complex Studios ecosystem when other resources are loaded.'}
          </p>
        </motion.section>

        {/* ── FEATURES ─────────────────────── */}
        <motion.section
          id="laptop-features"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-2">
            {isEs ? 'Características' : 'Features'}
          </h2>
          <p className="text-[14px] text-zinc-500 mb-8">
            {isEs ? 'Lo que incluye out-of-the-box.' : 'What ships out-of-the-box.'}
          </p>
          <FeatureGrid
            features={[
              {
                icon: Mail,
                title: isEs ? 'Sistema de correo' : 'Mail system',
                description: isEs
                  ? 'Bandeja de entrada, redacción y reenvío con dominio configurable y rate-limit anti-spam.'
                  : 'Inbox, compose and forward with a configurable domain and anti-spam rate limit.',
                colorClass: 'text-[#c6ff3d]',
                bgClass: 'bg-[#c6ff3d]/10',
              },
              {
                icon: FileText,
                title: isEs ? 'Documentos imprimibles' : 'Printable documents',
                description: isEs
                  ? 'Crea documentos como item físico del inventario. Costo y tipo de moneda configurables.'
                  : 'Create documents as physical inventory items. Print cost and money type are configurable.',
                colorClass: 'text-[#c6ff3d]',
                bgClass: 'bg-[#c6ff3d]/10',
              },
              {
                icon: Languages,
                title: isEs ? 'Multi-idioma' : 'Multi-language',
                description: isEs
                  ? 'Inglés y español built-in. Idioma elegible por jugador desde Settings.'
                  : 'English and Spanish built-in. Language picked per-player from Settings.',
                colorClass: 'text-[#c6ff3d]',
                bgClass: 'bg-[#c6ff3d]/10',
              },
              {
                icon: Database,
                title: isEs ? 'BD auto-instalable' : 'Auto-install database',
                description: isEs
                  ? '9 tablas creadas con CREATE TABLE IF NOT EXISTS. Idempotente. Cero pasos manuales.'
                  : '9 tables created with CREATE TABLE IF NOT EXISTS. Idempotent. Zero manual steps.',
                colorClass: 'text-[#c6ff3d]',
                bgClass: 'bg-[#c6ff3d]/10',
              },
              {
                icon: Palette,
                title: isEs ? 'Tema personalizable' : 'Custom theme',
                description: isEs
                  ? 'Color de acento y glow elegidos vía hex. Cambio en caliente al reiniciar el resource.'
                  : 'Accent + glow color picked by hex. Hot-swappable on resource restart.',
                colorClass: 'text-[#c6ff3d]',
                bgClass: 'bg-[#c6ff3d]/10',
              },
              {
                icon: Download,
                title: isEs ? 'Auto-update check' : 'Auto-update check',
                description: isEs
                  ? 'Apunta a un Gist de GitHub y recibe alertas en consola al iniciar cuando haya nueva versión.'
                  : 'Point to a GitHub Gist and receive console alerts on startup when a new version drops.',
                colorClass: 'text-[#c6ff3d]',
                bgClass: 'bg-[#c6ff3d]/10',
              },
            ]}
          />
        </motion.section>

        {/* ── INSTALLATION ─────────────────── */}
        <motion.section
          id="laptop-install"
          className="mb-24 scroll-mt-[10vh] relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-8">
            {isEs ? 'Instalación en 4 pasos' : 'Installation in 4 steps'}
          </h2>

          <Step number={1} title={isEs ? 'Pre-requisitos' : 'Pre-requirements'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Asegúrate que tu' : 'Make sure your'}{' '}
              <code className="bg-[#1a1a1a] text-[#c6ff3d] px-1.5 py-0.5 rounded text-[13px] font-mono border border-[#c6ff3d]/20">
                server.cfg
              </code>{' '}
              {isEs ? 'tenga (antes de cpx-laptop):' : 'has (before cpx-laptop):'}
            </p>
            <CodeBlock code={`ensure oxmysql\nensure ox_lib`} />
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'Si usas un inventario, también debe iniciar antes de cpx-laptop.'
                : 'If you use an inventory, it must also start before cpx-laptop.'}
            </p>
          </Step>

          <Step number={2} title={isEs ? 'Suelta el resource' : 'Drop the resource'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'Extrae el paquete en tu carpeta resources, preferiblemente dentro de [standalone].'
                : 'Extract the package in your resources folder, preferably inside a [standalone] bracket.'}
            </p>
            <CodeBlock
              code={`resources/
└── [standalone]/
    └── cpx-laptop/`}
            />
          </Step>

          <Step number={3} title={isEs ? 'Registra los items' : 'Register the items'}>
            <p className="mb-4 text-[15px]">
              <strong>{isEs ? 'Necesitas dos items, no uno.' : 'Two items are required, not one.'}</strong>{' '}
              {isEs ? 'Copia los snippets desde la carpeta items/ según tu inventario.' : 'Copy the matching snippets from items/ for your inventory.'}
            </p>

            <div className="overflow-x-auto mb-8 bg-[#080808]/50 backdrop-blur-sm rounded-2xl border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all hover:border-white/[0.12]">
              <table className="w-full text-left text-[14.5px]">
                <thead className="bg-white/[0.02] border-b border-white/[0.08]">
                  <tr>
                    <th className="py-4 px-6 text-zinc-300 font-semibold text-[13px] tracking-wide uppercase">
                      Item
                    </th>
                    <th className="py-4 px-6 text-zinc-300 font-semibold text-[13px] tracking-wide uppercase">
                      {isEs ? 'Función' : 'What it does'}
                    </th>
                    <th className="py-4 px-6 text-zinc-300 font-semibold text-[13px] tracking-wide uppercase">
                      {isEs ? 'Config key' : 'Config key'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05] text-zinc-400">
                  <tr className="hover:bg-white/[0.02] transition-colors group">
                    <td className="py-4 px-6">
                      <code className="text-[#c6ff3d] bg-[#c6ff3d]/10 border border-[#c6ff3d]/20 px-2 py-1 rounded-md font-mono text-[13px]">
                        laptop
                      </code>
                    </td>
                    <td className="py-4 px-6 text-zinc-300 group-hover:text-white transition-colors">
                      {isEs ? 'Abre la UI de la laptop' : 'Opens the laptop UI'}
                    </td>
                    <td className="py-4 px-6">
                      <code className="text-white bg-white/10 px-1.5 py-0.5 rounded-md text-[13px] font-mono border border-white/10">
                        Config.ItemName
                      </code>
                      <span className="text-zinc-500 text-xs ml-2">
                        ({isEs ? 'renombrable' : 'rename allowed'})
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors group">
                    <td className="py-4 px-6">
                      <code className="text-[#c6ff3d] bg-[#c6ff3d]/10 border border-[#c6ff3d]/20 px-2 py-1 rounded-md font-mono text-[13px]">
                        documento
                      </code>
                    </td>
                    <td className="py-4 px-6 text-zinc-300 group-hover:text-white transition-colors">
                      {isEs ? 'Documento físico de la app Documents' : 'Physical document from the Documents app'}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-[13px]">
                        <Shield className="w-3.5 h-3.5 text-zinc-500" />
                        {isEs ? 'Nombre fijo' : 'Fixed name'}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout type="warning" title={isEs ? 'Importante' : 'Warning'}>
              {isEs
                ? 'Si saltas documento, el botón Print en la app Documents devolverá el dinero y mostrará "Error creando item." La laptop se sigue abriendo, pero la impresión no funcionará. Registra ambos.'
                : 'If you skip documento, the Print button refunds the player and shows "Error creating item." The laptop still opens fine, but printing won\'t work. Register both.'}
            </Callout>
          </Step>

          <Step number={4} title={isEs ? 'Inicia el servidor' : 'Start the server'} isLast>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Añade a tu' : 'Add to your'}{' '}
              <code className="bg-[#1a1a1a] text-[#c6ff3d] px-1.5 py-0.5 rounded text-[13px] font-mono border border-white/5">
                server.cfg
              </code>
              :
            </p>
            <CodeBlock code={`ensure cpx-laptop`} />
            <p className="mt-4 text-[15px] text-zinc-300">
              {isEs ? 'Al reiniciar verás el banner ASCII y' : 'On restart you\'ll see the ASCII banner and'}{' '}
              <code className="text-[#c6ff3d]">Database verified/installed (9 tables)</code>.{' '}
              {isEs ? 'Si ves esa línea, está todo bien.' : "If you see that line, you're good to go."}
            </p>
          </Step>
        </motion.section>

        {/* ── CONFIGURATION ────────────────── */}
        <motion.section
          id="laptop-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings2 className="w-6 h-6 text-[#c6ff3d]" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración interactiva' : 'Interactive configuration'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl">
            {isEs
              ? 'Ajusta los valores con los controles de abajo, copia el resultado y reemplaza el contenido de '
              : 'Tweak the values with the controls below, copy the result and replace the content of '}
            <code className="text-white">shared/config.lua</code>.{' '}
            {isEs ? 'La salida está garantizada como Lua válido.' : 'Output is guaranteed valid Lua.'}
          </p>

          <ConfigGenerator schemas={[laptopConfigSchema]} accent={ACCENT} />
        </motion.section>

        {/* ── TROUBLESHOOTING ──────────────── */}
        <motion.section
          id="laptop-troubleshoot"
          className="mb-20 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-8">
            {isEs ? 'Solución de problemas' : 'Troubleshooting'}
          </h2>

          <div className="space-y-6">
            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <LaptopIcon className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? "El item no abre la laptop" : "Item doesn't open the laptop"}
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>
                  {isEs ? 'Verifica que' : 'Check that'}{' '}
                  <code className="text-white">Config.ItemName</code>{' '}
                  {isEs ? 'coincida exactamente con el nombre en tu inventario.' : 'matches exactly the name in your inventory.'}
                </li>
                <li>
                  {isEs
                    ? 'Confirma que registraste el item en el archivo correcto para tu inventario.'
                    : 'Confirm you installed the item in the correct file for your inventory.'}
                </li>
                <li>
                  {isEs ? 'En QBCore con' : 'On QBCore using'}{' '}
                  <code className="text-white">ox_inventory</code>,{' '}
                  {isEs ? 'registra el item en' : 'register the item in'}{' '}
                  <code className="text-white">ox_inventory/data/items.lua</code>,{' '}
                  {isEs ? 'no en qb-core.' : 'not qb-core.'}
                </li>
              </ol>
            </div>

            <div className="group border border-[#f59e0b]/20 bg-[#f59e0b]/[0.02] rounded-2xl p-6 hover:border-[#f59e0b]/30 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-500" />
                {isEs ? 'La base de datos no se auto-instala' : "Database doesn't auto-install"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>
                  {isEs ? 'Verifica que' : 'Make sure'} <code className="text-amber-400">oxmysql</code>{' '}
                  {isEs ? 'esté corriendo antes que cpx-laptop.' : 'is running before cpx-laptop.'}
                </li>
                <li>
                  {isEs
                    ? 'Verifica que tus credenciales de oxmysql sean válidas.'
                    : 'Verify your oxmysql has valid credentials.'}
                </li>
                <li>
                  {isEs ? 'Para importar SQL manualmente, pon' : 'To import SQL manually, set'}{' '}
                  <code className="text-white">Config.AutoInstallDatabase = false</code>.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="27/4/26"
          prev={{ title: 'Home', doc: 'home' }}
          next={{ title: 'CPX Restaurants', doc: 'restaurants' }}
          onSelectDoc={onSelectDoc}
          accentColor="lima"
        />
      </motion.div>
    </div>
  );
}
