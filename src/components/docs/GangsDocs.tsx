import { motion } from 'motion/react';
import {
  Package,
  Users,
  Shield,
  Swords,
  Map,
  Crown,
  Trophy,
  Database,
  Settings2,
  Gavel,
  Activity,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { ConfigGenerator } from '../ui/ConfigGenerator';
import { gangsConfigSchema } from '../../lib/configs/gangs-config';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

const ACCENT = '#ef4444';

export function GangsDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ef4444]/10 border border-[#ef4444]/20 text-[#ef4444] text-[13px] font-medium mb-6">
          <Package className="w-4 h-4" />
          <span>v1.0.0</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#b91c1c]">
            CPX Gangs
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Sistema completo de bandas para FiveM con territorios, raids, contratos, dossier y panel admin con telemetría en vivo.'
            : 'Full gang system for FiveM with territories, raids, contracts, dossier and an admin panel with live telemetry.'}
        </p>

        {/* ── INTRODUCTION ─────────────────── */}
        <motion.section
          id="gangs-intro"
          className="mt-12 mb-20 scroll-mt-[10vh]"
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
              ? 'CPX Gangs es un framework completo de crews para tu servidor de roleplay. Reemplaza decenas de scripts dispersos (gangs, territorios, contratos, dealers, war system, dossier) con un sistema único integrado, anti-cheat y panel admin con audit log.'
              : 'CPX Gangs is a complete crew framework for your roleplay server. It replaces dozens of disconnected scripts (gangs, territories, contracts, dealers, war system, dossier) with one integrated system, anti-cheat included, plus an admin panel with full audit log.'}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'Auto-detecta tu framework (qb, qbx, esx o standalone), instala su propia base de datos (18 tablas) y se integra con cpx-laptop apareciendo como app nativa.'
              : 'Auto-detects your framework (qb, qbx, esx or standalone), installs its own database (18 tables) and integrates with cpx-laptop appearing as a native app.'}
          </p>
        </motion.section>

        {/* ── FEATURES ─────────────────────── */}
        <motion.section
          id="gangs-features"
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
                icon: Crown,
                title: isEs ? '18 niveles de gang' : '18 gang levels',
                description: isEs
                  ? 'Curva XP, límites de miembros por nivel y reward tiers configurables.'
                  : 'XP curve, per-level member caps and configurable reward tiers.',
                colorClass: 'text-[#ef4444]',
                bgClass: 'bg-[#ef4444]/10',
              },
              {
                icon: Map,
                title: isEs ? 'Territorios + raids' : 'Territories + raids',
                description: isEs
                  ? 'Influencia, fortify, raids, refinerías y un mapa Leaflet interactivo.'
                  : 'Influence accrual, fortify, raids, refineries and an interactive Leaflet map.',
                colorClass: 'text-[#ef4444]',
                bgClass: 'bg-[#ef4444]/10',
              },
              {
                icon: Swords,
                title: isEs ? '100+ tareas' : '100+ tasks',
                description: isEs
                  ? '8 categorías: sell, snatch, mission, race, USB, plantation, mini-heist, dumpsters.'
                  : '8 categories: sell, snatch, mission, race, USB, plantation, mini-heist, dumpsters.',
                colorClass: 'text-[#ef4444]',
                bgClass: 'bg-[#ef4444]/10',
              },
              {
                icon: Trophy,
                title: isEs ? 'Dossier semanal' : 'Weekly dossier',
                description: isEs
                  ? 'Snapshots, payouts, K/D, headshot streaks y mapa de rivalidades.'
                  : 'Snapshots, payouts, K/D, headshot streaks and rivalry heat-map.',
                colorClass: 'text-[#ef4444]',
                bgClass: 'bg-[#ef4444]/10',
              },
              {
                icon: Shield,
                title: isEs ? 'Anti-cheat 9 pasos' : '9-step anti-cheat',
                description: isEs
                  ? 'Validación server-side de cada incremento, intentos exploit registrados.'
                  : 'Server-side validation of every increment, exploit attempts logged.',
                colorClass: 'text-[#ef4444]',
                bgClass: 'bg-[#ef4444]/10',
              },
              {
                icon: Activity,
                title: isEs ? 'Telemetría admin' : 'Admin telemetry',
                description: isEs
                  ? 'KPIs en vivo, hit-rate de cache y audit log filtrable por exploit.'
                  : 'Live KPIs, cache hit-rate and audit log filterable by exploit type.',
                colorClass: 'text-[#ef4444]',
                bgClass: 'bg-[#ef4444]/10',
              },
              {
                icon: Database,
                title: isEs ? 'BD auto-instalable' : 'Auto-install database',
                description: isEs
                  ? '18 tablas creadas con CREATE TABLE IF NOT EXISTS. Idempotente.'
                  : '18 tables created with CREATE TABLE IF NOT EXISTS. Idempotent.',
                colorClass: 'text-[#ef4444]',
                bgClass: 'bg-[#ef4444]/10',
              },
              {
                icon: Users,
                title: isEs ? 'Export RegisterTask' : 'RegisterTask export',
                description: isEs
                  ? 'Otros recursos agregan tareas custom en runtime via exports.'
                  : 'Third-party resources can register custom tasks at runtime via exports.',
                colorClass: 'text-[#ef4444]',
                bgClass: 'bg-[#ef4444]/10',
              },
            ]}
          />
        </motion.section>

        {/* ── INSTALLATION ─────────────────── */}
        <motion.section
          id="gangs-install"
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
              <code className="bg-[#1a1a1a] text-[#ef4444] px-1.5 py-0.5 rounded text-[13px] font-mono border border-[#ef4444]/20">
                server.cfg
              </code>{' '}
              {isEs ? 'tenga (antes de cpx-gangs):' : 'has (before cpx-gangs):'}
            </p>
            <CodeBlock code={`ensure oxmysql\nensure ox_lib\nensure cpx-laptop          # required — UI entry point`} />
            <Callout type="warning" title={isEs ? 'cpx-laptop es obligatorio' : 'cpx-laptop is required'}>
              {isEs
                ? 'La dashboard se abre SOLO desde la app "Gangs" de cpx-laptop. Sin la laptop, los jugadores no pueden acceder a la UI (el panel admin igual funciona vía /gangs_admin).'
                : 'The dashboard opens ONLY from the "Gangs" app in cpx-laptop. Without it, players cannot access the UI (the admin panel still works via /gangs_admin).'}
            </Callout>
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'Si usas un inventario, también debe iniciar antes de cpx-gangs.'
                : 'If you use an inventory, it must also start before cpx-gangs.'}
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
    └── cpx-gangs/`}
            />
          </Step>

          <Step number={3} title={isEs ? 'Registrá los 6 items obligatorios' : 'Register the 6 required items'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'La dashboard se abre SOLO desde la app "Gangs" de '
                : 'The dashboard opens ONLY from the "Gangs" app in '}
              <code className="text-[#ef4444] bg-[#ef4444]/10 border border-[#ef4444]/20 px-2 py-1 rounded-md font-mono text-[13px]">
                cpx-laptop
              </code>
              . {isEs ? 'No hay comando ni item para abrir UI.' : 'No chat command, no item to open the UI.'}
            </p>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'Pero el sistema usa 6 items para las mecánicas in-game (extorsión, graffiti, posters, asalto a stash). Sin ellos, la mecánica correspondiente queda desactivada:'
                : 'But the system uses 6 items for in-game mechanics (extortion, graffiti, posters, stash raids). Without them, the matching mechanic is disabled:'}
            </p>
            <div className="overflow-x-auto mb-6 bg-[#080808]/50 backdrop-blur-sm rounded-2xl border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-white/[0.02] border-b border-white/[0.08]">
                  <tr>
                    <th className="py-3 px-4 text-zinc-300 font-semibold text-[12px] tracking-wide uppercase">Item</th>
                    <th className="py-3 px-4 text-zinc-300 font-semibold text-[12px] tracking-wide uppercase">{isEs ? 'Módulo' : 'Module'}</th>
                    <th className="py-3 px-4 text-zinc-300 font-semibold text-[12px] tracking-wide uppercase">{isEs ? 'Para qué' : 'Purpose'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05] text-zinc-400">
                  {[
                    ['extorcion', 'Extortion', isEs ? 'Extorsionar gangs rivales' : 'Extort rival gangs'],
                    ['graffiti_can', 'Graffiti', isEs ? 'Pintar tags en territorio' : 'Spray turf tags'],
                    ['graffiti_sponge', 'Graffiti', isEs ? 'Limpiar tags enemigos' : 'Clean enemy tags'],
                    ['war_graffiti', 'Graffiti', isEs ? 'Tags de war-mode durante raids' : 'War-mode tags during raids'],
                    ['marco', 'Posters', isEs ? 'Colgar posters de propaganda' : 'Place propaganda posters'],
                    ['ganzúa', 'Upgrades', isEs ? 'Asaltar stash houses rivales' : 'Break into rival stash houses'],
                  ].map(([item, mod, purpose]) => (
                    <tr key={item} className="hover:bg-white/[0.02]">
                      <td className="py-2 px-4">
                        <code className="text-[#ef4444] bg-[#ef4444]/10 border border-[#ef4444]/20 px-2 py-0.5 rounded-md font-mono text-[12px]">
                          {item}
                        </code>
                      </td>
                      <td className="py-2 px-4 text-zinc-300">{mod}</td>
                      <td className="py-2 px-4 text-[13px]">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout type="info" title={isEs ? 'Snippets y PNGs incluidos' : 'Snippets and PNGs included'}>
              {isEs
                ? 'En el paquete vas a encontrar INSTALL/items/ con un snippet por inventario (ox, qb, qs, esx) ya con los 6 items, y INSTALL/icons/ con las 6 PNGs listas para copiar a la carpeta de imágenes de tu inventario.'
                : 'The package ships INSTALL/items/ with one snippet per inventory (ox, qb, qs, esx) pre-loaded with all 6 items, plus INSTALL/icons/ with the 6 PNGs ready to drop into your inventory image folder.'}
            </Callout>
          </Step>

          <Step number={4} title={isEs ? 'Inicia el servidor' : 'Start the server'} isLast>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Añade a tu' : 'Add to your'}{' '}
              <code className="bg-[#1a1a1a] text-[#ef4444] px-1.5 py-0.5 rounded text-[13px] font-mono border border-white/5">
                server.cfg
              </code>
              :
            </p>
            <CodeBlock code={`ensure cpx-gangs`} />
            <p className="mt-4 text-[15px] text-zinc-300">
              {isEs ? 'Al reiniciar verás el banner y' : 'On restart you\'ll see the banner and'}{' '}
              <code className="text-[#ef4444]">Database verified/installed (18 tables)</code>.{' '}
              {isEs ? 'Si ves esa línea, está todo bien.' : "If you see that line, you're good to go."}
            </p>
          </Step>
        </motion.section>

        {/* ── ADMIN ────────────────────────── */}
        <motion.section
          id="gangs-admin"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Gavel className="w-6 h-6 text-[#ef4444]" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Panel admin' : 'Admin panel'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl mb-6">
            {isEs
              ? '6 secciones: Resumen, Bandas, Niveles, Zonas, Tareas y Telemetría. Atajos: Ctrl+K paleta de comandos, 1-6 cambiar sección, Esc cerrar.'
              : '6 sections: Overview, Gangs, Levels, Zones, Tasks and Telemetry. Shortcuts: Ctrl+K command palette, 1-6 switch section, Esc close.'}
          </p>

          <h3 className="text-lg font-semibold text-white mb-3">
            {isEs ? 'Dar permiso admin' : 'Grant admin permission'}
          </h3>
          <p className="text-[15px] text-zinc-400 mb-4">
            {isEs ? 'Desde consola del servidor:' : 'From the server console:'}
          </p>
          <CodeBlock code={`gangs_makeadmin <playerId>`} />
          <p className="mt-4 text-[15px] text-zinc-400 mb-4">
            {isEs ? 'O usando ACE permissions en' : 'Or using ACE permissions in'}{' '}
            <code className="text-white">server.cfg</code>:
          </p>
          <CodeBlock
            code={`add_ace group.admin gangs.admin allow
