import { motion } from 'motion/react';
import {
  BookOpen,
  Megaphone,
  Settings2,
  Layers,
  Layout,
  Palette,
  Sparkles,
  Volume2,
  Type,
  Sliders,
  MapPin,
  Wrench,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { YouTubeHero } from '../ui/YouTubeHero';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

// Brand accent for cpx-announcements — pink/rose, matches the script's
// `Config.Themes.pink` (#F472B6) and reads as a notification/announcement color.
const ACCENT = '#F472B6';

export function AnnouncementsDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-400/10 border border-pink-400/20 text-pink-300 text-[13px] font-medium mb-6">
          <BookOpen className="w-4 h-4" />
          <span>v1.1+</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-500">
            CPX Announcements
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Anuncios persistentes por negocio con editor admin in-game. Cada job dispara su propia tarjeta en pantalla con plantilla, posición, tipografía, decoración, efecto, sonido y GPS configurables. Preview en vivo mientras editás y persistencia en MySQL.'
            : 'Persistent per-business announcements with an in-game admin editor. Every job triggers its own on-screen card with template, position, typography, decoration, effect, sound and GPS configurable. Live preview while you edit and MySQL persistence.'}
        </p>

        <YouTubeHero
          videoId="FEpe2m8XYTk"
          title="CPX Announcements"
          accent={ACCENT}
        />

        {/* INTRO */}
        <motion.section
          id="announcements-intro"
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
              ? 'CPX Announcements le da a cada negocio del servidor su propio anuncio configurable. El admin abre el panel con /announcementsadmin, elige el job en un picker, captura coordenadas, escribe el mensaje y compone el look — todo con preview en vivo. Al guardar, el anuncio queda persistente en MySQL y disponible para que cualquier empleado de ese job lo dispare con su comando personalizado (/a [mensaje] por defecto, editable por negocio).'
              : "CPX Announcements gives every server business its own configurable announcement. The admin opens the panel with /announcementsadmin, picks the job from a searchable list, captures coordinates, writes the message and composes the look — all with live preview. On save, the announcement is persisted to MySQL and available for every employee of that job to fire it with their custom command (/a [message] by default, editable per business)."}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'El comprador no toca código: la NUI completa es un editor visual. Bajo el capó: bridge auto-detecta el framework (qb / qbx / esx / standalone) y enruta jobs, permisos y notificaciones; el server sanitiza cada payload (URLs, hex, coords, command names) y maneja queries con oxmysql; el NUI ships como un bundle React minificado + obfuscado.'
              : 'No buyer ever touches code: the entire NUI is a visual editor. Under the hood: a bridge auto-detects the framework (qb / qbx / esx / standalone) and routes jobs, permissions and notifications; the server sanitizes every payload (URLs, hex, coords, command names) and handles queries via oxmysql; the NUI ships as a minified + obfuscated React bundle.'}
          </p>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          id="announcements-features"
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
                icon: Megaphone,
                title: isEs ? 'Editor admin in-game' : 'In-game admin editor',
                description: isEs
                  ? 'Panel completo con job picker fuzzy, captura de coords, plantilla, foto, comando y preview en vivo. /announcementsadmin abre, ESC cierra.'
                  : 'Full panel with fuzzy job picker, coord capture, template, photo, command and live preview. /announcementsadmin opens, ESC closes.',
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
              {
                icon: Layout,
                title: isEs ? '5 estructuras · 8 posiciones' : '5 structures · 8 positions',
                description: isEs
                  ? 'Card, paper, banner, split o compact. Esquinas, centros y laterales. Cada negocio queda fijado donde mejor le calce.'
                  : 'Card, paper, banner, split or compact. Corners, centers and edges. Every business sticks where it reads best.',
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
              {
                icon: Palette,
                title: isEs ? '8 temas + color picker' : '8 themes + color picker',
                description: isEs
                  ? 'Sky, orange, pink, red, gold, green, violet, teal. Y un picker hex para acentos custom que se guardan por negocio.'
                  : 'Sky, orange, pink, red, gold, green, violet, teal. Plus a hex picker for custom accents persisted per business.',
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
              {
                icon: Type,
                title: isEs ? '10 + 10 tipografías' : '10 + 10 typographies',
                description: isEs
                  ? 'Poster, expanded, impact, condensed, tech, mono, serif, luxury… para títulos. Outfit, inter, segoe, mono, serif… para cuerpo.'
                  : 'Poster, expanded, impact, condensed, tech, mono, serif, luxury… for titles. Outfit, inter, segoe, mono, serif… for body.',
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
              {
                icon: Sparkles,
                title: isEs ? '6 efectos visuales' : '6 visual effects',
                description: isEs
                  ? 'Shine, pulse, flash, siren (luces policiales), ems (luces médicas) o sin efecto. Reservá los más fuertes para servicios.'
                  : 'Shine, pulse, flash, siren (police lights), ems (medical lights) or none. Reserve the loud ones for service jobs.',
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
              {
                icon: Volume2,
                title: isEs ? 'Sonidos por anuncio' : 'Per-announcement sound',
                description: isEs
                  ? 'Pop suave, tono policial, tono médico o silencio. Ampliable agregando archivos en html/sound/ y entradas en Config.Sounds.'
                  : 'Soft pop, police tone, medical tone or silent. Extend by dropping files into html/sound/ and adding entries to Config.Sounds.',
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
              {
                icon: Sliders,
                title: isEs ? 'Canvas ajustable' : 'Adjustable canvas',
                description: isEs
                  ? 'Sliders de ancho (300–980), alto (76–320) y escala (70–140%). El editor recentra automáticamente cuando cambias estructura.'
                  : 'Width (300–980), height (76–320) and scale (70–140%) sliders. The editor auto-recenters when you change structure.',
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
              {
                icon: MapPin,
                title: isEs ? 'GPS opcional · tecla E' : 'Optional GPS · E key',
                description: isEs
                  ? 'Si el negocio tiene coords y GPS activado, el jugador presiona E para marcar la ruta. Toggle por anuncio.'
                  : "If the business has coords and GPS enabled, the player presses E to set the route. Per-announcement toggle.",
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
              {
                icon: Layers,
                title: isEs ? 'Multi-framework' : 'Multi-framework',
                description: isEs
                  ? 'qb / qbx / esx / standalone. Bridge auto-detecta en arranque, sin tocar nada. Adapters editables incluso en build encriptada.'
                  : 'qb / qbx / esx / standalone. Bridge auto-detects on boot, no config needed. Adapters stay editable even in the encrypted build.',
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
              {
                icon: Globe,
                title: isEs ? 'i18n EN · ES + plantilla' : 'i18n EN · ES + template',
                description: isEs
                  ? 'Locales separados para Lua (locales/*.lua) y NUI (html/locales/index.js). Plantilla _template para agregar tu idioma sin tocar el core.'
                  : 'Separate locales for Lua (locales/*.lua) and NUI (html/locales/index.js). _template file to add a new language without touching the core.',
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
              {
                icon: ShieldCheck,
                title: isEs ? 'Server-side hardening' : 'Server-side hardening',
                description: isEs
                  ? 'Sanitización de URLs, hex colors, coords, command names y aliases reservados. Cooldown por negocio. OnlyDuty opcional.'
                  : 'URLs, hex colors, coords, command names and reserved aliases all sanitized server-side. Per-business cooldown. Optional OnlyDuty.',
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
              {
                icon: Wrench,
                title: isEs ? 'Sync con CPX PauseMenu' : 'Sync with CPX PauseMenu',
                description: isEs
                  ? 'Si tenés cpx-pausemenu, cada anuncio marca el negocio como abierto automáticamente. Toggle Config.SyncPauseMenu.'
                  : 'If cpx-pausemenu is installed, every announcement marks the business as open automatically. Toggle Config.SyncPauseMenu.',
                colorClass: 'text-pink-300',
                bgClass: 'bg-pink-400/10',
              },
            ]}
          />
        </motion.section>

        {/* INSTALL */}
        <motion.section
          id="announcements-install"
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
              <code className="bg-[#1a1a1a] text-pink-300 px-1.5 py-0.5 rounded text-[13px] font-mono border border-pink-400/20">
                server.cfg
              </code>{' '}
              {isEs ? 'antes de cpx-announcements:' : 'before cpx-announcements:'}
            </p>
            <CodeBlock code={`ensure oxmysql
# framework: qb-core / qbx_core / es_extended (or none for standalone)`} />
            <Callout type="info" title={isEs ? 'Solo oxmysql es obligatorio' : 'Only oxmysql is mandatory'}>
              {isEs
                ? 'El bridge auto-detecta tu framework en arranque (prioridad: qbx > qb > esx > standalone). No hay que tocar config para elegir — solo iniciá tu framework antes que cpx-announcements.'
                : 'The bridge auto-detects your framework at boot (priority: qbx > qb > esx > standalone). No config to pick — just start your framework before cpx-announcements.'}
            </Callout>
          </Step>

          <Step number={2} title={isEs ? 'Suelta el resource' : 'Drop the resource'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Recomendado dentro de [complex] o [negocios]:' : 'Recommended inside [complex] or [negocios]:'}
            </p>
            <CodeBlock
              code={`resources/
└── [complex]/
    └── cpx-announcements/`}
            />
          </Step>

          <Step number={3} title={isEs ? 'Inicia el resource' : 'Start the resource'} isLast>
            <CodeBlock code={`ensure cpx-announcements`} />
            <Callout type="info" title={isEs ? 'Auto-install BD' : 'Auto-install DB'}>
              {isEs
                ? 'En el primer arranque crea la tabla cpx_announcements_businesses con CREATE IF NOT EXISTS y aplica migraciones idempotentes. Para import manual ejecutá database.sql y poné Config.AutoInstallDatabase = false.'
                : 'On first boot it creates the cpx_announcements_businesses table with CREATE IF NOT EXISTS and applies idempotent migrations. For manual import run database.sql and set Config.AutoInstallDatabase = false.'}
            </Callout>
            <p className="mt-4 text-[14.5px] text-zinc-400">
              {isEs
                ? 'Después en cualquier momento abrí /announcementsadmin con un admin y empezá a configurar negocios. Cada empleado de un job configurado dispara su anuncio con /a [mensaje] (o el comando que asignes).'
                : 'After that any admin can open /announcementsadmin to start configuring businesses. Every employee of a configured job fires their announcement with /a [message] (or the command you assign).'}
            </p>
          </Step>
        </motion.section>

        {/* CONFIG */}
        <motion.section
          id="announcements-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings2 className="w-6 h-6 text-pink-300" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración' : 'Configuration'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl mb-6">
            {isEs
              ? 'La mayor parte se edita desde el panel admin in-game. En config.lua quedan los toggles globales y los presets de negocios que ya vienen cargados:'
              : 'Most of it is edited from the in-game admin panel. config.lua holds the global toggles and the business presets shipped by default:'}
          </p>

          <CodeBlock
            code={`Config.Debug              = false
Config.CommandName        = "announcements"       -- fallback shared command
Config.AdminCommand       = "announcementsadmin"  -- opens the editor panel
Config.Locale             = "en"                  -- "en" | "es" | custom
Config.OnlyDuty           = true                  -- block fire when off-duty
Config.Cooldown           = 300                   -- shared per-business cooldown (s)
Config.AlertTime          = 8                     -- on-screen duration (s)
Config.AutoInstallDatabase = true
Config.SyncPauseMenu      = true                  -- relay to cpx-pausemenu if present
Config.AdminGroups        = { "admin", "god" }    -- + ACE cpx.announcements

-- Visual defaults applied to new businesses (admins can override per job)
Config.DefaultPosition    = "mid-right"
Config.DefaultTheme       = "sky"
Config.DefaultStructure   = "card"
Config.DefaultStyle       = "organic"
Config.DefaultDecoration  = "waves"
Config.DefaultEffect      = "shine"
Config.DefaultSound       = "pop"
Config.DefaultSize        = "normal"
Config.DefaultTitleFont   = "poster"
Config.DefaultBodyFont    = "outfit"
Config.DefaultCommandTemplate = "/a [message]"`}
          />

          <p className="text-[14.5px] text-zinc-400 mt-6 mb-3">
            {isEs ? 'Y los presets que ya vienen mapeados a jobs comunes:' : 'And the presets already mapped to common jobs:'}
          </p>
          <CodeBlock
            code={`Config.Jobs = {
    ["bahamas"] = {
        JobLabel  = "Bahamas Mamas",
        ImageName = "bahamas.png",
        Coords    = vector3(-1398.53, -598.17, 29.32),
        Position  = "mid-right",
    },
    ["uwucafe"] = {
        JobLabel  = "UwU Café",
        ImageName = "uwucafe.png",
        Coords    = vector3(-584.65, -1060.42, 21.34),
        Position  = "mid-right",
    },
    -- ~40 más por defecto (restaurantes, bares, talleres, casas, etc.)
}`}
          />

          <Callout type="info" title={isEs ? 'Lo que queda abierto' : 'What stays open'}>
            {isEs ? (
              <>
                Estos archivos quedan editables en la build encriptada para que adaptes el script sin pedirnos nada:
                <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[14.5px]">
                  <li><code>config.lua</code> — toggles globales + presets de jobs</li>
                  <li><code>bridge/**</code> — adapters de framework (forkealos si tu framework es custom)</li>
                  <li><code>locales/*.lua</code> y <code>html/locales/index.js</code> — traducciones Lua y NUI</li>
                  <li><code>html/index.css</code> — theming visual</li>
                  <li><code>INSTALL/**</code> y <code>README.md</code> — guías</li>
                  <li><code>database.sql</code> — schema por si lo querés correr a mano</li>
                </ul>
                <p className="mt-3">El resto (client, server, bundle NUI compilado) está encriptado por escrow.</p>
              </>
            ) : (
              <>
                These files stay editable in the encrypted build so you can adapt the script without asking us:
                <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[14.5px]">
                  <li><code>config.lua</code> — global toggles + job presets</li>
                  <li><code>bridge/**</code> — framework adapters (fork yours if custom)</li>
                  <li><code>locales/*.lua</code> and <code>html/locales/index.js</code> — Lua and NUI translations</li>
                  <li><code>html/index.css</code> — visual theming</li>
                  <li><code>INSTALL/**</code> and <code>README.md</code> — guides</li>
                  <li><code>database.sql</code> — schema if you want to run it manually</li>
                </ul>
                <p className="mt-3">The rest (client, server, compiled NUI bundle) is encrypted by escrow.</p>
              </>
            )}
          </Callout>
        </motion.section>

        {/* COMMANDS */}
        <motion.section
          id="announcements-commands"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-5">
            {isEs ? 'Comandos' : 'Commands'}
          </h2>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed mb-6">
            {isEs
              ? 'Tres entradas: una para abrir el panel admin, una shared genérica y una alias custom por negocio (auto-registrada al guardar).'
              : 'Three entry points: one to open the admin panel, a shared fallback and a custom alias per business (auto-registered on save).'}
          </p>

          <CodeBlock
            code={`/announcementsadmin             -- open the admin editor (admins only)
/announcements [message]        -- shared fallback command for any configured job
/a [message]                    -- example custom alias (editable per business)
                                -- Letters, digits and underscore only.
                                -- Reserved names (quit, kill, restart, say…) are rejected.`}
          />

          <Callout type="info" title={isEs ? 'Alias por negocio' : 'Per-business aliases'}>
            {isEs
              ? 'Cada negocio define su propio comando en el panel admin (campo "Comando" / commandTemplate). Al guardar se registra como alias y los empleados de ese job lo pueden disparar. Si solo escriben /a, sale la plantilla guardada; si pasan texto custom (/a abrimos a las 8), ese reemplaza el mensaje.'
              : "Each business defines its own command in the admin panel (\"Command\" / commandTemplate field). On save it's registered as an alias and employees of that job can fire it. If they only type /a, the saved template fires; if they pass custom text (/a doors open at 8), that overrides the message."}
          </Callout>

          <p className="text-[14.5px] text-zinc-400 mt-6 mb-3">
            {isEs ? 'Exports útiles:' : 'Useful exports:'}
          </p>
          <CodeBlock
            code={`exports['cpx-announcements']:GetJobCooldownRemaining(jobName)  -- seconds left, 0 if ready
exports['cpx-announcements']:ResetJobCooldown(jobName)         -- clear cooldown
exports['cpx-announcements']:GetAnnouncementBusiness(jobName)  -- read the saved record`}
          />
        </motion.section>

        {/* TROUBLESHOOTING */}
        <motion.section
          id="announcements-troubleshoot"
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
              title={isEs ? 'El panel dice "no tenés permiso"' : 'The panel says "no permission"'}
            >
              {isEs
                ? 'Tu grupo no está en Config.AdminGroups (default admin / god) ni tenés la ACE cpx.announcements. Agregalo así: add_ace identifier.fivem:XXXXX cpx.announcements allow — o sumá tu grupo a la lista en config.lua.'
                : "Your group is not in Config.AdminGroups (default admin / god) and you don't have the cpx.announcements ACE. Grant it with: add_ace identifier.fivem:XXXXX cpx.announcements allow — or add your group to Config.AdminGroups in config.lua."}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? 'El comando dice "tu trabajo no está configurado"' : 'The command says "your job is not configured"'}
            >
              {isEs
                ? 'No hay un negocio guardado para ese job. Abrí /announcementsadmin, seleccioná el job en el picker, capturá coords, llená el formulario y guardá. Si tu framework no expone el job en QBCore.Shared.Jobs / ESX.GetJobs, en standalone el panel acepta cualquier nombre.'
                : "No business is saved for that job. Open /announcementsadmin, pick the job, capture coords, fill the form and save. If your framework doesn't expose the job in QBCore.Shared.Jobs / ESX.GetJobs, in standalone mode the panel accepts any job name."}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? 'El anuncio sale pero no aparece GPS' : 'The announcement fires but no GPS shows'}
            >
              {isEs
                ? 'Asegurate de que el negocio tenga coords (botón "Capturar ubicación" en el editor) y que el toggle de GPS esté activo. Si las dos cosas están bien y aún así no marca, revisá que el jugador no tenga otra NUI con focus (chat, inventario) que bloquee el input.'
                : 'Make sure the business has coords ("Capture location" button in the editor) and that the GPS toggle is on. If both are set and it still does not mark, check the player does not have another NUI with focus (chat, inventory) blocking the input.'}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? 'La imagen no carga' : 'The image does not load'}
            >
              {isEs
                ? 'Si pegaste una URL: tiene que ser HTTPS directa (sin redirects, sin anti-hotlink). Si usás un nombre de archivo local: tiene que existir en html/img/ con el mismo nombre. Si no encuentra ninguna fuente, el script cae al placeholder por defecto.'
                : 'If you pasted a URL: it must be direct HTTPS (no redirects, no anti-hotlink). If you used a local filename: it must exist in html/img/ with that exact name. If neither resolves, the script falls back to the default placeholder.'}
            </Callout>

            <Callout
              type="info"
              title={isEs ? 'El comando custom no funciona' : 'The custom command does not work'}
            >
              {isEs
                ? 'Solo letras, dígitos y underscore. Y no podés sobrescribir reservados (quit, kill, restart, say, refresh, businesspm, openpausemenu…). El panel te avisa si el nombre choca al guardar.'
                : 'Only letters, digits and underscore. And you cannot overwrite reserved names (quit, kill, restart, say, refresh, businesspm, openpausemenu…). The panel warns you on save if there is a collision.'}
            </Callout>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="5/17/26"
          prev={{ title: 'CPX Clothing Designer', doc: 'clothesdesigner' }}
          next={{ title: 'Home', doc: 'home' }}
          onSelectDoc={onSelectDoc}
          accentColor="pink"
        />
      </motion.div>
    </div>
  );
}
