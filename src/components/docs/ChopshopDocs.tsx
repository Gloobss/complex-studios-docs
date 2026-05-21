import { motion } from 'motion/react';
import {
  Package,
  Car,
  Wrench,
  ShieldAlert,
  Warehouse,
  KeyRound,
  Database,
  Layers,
  Zap,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { ConfigGenerator } from '../ui/ConfigGenerator';
import { YouTubeHero } from '../ui/YouTubeHero';
import { chopshopConfigSchema } from '../../lib/configs/chopshop-config';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

const ACCENT = '#dc2626';

export function ChopshopDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dc2626]/10 border border-[#dc2626]/30 text-[#dc2626] text-[13px] font-medium mb-6">
          <Package className="w-4 h-4" />
          <span>v1.0.0</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] to-[#7f1d1d]">
            CPX Chopshop
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Sistema de robo y deshueso de vehículos con minijuegos NUI, garajes con tiers y dispatch en vivo.'
            : 'Stealth car-theft and dismantling framework with NUI minigames, tiered warehouses and live dispatch.'}
        </p>

        <YouTubeHero
          videoId="t7-8E8NOVi8"
          title="CPX Chopshop preview"
          accent={ACCENT}
          badge={
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
              <Car className="w-3.5 h-3.5 text-[#dc2626]" />
              {isEs ? 'Demo en vivo' : 'Live demo'}
            </span>
          }
        />

        {/* ── INTRODUCTION ─────────────────── */}
        <motion.section
          id="chopshop-intro"
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
              ? 'CPX Chopshop no es otro script de "roba un coche, llévalo al blip". Es un framework completo de economía: contratos en cola desde la laptop, deshueso cinemático parte por parte con minijuegos NUI propios, garajes que podés mejorar con renta, heat policial dinámico, redadas y dispatch en vivo.'
              : "CPX Chopshop isn't another 'steal-the-car, drive-to-a-blip' script. It's a full economy framework: contracts queued from the laptop, cinematic part-by-part teardown with custom NUI minigames, tiered warehouses you upgrade with rent, dynamic police heat, raid mechanics and live dispatch."}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'Auto-detecta tu framework (qb, qbx, esx), instala su propia base de datos (10 tablas), y todo es editable en vivo desde el panel admin (/chopshopadmin).'
              : 'Auto-detects your framework (qb, qbx, esx), installs its own database (10 tables), and every knob is editable live from the admin panel (/chopshopadmin).'}
          </p>
        </motion.section>

        {/* ── FEATURES ─────────────────────── */}
        <motion.section
          id="chopshop-features"
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
                icon: Car,
                title: isEs ? 'Contratos por clase' : 'Class-based contracts',
                description: isEs
                  ? 'D / C / B / A / S / S+ con prob. por nivel, costo de activación, cooldown y recompensa propias.'
                  : 'D / C / B / A / S / S+ with per-level probability, activation cost, cooldown and rewards.',
                colorClass: 'text-[#dc2626]',
                bgClass: 'bg-[#dc2626]/10',
              },
              {
                icon: Wrench,
                title: isEs ? 'Deshueso cinemático' : 'Cinematic dismantle',
                description: isEs
                  ? 'Camina hasta cada pieza, juega el minijuego NUI, la pieza se desprende y la llevas al NPC.'
                  : 'Walk to each part, play the NUI minigame, the part detaches and you carry it to the NPC.',
                colorClass: 'text-[#dc2626]',
                bgClass: 'bg-[#dc2626]/10',
              },
              {
                icon: Warehouse,
                title: isEs ? 'Garajes con tiers' : 'Tiered warehouses',
                description: isEs
                  ? 'Standard (gratis) / Secure ($50k/7d) / VIP ($250k/30d). Renta acelera cooldowns en curso.'
                  : 'Standard (free) / Secure ($50k/7d) / VIP ($250k/30d). Renting accelerates ongoing cooldowns.',
                colorClass: 'text-[#dc2626]',
                bgClass: 'bg-[#dc2626]/10',
              },
              {
                icon: ShieldAlert,
                title: isEs ? 'Redadas policiales' : 'Police raids',
                description: isEs
                  ? 'Probabilidad escala con heat. Ventana para defender; si no, auto-confiscación. Seguro opcional.'
                  : 'Probability scales with heat. Defend window before auto-confiscate. Optional insurance.',
                colorClass: 'text-[#dc2626]',
                bgClass: 'bg-[#dc2626]/10',
              },
              {
                icon: KeyRound,
                title: isEs ? 'Tracker hackable' : 'Hackable tracker',
                description: isEs
                  ? 'El auto robado emite GPS a la policía hasta que el copiloto usa el hacking_device.'
                  : 'The stolen vehicle emits GPS to police until the copilot uses the hacking_device.',
                colorClass: 'text-[#dc2626]',
                bgClass: 'bg-[#dc2626]/10',
              },
              {
                icon: Layers,
                title: isEs ? 'Admin console' : 'Admin console',
                description: isEs
                  ? '/chopshopadmin con 18 tabs. Cada knob persiste en DB y se broadcastea a todos los clientes sin restart.'
                  : '/chopshopadmin with 18 tabs. Every knob persists in DB and broadcasts to all clients without restart.',
                colorClass: 'text-[#dc2626]',
                bgClass: 'bg-[#dc2626]/10',
              },
              {
                icon: Zap,
                title: isEs ? 'Crews & dispatch' : 'Crews & dispatch',
                description: isEs
                  ? 'Contratos en grupo con split de pago configurable. Dispatch HUD sincronizado a todos.'
                  : 'Group contracts with configurable payout split. Dispatch HUD synced to every member.',
                colorClass: 'text-[#dc2626]',
                bgClass: 'bg-[#dc2626]/10',
              },
              {
                icon: Database,
                title: isEs ? 'BD auto-instalable' : 'Auto-install database',
                description: isEs
                  ? '10 tablas con CREATE TABLE IF NOT EXISTS + migraciones idempotentes. Cero pasos manuales.'
                  : '10 tables with CREATE TABLE IF NOT EXISTS + idempotent migrations. Zero manual steps.',
                colorClass: 'text-[#dc2626]',
                bgClass: 'bg-[#dc2626]/10',
              },
            ]}
          />
        </motion.section>

        {/* ── INSTALLATION ─────────────────── */}
        <motion.section
          id="chopshop-install"
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
              <code className="bg-[#1a1a1a] text-[#dc2626] px-1.5 py-0.5 rounded text-[13px] font-mono border border-[#dc2626]/20">
                server.cfg
              </code>{' '}
              {isEs ? 'tenga (antes de cpx-chopshop):' : 'has (before cpx-chopshop):'}
            </p>
            <CodeBlock code={`ensure oxmysql\nensure ox_lib`} />
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'Tu inventario y tu sistema de target también deben iniciar antes.'
                : 'Your inventory and target system must also start before cpx-chopshop.'}
            </p>
          </Step>

          <Step number={2} title={isEs ? 'Suelta el resource' : 'Drop the resource'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'Extrae el paquete dentro de la carpeta [illegal] de tus resources.'
                : 'Extract the package inside an [illegal] bracket under resources/.'}
            </p>
            <CodeBlock
              code={`resources/
└── [illegal]/
    └── cpx-chopshop/`}
            />
          </Step>

          <Step number={3} title={isEs ? 'Registra los 4 items' : 'Register the 4 items'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'Cuatro items necesarios. Snippets pre-armados para cada inventario en INSTALL/items/.'
                : 'Four items required. Pre-built snippets for each inventory under INSTALL/items/.'}
            </p>

            <div className="overflow-x-auto mb-6 bg-[#080808]/50 backdrop-blur-sm rounded-2xl border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <table className="w-full text-left text-[14.5px]">
                <thead className="bg-white/[0.02] border-b border-white/[0.08]">
                  <tr>
                    <th className="py-4 px-6 text-zinc-300 font-semibold text-[13px] tracking-wide uppercase">Item</th>
                    <th className="py-4 px-6 text-zinc-300 font-semibold text-[13px] tracking-wide uppercase">
                      {isEs ? 'Función' : 'What it does'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05] text-zinc-400">
                  {[
                    ['drill',          isEs ? 'Abre capó, puertas, maletero durante el deshueso.' : 'Opens hood, doors and trunk during dismantle.'],
                    ['saw',            isEs ? 'Corta las bisagras de las puertas.' : 'Cuts through door hinge pins.'],
                    ['screwdriverset', isEs ? 'Desenrosca las tuercas de las llantas.' : 'Unscrews wheel lug nuts.'],
                    ['hacking_device', isEs ? 'Silencia el GPS policial al robar.' : 'Silences the police GPS tracker.'],
                  ].map(([item, desc]) => (
                    <tr key={item} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="py-4 px-6">
                        <code className="text-[#dc2626] bg-[#dc2626]/10 border border-[#dc2626]/20 px-2 py-1 rounded-md font-mono text-[13px]">
                          {item}
                        </code>
                      </td>
                      <td className="py-4 px-6 text-zinc-300 group-hover:text-white transition-colors">
                        {desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout type="info" title={isEs ? 'Permisos admin' : 'Admin permissions'}>
              {isEs ? 'El panel ' : 'The '}
              <code className="bg-[#1a1a1a] text-[#dc2626] px-1.5 py-0.5 rounded text-[13px] font-mono border border-[#dc2626]/20">/chopshopadmin</code>
              {isEs ? ' usa ACE. Suma a tu server.cfg:' : ' panel uses ACE. Add to your server.cfg:'}
              <CodeBlock code={`add_ace group.admin "cpx-chopshop.admin" allow\nadd_ace qbcore.god  "cpx-chopshop.admin" allow`} />
            </Callout>
          </Step>

          <Step number={4} title={isEs ? 'Arranca el servidor' : 'Start the server'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Agrega a tu' : 'Add to your'}{' '}
              <code className="bg-[#1a1a1a] text-[#dc2626] px-1.5 py-0.5 rounded text-[13px] font-mono border border-[#dc2626]/20">server.cfg</code>:
            </p>
            <CodeBlock code={`ensure cpx-chopshop`} />
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'En el restart verás el banner con el framework e inventario detectados. Si lo ves, está listo.'
                : 'On restart you\'ll see the banner with the detected framework and inventory. If you see it, you\'re good.'}
            </p>
          </Step>
        </motion.section>

        {/* ── CONFIG ───────────────────────── */}
        <motion.section
          id="chopshop-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-2">
            {isEs ? 'Configuración interactiva' : 'Interactive configuration'}
          </h2>
          <p className="text-[14px] text-zinc-500 mb-8">
            {isEs
              ? 'Generá el head de tu config.lua tocando los knobs. Cada cambio se persiste en vivo en /chopshopadmin.'
              : 'Generate the head of your config.lua by tweaking the knobs. Every change persists live via /chopshopadmin.'}
          </p>
          <ConfigGenerator schemas={[chopshopConfigSchema]} accent={ACCENT} />
        </motion.section>

        {/* ── TROUBLESHOOTING ──────────────── */}
        <motion.section
          id="chopshop-troubleshoot"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-8">
            {isEs ? 'Solución de problemas' : 'Troubleshooting'}
          </h2>

          <div className="space-y-4">
            <Callout type="warning" title={isEs ? '"Access denied" en /chopshopadmin' : '"Access denied" on /chopshopadmin'}>
              {isEs
                ? 'No agregaste la ACE. Mirá el paso 3 arriba.'
                : "You haven't added the ACE permission. See step 3 above."}
            </Callout>

            <Callout type="warning" title={isEs ? 'No pasa nada al usar las herramientas' : 'Tools do nothing when used'}>
              {isEs
                ? 'Asegurate de que los 4 items estén registrados en tu inventario y que el jugador los tenga.'
                : 'Make sure the 4 items are registered in your inventory AND the player actually carries them.'}
            </Callout>

            <Callout type="info" title={isEs ? 'La policía no recibe el GPS' : "Police don't receive the GPS alert"}>
              {isEs
                ? 'Revisa Config.tracker.alertPoliceJobs — por default es {police, sheriff, bcso}.'
                : 'Check Config.tracker.alertPoliceJobs — defaults to {police, sheriff, bcso}.'}
            </Callout>

            <Callout type="info" title={isEs ? 'Minijuego abre pero clicks no se registran' : "Minigame opens but clicks don't register"}>
              {isEs
                ? 'Estás con Config.target = "custom" sin implementarlo. Volvé a "cpx" o implementá bridge/target/custom.lua.'
                : 'You set Config.target = "custom" without implementing it. Switch back to "cpx" or implement bridge/target/custom.lua.'}
            </Callout>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="2026-05-19"
          onSelectDoc={onSelectDoc}
          accentColor="pink"
        />
      </motion.div>
    </div>
  );
}
