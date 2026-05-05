import { motion } from 'motion/react';
import {
  Flag,
  Trophy,
  Map as MapIcon,
  Wand2,
  Layers,
  Sparkles,
  Settings2,
  Languages,
  Coins,
  Laptop,
  ArrowRight,
  Camera,
  ShoppingBag,
  Users,
  Gauge,
  Activity,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { YouTubeHero } from '../ui/YouTubeHero';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

const ACCENT = '#FFD65A';

export function RacingDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
  const { language } = useLanguage();
  const isEs = language === 'es';

  return (
    <div className="max-w-[920px] mx-auto pt-20 pb-32 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* HERO */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-[13px] font-medium mb-6">
          <Flag className="w-4 h-4" />
          <span>v1.2+</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
            CPX Racing Hub
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Sistema completo de carreras callejeras: tracks, eventos, leaderboards, garage, marketplace de piezas, weekly time-trial y HUD en pista. Todo dentro de la laptop.'
            : 'Complete street-racing system: tracks, events, leaderboards, garage, parts marketplace, weekly time-trial and an in-world race HUD. All living inside the laptop.'}
        </p>

        <YouTubeHero
          videoId="Izaz99PDIiw"
          title="CPX Racing Hub"
          accent={ACCENT}
        />

        {/* INTRO */}
        <motion.section
          id="racing-intro"
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
              ? 'CPX Racing Hub vive como una app dentro de la CPX Laptop. Los jugadores abren la laptop, entran a Racing y tienen todo en un solo lugar: dashboard con eventos, editor de tracks con checkpoints en juego, leaderboards globales, garage con vehículos favoritos, marketplace de piezas que se entregan al inventario, weekly challenge contrarreloj con leaderboard global y rewards automáticos.'
              : 'CPX Racing Hub lives as an app inside CPX Laptop. Players open the laptop, tap Racing and everything is in one place: dashboard with featured events, in-world track editor with checkpoints, global leaderboards, garage with favourite vehicles, parts marketplace that delivers real inventory items, weekly time-trial challenge with global leaderboard and automatic rewards.'}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'En pista, el jugador ve checkpoints 3D streamed, una HUD lateral con posición en vivo, un overlay de resultados con foto del personaje (moment shot via pedheadshot) y un staging marker que indica dónde ubicarse antes de empezar. Auto-detecta framework (qb / qbx / esx / standalone) e inventario (ox / qb / qs / ps / lj). EN/ES integrado.'
              : "In-world the player sees 3D streamed checkpoints, a side HUD with live position, a results overlay with the character's snapshot (moment shot via pedheadshot) and a staging marker that tells them where to position before the lights go green. Auto-detects framework (qb / qbx / esx / standalone) and inventory (ox / qb / qs / ps / lj). EN/ES bundled."}
          </p>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          id="racing-features"
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
            {isEs ? 'Todo lo que incluye out-of-the-box.' : 'Everything bundled out-of-the-box.'}
          </p>
          <FeatureGrid
            features={[
              {
                icon: MapIcon,
                title: isEs ? 'Editor de tracks' : 'Track editor',
                description: isEs
                  ? 'Crea circuitos con checkpoints en juego, tipo, ubicación, GPS pinning, vehículo recomendado.'
                  : 'Build circuits with in-world checkpoints, type, location, GPS pinning, recommended vehicle.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: Flag,
                title: isEs ? 'Eventos en vivo' : 'Live events',
                description: isEs
                  ? 'Programa carreras, define buy-in, premios, vueltas y clase de vehículo. Lobby + staging marker.'
                  : 'Schedule races, set buy-in, prize distribution, lap count and vehicle class. Lobby + staging marker.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: Activity,
                title: isEs ? 'HUD en pista' : 'In-race HUD',
                description: isEs
                  ? 'Posición en vivo, deltas, sectores, bandera de inicio y resultados con foto del personaje al cruzar meta.'
                  : 'Live position, deltas, sectors, start light and post-race results with character photo at the line.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: Trophy,
                title: isEs ? 'Weekly Challenge' : 'Weekly Challenge',
                description: isEs
                  ? 'Contrarreloj solo, leaderboard global, rewards automáticos por puesto. Reset semanal.'
                  : 'Solo time-trial, global leaderboard, automatic per-rank rewards. Weekly reset.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: ShoppingBag,
                title: isEs ? 'Marketplace de piezas' : 'Parts marketplace',
                description: isEs
                  ? 'Motor, turbo, neumáticos, frenos y kits drift pagables en cash, trofeos o coins. Entrega real al inventario.'
                  : 'Engine, turbo, tires, brakes and drift kits payable in cash, trophies or coins. Delivered to the inventory.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: Camera,
                title: isEs ? 'Driver dossier' : 'Driver dossier',
                description: isEs
                  ? 'Perfil completo con moment shot del ped, garage de vehículos favoritos, billetera de trofeos, win rate y rewards.'
                  : 'Full profile with the live ped moment shot, favourite-vehicles garage, trophy wallet, win rate and rewards.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: Coins,
                title: isEs ? 'Triple economía' : 'Triple economy',
                description: isEs
                  ? 'Cash + trofeos + coins. Stake en eventos, transfer P2P entre racers, prize pools editables.'
                  : 'Cash + trophies + coins. Stake on events, P2P transfer between racers, editable prize pools.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: Users,
                title: isEs ? 'Social' : 'Social',
                description: isEs
                  ? 'Lista de amigos, invitaciones a carrera, espectador con cámara intercambiable, transferencia de trofeos.'
                  : 'Friends list, race invites, spectator mode with swappable cams, trophy transfers.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: Gauge,
                title: isEs ? 'Telemetría' : 'Telemetry',
                description: isEs
                  ? 'Análisis post-carrera con splits por sector y comparativa de vehículos.'
                  : 'Post-race analysis with sector splits and vehicle comparison.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: Layers,
                title: isEs ? 'Multi-framework / inventario' : 'Multi-framework / inventory',
                description: isEs
                  ? 'qb / qbx / esx / standalone. ox / qb / qs / ps / lj. Auto-detect en arranque.'
                  : 'qb / qbx / esx / standalone. ox / qb / qs / ps / lj. Auto-detect on boot.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: Languages,
                title: isEs ? 'Multi-idioma' : 'Multi-language',
                description: isEs
                  ? 'EN/ES integrado en NUI, chat y notificaciones. Añadís idiomas con un archivo i18n.'
                  : 'EN/ES bundled across NUI, chat and notifications. Add languages by dropping an i18n file.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: Wand2,
                title: isEs ? 'Auto-install BD' : 'Auto-install DB',
                description: isEs
                  ? '7 tablas + índices creados en arranque, idempotente. Backup en database.sql.'
                  : '7 tables + indexes created on boot, idempotent. Backup in database.sql.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
              {
                icon: Sparkles,
                title: isEs ? 'Props streamed' : 'Streamed props',
                description: isEs
                  ? 'Pack de checkpoints / start / finish gates incluido. Sin descargas externas.'
                  : 'Bundled checkpoint / start / finish gate pack. No external downloads required.',
                colorClass: 'text-yellow-300',
                bgClass: 'bg-yellow-400/10',
              },
            ]}
          />
        </motion.section>

        {/* INSTALL */}
        <motion.section
          id="racing-install"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-6">
            {isEs ? 'Instalación' : 'Installation'}
          </h2>

          {/* Hard dependency notice — Racing Hub runs as an app inside CPX Laptop */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 p-6 rounded-2xl border border-[#c6ff3d]/25 bg-gradient-to-br from-[#c6ff3d]/[0.08] via-[#c6ff3d]/[0.02] to-transparent flex flex-col md:flex-row gap-5 items-start md:items-center relative overflow-hidden"
          >
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#c6ff3d]/[0.07] blur-[80px] rounded-full pointer-events-none" />

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c6ff3d] to-[#8de000] flex items-center justify-center shadow-[0_0_30px_rgba(198,255,61,0.3)] shrink-0 relative z-10">
              <Laptop className="w-6 h-6 text-black" strokeWidth={2.5} />
            </div>

            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#c6ff3d]">
                  {isEs ? 'Dependencia obligatoria' : 'Hard dependency'}
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-white mb-1.5 tracking-tight font-display">
                {isEs ? 'CPX Racing Hub es una app de CPX Laptop' : 'CPX Racing Hub is a CPX Laptop app'}
              </h3>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                {isEs
                  ? 'Racing vive dentro de la laptop. Antes de seguir con esta instalación, asegurate de tener CPX Laptop ya corriendo en tu servidor — sin la laptop, la app de Racing no aparece.'
                  : 'Racing lives inside the laptop. Before continuing with this install, make sure CPX Laptop is already running on your server — without the laptop, the Racing app will not show up.'}
              </p>
            </div>

            <button
              onClick={() => {
                onSelectDoc('laptop');
                setTimeout(() => {
                  document
                    .getElementById('laptop-install')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }, 140);
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#c6ff3d] hover:bg-[#b0f020] text-black font-bold text-[13.5px] transition-all shadow-[0_0_25px_rgba(198,255,61,0.3)] hover:shadow-[0_0_35px_rgba(198,255,61,0.5)] whitespace-nowrap relative z-10 group"
            >
              <Laptop className="w-4 h-4" strokeWidth={2.5} />
              {isEs ? 'Instalar la laptop primero' : 'Install the laptop first'}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
            </button>
          </motion.div>

          <Step number={1} title={isEs ? 'Pre-requisitos' : 'Pre-requirements'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'En tu' : 'In your'}{' '}
              <code className="bg-[#1a1a1a] text-yellow-300 px-1.5 py-0.5 rounded text-[13px] font-mono border border-yellow-400/20">
                server.cfg
              </code>{' '}
              {isEs ? 'antes de cpx-racingapp:' : 'before cpx-racingapp:'}
            </p>
            <CodeBlock code={`ensure oxmysql\nensure ox_lib\nensure cpx-laptop\n# tu inventario, tu framework, etc.`} />
          </Step>

          <Step number={2} title={isEs ? 'Suelta el resource' : 'Drop the resource'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Recomendado dentro de [interactive]:' : 'Recommended inside an [interactive] bracket:'}
            </p>
            <CodeBlock
              code={`resources/
└── [interactive]/
    └── cpx-racingapp/`}
            />
          </Step>

          <Step number={3} title={isEs ? 'Registra los items del marketplace' : 'Register marketplace items'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'El marketplace entrega piezas de performance como items reales. Copiá el snippet que coincida con tu inventario:'
                : 'The marketplace delivers performance parts as real inventory items. Copy the snippet matching your inventory:'}
            </p>
            <ul className="space-y-2 text-[14.5px] text-zinc-400 mb-4 ml-4">
              <li>• <code className="text-yellow-300">ox_inventory</code> → <code>INSTALL/items/ox_inventory.lua</code></li>
              <li>• <code className="text-yellow-300">qb-inventory</code> → <code>INSTALL/items/qb-inventory.lua</code></li>
              <li>• <code className="text-yellow-300">qs-inventory</code> → <code>INSTALL/items/qs-inventory.md</code></li>
              <li>• <code className="text-yellow-300">ESX legacy</code> → <code>INSTALL/items/esx-legacy.md</code></li>
            </ul>
            <Callout type="info" title={isEs ? 'Si te lo salteas' : 'If you skip this'}>
              {isEs
                ? 'El marketplace devuelve el dinero y muestra un error claro al jugador si un item no está registrado. Podés instalar items después sin romper nada.'
                : 'The marketplace auto-refunds and shows a clear error if an item is missing. You can install items later without breaking anything.'}
            </Callout>
          </Step>

          <Step number={4} title={isEs ? 'Inicia el resource' : 'Start the resource'} isLast>
            <CodeBlock code={`ensure cpx-racingapp`} />
            <Callout type="info" title={isEs ? 'Auto-install BD' : 'Auto-install DB'}>
              {isEs
                ? 'En el primer arranque crea 7 tablas + índices en tu base de datos. Si ves [cpx-racingapp] Database ready (schema + indexes verified) en la consola, todo bien. El backup del esquema queda en database.sql por si querés importarlo a mano (poné Config.Database.autoInstall = false).'
                : 'On first boot it creates 7 tables + indexes in your database. If you see [cpx-racingapp] Database ready (schema + indexes verified) in the console, you are good. The schema backup ships in database.sql in case you prefer to import it manually (set Config.Database.autoInstall = false).'}
            </Callout>
          </Step>
        </motion.section>

        {/* CONFIG */}
        <motion.section
          id="racing-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings2 className="w-6 h-6 text-yellow-300" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración' : 'Configuration'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl mb-6">
            {isEs
              ? 'Todo lo de usuario vive en config.lua. Cada sección está comentada. Estos son los valores que conviene revisar antes de abrir al público:'
              : 'Everything user-facing lives in config.lua. Each section is commented. These are the values worth reviewing before going public:'}
          </p>

          <CodeBlock
            code={`Config.Locale         = 'en'        -- 'en' | 'es' (NUI + chat output)
Config.UseFramework   = 'auto'      -- 'auto' | 'qb' | 'qbx' | 'esx' | 'standalone'
Config.UseInventory   = 'auto'      -- 'auto' | 'ox' | 'qs' | 'ps' | 'qb' | 'lj' | 'none'

Config.Brand = {
    name  = 'Racing Hub',
    color = '#FFD65A',
}

Config.Commands = {
    open    = 'racinghub',          -- /racinghub opens the UI directly
    hidden  = 'racinghub_hidden',   -- internal — used by the laptop integration
    forceUI = 'racinghub_force',    -- admin recovery
    grant   = 'grantracing',        -- /grantracing <id> toggle organizer perm
}

Config.OpenKey = 'F6'               -- default keymap, set false to disable

Config.Permissions = {
    adminAce              = 'racinghub.admin',
    superusers            = { },     -- always-admin identifiers (steam:, license:, citizen)
    inheritFrameworkAdmin = true,
}`}
          />

          <Callout type="info" title={isEs ? 'Lo que queda abierto' : 'What stays open'}>
            {isEs ? (
              <>
                Estos archivos quedan editables en la build encriptada para que adaptes el script a tu servidor sin pedirnos nada:
                <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[14.5px]">
                  <li><code>config.lua</code> — todos los toggles de usuario</li>
                  <li><code>bridge/bridge_config.lua</code> — selector de framework + inventario</li>
                  <li><code>bridge/client/**</code> y <code>bridge/server/**</code> — adaptadores ligeros (forkealos si tu framework es custom)</li>
                  <li><code>database.sql</code> — backup del esquema, útil si desactivás el auto-installer</li>
                  <li><code>README.md</code> e <code>INSTALL/**</code> — guías</li>
                </ul>
                <p className="mt-3">El resto está encriptado. Si necesitás exponer algo más, pasá por Discord.</p>
              </>
            ) : (
              <>
                These files stay editable in the encrypted build so you can adapt the script without asking us:
                <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[14.5px]">
                  <li><code>config.lua</code> — every user toggle</li>
                  <li><code>bridge/bridge_config.lua</code> — framework + inventory selector</li>
                  <li><code>bridge/client/**</code> and <code>bridge/server/**</code> — light adapters (fork yours if custom)</li>
                  <li><code>database.sql</code> — schema backup, useful if you disable the auto-installer</li>
                  <li><code>README.md</code> and <code>INSTALL/**</code> — guides</li>
                </ul>
                <p className="mt-3">The rest is encrypted. If you need to expose something else, ping us on Discord.</p>
              </>
            )}
          </Callout>
        </motion.section>

        {/* ADMIN — track + event editor */}
        <motion.section
          id="racing-admin"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-5">
            {isEs ? 'Editor in-game (admins / organizadores)' : 'In-game editor (admins / organizers)'}
          </h2>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed mb-6">
            {isEs
              ? 'Desde la app Racing → tab Tracks, los admins pueden crear circuitos directamente en el mundo: pones checkpoints en el suelo manejando, definís nombre, tipo, descripción, vehículo recomendado y la ubicación de inicio. Todo se persiste en la base de datos sin reiniciar el resource.'
              : 'From the Racing app → Tracks tab, admins can create circuits directly in the world: drive around dropping checkpoints, name the track, set its type, description, recommended vehicle and start location. Everything persists to the database with no restart needed.'}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed mb-6">
            {isEs
              ? 'Para crear eventos: tab Dashboard → Crear Evento. Eligís track, fecha y hora de inicio, número de vueltas, buy-in en la moneda que prefieras (cash/trofeos/coins) y la distribución del prize pool. Los jugadores ven el evento en su dashboard y se unen con un click.'
              : 'To create events: Dashboard tab → Create Event. Pick a track, start date / time, lap count, buy-in in the currency you prefer (cash / trophies / coins) and the prize-pool distribution. Players see the event on their dashboard and join with a single click.'}
          </p>
          <CodeBlock
            code={`/grantracing <serverId>     -- grant or revoke organizer permission
/racinghub_force            -- admin: force-open UI if a player got stuck`}
          />
          <Callout type="info" title={isEs ? 'Permisos de organizador' : 'Organizer permissions'}>
            {isEs
              ? 'Por defecto los organizadores son players con el flag can_organize en la BD o admins ACE. Podés repartirlos manualmente con /grantracing <id> o setear identifiers fijos en Config.Permissions.superusers.'
              : 'By default organizers are players with the can_organize DB flag or ACE admins. You can hand them out manually with /grantracing <id> or hard-code identifiers in Config.Permissions.superusers.'}
          </Callout>
        </motion.section>

        {/* TROUBLESHOOTING */}
        <motion.section
          id="racing-troubleshoot"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-2">
            {isEs ? 'Solución de problemas' : 'Troubleshooting'}
          </h2>
          <p className="text-[14px] text-zinc-500 mb-8">
            {isEs ? 'Errores frecuentes y cómo resolverlos.' : 'Common issues and fixes.'}
          </p>

          <div className="space-y-6">
            <Callout
              type="warning"
              title={isEs ? 'La app Racing no aparece en la laptop' : "The Racing app doesn't show up in the laptop"}
            >
              {isEs
                ? 'cpx-laptop debe iniciar antes que cpx-racingapp en tu server.cfg. Confirmá también que en la config de la laptop, Config.ExternalApps.racing tenga enabled = true (o auto). Mirá la consola server: ambos resources deben arrancar sin errores.'
                : 'cpx-laptop must start before cpx-racingapp in your server.cfg. Also confirm the laptop config has Config.ExternalApps.racing.enabled = true (or auto). Check the server console — both resources must start without errors.'}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? 'La foto del personaje no aparece en el perfil' : "The character photo doesn't show up on the profile"}
            >
              {isEs
                ? "El moment shot usa pedheadshot, igual que la app Passport de la laptop. Si ves el placeholder COMPLEX LEGACY en lugar de tu foto: 1) reabrí el hub para reintentarlo, 2) confirmá que el ped ya está streamed (no funciona durante la pantalla de loading), 3) revisá la consola por errores de RegisterPedheadshot. Algunos forks de FiveM bloquean RegisterPedheadshot_3 — el script cae automáticamente al fallback estándar."
                : "The moment shot uses pedheadshot, same as the laptop's Passport app. If you see the COMPLEX LEGACY placeholder instead of your photo: 1) reopen the hub to retry, 2) confirm the ped is fully streamed (it doesn't work during the loading screen), 3) check the console for RegisterPedheadshot errors. Some FiveM forks block RegisterPedheadshot_3 — the script auto-falls back to the standard variant."}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? 'Las compras del marketplace devuelven el dinero' : 'Marketplace purchases refund the money'}
            >
              {isEs
                ? 'Falta registrar el item en tu inventario. Mirá INSTALL/items/<tu-inventario> y agregalo. El refund automático protege al jugador para que nunca pierda plata mientras configurás items.'
                : "The item is not registered in your inventory. Check INSTALL/items/<your-inventory> and add it. The automatic refund protects the player so they never lose money while you're still configuring items."}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? 'La base de datos no se instala sola' : "The database doesn't auto-install"}
            >
              {isEs
                ? 'Confirmá que oxmysql arranque antes que cpx-racingapp y que tenga credenciales válidas en mysql_connection_string. Como alternativa, importá database.sql a mano y poné Config.Database.autoInstall = false.'
                : 'Confirm oxmysql starts before cpx-racingapp and has valid credentials in mysql_connection_string. As an alternative, import database.sql manually and set Config.Database.autoInstall = false.'}
            </Callout>

            <Callout
              type="info"
              title={isEs ? 'Los checkpoints no se ven en pista' : "Checkpoints don't render in-world"}
            >
              {isEs
                ? 'El pack de props se streamea desde stream/. Verificá que el resource se haya iniciado correctamente (sin errores de stream) y que el cliente haya cargado el ytyp. Reiniciá el resource con /restart cpx-racingapp si recién hiciste cambios.'
                : "The prop pack is streamed from stream/. Verify the resource started cleanly (no stream errors) and the client loaded the ytyp. Restart the resource with /restart cpx-racingapp if you just made changes."}
            </Callout>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="5/5/26"
          prev={{ title: 'CPX Restaurants', doc: 'restaurants' }}
          next={{ title: 'CPX Frames', doc: 'frames' }}
          onSelectDoc={onSelectDoc}
          accentColor="amber"
        />
      </motion.div>
    </div>
  );
}