add_principal identifier.steam:STEAMID group.admin`}
          />
          <p className="mt-4 text-[15px] text-zinc-400">
            {isEs ? 'En el juego abrí el panel con' : 'In-game, open the panel with'}{' '}
            <code className="text-[#ef4444]">/gangs_admin</code>.
          </p>
        </motion.section>

        {/* ── CONFIGURATION ────────────────── */}
        <motion.section
          id="gangs-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings2 className="w-6 h-6 text-[#ef4444]" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración interactiva' : 'Interactive configuration'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl">
            {isEs
              ? 'Ajustá los valores con los controles de abajo, copiá el resultado y reemplazá la cabecera de '
              : 'Tweak the values with the controls below, copy the result and replace the head of '}
            <code className="text-white">shared/sh_config.lua</code>.{' '}
            {isEs
              ? 'Las tablas de tareas, niveles, recompensas y zonas se editan directamente en sus archivos shared/sh_*.lua.'
              : 'Task, level, reward and zone tables are edited directly in their shared/sh_*.lua files.'}
          </p>

          <ConfigGenerator schemas={[gangsConfigSchema]} accent={ACCENT} />
        </motion.section>

        {/* ── TROUBLESHOOTING ──────────────── */}
        <motion.section
          id="gangs-troubleshoot"
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
                <Users className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'El icono "Gangs" no aparece en cpx-laptop' : "The 'Gangs' icon doesn't appear in cpx-laptop"}
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>
                  {isEs ? 'Confirmá que' : 'Confirm'}{' '}
                  <code className="text-white">cpx-laptop</code>{' '}
                  {isEs ? 'esté en server.cfg ANTES de cpx-gangs.' : 'is in server.cfg BEFORE cpx-gangs.'}
                </li>
                <li>
                  {isEs ? 'La detección corre al iniciar. Reiniciá cpx-laptop después que cpx-gangs esté arriba.' : 'Detection runs on resource start. Restart cpx-laptop after cpx-gangs is up.'}
                </li>
                <li>
                  {isEs ? 'Probá' : 'Try'} <code className="text-white">/gangs_admin</code>{' '}
                  {isEs ? 'desde el juego — si abre, cpx-gangs está cargado y el problema es la integración con la laptop.' : 'in-game — if it opens, cpx-gangs is loaded and the issue is the laptop integration.'}
                </li>
              </ol>
            </div>

            <div className="group border border-[#f59e0b]/20 bg-[#f59e0b]/[0.02] rounded-2xl p-6 hover:border-[#f59e0b]/30 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-500" />
                {isEs ? 'El panel admin dice "sin permiso"' : 'Admin panel says "no permission"'}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>
                  {isEs ? 'Corré' : 'Run'}{' '}
                  <code className="text-amber-400">gangs_makeadmin &lt;playerId&gt;</code>{' '}
                  {isEs ? 'desde consola — escribe override permanente.' : 'from server console — writes a permanent override.'}
                </li>
                <li>
                  {isEs ? 'O agregate a un ACE group:' : 'Or add yourself to an ACE group:'}{' '}
                  <code className="text-white">gangs.admin</code>, <code className="text-white">god</code>,{' '}
                  <code className="text-white">admin</code>, <code className="text-white">superadmin</code>.
                </li>
                <li>
                  {isEs ? 'Atajo en juego para abrir:' : 'In-game shortcut:'}{' '}
                  <code className="text-white">/gangs_admin</code>.
                </li>
              </ul>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'La base de datos no se auto-instala' : "Database doesn't auto-install"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>
                  {isEs ? 'Verificá que' : 'Make sure'} <code className="text-white">oxmysql</code>{' '}
                  {isEs ? 'esté corriendo antes que cpx-gangs.' : 'is running before cpx-gangs.'}
                </li>
                <li>
                  {isEs ? 'Verificá que tus credenciales de oxmysql sean válidas.' : 'Verify your oxmysql has valid credentials.'}
                </li>
                <li>
                  {isEs ? 'Si querés correr el SQL manualmente: importá ' : 'To run the SQL manually: import '}
                  <code className="text-white">database.sql</code> {isEs ? 'desde la raíz del paquete.' : 'from the package root.'}
                </li>
              </ul>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'Extorsion / graffiti / posters no funcionan in-game' : "Extortion / graffiti / posters do nothing in-game"}
              </h3>
              <p className="text-[15px] text-zinc-400">
                {isEs
                  ? 'Te falta uno de los 6 items obligatorios (extorcion, graffiti_can, graffiti_sponge, war_graffiti, marco, ganzúa). Re-leé la sección Instalación → paso 3 y confirmá que registraste los 6 en tu inventario.'
                  : "One of the 6 required items is missing (extorcion, graffiti_can, graffiti_sponge, war_graffiti, marco, ganzúa). Re-read Installation → step 3 and confirm all 6 are registered in your inventory."}
              </p>
            </div>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="19/5/26"
          prev={{ title: 'CPX Laptop', doc: 'laptop' }}
          next={{ title: 'Home', doc: 'home' }}
          onSelectDoc={onSelectDoc}
          accentColor="lima"
        />
      </motion.div>
    </div>
  );
}
