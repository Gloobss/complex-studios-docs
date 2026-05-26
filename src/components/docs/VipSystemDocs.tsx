import { motion } from 'motion/react';
import {
  Package,
  Crown,
  Sparkles,
  Coins,
  ShieldCheck,
  Gift,
  Database,
  Settings2,
  Store,
  Car,
  KeyRound,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { YouTubeHero } from '../ui/YouTubeHero';
import { ConfigGenerator } from '../ui/ConfigGenerator';
import { vipsystemConfigSchema } from '../../lib/configs/vipsystem-config';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

const ACCENT = '#FF4D1C';

export function VipSystemDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D1C]/10 border border-[#FF4D1C]/20 text-[#FF4D1C] text-[13px] font-medium mb-6">
          <Package className="w-4 h-4" />
          <span>v1.0.0</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D1C] to-[#ff8a4c]">
            CPX VIP System
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Tienda premium in-game para FiveM — QBCore, Qbox y ESX (auto-detectado). Los jugadores gastan una sola moneda (coins) en bundles, vehículos, casas, mascotas e items, abren cajas misteriosas con ruleta giratoria y recargan coins desde tu tienda Tebex con entrega automática.'
            : 'In-game premium store for FiveM — QBCore, Qbox & ESX (auto-detected). Players spend a single currency (coins) on bundles, vehicles, houses, pets and items, open spinning-roulette mystery cases, and top up coins through your Tebex store with automatic in-game delivery.'}
        </p>

        <YouTubeHero
          videoId="lCclJEfBllM"
          title="CPX VIP System"
          accent={ACCENT}
        />

        {/* ── INTRODUCTION ─────────────────── */}
        <motion.section
          id="vipsystem-intro"
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
              ? 'CPX VIP System es una tienda premium in-game para FiveM — QBCore, Qbox y ESX, con auto-detección del framework. Los jugadores gastan una sola moneda (coins) en bundles, vehículos, casas, mascotas e items, abren cajas misteriosas con ruleta giratoria y recargan coins a través de tu tienda Tebex con entrega automática in-game.'
              : 'CPX VIP System is an in-game premium store for FiveM — QBCore, Qbox & ESX, with framework auto-detection. Players spend a single currency (coins) on bundles, vehicles, houses, pets and items, open spinning-roulette mystery cases, and top up coins through your Tebex store with automatic in-game delivery.'}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'Incluye un panel admin in-game para editar items, cajas, ofertas y paquetes de coins en vivo, además de un sistema de retención (login diario, logros, leaderboard, perfil) y códigos canjeables. Soltá el recurso, configurá tu secret de Tebex y listo.'
              : 'It ships an in-game admin panel to edit items, cases, deals and coin packages live, plus a retention layer (daily login, achievements, leaderboard, profile) and redeemable codes. Drop the resource, set your Tebex secret and go.'}
          </p>
        </motion.section>

        {/* ── FEATURES ─────────────────────── */}
        <motion.section
          id="vipsystem-features"
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
                icon: Store,
                title: isEs ? 'Tienda VIP' : 'VIP store',
                description: isEs
                  ? '5 tiers de vehículos, bundles, casas, mascotas e items, todo con una sola moneda (coins).'
                  : '5 vehicle tiers, bundles, houses, pets and items — all on a single currency (coins).',
                colorClass: 'text-[#FF4D1C]',
                bgClass: 'bg-[#FF4D1C]/10',
              },
              {
                icon: Sparkles,
                title: isEs ? 'Cajas misteriosas' : 'Mystery cases',
                description: isEs
                  ? 'Ruleta giratoria animada, tiers de rareza y opción de vender o quedarte el premio.'
                  : 'Animated roulette spin, rarity tiers and a sell-or-keep choice on every win.',
                colorClass: 'text-[#FF4D1C]',
                bgClass: 'bg-[#FF4D1C]/10',
              },
              {
                icon: Coins,
                title: isEs ? 'Recargas con Tebex' : 'Tebex coin top-ups',
                description: isEs
                  ? 'El jugador compra coins en tu tienda Tebex y se entregan automáticamente in-game.'
                  : 'Players buy coins on your Tebex store and they are delivered automatically in-game.',
                colorClass: 'text-[#FF4D1C]',
                bgClass: 'bg-[#FF4D1C]/10',
              },
              {
                icon: Settings2,
                title: isEs ? 'Panel admin in-game' : 'In-game admin panel',
                description: isEs
                  ? 'Editá items, cajas, ofertas y paquetes de coins en vivo, sin tocar archivos.'
                  : 'Edit items, cases, deals and coin packages live, no file edits required.',
                colorClass: 'text-[#FF4D1C]',
                bgClass: 'bg-[#FF4D1C]/10',
              },
              {
                icon: Crown,
                title: isEs ? 'Retención' : 'Retention',
                description: isEs
                  ? 'Login diario con racha + caja gratis, logros, leaderboard y perfil con historial de compras.'
                  : 'Daily login streak + free case, achievements, leaderboard and a profile with purchase history.',
                colorClass: 'text-[#FF4D1C]',
                bgClass: 'bg-[#FF4D1C]/10',
              },
              {
                icon: Gift,
                title: isEs ? 'Códigos canjeables' : 'Redeemable codes',
                description: isEs
                  ? 'Generá códigos que entregan coins o items, ideales para giveaways y eventos.'
                  : 'Generate codes that grant coins or items, perfect for giveaways and events.',
                colorClass: 'text-[#FF4D1C]',
                bgClass: 'bg-[#FF4D1C]/10',
              },
              {
                icon: Car,
                title: isEs ? 'Test-drive + matrículas' : 'Test-drive + custom plates',
                description: isEs
                  ? 'Prueba de manejo temporizada antes de comprar y matrículas personalizadas por vehículo.'
                  : 'Timed vehicle test-drive before buying and custom plates per vehicle.',
                colorClass: 'text-[#FF4D1C]',
                bgClass: 'bg-[#FF4D1C]/10',
              },
              {
                icon: Database,
                title: isEs ? 'BD auto-instalable' : 'Auto-install database',
                description: isEs
                  ? '11 tablas creadas con CREATE TABLE IF NOT EXISTS. Idempotente. Cero pasos manuales.'
                  : '11 tables created with CREATE TABLE IF NOT EXISTS. Idempotent. Zero manual steps.',
                colorClass: 'text-[#FF4D1C]',
                bgClass: 'bg-[#FF4D1C]/10',
              },
            ]}
          />
        </motion.section>

        {/* ── INSTALLATION ─────────────────── */}
        <motion.section
          id="vipsystem-install"
          className="mb-24 scroll-mt-[10vh] relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-8">
            {isEs ? 'Instalación en 3 pasos' : 'Installation in 3 steps'}
          </h2>

          <Step number={1} title={isEs ? 'Pre-requisitos' : 'Pre-requirements'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Asegurate que tu' : 'Make sure your'}{' '}
              <code className="bg-[#1a1a1a] text-[#FF4D1C] px-1.5 py-0.5 rounded text-[13px] font-mono border border-[#FF4D1C]/20">
                server.cfg
              </code>{' '}
              {isEs ? 'tenga (antes de cpx-vipsystem):' : 'has (before cpx-vipsystem):'}
            </p>
            <CodeBlock code={`ensure oxmysql`} />
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'Tu framework (QBCore, Qbox o ESX — auto-detectado) y tu inventario también deben iniciar antes de cpx-vipsystem.'
                : 'Your framework (QBCore, Qbox or ESX — auto-detected) and your inventory must also start before cpx-vipsystem.'}
            </p>
          </Step>

          <Step number={2} title={isEs ? 'Soltá el resource' : 'Drop the resource'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'Extraé el paquete en tu carpeta resources, preferentemente dentro de [standalone].'
                : 'Extract the package in your resources folder, preferably inside a [standalone] bracket.'}
            </p>
            <CodeBlock
              code={`resources/
└── [standalone]/
    └── cpx-vipsystem/`}
            />
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'El nombre de la carpeta debe ser exactamente cpx-vipsystem, si no la página NUI no resuelve.'
                : "The folder name must be exactly cpx-vipsystem or the NUI page won't resolve."}
            </p>
          </Step>

          <Step number={3} title={isEs ? 'Iniciá el servidor' : 'Start the server'} isLast>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Añadí a tu' : 'Add to your'}{' '}
              <code className="bg-[#1a1a1a] text-[#FF4D1C] px-1.5 py-0.5 rounded text-[13px] font-mono border border-white/5">
                server.cfg
              </code>
              :
            </p>
            <CodeBlock code={`ensure cpx-vipsystem`} />
            <p className="mt-4 text-[15px] text-zinc-300">
              {isEs
                ? 'En el primer arranque se crean 11 tablas SQL automáticamente (idempotente). Si ves esa línea en consola, está todo bien.'
                : 'On first boot 11 SQL tables are created automatically (idempotent). If you see that line in the console, you are good to go.'}
            </p>
            <p className="mt-3 text-[14px] text-zinc-400">
              {isEs
                ? 'Comandos disponibles: /vipshop (tienda) y /cajasvip (cajas). Ambos son renombrables en config/settings.lua.'
                : 'Available commands: /vipshop (store) and /cajasvip (cases). Both are renameable in config/settings.lua.'}
            </p>
          </Step>
        </motion.section>

        {/* ── TEBEX SETUP ──────────────────── */}
        <motion.section
          id="vipsystem-tebex"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Coins className="w-6 h-6 text-[#FF4D1C]" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración de Tebex' : 'Tebex setup'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl mb-6">
            {isEs
              ? 'El botón "Comprar coins" de la tienda abre el enlace de tu paquete en Tebex. Al pagar, Tebex ejecuta el comando de consola '
              : 'The store "Buy coins" button opens your Tebex package link. On payment, Tebex runs the console command '}
            <code className="text-[#FF4D1C] bg-[#FF4D1C]/10 border border-[#FF4D1C]/20 px-2 py-0.5 rounded-md font-mono text-[13px]">
              cpx_vipsystem_purchase
            </code>{' '}
            {isEs ? 'que acredita los coins in-game.' : 'which credits the coins in-game.'}
          </p>

          <Step number={1} title={isEs ? 'Pegá tu secret de Tebex' : 'Set your Tebex secret'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'En Tebex: Creator → Game Servers → FiveM → secret key. Copiala a tu '
                : 'In Tebex: Creator → Game Servers → FiveM → secret key. Paste it into your '}
              <code className="text-white">server.cfg</code>
              {isEs ? ' y reiniciá el servidor completo:' : ' and do a full server restart:'}
            </p>
            <CodeBlock code={`sv_tebexSecret KEY`} />
            <Callout type="warning" title={isEs ? 'Reinicio completo' : 'Full restart'}>
              {isEs
                ? 'sv_tebexSecret se lee al arrancar el servidor. Un restart del recurso no alcanza — reiniciá el servidor entero.'
                : 'sv_tebexSecret is read at server boot. Restarting only the resource is not enough — restart the whole server.'}
            </Callout>
          </Step>

          <Step number={2} title={isEs ? 'Creá un paquete por tier de coins' : 'Create a package per coin tier'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'En tu tienda Tebex creá un paquete por cada cantidad de coins que quieras vender (5, 10, 20, 40, 50, 60…). Los tiers por defecto están en '
                : 'In your Tebex store create one package for each coin amount you want to sell (5, 10, 20, 40, 50, 60…). The default tiers live in '}
              <code className="text-white">config/mainMenu/buyCoin.lua</code>.
            </p>
          </Step>

          <Step number={3} title={isEs ? 'Configurá el comando del paquete' : 'Set the package command'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'En cada paquete de Tebex definí el comando a ejecutar. Tenés dos modos:'
                : 'On each Tebex package set the command to run. You have two modes:'}
            </p>
            <p className="mb-2 text-[15px] text-zinc-300 font-semibold">
              {isEs ? 'Modo directo' : 'Direct mode'}
            </p>
            <p className="mb-3 text-[14px]">
              {isEs
                ? 'Pedí el citizenid en el checkout y entregá al instante:'
                : 'Ask for the citizenid at checkout and deliver instantly:'}
            </p>
            <CodeBlock code={`cpx_vipsystem_purchase {citizenid} 20`} />
            <p className="mt-5 mb-2 text-[15px] text-zinc-300 font-semibold">
              {isEs ? 'Modo código' : 'Code mode'}
            </p>
            <p className="mb-3 text-[14px]">
              {isEs
                ? 'Generá un código que el jugador canjea in-game (sin pedir citizenid):'
                : 'Generate a code the player redeems in-game (no citizenid asked):'}
            </p>
            <CodeBlock code={`cpx_vipsystem_purchase code {transaction} 20 1`} />
          </Step>

          <Step number={4} title={isEs ? 'Pegá las URLs de los paquetes' : 'Paste the package URLs'} isLast>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'Copiá la URL de cada paquete de Tebex y pegala en el campo '
                : 'Copy each Tebex package URL and paste it into the '}
              <code className="text-[#FF4D1C] bg-[#FF4D1C]/10 border border-[#FF4D1C]/20 px-2 py-0.5 rounded-md font-mono text-[13px]">
                link
              </code>{' '}
              {isEs ? 'correspondiente en ' : 'field of the matching entry in '}
              <code className="text-white">config/mainMenu/buyCoin.lua</code>.
            </p>
            <Callout type="warning" title={isEs ? 'Términos de servicio (ToS)' : 'Terms of Service (ToS)'}>
              {isEs
                ? 'Los coins y las cajas deben canjearse por items cosméticos o de conveniencia, nunca pay-to-win. Respetá los ToS de FiveM y Tebex.'
                : 'Coins and cases must redeem for cosmetic or convenience items, never pay-to-win. Respect the FiveM and Tebex ToS.'}
            </Callout>
          </Step>
        </motion.section>

        {/* ── CONFIGURATION ────────────────── */}
        <motion.section
          id="vipsystem-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings2 className="w-6 h-6 text-[#FF4D1C]" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración interactiva' : 'Interactive configuration'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl">
            {isEs
              ? 'Ajustá los valores con los controles de abajo, copiá el resultado y reemplazá los archivos '
              : 'Tweak the values with the controls below, copy the result and replace '}
            <code className="text-white">config/settings.lua</code>{' '}
            {isEs ? 'y ' : 'and '}
            <code className="text-white">config/server_config.lua</code>.{' '}
            {isEs
              ? 'El catálogo de items, cajas, ofertas y paquetes de coins se edita en sus propios archivos. La salida está garantizada como Lua válido.'
              : 'The item catalog, cases, deals and coin packages are edited in their own files. Output is guaranteed valid Lua.'}
          </p>

          <ConfigGenerator schemas={[vipsystemConfigSchema]} accent={ACCENT} />
        </motion.section>

        {/* ── TROUBLESHOOTING ──────────────── */}
        <motion.section
          id="vipsystem-troubleshoot"
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
            <div className="group border border-[#f59e0b]/20 bg-[#f59e0b]/[0.02] rounded-2xl p-6 hover:border-[#f59e0b]/30 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Coins className="w-5 h-5 text-amber-500" />
                {isEs ? 'Los coins no llegan tras la compra' : "Coins don't arrive after purchase"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>{isEs ? 'Verificá que' : 'Check that'} <code className="text-amber-400">sv_tebexSecret</code> {isEs ? 'esté en server.cfg y que hiciste un reinicio COMPLETO del servidor.' : 'is in server.cfg and that you did a FULL server restart.'}</li>
                <li>{isEs ? 'Confirmá que el comando del paquete sea exactamente' : 'Confirm the package command is exactly'} <code className="text-amber-400">cpx_vipsystem_purchase ...</code> {isEs ? 'con los argumentos correctos.' : 'with the right arguments.'}</li>
                <li>{isEs ? 'En modo directo el citizenid debe coincidir con el del jugador.' : 'In direct mode the citizenid must match the player.'}</li>
              </ul>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Store className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'El comando no hace nada' : 'The command does nothing'}
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>{isEs ? 'Revisá el orden de arranque: oxmysql y tu framework antes de cpx-vipsystem.' : 'Check boot order: oxmysql and your framework before cpx-vipsystem.'}</li>
                <li>{isEs ? 'Confirmá los nombres de comando en' : 'Confirm the command names in'} <code className="text-white">config/settings.lua</code> (<code className="text-white">CPX.OpenCommand</code>, <code className="text-white">CPX.CasesCommand</code>).</li>
              </ol>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'La base de datos no migra' : "Database doesn't migrate"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>{isEs ? 'Verificá que' : 'Make sure'} <code className="text-white">oxmysql</code> {isEs ? 'inicie ANTES que cpx-vipsystem.' : 'starts BEFORE cpx-vipsystem.'}</li>
                <li>{isEs ? 'Confirmá que las credenciales de oxmysql sean válidas.' : 'Verify your oxmysql credentials are valid.'}</li>
              </ul>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'El item comprado no se entrega' : "Purchased item not delivered"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>{isEs ? 'Revisá la compatibilidad con tu inventario. Se recomienda' : 'Check your inventory compatibility. We recommend'} <code className="text-white">ox_inventory</code>.</li>
                <li>{isEs ? 'Para armas como item, confirmá' : 'For weapons as items, confirm'} <code className="text-white">CPX.WeaponsAreItem = true</code>.</li>
              </ul>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'La tienda aparece en blanco' : 'Storefront is blank'}
              </h3>
              <p className="text-[15px] text-zinc-400">
                {isEs
                  ? 'Limpiá la caché de NUI (borrá la carpeta cache de FiveM o usá un hard refresh) y reiniciá el recurso.'
                  : 'Clear the NUI cache (delete the FiveM cache folder or do a hard refresh) and restart the resource.'}
              </p>
            </div>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="20/5/26"
          prev={{ title: 'CPX Gangs', doc: 'gangs' }}
          next={{ title: 'Home', doc: 'home' }}
          onSelectDoc={onSelectDoc}
          accentColor="pink"
        />
      </motion.div>
    </div>
  );
}
