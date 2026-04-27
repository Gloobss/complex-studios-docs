import { motion } from 'motion/react';
import {
  Package,
  Image as ImageIcon,
  Printer,
  Frame,
  Languages,
  Shield,
  Globe,
  Sparkles,
  Settings2,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { Step } from '../ui/Step';
import { CodeBlock } from '../ui/CodeBlock';
import { DocFooter } from '../ui/DocFooter';
import { FeatureGrid } from '../ui/FeatureGrid';
import { YouTubeHero } from '../ui/YouTubeHero';
import { ConfigGenerator } from '../ui/ConfigGenerator';
import { framesConfigSchema } from '../../lib/configs/frames-config';
import { useLanguage } from '../../contexts/LanguageContext';
import type { DocType } from '../../App';

const ACCENT = '#a78bfa';

export function FramesDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[13px] font-medium mb-6">
          <Package className="w-4 h-4" />
          <span>v2.0</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Documentación' : 'Documentation'}
          <br />
          <span className="text-zinc-500">— </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
            CPX Frames
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 font-sans max-w-2xl">
          {isEs
            ? 'Imprime imágenes desde URLs, cuelga marcos en cualquier pared y crea slideshows in-game con efecto realista.'
            : 'Print images from URLs, hang frames on any wall, and run in-game slideshows with a realistic effect.'}
        </p>

        <YouTubeHero
          videoId="dIa4zdEXM9c"
          title="CPX Frames preview"
          accent={ACCENT}
          badge={
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
              <ImageIcon className="w-3.5 h-3.5 text-violet-400" />
              {isEs ? 'Demo en vivo' : 'Live demo'}
            </span>
          }
        />

        {/* INTRODUCTION */}
        <motion.section
          id="frames-intro"
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
              ? 'CPX Frames trae a tu servidor una impresora retro de fotos y un sistema de marcos colgables en 3D. Los jugadores pegan una URL, la impresora trabaja en tiempo real con animación, y la foto sale como item del inventario.'
              : 'CPX Frames brings a retro photo printer and a 3D frame placement system to your server. Players paste a URL, the printer animates in real time, and the photo comes out as an inventory item.'}
          </p>
          <p className="text-[15.5px] text-zinc-400 leading-relaxed">
            {isEs
              ? 'Después pueden colgar el marco en cualquier pared con tamaño, rotación y aspect ratio editables al vuelo. Soporta slideshows con cross-fade y reportes auto-moderados por la comunidad.'
              : 'Then they can hang the frame on any wall with size, rotation and aspect ratio editable on the fly. Supports cross-fade slideshows and community-moderated reports.'}
          </p>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          id="frames-features"
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
            {isEs ? 'Lo que entrega out-of-the-box.' : 'What ships out-of-the-box.'}
          </p>
          <FeatureGrid
            features={[
              {
                icon: Printer,
                title: isEs ? 'Impresora retro 3D' : 'Retro 3D printer',
                description: isEs
                  ? 'Prop colocable en el mapa. Animación de impresión sincronizada con el resource.'
                  : 'Placeable map prop. Print animation synced with the resource.',
                colorClass: 'text-violet-400',
                bgClass: 'bg-violet-500/10',
              },
              {
                icon: Frame,
                title: isEs ? 'Cuadros colgables' : 'Hangable frames',
                description: isEs
                  ? 'Cualquier pared, cualquier ángulo. 4 aspect ratios, escalado con scroll.'
                  : 'Any wall, any angle. 4 aspect ratios, scroll-wheel scaling.',
                colorClass: 'text-violet-400',
                bgClass: 'bg-violet-500/10',
              },
              {
                icon: Sparkles,
                title: isEs ? 'Slideshow integrado' : 'Built-in slideshow',
                description: isEs
                  ? 'Hasta 5 URLs por marco con cross-fade automático cada N ms.'
                  : 'Up to 5 URLs per frame with automatic cross-fade every N ms.',
                colorClass: 'text-violet-400',
                bgClass: 'bg-violet-500/10',
              },
              {
                icon: Globe,
                title: isEs ? 'Whitelist de dominios' : 'Domain whitelist',
                description: isEs
                  ? 'Restringe los hosts permitidos (imgur, discordcdn, etc.) para evitar abuso.'
                  : 'Restrict allowed hosts (imgur, discordcdn, etc.) to prevent abuse.',
                colorClass: 'text-violet-400',
                bgClass: 'bg-violet-500/10',
              },
              {
                icon: Languages,
                title: isEs ? 'Multi-idioma' : 'Multi-language',
                description: isEs
                  ? 'Inglés y español built-in. Webhooks de Discord siempre en inglés (admins).'
                  : 'English and Spanish built-in. Discord webhooks always in English (for admins).',
                colorClass: 'text-violet-400',
                bgClass: 'bg-violet-500/10',
              },
              {
                icon: Shield,
                title: isEs ? 'Auto-moderación' : 'Auto-moderation',
                description: isEs
                  ? 'Marcos con N reportes únicos se borran automáticamente. Configurable.'
                  : 'Frames with N unique reports auto-delete. Configurable.',
                colorClass: 'text-violet-400',
                bgClass: 'bg-violet-500/10',
              },
            ]}
          />
        </motion.section>

        {/* INSTALL */}
        <motion.section
          id="frames-install"
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
              {isEs ? 'Tu' : 'Your'}{' '}
              <code className="bg-[#1a1a1a] text-violet-400 px-1.5 py-0.5 rounded text-[13px] font-mono border border-violet-500/20">
                server.cfg
              </code>{' '}
              {isEs ? 'debe tener antes:' : 'must have before:'}
            </p>
            <CodeBlock code={`ensure ox_lib`} />
          </Step>

          <Step number={2} title={isEs ? 'Suelta el resource' : 'Drop the resource'}>
            <p className="mb-4 text-[15px]">
              {isEs ? 'Extrae en una categoría como [standalone]:' : 'Extract under a bracket like [standalone]:'}
            </p>
            <CodeBlock
              code={`resources/
└── [standalone]/
    └── cpx-frames/`}
            />
          </Step>

          <Step number={3} title={isEs ? 'Registra los items' : 'Register the items'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'Por defecto se llaman printer y photo. Copia los snippets desde la carpeta items/ según tu inventario.'
                : "Defaults are printer and photo. Copy the snippets from items/ for your inventory."}
            </p>
            <Callout type="info" title={isEs ? 'Tip' : 'Tip'}>
              {isEs
                ? 'Los nombres son configurables — usa la sección Items en el config builder de abajo.'
                : 'Names are configurable — use the Items section in the config builder below.'}
            </Callout>
          </Step>

          <Step number={4} title={isEs ? 'ACE permission para admin' : 'Admin ACE permission'}>
            <p className="mb-4 text-[15px]">
              {isEs
                ? 'Otorga el permiso para acceder al panel admin (/framesadmin):'
                : 'Grant the admin panel (/framesadmin) permission:'}
            </p>
            <CodeBlock code={`add_ace identifier.fivem:xxxxx cpx-frames.admin allow`} />
          </Step>

          <Step number={5} title={isEs ? 'Inicia el resource' : 'Start the resource'} isLast>
            <CodeBlock code={`ensure cpx-frames`} />
          </Step>
        </motion.section>

        {/* CONFIG */}
        <motion.section
          id="frames-config"
          className="mb-24 scroll-mt-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Settings2 className="w-6 h-6 text-violet-400" />
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              {isEs ? 'Configuración interactiva' : 'Interactive configuration'}
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-2xl">
            {isEs
              ? 'Ajusta los valores con los controles, copia el resultado y reemplaza '
              : 'Tweak the values with the controls below, copy the result and replace '}
            <code className="text-white">shared/config.lua</code>.
          </p>

          <ConfigGenerator schemas={[framesConfigSchema]} accent={ACCENT} />
        </motion.section>

        {/* TROUBLESHOOT */}
        <motion.section
          id="frames-troubleshoot"
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
            <div className="border border-white/[0.05] bg-[#0a0a0a] rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-zinc-500" />
                {isEs ? 'Las imágenes no se cargan' : 'Images not loading'}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>
                  {isEs
                    ? 'Verifica que la URL sea pública y termine en una extensión permitida (.png, .jpg, .jpeg, .webp, .gif).'
                    : 'Make sure the URL is public and ends in an allowed extension (.png, .jpg, .jpeg, .webp, .gif).'}
                </li>
                <li>
                  {isEs
                    ? 'Si tienes whitelist de dominios, confirma que el host esté en Config.AllowedDomains.'
                    : 'If you have a domain whitelist, confirm the host is in Config.AllowedDomains.'}
                </li>
                <li>
                  {isEs
                    ? 'Las redirecciones HTTP no funcionan — necesitas la URL directa de la imagen.'
                    : 'HTTP redirects do not work — you need the direct image URL.'}
                </li>
              </ul>
            </div>

            <div className="border border-amber-500/20 bg-amber-500/[0.02] rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-500" />
                {isEs ? 'No puedo abrir /framesadmin' : "Can't open /framesadmin"}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-400">
                <li>
                  {isEs ? 'Asegúrate de tener el ACE:' : 'Make sure you have the ACE:'}{' '}
                  <code className="text-amber-400">cpx-frames.admin allow</code>
                </li>
                <li>
                  {isEs
                    ? 'Si cambiaste Config.AdminAce, reinicia el resource.'
                    : 'If you changed Config.AdminAce, restart the resource.'}
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <DocFooter
          lastUpdated="27/4/26"
          prev={{ title: 'CPX Restaurants', doc: 'restaurants' }}
          next={{ title: 'Home', doc: 'home' }}
          onSelectDoc={onSelectDoc}
          accentColor="violet"
        />
      </motion.div>
    </div>
  );
}
