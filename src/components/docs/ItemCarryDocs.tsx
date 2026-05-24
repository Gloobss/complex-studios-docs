import { motion } from 'motion/react';
import {
  Backpack,
  Package,
  Boxes,
  Move3d,
  PersonStanding,
  Crosshair,
  ShieldAlert,
  Database,
  Settings2,
  RefreshCw,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { ConfigGenerator } from '../ui/ConfigGenerator';
import { itemcarryConfigSchema } from '../../lib/configs/itemcarry-config';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

const ACCENT = '#38BDF8';

export function ItemCarryDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-[13px] font-medium mb-6">
          <Backpack className="w-4 h-4" />
          <span>v1.0.0</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7dd3fc]">
            CPX Item Carry
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Herramienta de administración para FiveM que muestra items del inventario como props 3D sobre el cuerpo del jugador. Un editor visual in-game vincula item → prop → slot del cuerpo, con gizmo 3D, animaciones de carga y un limitador de acciones. Sin item de jugador, sin base de datos.'
            : 'FiveM admin tool that shows inventory items as 3D props on the player’s body. An in-game visual editor binds item → prop → body slot, with a 3D gizmo, carry animations and an action limiter. No player item, no database.'}
        </p>

        {/* ── INTRODUCTION ─────────────────── */}
        <motion.section
          id="itemcarry-intro"
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
              ? 'CPX Item Carry es una herramienta de admin que renderiza items del inventario como props 3D anclados al cuerpo del jugador. La abrís con el comando '
              : 'CPX Item Carry is an admin tool that renders inventory items as 3D props anchored to the player’s body. You open it with the '}
            <code className="text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-1.5 py-0.5 rounded-md font-mono text-[13px]">
              /itemcarry
            </code>{' '}
            {isEs
              ? 'comando (configurable) y está protegida por el permiso ACE '
              : 'command (configurable) and it is gated by the ACE permission '}
            <code className="text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-1.5 py-0.5 rounded-md font-mono text-[13px]">
              cpx-itemcarrys.admin
            </code>
            .
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'No hay item de jugador ni base de datos: las configuraciones se guardan en data/configs.json. Detecta tu framework (QBCore/QBX/ESX) y tu inventario (ox_inventory/qb-inventory/qs-inventory/custom) automáticamente, y solo requiere ox_lib. Los props se sincronizan por statebag, así que se renderizan en todos los jugadores sin entidades en red.'
              : 'There is no player item and no database: configurations are saved to data/configs.json. It auto-detects your framework (QBCore/QBX/ESX) and inventory (ox_inventory/qb-inventory/qs-inventory/custom) and only requires ox_lib. Props sync over statebags, so they render on every player with no networked entities.'}
          </p>
        </motion.section>

        {/* ── FEATURES ─────────────────────── */}
        <motion.section
          id="itemcarry-features"
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
                icon: Backpack,
                title: isEs ? 'Editor visual in-game' : 'Visual in-game editor',
                description: isEs
                  ? 'Elegí un item, asignale un prop y un slot del cuerpo, todo desde un editor visual sin tocar archivos.'
                  : 'Pick an item, assign it a prop and a body slot, all from a visual editor without touching files.',
                colorClass: 'text-[#38BDF8]',
                bgClass: 'bg-[#38BDF8]/10',
              },
              {
                icon: PersonStanding,
                title: isEs ? 'Body-map + sliders finos' : 'Body-map + fine sliders',
                description: isEs
                  ? 'Colocación por mapa del cuerpo (hueso) y sliders de ajuste fino para posición y rotación.'
                  : 'Body-map (bone) placement plus fine-tune sliders for position and rotation.',
                colorClass: 'text-[#38BDF8]',
                bgClass: 'bg-[#38BDF8]/10',
              },
              {
                icon: Move3d,
                title: isEs ? 'Gizmo 3D en vivo' : 'Live 3D gizmo',
                description: isEs
                  ? 'Mové y rotá el prop con el mouse mediante un gizmo 3D, con preview en vivo sobre el cuerpo.'
                  : 'Move and rotate the prop with the mouse via a 3D gizmo, with live preview on the body.',
                colorClass: 'text-[#38BDF8]',
                bgClass: 'bg-[#38BDF8]/10',
              },
              {
                icon: PersonStanding,
                title: isEs ? 'Animaciones de carga' : 'Carry animations',
                description: isEs
                  ? 'Caja a dos manos, bolso, portapapeles, bebida o teléfono: la animación acompaña al prop.'
                  : 'Box two-hands, bag, clipboard, drink or phone — the animation matches the prop.',
                colorClass: 'text-[#38BDF8]',
                bgClass: 'bg-[#38BDF8]/10',
              },
              {
                icon: Crosshair,
                title: isEs ? 'Soporte de armas' : 'Weapon support',
                description: isEs
                  ? 'El prop puede ser el arma misma, ideal para mostrar lo que el jugador transporta.'
                  : 'The prop can be the weapon itself, perfect for showing what the player is hauling.',
                colorClass: 'text-[#38BDF8]',
                bgClass: 'bg-[#38BDF8]/10',
              },
              {
                icon: ShieldAlert,
                title: isEs ? 'Limitador de acciones' : 'Action limiter',
                description: isEs
                  ? 'Bloqueá disparar, sprintar, saltar o entrar a vehículos mientras se carga, con umbral por cantidad.'
                  : 'Block shooting, sprint, jump or entering vehicles while carrying, with a count threshold.',
                colorClass: 'text-[#38BDF8]',
                bgClass: 'bg-[#38BDF8]/10',
              },
              {
                icon: Boxes,
                title: isEs ? 'Multi-framework + inventario' : 'Multi-framework + inventory',
                description: isEs
                  ? 'QB/QBX/ESX e inventarios ox/qb/qs detectados automáticamente, con puente custom opcional.'
                  : 'QB/QBX/ESX and ox/qb/qs inventories auto-detected, with an optional custom bridge.',
                colorClass: 'text-[#38BDF8]',
                bgClass: 'bg-[#38BDF8]/10',
              },
              {
                icon: RefreshCw,
                title: isEs ? 'Sync por statebag' : 'Statebag sync',
                description: isEs
                  ? 'Los props se renderizan en todos los jugadores vía statebags, sin entidades en red.'
                  : 'Props render on every player via statebags, with no networked entities.',
                colorClass: 'text-[#38BDF8]',
                bgClass: 'bg-[#38BDF8]/10',
              },
              {
                icon: Database,
                title: isEs ? 'Sin base de datos' : 'No database',
                description: isEs
                  ? 'Las configuraciones se guardan en data/configs.json. Cero migraciones SQL, cero pasos manuales.'
                  : 'Configurations are saved to data/configs.json. Zero SQL migrations, zero manual steps.',
                colorClass: 'text-[#38BDF8]',
                bgClass: 'bg-[#38BDF8]/10',
              },
            ]}
          />
        </motion.section>

        {/* ── INSTALLATION ─────────────────── */}
        <motion.section
          id="itemcarry-install"
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
              <code className="bg-[#1a1a1a] text-[#38BDF8] px-1.5 py-0.5 rounded text-[13px] font-mono border border-[#38BDF8]/20">
                server.cfg
              </code>{' '}
              {isEs ? 'inicie ox_lib antes de cpx-itemcarrys:' : 'starts ox_lib before cpx-itemcarrys:'}
            </p>
            <CodeBlock code={`ensure ox_lib`} />
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'Tu framework (QBCore/QBX/ESX) y tu inventario se detectan automáticamente, pero deben iniciar antes de cpx-itemcarrys.'
                : 'Your framework (QBCore/QBX/ESX) and your inventory are auto-detected, but must start before cpx-itemcarrys.'}
            </p>
          </Step>

          <Step number={2} title={isEs ? 'Otorgá el permiso ACE' : 'Grant the ACE permission'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'El editor está protegido por un permiso ACE. Añadí a tu '
                : 'The editor is gated by an ACE permission. Add to your '}
              <code className="bg-[#1a1a1a] text-[#38BDF8] px-1.5 py-0.5 rounded text-[13px] font-mono border border-[#38BDF8]/20">
                server.cfg
              </code>
              :
            </p>
            <CodeBlock code={`add_ace group.admin "cpx-itemcarrys.admin" allow`} />
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'Solo los grupos con este ACE podrán abrir el editor. El objeto del permiso es configurable.'
                : 'Only groups with this ACE will be able to open the editor. The permission object is configurable.'}
            </p>
          </Step>

          <Step number={3} title={isEs ? 'Iniciá el recurso' : 'Start the resource'} isLast>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Añadí a tu' : 'Add to your'}{' '}
              <code className="bg-[#1a1a1a] text-[#38BDF8] px-1.5 py-0.5 rounded text-[13px] font-mono border border-white/5">
                server.cfg
              </code>
              :
            </p>
            <CodeBlock code={`ensure cpx-itemcarrys`} />
            <p className="mt-4 text-[15px] text-zinc-300">
              {isEs
                ? 'Entrá al servidor como admin y ejecutá '
                : 'Join the server as an admin and run '}
              <code className="text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-2 py-0.5 rounded-md font-mono text-[13px]">
                /itemcarry
              </code>{' '}
              {isEs
                ? 'para abrir el editor visual. No se requiere base de datos: las configuraciones se guardan en data/configs.json.'
                : 'to open the visual editor. No database is required — configurations are saved to data/configs.json.'}
            </p>
          </Step>
        </motion.section>

        {/* ── CONFIGURATION ────────────────── */}
        <motion.section
          id="itemcarry-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings2 className="w-6 h-6 text-[#38BDF8]" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración interactiva' : 'Interactive configuration'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl">
            {isEs
              ? 'Ajustá los valores con los controles de abajo, copiá el resultado y pegá la cabecera de '
              : 'Tweak the values with the controls below, copy the result and paste the head of '}
            <code className="text-white">config/config.lua</code>.{' '}
            {isEs
              ? 'Config.Locales, Config.T, las posiciones, el catálogo de props, las animaciones y los presets del limitador se editan más abajo en el mismo archivo. La salida está garantizada como Lua válido.'
              : 'Config.Locales, Config.T, positions, the prop catalog, animations and limiter presets are edited further down in the same file. Output is guaranteed valid Lua.'}
          </p>

          <ConfigGenerator schemas={[itemcarryConfigSchema]} accent={ACCENT} />
        </motion.section>

        {/* ── TROUBLESHOOTING ──────────────── */}
        <motion.section
          id="itemcarry-troubleshoot"
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
                <ShieldAlert className="w-5 h-5 text-amber-500" />
                {isEs ? '"No tenés permiso" al abrir' : '"No permission" when opening'}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>{isEs ? 'Verificá que' : 'Check that'} <code className="text-amber-400">add_ace group.admin "cpx-itemcarrys.admin" allow</code> {isEs ? 'esté en server.cfg.' : 'is in server.cfg.'}</li>
                <li>{isEs ? 'Confirmá que tu grupo (admin/god/superadmin) tenga el ACE asignado.' : 'Confirm your group (admin/god/superadmin) has the ACE assigned.'}</li>
                <li>{isEs ? 'Si cambiaste el objeto del permiso en config, debe coincidir exactamente con el add_ace.' : 'If you changed the permission object in config, it must match the add_ace exactly.'}</li>
              </ul>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'Los props no aparecen' : "Props don't appear"}
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>{isEs ? 'Confirmá que ox_lib inicie ANTES que cpx-itemcarrys.' : 'Confirm ox_lib starts BEFORE cpx-itemcarrys.'}</li>
                <li>{isEs ? 'Revisá' : 'Check'} <code className="text-white">Config.maxVisibleProps</code> {isEs ? '— si es muy bajo, props extra no se renderizan.' : '— if too low, extra props will not render.'}</li>
                <li>{isEs ? 'Si estás en un vehículo,' : 'If you are in a vehicle,'} <code className="text-white">Config.hideInVehicle</code> {isEs ? 'puede estar ocultándolos.' : 'may be hiding them.'}</li>
              </ol>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Boxes className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'Modelo de prop inválido' : 'Invalid prop model'}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>{isEs ? 'El modelo debe ser un prop válido y cargado (verificá el hash/nombre del prop).' : 'The model must be a valid, loadable prop (verify the prop hash/name).'}</li>
                <li>{isEs ? 'Si el prop pertenece a un DLC, asegurate que el contenido esté disponible en el servidor.' : 'If the prop belongs to a DLC, make sure the content is available on the server.'}</li>
              </ul>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Boxes className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'No detecta framework o inventario' : "Framework or inventory not detected"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>{isEs ? 'Con' : 'With'} <code className="text-white">Config.Framework = 'auto'</code> {isEs ? 'el framework debe iniciar antes. Si no, fijalo manualmente (qb/qbx/esx).' : 'the framework must start first. Otherwise set it manually (qb/qbx/esx).'}</li>
                <li>{isEs ? 'Lo mismo para' : 'Same for'} <code className="text-white">Config.Inventory</code> {isEs ? '— fijalo a ox_inventory/qb-inventory/qs-inventory si auto falla.' : '— set it to ox_inventory/qb-inventory/qs-inventory if auto fails.'}</li>
              </ul>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'El editor NUI aparece en blanco' : 'The NUI editor is blank'}
              </h3>
              <p className="text-[15px] text-zinc-400">
                {isEs
                  ? 'Limpiá la caché de NUI (borrá la carpeta cache de FiveM o usá un hard refresh) y reiniciá el recurso.'
                  : 'Clear the NUI cache (delete the FiveM cache folder or do a hard refresh) and restart the resource.'}
              </p>
            </div>
          </div>

          <Callout type="info" title={isEs ? 'Export de servidor' : 'Server export'}>
            {isEs
              ? 'Para forzar el re-render de los props de un jugador desde otro recurso, llamá a '
              : 'To force a re-render of a player’s props from another resource, call '}
            <code className="text-white">exports['cpx-itemcarrys']:RefreshPlayer(src)</code>.
          </Callout>
        </motion.section>

        <DocFooter
          lastUpdated="23/5/26"
          prev={{ title: 'CPX VIP System', doc: 'vipsystem' }}
          next={{ title: 'Home', doc: 'home' }}
          onSelectDoc={onSelectDoc}
          accentColor="cyan"
        />
      </motion.div>
    </div>
  );
}
