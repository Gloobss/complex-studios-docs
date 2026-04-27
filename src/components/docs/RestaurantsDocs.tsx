import { motion } from 'motion/react';
import {
  Package,
  Utensils,
  ChefHat,
  Truck,
  Trophy,
  Wand2,
  Layers,
  Sparkles,
  Settings2,
  Hammer,
  Languages,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { ConfigGenerator } from '../ui/ConfigGenerator';
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

        {/* No video yet — gradient hero placeholder */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-amber-700/20 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04] mix-blend-overlay" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/30 blur-[120px] rounded-full" />
          <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-[0_0_60px_rgba(245,158,11,0.5)]">
              <Utensils className="w-10 h-10 text-black" strokeWidth={2.5} />
            </div>
            <span className="text-white/90 font-display text-2xl tracking-tight uppercase">
              CPX Restaurants
            </span>
            <span className="text-amber-400/80 text-xs font-mono uppercase tracking-[0.3em]">
              {isEs ? 'Demo en video — próximamente' : 'Video demo — coming soon'}
            </span>
          </div>
        </div>

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
