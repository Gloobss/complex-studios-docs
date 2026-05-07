import { motion } from 'motion/react';
import {
  Pause,
  Palette,
  Layers,
  Sparkles,
  Settings2,
  Languages,
  Wand2,
  Building2,
  Keyboard as KeyboardIcon,
  Clock,
  User,
  Database,
  LayoutGrid,
  Radio,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { YouTubeHero } from '../ui/YouTubeHero';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

// Brand accent for PauseMenu — cyan "Good Life", the default color in the script.
const ACCENT = '#4DD9FF';

export function PauseMenuDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-[13px] font-medium mb-6">
          <Pause className="w-4 h-4" />
          <span>v3.0+</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-500">
            CPX PauseMenu
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'PauseMenu premium configurable que reemplaza el menú nativo de GTA. Negocios dinámicos con comandos custom, ~650 combinaciones visuales, panel admin in-game, headshot live del personaje y broadcast a todos los jugadores en tiempo real.'
            : 'Premium configurable PauseMenu that replaces GTA\'s native menu. Dynamic businesses with custom commands, ~650 visual combos, in-game admin panel, live character headshot and real-time broadcast to every player.'}
        </p>

        <YouTubeHero
          videoId="BUqCfQzODUo"
          title="CPX PauseMenu"
          accent={ACCENT}
        />

        {/* INTRO */}
        <motion.section
          id="pausemenu-intro"
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
              ? 'CPX PauseMenu reemplaza el menú nativo de GTA por una interfaz construida en React con dimensiones de personalización ortogonales: 9 paletas de color × 4 estilos × 6 decoraciones × 3 niveles de fondo = ~650 combinaciones, todas intercambiables en vivo desde el panel admin in-game. Sin reinicios, sin tocar archivos.'
              : 'CPX PauseMenu replaces GTA\'s native menu with a React-built interface featuring orthogonal customization dimensions: 9 color palettes × 4 styles × 6 decorations × 3 background levels = ~650 combos, all swappable live from the in-game admin panel. No restarts, no file edits.'}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'Los administradores crean negocios dinámicos (restaurantes, talleres, tiendas) directamente desde el menú: cada uno con su comando custom para que los empleados del job correspondiente lo abran/cierren, GPS pinning a la ubicación, ícono de la galería curada y descripción. Todo persistido en MySQL y broadcasteado a cada jugador conectado al guardar. Auto-detecta framework (qb / qbx / esx / standalone) y bilingüe EN/ES con toggle en runtime.'
              : 'Admins create dynamic businesses (restaurants, workshops, shops) directly from the menu: each with its own custom command so the matching job\'s workers can open/close it, GPS pinning to the location, icon from a curated gallery and a description. Everything is persisted in MySQL and broadcast to every connected player on save. Auto-detects framework (qb / qbx / esx / standalone) and bundles EN/ES with a runtime toggle.'}
          </p>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          id="pausemenu-features"
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
                icon: Building2,
                title: isEs ? 'Negocios dinámicos' : 'Dynamic businesses',
                description: isEs
                  ? 'Crea restaurantes, tiendas, talleres con comando custom, GPS pinning, ícono y descripción. Persistidos en MySQL.'
                  : 'Create restaurants, shops, workshops with a custom command, GPS pinning, icon and description. Persisted in MySQL.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: Palette,
                title: isEs ? '~650 combinaciones visuales' : '~650 visual combos',
                description: isEs
                  ? '9 colores × 4 estilos × 6 decoraciones × 3 fondos. Dimensiones independientes — cualquier combinación funciona.'
                  : '9 colors × 4 styles × 6 decorations × 3 backgrounds. Orthogonal dimensions — every combo works.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: Settings2,
                title: isEs ? 'Panel admin in-game' : 'In-game admin panel',
                description: isEs
                  ? 'Comando configurable (default /pmconfig). Edita color, estilo, botones, negocios y keybinds en vivo. Broadcast automático.'
                  : 'Configurable command (default /pmconfig). Edit color, style, buttons, businesses and keybinds live. Auto-broadcasts.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: User,
                title: isEs ? 'Headshot live del personaje' : 'Live character headshot',
                description: isEs
                  ? 'Foto real del ped en el header del menú vía RegisterPedheadshot_3. Se refresca con outfit changes. Cero ancho de banda.'
                  : 'Live ped photo in the menu header via RegisterPedheadshot_3. Refreshes on outfit changes. Zero bandwidth.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: LayoutGrid,
                title: isEs ? 'Botones configurables' : 'Configurable buttons',
                description: isEs
                  ? 'Quick actions, pinned cards, extras y pass card. Cada botón mapea a un comando custom — editable in-game.'
                  : 'Quick actions, pinned cards, extras and pass card. Each button maps to a custom command — editable in-game.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: KeyboardIcon,
                title: isEs ? 'Overlay de Keybinds' : 'Keybinds overlay',
                description: isEs
                  ? 'Teclado virtual MacBook-style que documenta tus binds. Glow en teclas configuradas, tooltip al hover, autopilot que rota el spotlight.'
                  : 'MacBook-style virtual keyboard documenting your binds. Glow on configured keys, hover tooltip, autopilot rotating the spotlight.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: Clock,
                title: isEs ? 'Auto-close por inactividad' : 'Inactivity auto-close',
                description: isEs
                  ? 'Cada negocio se cierra solo tras X minutos sin actividad (1–240, configurable). Aviso a los empleados un minuto antes.'
                  : 'Each business closes itself after X minutes of inactivity (1–240, configurable). Workers get a heads-up one minute before.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: Radio,
                title: isEs ? 'Broadcast en tiempo real' : 'Real-time broadcast',
                description: isEs
                  ? 'Cualquier cambio del admin (color, negocios, botones) llega a todos los jugadores conectados al guardar. Cero refresh.'
                  : 'Every admin change (color, businesses, buttons) reaches every connected player on save. Zero refresh required.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: Layers,
                title: isEs ? 'Multi-framework' : 'Multi-framework',
                description: isEs
                  ? 'qb / qbx / esx / standalone. Bridge auto-detecta el framework activo en arranque. Ningún flag a tocar.'
                  : 'qb / qbx / esx / standalone. The bridge auto-detects the active framework on boot. No flags to flip.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: Languages,
                title: isEs ? 'Bilingüe EN/ES' : 'Bilingual EN/ES',
                description: isEs
                  ? 'Cada string del menú y panel admin disponible en inglés y español. Toggle en vivo desde el panel.'
                  : 'Every menu and admin-panel string available in English and Spanish. Live toggle from the panel.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: Database,
                title: isEs ? 'Auto-install BD' : 'Auto-install DB',
                description: isEs
                  ? '2 tablas creadas en arranque (CREATE IF NOT EXISTS), idempotente. Backup en database.sql para import manual.'
                  : '2 tables created on boot (CREATE IF NOT EXISTS), idempotent. Backup in database.sql for manual import.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: Sparkles,
                title: isEs ? 'Optimizado para CEF' : 'CEF-optimized',
                description: isEs
                  ? 'React 18 lazy-load + memoization en cada keycap, idle-time event handlers, broadcast diferencial. ResMon < 0.05 ms.'
                  : 'React 18 lazy-load + memoized keycaps, idle-time event handlers, differential broadcast. ResMon < 0.05 ms.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
              {
                icon: Wand2,
                title: isEs ? 'Bridge open-source' : 'Open-source bridge',
                description: isEs
                  ? 'Adaptadores de framework editables incluso en la build encriptada. Forkealos si tu QB / ESX está modificado.'
                  : 'Framework adapters stay editable even in the encrypted build. Fork them if your QB / ESX is forked.',
                colorClass: 'text-cyan-300',
                bgClass: 'bg-cyan-400/10',
              },
            ]}
          />
        </motion.section>

        {/* INSTALL */}
        <motion.section
          id="pausemenu-install"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-6">
            {isEs ? 'Instalación' : 'Installation'}
          </h2>

          <Step number={1} title={isEs ? 'Pre-requisitos' : 'Pre-requirements'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'En tu' : 'In your'}{' '}
              <code className="bg-[#1a1a1a] text-cyan-300 px-1.5 py-0.5 rounded text-[13px] font-mono border border-cyan-400/20">
                server.cfg
              </code>{' '}
              {isEs ? 'antes de cpx_pausemenu:' : 'before cpx_pausemenu:'}
            </p>
            <CodeBlock code={`ensure oxmysql\nensure ox_lib\n# tu framework (qb-core / qbx_core / es_extended) o nada para standalone`} />
          </Step>

          <Step number={2} title={isEs ? 'Suelta el resource' : 'Drop the resource'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Recomendado dentro de [complex]:' : 'Recommended inside a [complex] bracket:'}
            </p>
            <CodeBlock
              code={`resources/
└── [complex]/
    └── cpx_pausemenu/`}
            />
          </Step>

          <Step number={3} title={isEs ? 'Inicia el resource' : 'Start the resource'}>
            <CodeBlock code={`ensure cpx_pausemenu`} />
            <Callout type="info" title={isEs ? 'Auto-install BD' : 'Auto-install DB'}>
              {isEs
                ? 'En el primer arranque crea 2 tablas (cpx_pausemenu_businesses y cpx_pausemenu_settings) usando CREATE TABLE IF NOT EXISTS. Idempotente — podés dejar Config.AutoInstallDatabase = true para siempre. Si preferís import manual, importá database.sql y poné el flag en false.'
                : 'On first boot it creates 2 tables (cpx_pausemenu_businesses and cpx_pausemenu_settings) using CREATE TABLE IF NOT EXISTS. Idempotent — leave Config.AutoInstallDatabase = true forever if you want. To import manually, run database.sql and set the flag to false.'}
            </Callout>
          </Step>

          <Step number={4} title={isEs ? 'Abrí el panel admin' : 'Open the admin panel'} isLast>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'Como admin, escribí en el chat:'
                : 'As an admin, type into chat:'}
            </p>
            <CodeBlock code={`/pmconfig`} />
            <p className="mt-4 text-[14.5px] text-zinc-400">
              {isEs ? (
                <>
                  El comando es configurable. Cambiálo en{' '}
                  <code className="bg-[#1a1a1a] text-cyan-300 px-1.5 py-0.5 rounded text-[12.5px] font-mono">
                    Config.AdminCommand
                  </code>{' '}
                  por el nombre que prefieras (ej. <code className="text-cyan-300">businesspm</code>,{' '}
                  <code className="text-cyan-300">menuconfig</code>). El frontend muestra el nombre actualizado en cualquier hint automáticamente.
                </>
              ) : (
                <>
                  The command is configurable. Change{' '}
                  <code className="bg-[#1a1a1a] text-cyan-300 px-1.5 py-0.5 rounded text-[12.5px] font-mono">
                    Config.AdminCommand
                  </code>{' '}
                  to whatever fits you (e.g. <code className="text-cyan-300">businesspm</code>,{' '}
                  <code className="text-cyan-300">menuconfig</code>). The frontend automatically shows the updated name in every hint.
                </>
              )}
            </p>
            <Callout type="info" title={isEs ? 'Permisos de admin' : 'Admin permissions'}>
              {isEs
                ? 'Por defecto los grupos admin / god del framework activo abren el panel. Como fallback universal podés grantear ace permission cpx.businesspm a un identificador o a group.admin desde server.cfg.'
                : 'By default the admin / god groups of the active framework can open the panel. As a universal fallback, you can grant ace permission cpx.businesspm to an identifier or to group.admin from server.cfg.'}
            </Callout>
          </Step>
        </motion.section>

        {/* CONFIG */}
        <motion.section
          id="pausemenu-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings2 className="w-6 h-6 text-cyan-300" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración' : 'Configuration'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl mb-6">
            {isEs
              ? 'Casi todo se edita in-game desde el panel admin. shared/config.lua queda para los toggles que conviene fijar antes de abrir al público:'
              : 'Almost everything is edited in-game from the admin panel. shared/config.lua handles the toggles worth setting before going public:'}
          </p>

          <CodeBlock
            code={`Config.Framework          = 'auto'      -- 'auto' | 'qb' | 'qbx' | 'esx' | 'standalone'
Config.Locale             = 'en'        -- 'en' | 'es' (default UI language)
Config.AutoInstallDatabase = true       -- false to import database.sql manually
Config.AdminGroups        = { 'admin', 'god' }  -- groups that can open the admin panel
Config.AdminCommand       = 'pmconfig'  -- command that opens the admin panel
Config.OpenKey            = 'ESCAPE'    -- nil to disable the keybind
Config.BusinessExpiration = 600         -- seconds a business stays open by default

-- Refresca el headshot cuando estos eventos se disparan en cualquier
-- recurso (compatibilidad con outfit/skin scripts).
Config.HeadshotEvents = {
    'qb-clothing:client:loadOutfit',
    'qb-clothing:client:loadPlayerClothing',
    'skinchanger:loadClothes',
    'esx_skin:loadClothes',
    'illenium-appearance:client:OutfitLoaded',
}`}
          />

          <Callout type="info" title={isEs ? 'Lo que queda abierto' : 'What stays open'}>
            {isEs ? (
              <>
                Estos archivos quedan editables en la build encriptada para que adaptes el script sin pedirnos nada:
                <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[14.5px]">
                  <li><code>shared/config.lua</code> — todos los toggles de usuario</li>
                  <li><code>bridge/bridge_config.lua</code> — selector de framework</li>
                  <li><code>bridge/client/**</code> y <code>bridge/server/**</code> — adaptadores ligeros (forkealos si tu framework es custom)</li>
                  <li><code>database.sql</code> — backup del esquema</li>
                  <li><code>README.md</code> e <code>INSTALL/**</code> — guías</li>
                </ul>
                <p className="mt-3">El resto está encriptado por escrow. Si necesitás exponer algo más, pasá por Discord.</p>
              </>
            ) : (
              <>
                These files stay editable in the encrypted build so you can adapt the script without asking us:
                <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[14.5px]">
                  <li><code>shared/config.lua</code> — every user toggle</li>
                  <li><code>bridge/bridge_config.lua</code> — framework selector</li>
                  <li><code>bridge/client/**</code> and <code>bridge/server/**</code> — light adapters (fork yours if custom)</li>
                  <li><code>database.sql</code> — schema backup</li>
                  <li><code>README.md</code> and <code>INSTALL/**</code> — guides</li>
                </ul>
                <p className="mt-3">The rest is encrypted by escrow. Need to expose something else? Ping us on Discord.</p>
              </>
            )}
          </Callout>
        </motion.section>

        {/* ADMIN — in-game editor */}
        <motion.section
          id="pausemenu-admin"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-5">
            {isEs ? 'Editor in-game (admins)' : 'In-game editor (admins)'}
          </h2>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed mb-6">
            {isEs
              ? 'Todo el panel se abre con /pmconfig (o el nombre que hayas puesto en Config.AdminCommand). Está dividido en cuatro secciones, todas con preview en vivo y sync automático al guardar.'
              : 'The whole panel opens with /pmconfig (or whatever name you set in Config.AdminCommand). It splits into four sections, all with live preview and auto-sync on save.'}
          </p>

          <div className="space-y-5 mb-8">
            <div className="p-5 rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-transparent">
              <div className="flex items-center gap-2.5 mb-2">
                <Building2 className="w-4 h-4 text-cyan-300" />
                <h3 className="text-[15px] font-bold text-white font-display">
                  {isEs ? 'Negocios' : 'Businesses'}
                </h3>
              </div>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                {isEs
                  ? 'Crea/edita/elimina negocios. Por cada uno: job asociado, nombre, descripción, ícono de la galería curada (76 entradas), URL de logo opcional, GPS pinning a la ubicación actual y un comando custom único (ej. /openrestaurant). Cualquier empleado del job lo abre/cierra escribiendo el comando — el timer se renueva en cada uso.'
                  : 'Create / edit / delete businesses. Each one: associated job, name, description, icon from a curated gallery (76 entries), optional logo URL, GPS pinning to your current location and a unique custom command (e.g. /openrestaurant). Any worker of that job opens/closes it by typing the command — the timer renews on every use.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-transparent">
              <div className="flex items-center gap-2.5 mb-2">
                <Palette className="w-4 h-4 text-cyan-300" />
                <h3 className="text-[15px] font-bold text-white font-display">
                  {isEs ? 'Apariencia' : 'Appearance'}
                </h3>
              </div>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                {isEs
                  ? '4 sub-tabs: Color (9 paletas), Estilo (orgánico/sharp/glass/terminal), Decoración (corazones, estrellas, coronas, geométrico, ondas, sin decorar), Fondo (sólido/translúcido/diáfano). Más Marca (logo + nombre del server) y Pantalla (compact/fullscreen + tiempo de auto-close). Preview live a medida que tocás.'
                  : '4 sub-tabs: Color (9 palettes), Style (organic/sharp/glass/terminal), Decoration (hearts, stars, crowns, geometric, waves, none), Background (solid/translucent/sheer). Plus Brand (server logo + name) and Screen (compact/fullscreen + auto-close timer). Live preview as you click.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-transparent">
              <div className="flex items-center gap-2.5 mb-2">
                <LayoutGrid className="w-4 h-4 text-cyan-300" />
                <h3 className="text-[15px] font-bold text-white font-display">
                  {isEs ? 'Botones' : 'Buttons'}
                </h3>
              </div>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                {isEs
                  ? '6 quick actions, 2 pinned cards, 2 cards extra y 1 pass card. Cada botón mapea a un comando custom (ej. /vip, /skill, /battlepass) e ícono Lucide. Dos slots reservados están bloqueados: openSettings (abre los Ajustes nativos de GTA) y keybinds (abre el overlay del teclado).'
                  : '6 quick actions, 2 pinned cards, 2 extra cards and 1 pass card. Each button maps to a custom command (e.g. /vip, /skill, /battlepass) and a Lucide icon. Two reserved slots are locked: openSettings (opens GTA\'s native Settings) and keybinds (opens the keyboard overlay).'}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-transparent">
              <div className="flex items-center gap-2.5 mb-2">
                <KeyboardIcon className="w-4 h-4 text-cyan-300" />
                <h3 className="text-[15px] font-bold text-white font-display">
                  {isEs ? 'Keybinds' : 'Keybinds'}
                </h3>
              </div>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                {isEs
                  ? 'Documentá las teclas que usa tu server. Cada entrada (max 24) tiene tecla, título y descripción. En el menú, el jugador pulsa S y aparece un teclado virtual MacBook-style: las teclas configuradas brillan con el color brand, hover muestra tooltip y un autopilot rota el spotlight para llamar la atención.'
                  : 'Document the keys your server uses. Each entry (max 24) has a key, title and description. In the menu, the player hits S and a MacBook-style virtual keyboard appears: configured keys glow in the brand color, hover shows a tooltip, and an autopilot rotates the spotlight to draw attention.'}
              </p>
            </div>
          </div>

          <CodeBlock
            code={`/pmconfig          -- abre el panel admin (configurable)
/openpausemenu     -- comando alternativo de apertura del menú principal
S (en-menu)        -- abre el overlay de Keybinds
Esc (en-menu)      -- cierra el menú u overlay activo`}
          />

          <Callout type="info" title={isEs ? 'Lo que NO se reasigna' : "What can't be reassigned"}>
            {isEs
              ? 'Los slots openSettings (slot #2 de quick actions) y keybinds (slot #5) están bloqueados desde el frontend y el server. El admin command que elijas en Config.AdminCommand también queda automáticamente en la lista de comandos reservados — ningún negocio puede chocar con él.'
              : 'The openSettings slot (#2 of quick actions) and keybinds slot (#5) are locked from both the frontend and the server. The admin command you pick in Config.AdminCommand is also automatically added to the reserved list — no business can collide with it.'}
          </Callout>
        </motion.section>

        {/* TROUBLESHOOTING */}
        <motion.section
          id="pausemenu-troubleshoot"
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
              title={isEs ? 'El menú no se abre con ESC' : "The menu doesn't open with ESC"}
            >
              {isEs
                ? 'Revisá Config.OpenKey y el FiveM Key Bindings (Settings → Key Bindings → FiveM → Open Pause Menu). Si querés deshabilitar el keybind y abrir sólo por comando, poné Config.OpenKey = nil — /openpausemenu seguirá funcionando.'
                : 'Check Config.OpenKey and FiveM Key Bindings (Settings → Key Bindings → FiveM → Open Pause Menu). To disable the keybind and only open via command, set Config.OpenKey = nil — /openpausemenu still works.'}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? '/pmconfig dice "no permission"' : '/pmconfig says "no permission"'}
            >
              {isEs
                ? 'Agregá tu grupo a Config.AdminGroups (default { "admin", "god" }) o grantéate la ace permission cpx.businesspm desde server.cfg con add_ace identifier.steam:xxx cpx.businesspm allow. El server console muestra qué framework detectó en el arranque para que sepas qué grupos vale.'
                : 'Add your group to Config.AdminGroups (default { "admin", "god" }) or grant yourself the cpx.businesspm ace from server.cfg with add_ace identifier.steam:xxx cpx.businesspm allow. The server console prints which framework was detected at boot so you know which group system applies.'}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? 'El bridge imprime "standalone" en QB / ESX' : 'The bridge prints "standalone" on QB / ESX'}
            >
              {isEs
                ? 'cpx_pausemenu detecta el framework por GetResourceState. Asegurate de que qb-core / qbx_core / es_extended se inicien ANTES que cpx_pausemenu en server.cfg. Como fallback podés forzar el valor con Config.Framework = "qb" (o "qbx" / "esx") y saltarte el auto-detect.'
                : 'cpx_pausemenu detects the framework via GetResourceState. Make sure qb-core / qbx_core / es_extended start BEFORE cpx_pausemenu in server.cfg. As a fallback you can force it with Config.Framework = "qb" (or "qbx" / "esx") and skip auto-detect.'}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? 'El headshot del personaje no aparece' : "The character headshot doesn't show up"}
            >
              {isEs
                ? 'El header del menú usa RegisterPedheadshot_3, que tarda 1-2 frames después de spawn. Si abrís el menú durante la pantalla de carga, vas a ver el placeholder. Reabre el menú y debería estar listo. Si tu server usa un script de outfit custom, agregá su evento a Config.HeadshotEvents para que el headshot se refresque al cambiar de ropa.'
                : "The menu header uses RegisterPedheadshot_3, which needs 1-2 frames after spawn. If you open the menu during the loading screen, you'll see the placeholder. Reopen the menu and it should be ready. If your server uses a custom outfit script, add its event to Config.HeadshotEvents so the headshot refreshes on outfit changes."}
            </Callout>

            <Callout
              type="info"
              title={isEs ? 'Los negocios no aparecen en otros jugadores' : "Businesses don't show up for other players"}
            >
              {isEs
                ? 'Cuando creás o editás un negocio el servidor broadcast el cambio inmediatamente. Si un jugador entró ANTES de que estuviera creado, su sync inicial debería traerlo automáticamente. Si no, pedile que reabra el menú — el cliente envía un cpx_pausemenu:requestSync al server cada vez que abre la NUI. Verificá oxmysql en consola si ves errores SQL.'
                : "When you create or edit a business the server broadcasts the change immediately. If a player joined BEFORE it was created, their initial sync should pick it up. Otherwise ask them to reopen the menu — the client sends cpx_pausemenu:requestSync to the server every time it opens the NUI. Check oxmysql in console if you see SQL errors."}
            </Callout>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="5/7/26"
          prev={{ title: 'CPX Frames', doc: 'frames' }}
          next={{ title: 'Home', doc: 'home' }}
          onSelectDoc={onSelectDoc}
          accentColor="cyan"
        />
      </motion.div>
    </div>
  );
}

