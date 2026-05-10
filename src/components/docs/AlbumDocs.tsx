import { motion } from 'motion/react';
import {
  BookOpen,
  Package,
  Sticker,
  Trophy,
  Store,
  Database,
  Layers,
  Sparkles,
  Settings2,
  Globe,
  Users,
  Search,
  Box,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { YouTubeHero } from '../ui/YouTubeHero';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

// Brand accent for cpx-album — gold from the sticker foils.
const ACCENT = '#F3D03E';

export function AlbumDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[13px] font-medium mb-6">
          <BookOpen className="w-4 h-4" />
          <span>v1.0+</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
            CPX Album
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Álbum de figuritas coleccionables estilo Panini. 27 selecciones, 648 stickers únicos, sobres sellados, caja organizadora y tienda con NPC. Progreso persistente por álbum con identidad rastreada en DB que sobrevive a swaps, drops y lending entre jugadores.'
            : 'Panini-style collectable sticker album. 27 nations, 648 unique stickers, sealed packs, storage box and an NPC shop. Persistent per-album progress with DB-tracked identity that survives swaps, drops and player-to-player lending.'}
        </p>

        <YouTubeHero
          videoId="HYl48qGWcvc"
          title="CPX Album"
          accent={ACCENT}
        />

        {/* INTRO */}
        <motion.section
          id="album-intro"
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
              ? 'CPX Album convierte tu servidor en un coleccionable real. Los jugadores compran sobres sellados al NPC vendedor, los abren para recibir 5 figuritas aleatorias (16% chance rara por carta) y las pegan en su álbum desde una NUI 3D con libro flippable, tabla de contenidos navegable, búsqueda de estrellas y animación cinematográfica de paste.'
              : 'CPX Album turns your server into a real collectable. Players buy sealed packs from the NPC merchant, open them to receive 5 random stickers (16% rare chance per card) and paste them into their album through a 3D NUI with a flippable book, navigable table of contents, star search and a cinematic paste animation.'}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'La identidad de cada álbum vive en MySQL (cpx_album_locations), no en la metadata del item — sobrevive a cualquier framework/inventario que pise la metadata. Mover un álbum entre jugadores conserva el progreso (lending). Una caja organizadora de 100 slots filtra para que solo stickers entren. Auto-detecta framework (qb / qbx / esx / standalone) e inventario (ox_inventory / qb / qs / codem / esx / custom).'
              : "Each album's identity lives in MySQL (cpx_album_locations), not item metadata — surviving any framework/inventory that overwrites custom metadata. Moving an album between players keeps progress (lending). A 100-slot storage box filters to sticker-only. Auto-detects framework (qb / qbx / esx / standalone) and inventory (ox_inventory / qb / qs / codem / esx / custom)."}
          </p>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          id="album-features"
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
                icon: Globe,
                title: isEs ? '27 países · 648 stickers' : '27 nations · 648 stickers',
                description: isEs
                  ? 'Roster completo de la Copa del Mundo 2026 con foto real, posición, dorsal y país. Slots variables por selección.'
                  : '2026 World Cup roster with real photo, position, jersey number and country. Variable slot count per nation.',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
              {
                icon: Package,
                title: isEs ? 'Sobres con rare weighted' : 'Packs with weighted rares',
                description: isEs
                  ? '5 stickers aleatorios por sobre. 16% chance rara por carta — apunta a los 3 jugadores estrella de cada país (Messi, Cristiano, Yamal…).'
                  : '5 random stickers per pack. 16% rare chance per card — rolls into each country\'s 3 star players (Messi, Cristiano, Yamal…).',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
              {
                icon: BookOpen,
                title: isEs ? 'NUI 3D · libro flippable' : '3D NUI · flippable book',
                description: isEs
                  ? 'Animación cinematográfica de páginas con cascada, perspectiva real, TOC con clic directo al país y paste con preview del jugador.'
                  : 'Cinematic page-flip cascade animation, real 3D perspective, TOC with direct country click and paste with player preview.',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
              {
                icon: Box,
                title: isEs ? 'Caja organizadora 100 slots' : '100-slot storage box',
                description: isEs
                  ? 'Stash dedicada por caja (metadata.boxId único). Hook anti-stuffing: solo wf_sticker entra. Perfecta para trades. (ox_inventory)'
                  : 'Per-box dedicated stash (unique metadata.boxId). Anti-stuffing hook: only wf_sticker can enter. Ideal for trades. (ox_inventory)',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
              {
                icon: Store,
                title: isEs ? 'NPC shop con carrito' : 'NPC shop with cart',
                description: isEs
                  ? 'Vendedor estático con goodstyle UI: tabs productos / estrellas, carrito acumulativo, búsqueda fuzzy y validación de fondos server-side.'
                  : 'Static merchant with goodstyle UI: products / stars tabs, accumulating cart, fuzzy search and server-side funds validation.',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
              {
                icon: Users,
                title: isEs ? 'Lending entre jugadores' : 'Player-to-player lending',
                description: isEs
                  ? 'Movés tu álbum a otro jugador y ve TU progreso. Hook swapItems retagea la location en cada movimiento. (ox_inventory)'
                  : 'Hand your album to another player and they see YOUR progress. swapItems hook retags the location on every move. (ox_inventory)',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
              {
                icon: Database,
                title: isEs ? 'Identidad DB-tracked' : 'DB-tracked identity',
                description: isEs
                  ? 'cpx_album_locations mapea (inv_id, slot) → album_id. Sobrevive a cualquier framework/inventario que pise la metadata del item.'
                  : 'cpx_album_locations maps (inv_id, slot) → album_id. Survives any framework/inventory that overwrites the item\'s metadata.',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
              {
                icon: Search,
                title: isEs ? 'Búsqueda de estrellas' : 'Star search',
                description: isEs
                  ? 'En el shop: fuzzy search con normalización de acentos sobre el manifest completo (Messi, Cristiano, Yamal, Mbappé…) con foto y país.'
                  : 'In the shop: fuzzy search with accent normalization across the full manifest (Messi, Cristiano, Yamal, Mbappé…) with photo and nation.',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
              {
                icon: Trophy,
                title: isEs ? 'Pegar todo' : 'Paste all',
                description: isEs
                  ? 'Un click pega cada sticker pegable de tu inventario y cajas en una sola pasada. Skip de duplicados, batch insert a DB.'
                  : 'One click pastes every pasteable sticker from your inventory and boxes in a single sweep. Skips duplicates, batches the DB insert.',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
              {
                icon: Layers,
                title: isEs ? 'Multi-framework' : 'Multi-framework',
                description: isEs
                  ? 'qb / qbx / esx / standalone. Bridge auto-detecta en arranque. Adapters editables incluso en la build encriptada.'
                  : 'qb / qbx / esx / standalone. Bridge auto-detects on boot. Adapters stay editable even in the encrypted build.',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
              {
                icon: Sparkles,
                title: isEs ? 'Multi-inventory' : 'Multi-inventory',
                description: isEs
                  ? 'ox_inventory (full features), qb / qs / codem / esx (downgraded fallback). Plantilla custom.lua para tu propio inventario.'
                  : 'ox_inventory (full features), qb / qs / codem / esx (downgraded fallback). custom.lua template for your own inventory.',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
              {
                icon: Settings2,
                title: isEs ? 'Recovery in-console' : 'In-console recovery',
                description: isEs
                  ? 'Comandos cpxAlbumOrphans y cpxAlbumRelink para recuperar álbumes con progreso huérfano. Cero pérdida si algo sale mal.'
                  : 'cpxAlbumOrphans and cpxAlbumRelink commands to rescue albums with orphan progress. Zero loss if anything goes wrong.',
                colorClass: 'text-amber-300',
                bgClass: 'bg-amber-400/10',
              },
            ]}
          />
        </motion.section>

        {/* INSTALL */}
        <motion.section
          id="album-install"
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
              <code className="bg-[#1a1a1a] text-amber-300 px-1.5 py-0.5 rounded text-[13px] font-mono border border-amber-400/20">
                server.cfg
              </code>{' '}
              {isEs ? 'antes de cpx-album:' : 'before cpx-album:'}
            </p>
            <CodeBlock code={`ensure oxmysql\n# inventory: ox_inventory (recommended) / qb-inventory / qs-inventory / codem-inventory\n# framework: qb-core / qbx_core / es_extended (or none for standalone)`} />
            <Callout type="info" title={isEs ? 'ox_inventory recomendado' : 'ox_inventory recommended'}>
              {isEs
                ? 'ox_inventory desbloquea las features completas (caja-stash, lending entre jugadores, tooltips ricos). Otros inventarios funcionan con downgrade — el álbum y los sobres siguen siendo usables.'
                : 'ox_inventory unlocks the full feature set (box stash, player-to-player lending, rich tooltips). Other inventories work in a downgraded mode — album and packs still usable.'}
            </Callout>
          </Step>

          <Step number={2} title={isEs ? 'Registra los 4 items' : 'Register the 4 items'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'Pegá las definiciones del archivo correspondiente de INSTALL/items/ en la data de tu inventario:'
                : 'Paste the matching INSTALL/items/ snippet into your inventory data:'}
            </p>
            <CodeBlock
              code={`INSTALL/items/ox_inventory.lua      -- ox_inventory/data/items.lua
INSTALL/items/qb-inventory.lua      -- qb-inventory/shared/items.lua
INSTALL/items/qs-inventory.lua      -- qs-inventory/shared/items.lua
INSTALL/items/codem-inventory.lua   -- codem-inventory/Config/Items.lua
INSTALL/items/esx.sql               -- SQL INSERT for ESX legacy items table`}
            />
            <p className="mt-4 text-[14.5px] text-zinc-400">
              {isEs ? (
                <>Los 4 items son <code className="text-amber-300">wf_album</code>, <code className="text-amber-300">wf_pack</code>, <code className="text-amber-300">wf_sticker</code> y <code className="text-amber-300">wf_box</code>. Si los renombrás, sincronizá <code className="text-amber-300">Config.items</code> en config.lua.</>
              ) : (
                <>The 4 items are <code className="text-amber-300">wf_album</code>, <code className="text-amber-300">wf_pack</code>, <code className="text-amber-300">wf_sticker</code> and <code className="text-amber-300">wf_box</code>. Rename them in <code className="text-amber-300">Config.items</code> (config.lua) if you have a collision.</>
              )}
            </p>
          </Step>

          <Step number={3} title={isEs ? 'Suelta el resource' : 'Drop the resource'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Recomendado dentro de [complex] o [negocios]:' : 'Recommended inside [complex] or [negocios]:'}
            </p>
            <CodeBlock
              code={`resources/
└── [complex]/
    └── cpx-album/`}
            />
          </Step>

          <Step number={4} title={isEs ? 'Inicia el resource' : 'Start the resource'} isLast>
            <CodeBlock code={`ensure cpx-album`} />
            <Callout type="info" title={isEs ? 'Auto-install BD' : 'Auto-install DB'}>
              {isEs
                ? 'En el primer arranque crea 2 tablas (cpx_album_progress y cpx_album_locations) con CREATE IF NOT EXISTS. Idempotente — podés dejar Config.autoInstallSQL = true para siempre. Para import manual, ejecutá INSTALL/album.sql y poné el flag en false.'
                : 'On first boot it creates 2 tables (cpx_album_progress and cpx_album_locations) using CREATE IF NOT EXISTS. Idempotent — leave Config.autoInstallSQL = true forever. For manual import, run INSTALL/album.sql and set the flag to false.'}
            </Callout>
            <p className="mt-4 text-[14.5px] text-zinc-400">
              {isEs
                ? 'Verificá en consola la línea [cpx-album] ready (framework=X, inventory=Y) con el combo detectado.'
                : 'Verify in console the line [cpx-album] ready (framework=X, inventory=Y) with the detected combo.'}
            </p>
          </Step>
        </motion.section>

        {/* CONFIG */}
        <motion.section
          id="album-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings2 className="w-6 h-6 text-amber-300" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración' : 'Configuration'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl mb-6">
            {isEs
              ? 'Todo lo editable vive en config.lua. Estos son los valores que más se tocan:'
              : 'Everything editable lives in config.lua. These are the values you\'ll touch most:'}
          </p>

          <CodeBlock
            code={`Config.framework  = 'auto'      -- 'auto' | 'qb' | 'qbx' | 'esx' | 'standalone'
Config.inventory  = 'auto'      -- 'auto' | 'ox_inventory' | 'qb-inventory'
                                -- 'qs-inventory' | 'codem-inventory' | 'esx' | 'custom'
Config.locale     = 'en'        -- 'en' | 'es' (NUI + tooltips)
Config.debug      = false       -- true to emit per-operation logs

-- Inventory item names (rename if collision)
Config.items = {
    album   = 'wf_album',
    pack    = 'wf_pack',
    sticker = 'wf_sticker',
    box     = 'wf_box',
}

-- Pack drop
Config.cardsPerPack = 5         -- stickers per pack
Config.rareChance   = 0.16      -- per-card chance to roll the country's rare slot

-- Sticker box (ox_inventory only)
Config.box = { slots = 100, maxWeight = 50000 }   -- grams (50 kg)

-- NPC shop
Config.shop = {
    enabled    = true,
    coords     = vector4(792.281, -266.049, 66.114, 17.41),
    pedModel   = 'a_m_y_beach_01',
    prices     = {
        [Config.items.pack]  = 500,
        [Config.items.album] = 2000,
        [Config.items.box]   = 5000,
    },
    moneyType  = 'cash',        -- 'cash' | 'bank' (QB/QBX); ESX legacy = cash only
    maxPerItem = 50,            -- per-line cap for a single checkout
}`}
          />

          <Callout type="info" title={isEs ? 'Lo que queda abierto' : 'What stays open'}>
            {isEs ? (
              <>
                Estos archivos quedan editables en la build encriptada para que adaptes el script sin pedirnos nada:
                <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[14.5px]">
                  <li><code>config.lua</code> — todos los toggles de usuario</li>
                  <li><code>bridge/bridge_config.lua</code> — selector de framework e inventario</li>
                  <li><code>bridge/server/**</code> y <code>bridge/inventory/**</code> — adapters ligeros (forkealos si tu framework o inventario es custom)</li>
                  <li><code>INSTALL/**</code> — guías + snippets de items por inventario + album.sql</li>
                  <li><code>README.md</code> — overview</li>
                </ul>
                <p className="mt-3">El resto (NUI, server logic, server/shop) está encriptado por escrow.</p>
              </>
            ) : (
              <>
                These files stay editable in the encrypted build so you can adapt the script without asking us:
                <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[14.5px]">
                  <li><code>config.lua</code> — every user toggle</li>
                  <li><code>bridge/bridge_config.lua</code> — framework + inventory selector</li>
                  <li><code>bridge/server/**</code> and <code>bridge/inventory/**</code> — light adapters (fork yours if custom)</li>
                  <li><code>INSTALL/**</code> — guides + per-inventory item snippets + album.sql</li>
                  <li><code>README.md</code> — overview</li>
                </ul>
                <p className="mt-3">The rest (NUI, server logic, shop) is encrypted by escrow.</p>
              </>
            )}
          </Callout>
        </motion.section>

        {/* INVENTORY MATRIX */}
        <motion.section
          id="album-matrix"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-5">
            {isEs ? 'Soporte por inventario' : 'Inventory support'}
          </h2>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed mb-6">
            {isEs
              ? 'El álbum funciona en cualquier inventario soportado, pero algunas features dependen específicamente de ox_inventory.'
              : 'The album runs on every supported inventory, but a few features depend specifically on ox_inventory.'}
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left px-4 py-3 font-bold text-white">
                    {isEs ? 'Feature' : 'Feature'}
                  </th>
                  <th className="text-center px-4 py-3 font-bold text-amber-300">ox_inventory</th>
                  <th className="text-center px-4 py-3 font-bold text-zinc-400">qb · qs · codem</th>
                  <th className="text-center px-4 py-3 font-bold text-zinc-400">ESX legacy</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3">{isEs ? 'Album abre · paste · persiste' : 'Album opens · pastes · persists'}</td>
                  <td className="text-center px-4 py-3 text-amber-300">✓</td>
                  <td className="text-center px-4 py-3 text-emerald-400">✓</td>
                  <td className="text-center px-4 py-3 text-emerald-400">✓</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3">{isEs ? 'Caja de stickers (sub-stash)' : 'Sticker box (sub-stash)'}</td>
                  <td className="text-center px-4 py-3 text-amber-300">✓</td>
                  <td className="text-center px-4 py-3 text-zinc-600">—</td>
                  <td className="text-center px-4 py-3 text-zinc-600">—</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-4 py-3">{isEs ? 'Lending entre jugadores' : 'Player-to-player lending'}</td>
                  <td className="text-center px-4 py-3 text-amber-300">✓</td>
                  <td className="text-center px-4 py-3 text-zinc-600">—</td>
                  <td className="text-center px-4 py-3 text-zinc-600">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">{isEs ? 'Tooltips ricos por sticker' : 'Per-sticker rich tooltip'}</td>
                  <td className="text-center px-4 py-3 text-amber-300">✓</td>
                  <td className="text-center px-4 py-3 text-amber-400/70">~</td>
                  <td className="text-center px-4 py-3 text-zinc-600">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Callout type="info" title={isEs ? 'Custom backend' : 'Custom backend'}>
            {isEs
              ? 'Si tu inventario no está en la lista, abrí bridge/inventory/custom.lua. Es una plantilla con todos los métodos requeridos y signaturas. Forkeá, conectá los exports de tu inventario y poné Config.inventory = "custom".'
              : "If your inventory isn't in the list, open bridge/inventory/custom.lua. It's a template with every required method and signature. Fork it, wire your inventory's exports and set Config.inventory = \"custom\"."}
          </Callout>
        </motion.section>

        {/* COMMANDS */}
        <motion.section
          id="album-commands"
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
              ? 'Comandos de admin para entregar items y para recuperar álbumes con progreso huérfano.'
              : 'Admin commands to grant items and to rescue albums with orphan progress.'}
          </p>

          <CodeBlock
            code={`/giveAlbum  [targetId]         -- grant a wf_album (identity created on first use)
/givePack   [count] [targetId] -- grant N wf_pack
/giveBox    [targetId]         -- grant a wf_box

/cpxAlbums       [targetId]    -- list every wf_album the target holds + DB state
/cpxStickerInfo  [targetId]    -- list every wf_sticker persisted metadata
/cpxShopInfo                   -- print current shop prices and money type

-- Recovery
/cpxAlbumOrphans <citizenid>             -- list every album of an owner, flag orphans
/cpxAlbumRelink  <albumId> <invId> <slot> -- bind an orphan album to a physical slot`}
          />

          <Callout type="info" title={isEs ? 'Recuperación de álbum huérfano' : 'Rescuing an orphan album'}>
            {isEs
              ? 'Si por cualquier motivo (crash mid-swap, MySQL timeout, migración) un álbum queda con progreso pero sin location, /cpxAlbumOrphans lo detecta. Anotá el albumId con más progreso, identificá el slot físico con /cpxAlbums y vinculá con /cpxAlbumRelink. El jugador re-abre el álbum y ve sus figuritas de vuelta.'
              : 'If for any reason (crash mid-swap, MySQL timeout, migration) an album ends up with progress but no location, /cpxAlbumOrphans flags it. Pick the albumId with the most progress, find the physical slot with /cpxAlbums and bind them via /cpxAlbumRelink. The player reopens the album and their stickers come back.'}
          </Callout>
        </motion.section>

        {/* TROUBLESHOOTING */}
        <motion.section
          id="album-troubleshoot"
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
              title={isEs ? 'Items aparecen como wf_album en vez del label' : 'Items show as wf_album instead of the label'}
            >
              {isEs
                ? 'El snippet de items no se importó o los nombres no matchean Config.items. Revisá INSTALL/items/<tu-inventario>.lua y reiniciá el inventory resource después de pegarlo.'
                : "The items snippet wasn't imported or the names don't match Config.items. Check INSTALL/items/<your-inventory>.lua and restart the inventory resource after pasting it."}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? 'Usar el álbum no hace nada' : "Using the album does nothing"}
            >
              {isEs
                ? 'En ox_inventory: confirmá que el item entry tenga server = { export = "cpx-album.useAlbum" }. En qb / qbx / esx: el resource registra CreateUseableItem internamente; solo asegurate de que el nombre del item match Config.items.album.'
                : 'On ox_inventory: confirm the item entry has server = { export = "cpx-album.useAlbum" }. On qb / qbx / esx: the resource registers CreateUseableItem internally; just make sure the item name matches Config.items.album.'}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? 'Tras un swap el receptor abre el álbum y ve 0/648' : 'After a swap the receiver opens the album and sees 0/648'}
            >
              {isEs
                ? 'Lending solo preserva progreso en ox_inventory (usa el hook swapItems para retageaR la location). En qb / qs / codem / ESX, mover el álbum a otro jugador crea identidad nueva para el receptor. Poné Config.inventory = "ox_inventory" si querés lending.'
                : 'Lending only preserves progress on ox_inventory (uses the swapItems hook to retag the location). On qb / qs / codem / ESX, moving the album to another player creates fresh identity for the receiver. Set Config.inventory = "ox_inventory" if you want lending.'}
            </Callout>

            <Callout
              type="warning"
              title={isEs ? 'Los stickers no se pegan en qb / qs / codem' : "Stickers don't paste on qb / qs / codem"}
            >
              {isEs
                ? 'Esos backends no exponen metadata per-instancia al nivel que necesita el script. El paste de stickers funciona completo solo en ox_inventory. El álbum abre y el shop vende items, pero la mecánica de paste necesita ox.'
                : 'Those backends do not expose per-instance metadata at the level this script needs. Sticker pasting works fully only on ox_inventory. The album opens and the shop sells items, but the paste mechanic needs ox.'}
            </Callout>

            <Callout
              type="info"
              title={isEs ? '[cpx-album:shop] WARN AddItem failed' : '[cpx-album:shop] WARN AddItem failed'}
            >
              {isEs
                ? 'El inventario del jugador estaba lleno cuando el shop intentó entregar. El dinero YA se cobró. Reembolsá manualmente con tus herramientas de admin y avisale que libere espacio. Para prevenir: mantené Config.shop.maxPerItem bajo (default 50).'
                : "The player's inventory was full when the shop tried to deliver. The money was already taken. Refund manually via your admin tools and tell them to free space. To prevent: keep Config.shop.maxPerItem low (default 50)."}
            </Callout>

            <Callout
              type="info"
              title={isEs ? 'Boot dice "swap sentinels purged"' : 'Boot says "swap sentinels purged"'}
            >
              {isEs
                ? 'Cosmético: un swap previo se interrumpió a la mitad y limpiamos el half-state. Los album_id en cpx_album_progress siguen existiendo; la próxima vez que el item se use regeneran location. Para recuperar progreso original, usá /cpxAlbumOrphans y /cpxAlbumRelink.'
                : 'Cosmetic: a previous swap was interrupted mid-flight and we cleared the half-state. The album_ids in cpx_album_progress still exist; the next time the affected item is used it regenerates a location. To recover the original progress, use /cpxAlbumOrphans and /cpxAlbumRelink.'}
            </Callout>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="5/10/26"
          prev={{ title: 'CPX PauseMenu', doc: 'pausemenu' }}
          next={{ title: 'Home', doc: 'home' }}
          onSelectDoc={onSelectDoc}
          accentColor="amber"
        />
      </motion.div>
    </div>
  );
}
