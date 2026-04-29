import { motion } from 'motion/react';
import {
  Package,
  ChefHat,
  Truck,
  Trophy,
  Wand2,
  Layers,
  Sparkles,
  Settings2,
  Hammer,
  Languages,
  Coins,
  MapPin,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { ConfigGenerator } from '../ui/ConfigGenerator';
import { YouTubeHero } from '../ui/YouTubeHero';
import { restaurantsConfigSchemas } from '../../lib/configs/restaurants-config';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

const ACCENT = '#f59e0b';

export function RestaurantsDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[13px] font-medium mb-6">
          <Package className="w-4 h-4" />
          <span>v1.11+</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            CPX Restaurants
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Sistema gastronómico avanzado: estaciones, recetas multi-paso, deliveries clásicos y a clientes reales, progresión XP y editor in-game.'
            : 'Advanced culinary system: stations, multi-step recipes, classic and customer deliveries, XP progression and an in-game editor.'}
        </p>

        <YouTubeHero
          videoId="ybhdrZsjqtg"
          title="CPX Restaurants"
          accent={ACCENT}
        />

        {/* INTRO */}
        <motion.section
          id="rest-intro"
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
              ? 'CPX Restaurants es un negocio gastronómico completo. Cada restaurante tiene estaciones de preparación, recetas configurables, ingredientes globales, sistema de pedidos a domicilio y editor visual en juego para que admins muevan POIs sin tocar Lua.'
              : 'CPX Restaurants is a complete gastronomy business. Each restaurant has prep stations, configurable recipes, global ingredients, food delivery and an in-world editor so admins can move POIs without touching Lua.'}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'Soporta ox_inventory, qb-inventory, qs-inventory, codem-inventory y ESX nativo. Target via cpx (built-in), ox_target o qb-target. Banking via Renewed o qb-banking. Auto-detecta todo en arranque.'
              : 'Supports ox_inventory, qb-inventory, qs-inventory, codem-inventory and native ESX. Target via cpx (built-in), ox_target or qb-target. Banking via Renewed or qb-banking. Auto-detects everything on boot.'}
          </p>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          id="rest-features"
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
                icon: ChefHat,
                title: isEs ? 'Recetas multi-paso' : 'Multi-step recipes',
                description: isEs
                  ? 'Estaciones, prepare → cook → plate. Ingredientes globales y por restaurante.'
                  : 'Stations, prepare → cook → plate. Global and per-restaurant ingredients.',
                colorClass: 'text-amber-400',
                bgClass: 'bg-amber-500/10',
              },
              {
                icon: Truck,
                title: isEs ? 'Deliveries duales' : 'Dual delivery',
                description: isEs
                  ? 'NPCs clásicos + Food Delivery a clientes reales. Mismo recurso, dos flujos.'
                  : 'Classic NPC + Food Delivery to real customers. One resource, two flows.',
                colorClass: 'text-amber-400',
                bgClass: 'bg-amber-500/10',
              },
              {
                icon: Trophy,
                title: isEs ? 'Progresión XP' : 'XP progression',
                description: isEs
                  ? 'XP por cocinar, entregar y recibir órdenes. Tareas diarias con bonus.'
                  : 'XP for cooking, delivering and receiving orders. Daily tasks with bonus rewards.',
                colorClass: 'text-amber-400',
                bgClass: 'bg-amber-500/10',
              },
              {
                icon: Hammer,
                title: isEs ? 'Editor in-game (/restaurantbuilder)' : 'In-game editor (/restaurantbuilder)',
                description: isEs
                  ? 'Admins crean, mueven y borran puntos sin reiniciar. Concurrencia optimista, rate-limited.'
                  : 'Admins create, move and delete points without restarting. Optimistic concurrency, rate-limited.',
                colorClass: 'text-amber-400',
                bgClass: 'bg-amber-500/10',
              },
              {
                icon: Sparkles,
                title: isEs ? 'Efectos visuales' : 'Visual FX',
                description: isEs
                  ? 'Partículas y luces por receta (calor para food, vapor para drink). Sincronizadas en red.'
                  : 'Particles and lights per recipe (heat for food, steam for drinks). Network-synced.',
                colorClass: 'text-amber-400',
                bgClass: 'bg-amber-500/10',
              },
              {
                icon: Layers,
                title: isEs ? 'Multi-framework / inventario' : 'Multi-framework / inventory',
                description: isEs
                  ? 'qb / qbx / esx. ox / qb / qs / codem / esx. Bridge custom incluido.'
                  : 'qb / qbx / esx. ox / qb / qs / codem / esx. Custom bridge included.',
                colorClass: 'text-amber-400',
                bgClass: 'bg-amber-500/10',
              },
              {
                icon: Languages,
                title: isEs ? 'Multi-idioma' : 'Multi-language',
                description: isEs
                  ? 'EN/ES built-in. Añade más con un JSON en locales/.'
                  : 'EN/ES built-in. Add more by dropping a JSON in locales/.',
                colorClass: 'text-amber-400',
                bgClass: 'bg-amber-500/10',
              },
              {
                icon: Wand2,
                title: isEs ? 'Auto-install BD' : 'Auto-install DB',
                description: isEs
                  ? 'Tablas creadas en arranque, idempotente. Auto-seed de restaurantes pre-shipped.'
                  : 'Tables created on boot, idempotent. Auto-seed of pre-shipped restaurants.',
                colorClass: 'text-amber-400',
                bgClass: 'bg-amber-500/10',
              },
              {
                icon: Coins,
                title: isEs ? 'Economía configurable' : 'Configurable economy',
                description: isEs
                  ? 'Multiplicadores globales de coste de ingredientes y precio de productos. Pago base + propinas configurables.'
                  : 'Global multipliers for ingredient cost and product price. Configurable base pay + tips.',
                colorClass: 'text-amber-400',
                bgClass: 'bg-amber-500/10',
              },
              {
                icon: MapPin,
                title: isEs ? 'Delivery editable' : 'Editable delivery points',
                description: isEs
                  ? 'Lista de ubicaciones de entrega editables desde el builder. Más puntos = más rutas para los repartidores.'
                  : 'Delivery destinations editable from the builder. More spots = more routes for deliverers.',
                colorClass: 'text-amber-400',
                bgClass: 'bg-amber-500/10',
              },
            ]}
          />
        </motion.section>

        {/* INSTALL */}
        <motion.section
          id="rest-install"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-8">
            {isEs ? 'Instalación' : 'Installation'}
          </h2>

          <Step number={1} title={isEs ? 'Pre-requisitos' : 'Pre-requirements'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'En tu' : 'In your'}{' '}
              <code className="bg-[#1a1a1a] text-amber-400 px-1.5 py-0.5 rounded text-[13px] font-mono border border-amber-500/20">
                server.cfg
              </code>{' '}
              {isEs ? 'antes de cpx-restaurants:' : 'before cpx-restaurants:'}
            </p>
            <CodeBlock code={`ensure oxmysql\nensure ox_lib\n# tu inventario, tu framework, etc.`} />
          </Step>

          <Step number={2} title={isEs ? 'Suelta el resource' : 'Drop the resource'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Recomendado dentro de [negocios]:' : 'Recommended inside a [negocios] bracket:'}
            </p>
            <CodeBlock
              code={`resources/
└── [negocios]/
    └── cpx-restaurants/`}
            />
          </Step>

          <Step number={3} title={isEs ? 'Permiso ACE para el editor' : 'Editor ACE permission'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Para usar /restaurantbuilder:' : 'To use /restaurantbuilder:'}
            </p>
            <CodeBlock code={`add_ace identifier.fivem:xxxxx cpx-restaurants.builder allow`} />
          </Step>

          <Step number={4} title={isEs ? 'Inicia el resource' : 'Start the resource'} isLast>
            <CodeBlock code={`ensure cpx-restaurants`} />
            <Callout type="info" title={isEs ? 'Auto-seed' : 'Auto-seed'}>
              {isEs
                ? 'En el primer arranque copia los restaurantes pre-creados en restaurants/*.lua a la base de datos. Los siguientes arranques son no-op.'
                : 'On first boot it copies the pre-shipped restaurants in restaurants/*.lua to the database. Subsequent boots are no-op.'}
            </Callout>
          </Step>
        </motion.section>

        {/* CONFIG */}
        <motion.section
          id="rest-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings2 className="w-6 h-6 text-amber-400" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración interactiva' : 'Interactive configuration'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl">
            {isEs
              ? 'Dos archivos: main.lua (config principal) y progression.lua (XP y tareas). Cambia de tab arriba.'
              : 'Two files: main.lua (core config) and progression.lua (XP and tasks). Switch tabs above.'}
          </p>

          <ConfigGenerator schemas={restaurantsConfigSchemas} accent={ACCENT} />

          <Callout type="info" title={isEs ? 'Novedades v1.11+' : "What's new in v1.11+"}>
            {isEs ? (
              <>
                Tres nuevos grupos en <code>main.lua</code> totalmente editables desde el builder:
                <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[14.5px]">
                  <li><b>Economía y precios</b> — multiplicadores globales para coste de ingredientes / precio de productos, pago base por delivery y rango de propinas.</li>
                  <li><b>Ingredientes globales</b> — añade ingredientes compartidos por todas las recetas con su precio por unidad.</li>
                  <li><b>Ubicaciones de entrega</b> — coordenadas + etiqueta para los puntos de delivery NPC. Una por línea.</li>
                </ul>
                <p className="mt-3">El builder valida el formato y comenta las líneas mal escritas en el output, así no rompes el resource si te equivocas en una coma.</p>
              </>
            ) : (
              <>
                Three new groups in <code>main.lua</code>, fully editable from the builder:
                <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[14.5px]">
                  <li><b>Economy & pricing</b> — global multipliers for ingredient cost / product price, delivery base pay and tip range.</li>
                  <li><b>Global ingredients</b> — shared ingredients across recipes with per-unit price.</li>
                  <li><b>Delivery locations</b> — coords + label for NPC delivery points. One per line.</li>
                </ul>
                <p className="mt-3">The builder validates the format and comments out malformed lines in the output, so a stray comma never breaks your resource.</p>
              </>
            )}
          </Callout>

          <Callout type="info" title={isEs ? 'Sobre animations.lua' : 'About animations.lua'}>
            {isEs
              ? 'animations.lua es una tabla grande de offsets de props y FX (200+ líneas). No la exponemos aquí porque editar offsets via toggles no aporta. Si necesitas modificarla, abre el archivo directamente.'
              : 'animations.lua is a large lookup table of prop offsets and FX (200+ lines). We do not expose it here because editing offsets via toggles is not useful. Open the file directly if you need to.'}
          </Callout>
        </motion.section>

        {/* BUILDER (kept as a separate brief section) */}
        <motion.section
          id="rest-builder"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-5">
            {isEs ? 'Editor in-game' : 'In-game editor'}
          </h2>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed mb-6">
            {isEs
              ? 'Comando /restaurantbuilder. Permite crear restaurantes nuevos, mover POIs (estaciones, sillas, cajas, deliveries) y borrar puntos sin reiniciar el resource. Cambios persistentes en la base de datos.'
              : 'Command /restaurantbuilder. Lets you create new restaurants, move POIs (stations, chairs, boxes, deliveries) and delete points without restarting the resource. Changes persist in the database.'}
          </p>
          <CodeBlock code={`/restaurantbuilder`} />
        </motion.section>

        {/* TROUBLESHOOTING */}
        <motion.section
          id="rest-troubleshoot"
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
              title={
                isEs
                  ? 'No aparecen marcadores ni puntos en el mapa'
                  : 'No markers or POIs show on the map'
              }
            >
              {isEs
                ? 'Confirma en la consola server que viste el log de auto-seed en el primer arranque. Si la BD ya tiene tablas pero está vacía, ejecuta /restaurantbuilder y crea uno desde cero. Revisa también que cpx-restaurants arranque después de tu inventario y de oxmysql.'
                : 'Check the server console for the auto-seed log on first boot. If the DB has tables but is empty, run /restaurantbuilder and create one from scratch. Also ensure cpx-restaurants starts after your inventory and oxmysql.'}
            </Callout>

            <Callout
              type="warning"
              title={
                isEs
                  ? 'El comando /restaurantbuilder no responde'
                  : 'The /restaurantbuilder command does nothing'
              }
            >
              {isEs ? (
                <>
                  Asegúrate de tener el ACE permission añadido a tu identifier:
                  <CodeBlock code={`add_ace identifier.fivem:xxxxx cpx-restaurants.builder allow`} />
                  Reinicia el server después de añadirlo. El comando solo se registra para players con el permiso.
                </>
              ) : (
                <>
                  Make sure the ACE permission is granted to your identifier:
                  <CodeBlock code={`add_ace identifier.fivem:xxxxx cpx-restaurants.builder allow`} />
                  Restart the server after adding it. The command is only registered for players with the perm.
                </>
              )}
            </Callout>

            <Callout
              type="warning"
              title={
                isEs
                  ? 'El target no funciona / no aparecen las opciones'
                  : 'Target does not work / no options appear'
              }
            >
              {isEs
                ? 'cpx-restaurants soporta cpx (built-in), ox_target y qb-target. En Config.target.system pon el que uses, o déjalo en "auto" para que detecte solo. Si tienes varios cargados, gana el primero detectado.'
                : 'cpx-restaurants supports cpx (built-in), ox_target and qb-target. Set Config.target.system to the one you use, or leave it on "auto" for autodetect. If multiple are loaded the first one detected wins.'}
            </Callout>

            <Callout
              type="info"
              title={isEs ? 'Logs de Discord vacíos' : 'Empty Discord logs'}
            >
              {isEs
                ? 'Los webhooks viven en Config.logs.* del archivo main.lua. Pega el webhook completo dentro del string del módulo correspondiente y reinicia el resource.'
                : 'Webhooks live in Config.logs.* of main.lua. Paste the full webhook into the relevant module string and restart the resource.'}
            </Callout>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="27/4/26"
          prev={{ title: 'CPX Laptop', doc: 'laptop' }}
          next={{ title: 'CPX Frames', doc: 'frames' }}
          onSelectDoc={onSelectDoc}
          accentColor="amber"
        />
      </motion.div>
    </div>
  );
}
