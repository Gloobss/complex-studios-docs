import { motion } from 'motion/react';
import {
  Package,
  Shirt,
  Settings2,
  Database,
  Languages,
  Layers,
  Shield,
  Box,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { YouTubeHero } from '../ui/YouTubeHero';
import { ConfigGenerator } from '../ui/ConfigGenerator';
import { clothesdesignerConfigSchema } from '../../lib/configs/clothesdesigner-config';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

const ACCENT = '#c6ff3d';

export function ClothesDesignerDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
          <span>v1.0.0</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c6ff3d] to-[#8de000]">
            CPX Clothing Designer
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Estudio in-game para pintar texturas personalizadas sobre prendas vanilla de GTA. Editor completo, biblioteca personal y soporte multi-framework.'
            : 'In-game studio to paint custom textures over vanilla GTA garments. Full editor, personal library and multi-framework support.'}
        </p>

        <YouTubeHero
          videoId="MvhkYgL91eM"
          title="CPX Clothing Designer preview"
          accent={ACCENT}
          badge={
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
              <Shirt className="w-3.5 h-3.5 text-[#c6ff3d]" />
              {isEs ? 'Demo en vivo' : 'Live demo'}
            </span>
          }
        />

        {/* ── INTRODUCTION ─────────────────── */}
        <motion.section
          id="clothesdesigner-intro"
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
              ? 'CPX Clothing Designer es un estudio in-game que permite a tus jugadores pintar, escribir y pegar stickers sobre prendas vanilla de GTA (tops, pants, shoes, masks, vests, bags) y equiparlas como items físicos del inventario. Las texturas se aplican en tiempo real y replican a otros jugadores en el rango configurado.'
              : 'CPX Clothing Designer is an in-game studio that lets your players paint, type and stamp stickers onto vanilla GTA garments (tops, pants, shoes, masks, vests, bags) and equip them as physical inventory items. Textures apply in real time and replicate to nearby players within the configured radius.'}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'Incluye dos flujos: el editor completo (/clothstudio) con canvas Fabric.js + preview 3D, y la biblioteca personal (/disingclo). Auto-detecta tu framework (QBCore, QBX, ESX, Standalone) e inventario (ox_inventory, qs-inventory, codem, qb-inventory, ESX nativo). Drop in y listo.'
              : 'Two flows are included: the full editor (/clothstudio) with a Fabric.js canvas + 3D preview, and the personal library (/disingclo). Auto-detects your framework (QBCore, QBX, ESX, Standalone) and inventory (ox_inventory, qs-inventory, codem, qb-inventory, ESX native). Drop in and go.'}
          </p>
        </motion.section>

        {/* ── FEATURES ─────────────────────── */}
        <motion.section
          id="clothesdesigner-features"
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
                icon: Shirt,
                title: isEs ? 'Editor completo' : 'Full editor',
                description: isEs
                  ? 'Canvas Fabric.js 1024×1024, preview 3D, undo/redo, pinceles, eraser, eyedropper, magic fill, texto con 19 fonts, formas, gradientes, stickers, gallery.'
                  : 'Fabric.js canvas 1024×1024, 3D preview, undo/redo, brushes, eraser, eyedropper, magic fill, text with 19 fonts, shapes, gradients, stickers, gallery.',
                colorClass: 'text-[#c6ff3d]',
                bgClass: 'bg-[#c6ff3d]/10',
              },
              {
                icon: Layers,
                title: isEs ? 'Biblioteca personal' : 'Personal library',
                description: isEs
                  ? 'Cada jugador guarda hasta 30 diseños. Códigos compartibles entre jugadores. Navegador propio integrado.'
                  : 'Each player saves up to 30 designs. Share codes between players. Built-in browser.',
                colorClass: 'text-[#c6ff3d]',
                bgClass: 'bg-[#c6ff3d]/10',
              },
              {
                icon: Box,
                title: isEs ? 'Auto-detect de prendas' : 'Auto-detect garments',
                description: isEs
                  ? 'Tirá los .ydd/.ytd en stream/, reiniciá, y se registran como templates editables automáticamente.'
                  : 'Drop .ydd/.ytd files into stream/, restart, and they register as editable templates automatically.',
                colorClass: 'text-[#c6ff3d]',
                bgClass: 'bg-[#c6ff3d]/10',
              },
              {
                icon: Database,
                title: isEs ? 'BD auto-instalable' : 'Auto-install database',
                description: isEs
                  ? '2 tablas creadas con CREATE TABLE IF NOT EXISTS. Idempotente. Cero pasos manuales.'
                  : '2 tables created with CREATE TABLE IF NOT EXISTS. Idempotent. Zero manual steps.',
                colorClass: 'text-[#c6ff3d]',
                bgClass: 'bg-[#c6ff3d]/10',
              },
              {
                icon: Languages,
                title: isEs ? 'EN / ES' : 'EN / ES',
                description: isEs
                  ? 'Toda la interfaz traducida out-of-the-box. Agregás un idioma editando config/locales.lua.'
                  : 'Full UI translated out-of-the-box. Add a language by editing config/locales.lua.',
                colorClass: 'text-[#c6ff3d]',
                bgClass: 'bg-[#c6ff3d]/10',
              },
            ]}
          />
        </motion.section>

        {/* ── INSTALLATION ─────────────────── */}
        <motion.section
          id="clothesdesigner-install"
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
              {isEs ? 'Asegurate que tu' : 'Make sure your'}{' '}
              <code className="bg-[#1a1a1a] text-[#c6ff3d] px-1.5 py-0.5 rounded text-[13px] font-mono border border-[#c6ff3d]/20">
                server.cfg
              </code>{' '}
              {isEs ? 'tenga (antes de cpx-clothesdesigner):' : 'has (before cpx-clothesdesigner):'}
            </p>
            <CodeBlock code={`ensure oxmysql`} />
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'Si usás un inventario, también debe iniciar antes de cpx-clothesdesigner.'
                : 'If you use an inventory, it must also start before cpx-clothesdesigner.'}
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
    └── cpx-clothesdesigner/`}
            />
            <p className="mt-4 text-[14px]">
              {isEs
                ? 'El nombre de la carpeta debe ser exactamente cpx-clothesdesigner, si no la página NUI no resuelve.'
                : 'The folder name must be exactly cpx-clothesdesigner or the NUI page won\'t resolve.'}
            </p>
          </Step>

          <Step number={3} title={isEs ? 'Registrá el item' : 'Register the item'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'El item por defecto es '
                : 'The default item is '}
              <code className="text-[#c6ff3d] bg-[#c6ff3d]/10 border border-[#c6ff3d]/20 px-2 py-1 rounded-md font-mono text-[13px]">
                bcd_customwear
              </code>
              {isEs
                ? '. Copiá el snippet de la carpeta INSTALL/items/ que corresponde a tu inventario:'
                : '. Copy the matching snippet from INSTALL/items/ for your inventory:'}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400 mb-4">
              <li><code className="text-white">items/ox_inventory.lua</code></li>
              <li><code className="text-white">items/qb-inventory.lua</code></li>
              <li><code className="text-white">items/qs-inventory.md</code></li>
              <li><code className="text-white">items/esx-legacy.md</code></li>
            </ul>
            <Callout type="info" title={isEs ? 'codem-inventory' : 'codem-inventory'}>
              {isEs
                ? 'codem-inventory toma prestado el snippet de ESX legacy (mismo SQL). El bridge detecta y se enlaza automáticamente.'
                : 'codem-inventory uses the ESX legacy snippet (same SQL). The bridge auto-detects and wires up.'}
            </Callout>
          </Step>

          <Step number={4} title={isEs ? 'Iniciá el servidor' : 'Start the server'} isLast>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Añadí a tu' : 'Add to your'}{' '}
              <code className="bg-[#1a1a1a] text-[#c6ff3d] px-1.5 py-0.5 rounded text-[13px] font-mono border border-white/5">
                server.cfg
              </code>
              :
            </p>
            <CodeBlock code={`ensure cpx-clothesdesigner`} />
            <p className="mt-4 text-[15px] text-zinc-300">
              {isEs
                ? 'En el primer arranque verás que se crean dos tablas SQL automáticamente. Si tu framework está corriendo, también verás "Bridge: framework=qb | inventory=ox_inventory" o similar.'
                : 'On first boot two SQL tables are created automatically. If your framework is running, you\'ll also see "Bridge: framework=qb | inventory=ox_inventory" or similar in the console.'}
            </p>
            <p className="mt-3 text-[14px] text-zinc-400">
              {isEs
                ? 'Comandos disponibles: /clothstudio (editor) y /disingclo (biblioteca).'
                : 'Available commands: /clothstudio (editor) and /disingclo (library).'}
            </p>
          </Step>
        </motion.section>

        {/* ── CONFIGURATION ────────────────── */}
        <motion.section
          id="clothesdesigner-config"
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
              ? 'Ajustá los valores con los controles de abajo, copiá el resultado y reemplazá la cabecera de '
              : 'Tweak the values with the controls below, copy the result and replace the header of '}
            <code className="text-white">config.lua</code>{' '}
            {isEs
              ? '(todo lo que está antes de BCDConfig.Templates). La salida está garantizada como Lua válido.'
              : '(everything before BCDConfig.Templates). Output is guaranteed valid Lua.'}
          </p>

          <ConfigGenerator schemas={[clothesdesignerConfigSchema]} accent={ACCENT} />
        </motion.section>

        {/* ── TROUBLESHOOTING ──────────────── */}
        <motion.section
          id="clothesdesigner-troubleshoot"
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
                <Shirt className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'El item no abre el studio' : "Item doesn't open the studio"}
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>{isEs ? 'Verificá que' : 'Check that'} <code className="text-white">BCDConfig.InventoryItemName</code> {isEs ? 'coincida con el nombre en tu inventario.' : 'matches the name in your inventory.'}</li>
                <li>{isEs ? 'Si usás ox_inventory en QBCore, registrá en' : 'On QBCore with ox_inventory, register in'} <code className="text-white">ox_inventory/data/items.lua</code>, {isEs ? 'no en qb-core.' : 'not qb-core.'}</li>
                <li>{isEs ? 'En ESX legacy, ejecutá el SQL del INSTALL/items/esx-legacy.md.' : 'On ESX legacy, run the SQL from INSTALL/items/esx-legacy.md.'}</li>
              </ol>
            </div>

            <div className="group border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Box className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                {isEs ? 'Las prendas en stream/ no aparecen' : "Garments in stream/ don't appear"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>{isEs ? 'El naming debe seguir la convención caret:' : 'Naming must follow the caret convention:'} <code className="text-white">mp_&lt;g&gt;_freemode_01^&lt;file&gt;.ydd</code></li>
                <li>{isEs ? 'Tanto .ydd como .ytd deben estar presentes en pareja.' : 'Both .ydd and matching .ytd must be present.'}</li>
                <li>{isEs ? 'Activá' : 'Enable'} <code className="text-white">BCDConfig.Debug = true</code> {isEs ? 'y reiniciá: el log imprime cada probe.' : 'and restart — the log prints every probe.'}</li>
              </ul>
            </div>

            <div className="group border border-[#f59e0b]/20 bg-[#f59e0b]/[0.02] rounded-2xl p-6 hover:border-[#f59e0b]/30 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-500" />
                {isEs ? 'Las texturas no replican a otros jugadores' : "Textures don't replicate to other players"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>{isEs ? 'Revisá' : 'Check'} <code className="text-amber-400">BCDConfig.RenderDistance</code> (default 45m). {isEs ? 'Los jugadores fuera del radio no la ven.' : 'Players outside the radius do not see it.'}</li>
                <li>{isEs ? 'Confirmá que' : 'Make sure'} <code className="text-amber-400">BCDConfig.StateBagKey</code> {isEs ? 'no choca con otro recurso.' : "doesn't collide with another resource."}</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="14/5/26"
          prev={{ title: 'CPX Laptop', doc: 'laptop' }}
          next={{ title: 'CPX Announcements', doc: 'announcements' }}
          onSelectDoc={onSelectDoc}
          accentColor="lima"
        />
      </motion.div>
    </div>
  );
}
