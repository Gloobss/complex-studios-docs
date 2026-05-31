import { motion } from 'motion/react';
import {
  Package,
  Radio,
  Trophy,
  Crown,
  SlidersHorizontal,
  LayoutDashboard,
  UserCheck,
  ShieldCheck,
  Settings2,
  Database,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { ConfigGenerator } from '../ui/ConfigGenerator';
import { streamersConfigSchema } from '../../lib/configs/streamers-config';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

const ACCENT = '#F4517A';

export function StreamersDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4517A]/10 border border-[#F4517A]/20 text-[#F4517A] text-[13px] font-medium mb-6">
          <Package className="w-4 h-4" />
          <span>v1.0.0</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4517A] to-[#FF8FB5]">
            CPX Streamers
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Programa de creadores con Battle Pass por rangos, constructor de recompensas en vivo y un panel admin que gestiona todo dentro del juego — sin roles de Discord.'
            : 'A content-creator program with a tiered Battle Pass, a live rewards builder and an admin panel that runs everything in-game — no Discord roles.'}
        </p>

        {/* ── INTRODUCTION ─────────────────── */}
        <motion.section
          id="streamers-intro"
          className="mt-8 mb-20 scroll-mt-[10vh]"
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
              ? 'CPX Streamers convierte tu programa de partners en algo que tu staff disfruta usar. Los creadores ganan Stream Coins por tiempo en directo, suben un Battle Pass de recompensas pensado para su rango, y tu equipo concede accesos, entrega items y ajusta la economía desde un panel limpio — con el servidor encendido.'
              : 'CPX Streamers turns your partner program into something your staff enjoys running. Creators earn Stream Coins for time spent live, climb a Battle Pass built for their rank, and your team grants access, hands out items and tweaks the economy from a clean panel — while the server is running.'}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'Auto-detecta tu framework (qb, qbx, esx o standalone), instala su propia base de datos y funciona en inglés o español. El acceso ya no depende de roles de Discord: se concede desde el panel y persiste por Discord ID.'
              : 'Auto-detects your framework (qb, qbx, esx or standalone), installs its own database and ships in English or Spanish. Access no longer depends on Discord roles: it is granted from the panel and persists by Discord ID.'}
          </p>
        </motion.section>

        {/* ── FEATURES ─────────────────────── */}
        <motion.section
          id="streamers-features"
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
                icon: Trophy,
                title: isEs ? 'Battle Pass' : 'Battle Pass',
                description: isEs
                  ? 'Los creadores gastan Stream Coins (ganados por horas en directo) para reclamar recompensas a lo largo de un track por rango.'
                  : 'Creators spend Stream Coins (earned from live hours) to claim rewards along a per-rank track.',
                colorClass: 'text-[#F4517A]',
                bgClass: 'bg-[#F4517A]/10',
              },
              {
                icon: SlidersHorizontal,
                title: isEs ? 'Constructor de recompensas' : 'Live rewards builder',
                description: isEs
                  ? 'Arma cada nivel a mano desde el panel: dinero, coins, item, caja o recompensa manual (ticket). Reordena, agrega, elimina — aplicado en vivo, sin reiniciar.'
                  : 'Build each level by hand from the panel: cash, coins, item, box or a manual (ticket) reward. Reorder, add, remove — applied live, no restart.',
                colorClass: 'text-[#F4517A]',
                bgClass: 'bg-[#F4517A]/10',
              },
              {
                icon: Crown,
                title: isEs ? '10 rangos (tiers)' : '10 ranks (tiers)',
                description: isEs
                  ? 'Cada rango tiene sus propios totales de recompensa, multiplicador y rango de viewers (0-10, 10-25, …) — todo editable.'
                  : 'Each rank has its own reward totals, multiplier and viewer range (0-10, 10-25, …) — all editable.',
                colorClass: 'text-[#F4517A]',
                bgClass: 'bg-[#F4517A]/10',
              },
              {
                icon: UserCheck,
                title: isEs ? 'Acceso desde el panel' : 'Access from the panel',
                description: isEs
                  ? 'Sin roles de Discord. Elige un jugador conectado, confirma por Discord ID, asigna un rango y listo. El acceso persiste por Discord ID.'
                  : 'No Discord roles. Pick a connected player, confirm by Discord ID, assign a rank, done. Access persists by Discord ID.',
                colorClass: 'text-[#F4517A]',
                bgClass: 'bg-[#F4517A]/10',
              },
              {
                icon: LayoutDashboard,
                title: isEs ? 'Panel admin completo' : 'Full admin panel',
                description: isEs
                  ? 'Quién está online, conceder/revocar acceso, ajustar horas, entregar cash o items, verificar sesiones y editar la economía en tiempo real.'
                  : 'Who is online, grant/revoke access, adjust hours, hand out cash or items, verify sessions and edit the economy in real time.',
                colorClass: 'text-[#F4517A]',
                bgClass: 'bg-[#F4517A]/10',
              },
              {
                icon: ShieldCheck,
                title: isEs ? 'Economía a prueba de abuso' : 'Abuse-proof economy',
                description: isEs
                  ? 'Claims atómicos anti-duplicado, horas contadas en el servidor, pausa por AFK, cooldowns y tope opcional de recompensas por ciclo.'
                  : 'Atomic anti-dupe claims, server-side hour counting, AFK pause, cooldowns and an optional per-cycle reward cap.',
                colorClass: 'text-[#F4517A]',
                bgClass: 'bg-[#F4517A]/10',
              },
            ]}
          />
        </motion.section>

        {/* ── INSTALLATION ─────────────────── */}
        <motion.section
          id="streamers-install"
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
              <code className="bg-[#1a1a1a] text-[#F4517A] px-1.5 py-0.5 rounded text-[13px] font-mono border border-[#F4517A]/20">
                server.cfg
              </code>{' '}
              {isEs ? 'tenga (antes de cpx-streamers):' : 'has (before cpx-streamers):'}
            </p>
            <CodeBlock code={`ensure oxmysql\nensure ox_lib`} />
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'ox_inventory solo hace falta si entregas recompensas de tipo item o caja.'
                : 'ox_inventory is only needed if you hand out item or box rewards.'}
            </p>
          </Step>

          <Step number={2} title={isEs ? 'Suelta el resource' : 'Drop the resource'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'Extrae el paquete en tu carpeta resources, dentro de [standalone].'
                : 'Extract the package in your resources folder, inside a [standalone] bracket.'}
            </p>
            <CodeBlock
              code={`resources/
└── [standalone]/
    └── cpx-streamers/`}
            />
          </Step>

          <Step number={3} title={isEs ? 'Da acceso admin (ACE)' : 'Grant admin access (ACE)'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'El panel admin está protegido por un permiso ACE. Agrégalo a tu'
                : 'The admin panel is gated by an ACE permission. Add it to your'}{' '}
              <code className="bg-[#1a1a1a] text-[#F4517A] px-1.5 py-0.5 rounded text-[13px] font-mono border border-white/5">
                server.cfg
              </code>
              :
            </p>
            <CodeBlock code={`add_ace group.admin cpx.streamers.admin allow`} />
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'Podés cambiar el nombre del permiso desde shared/config.lua → Config.AdminPermission.'
                : 'You can change the permission name from shared/config.lua → Config.AdminPermission.'}
            </p>
          </Step>

          <Step number={4} title={isEs ? 'Inicia y concede acceso' : 'Start and grant access'} isLast>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Añade a tu' : 'Add to your'}{' '}
              <code className="bg-[#1a1a1a] text-[#F4517A] px-1.5 py-0.5 rounded text-[13px] font-mono border border-white/5">
                server.cfg
              </code>
              :
            </p>
            <CodeBlock code={`ensure cpx-streamers`} />
            <p className="mt-4 mb-4 text-[15px] text-zinc-300">
              {isEs
                ? 'La base de datos se instala sola al reiniciar. Luego, para dar acceso a un creador:'
                : 'The database self-installs on restart. Then, to give a creator access:'}
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-[15px] text-zinc-400">
              <li>{isEs ? 'El streamer se conecta al servidor.' : 'The streamer connects to the server.'}</li>
              <li>
                {isEs ? 'Un staff abre' : 'A staff member opens'}{' '}
                <code className="text-[#F4517A]">/adminstreamers</code> → {isEs ? 'pestaña' : 'tab'}{' '}
                <strong>{isEs ? 'Acceso' : 'Access'}</strong>.
              </li>
              <li>
                {isEs
                  ? 'Busca al jugador (confirma por su Discord ID), elige un rango y pulsa Conceder.'
                  : 'Find the player (confirm by their Discord ID), pick a rank and press Grant.'}
              </li>
              <li>
                {isEs
                  ? 'El jugador recibe un aviso al instante y ya puede abrir'
                  : 'The player gets an instant notice and can now open'}{' '}
                <code className="text-[#F4517A]">/streamer</code>.
              </li>
            </ol>
          </Step>
        </motion.section>

        {/* ── CONFIGURATION ────────────────── */}
        <motion.section
          id="streamers-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings2 className="w-6 h-6 text-[#F4517A]" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración interactiva' : 'Interactive configuration'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl">
            {isEs
              ? 'Ajusta los valores, copia el resultado y reemplaza el head de '
              : 'Tweak the values, copy the result and replace the head of '}
            <code className="text-white">shared/config.lua</code>.{' '}
            {isEs
              ? 'Casi toda la economía (recompensas, viewers, topes) también se edita en vivo desde el panel admin.'
              : 'Most of the economy (rewards, viewers, caps) is also editable live from the admin panel.'}
          </p>

          <ConfigGenerator schemas={[streamersConfigSchema]} accent={ACCENT} />
        </motion.section>

        {/* ── TROUBLESHOOTING ──────────────── */}
        <motion.section
          id="streamers-troubleshoot"
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
                <UserCheck className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'Un creador no puede abrir /streamer' : "A creator can't open /streamer"}
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>
                  {isEs
                    ? 'Aún no le concediste acceso. Hazlo desde /adminstreamers → Acceso.'
                    : "You haven't granted access yet. Do it from /adminstreamers → Access."}
                </li>
                <li>
                  {isEs
                    ? 'El jugador debe tener Discord vinculado a FiveM (el panel avisa "SIN DISCORD VINCULADO").'
                    : 'The player needs Discord linked to FiveM (the panel warns "NO DISCORD LINKED").'}
                </li>
              </ol>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'El panel admin dice "sin permisos"' : 'The admin panel says "no permission"'}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>
                  {isEs ? 'Falta el ACE. Agrega' : "You're missing the ACE. Add"}{' '}
                  <code className="text-white">add_ace group.admin cpx.streamers.admin allow</code>{' '}
                  {isEs ? 'y reinicia el resource.' : 'and restart the resource.'}
                </li>
              </ul>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'Las recompensas de caja/item no llegan' : "Box / item rewards don't arrive"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>
                  {isEs
                    ? 'El item no está registrado en tu inventario. Regístralo (ver INSTALL/items/) o cambia esa recompensa a cash/coins desde el panel.'
                    : 'The item is not registered in your inventory. Register it (see INSTALL/items/) or switch that reward to cash/coins from the panel.'}
                </li>
              </ul>
            </div>

            <div className="group border border-[#f59e0b]/20 bg-[#f59e0b]/[0.02] rounded-2xl p-6 hover:border-[#f59e0b]/30 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-amber-500" />
                {isEs ? 'La base de datos no se auto-instala' : "Database doesn't auto-install"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>
                  {isEs ? 'Verifica que' : 'Make sure'} <code className="text-amber-400">oxmysql</code>{' '}
                  {isEs ? 'inicie antes que cpx-streamers.' : 'starts before cpx-streamers.'}
                </li>
                <li>
                  {isEs ? 'Puedes pre-crear las tablas desde' : 'You can pre-create the tables from'}{' '}
                  <code className="text-white">database.sql</code>.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="31/5/26"
          prev={{ title: 'CPX Item Carry', doc: 'itemcarry' }}
          next={{ title: isEs ? 'Políticas' : 'Policies', doc: 'rules' }}
          onSelectDoc={onSelectDoc}
          accentColor="pink"
        />
      </motion.div>
    </div>
  );
}
