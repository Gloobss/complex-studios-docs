import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import {
  Scale,
  Ban,
  LifeBuoy,
  FileWarning,
  KeyRound,
  CreditCard,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { Callout } from '../ui/Callout';
import { DocFooter } from '../ui/DocFooter';
import { useLanguage } from '../../contexts/LanguageContext';
import { brand } from '../../lib/brand';
import type { DocType } from '../../App';

const LIMA = '#c6ff3d';
const AMBER = '#f59e0b';

/**
 * A single numbered policy clause. `critical` flips the accent to amber so
 * the legally-sensitive clauses (no refunds, chargebacks) visually outrank
 * the rest, while the page keeps the site's lima identity everywhere else.
 */
function Clause({
  id,
  n,
  icon: Icon,
  title,
  critical = false,
  children,
}: {
  id: string;
  n: string;
  icon: typeof Scale;
  title: string;
  critical?: boolean;
  children: ReactNode;
}) {
  const accent = critical ? AMBER : LIMA;
  return (
    <motion.section
      id={id}
      className="mb-10 scroll-mt-[12vh]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex gap-5 md:gap-7">
        {/* Number plate */}
        <div className="flex-shrink-0">
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border bg-[#0c0c0c]"
            style={{
              borderColor: `${accent}33`,
              boxShadow: `inset 0 0 24px ${accent}14`,
            }}
          >
            <span
              className="font-display font-black text-lg md:text-xl tracking-tight"
              style={{ color: accent }}
            >
              {n}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 min-w-0 pt-0.5">
          <div className="flex items-center gap-2.5 mb-3">
            <Icon className="w-[18px] h-[18px]" style={{ color: accent }} />
            <h2 className="text-[1.45rem] md:text-[1.7rem] font-bold text-white tracking-tight font-display leading-tight">
              {title}
            </h2>
          </div>
          <div className="text-[15.5px] text-zinc-400 leading-relaxed font-sans space-y-4">
            {children}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function RulesDocs({ onSelectDoc }: { onSelectDoc: (doc: DocType) => void }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c6ff3d]/10 border border-[#c6ff3d]/30 text-[#c6ff3d] text-[13px] font-medium mb-6">
          <Scale className="w-4 h-4" />
          <span>{isEs ? 'Legal' : 'Legal'}</span>
        </div>

        <h1 className="text-[2.75rem] md:text-[3.5rem] leading-[1.05] font-bold text-white tracking-tighter mb-6 font-display">
          {isEs ? 'Reglas' : 'Rules'}
          <span className="text-zinc-500"> &amp; </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c6ff3d] to-[#8de000]">
            {isEs ? 'Políticas' : 'Policies'}
          </span>
        </h1>

        <p className="text-[17px] text-zinc-400 leading-relaxed mb-8 font-sans max-w-2xl">
          {isEs
            ? 'Términos que rigen la compra y el uso de cualquier producto de Complex Studios. Leelos antes de comprar: al completar tu pago, aceptás todo lo que está a continuación.'
            : 'Terms that govern the purchase and use of any Complex Studios product. Read them before buying — by completing your payment, you accept everything below.'}
        </p>

        {/* Headline policy — the one nobody can claim they missed. */}
        <Callout
          type="warning"
          title={isEs ? 'Todas las ventas son finales' : 'All sales are final'}
        >
          {isEs
            ? 'No realizamos reembolsos, cambios, créditos ni devoluciones de ningún tipo una vez completada la compra. Sin excepciones.'
            : 'We do not issue refunds, exchanges, credits or returns of any kind once the purchase is completed. No exceptions.'}
        </Callout>

        {/* ── CLAUSES ─────────────────────── */}
        <div className="mt-14">
          <Clause
            id="rules-refunds"
            n="01"
            icon={Ban}
            critical
            title={isEs ? 'Sin reembolsos' : 'No refunds'}
          >
            <p>
              {isEs
                ? 'Todos los productos son digitales, con entrega instantánea y acceso permanente a los archivos. Por su naturaleza, una vez completada la compra el producto no puede "devolverse".'
                : 'All products are digital, with instant delivery and permanent access to the files. By their nature, once the purchase is completed the product cannot be "returned".'}
            </p>
            <p>
              {isEs
                ? 'Por ello, todas las ventas son finales y no ofrecemos reembolsos, créditos, cambios ni devoluciones bajo ninguna circunstancia. Al comprar, reconocés y aceptás de forma expresa que renunciás a cualquier derecho de reembolso, incluido el derecho de desistimiento, en la medida en que la ley lo permita para bienes digitales de entrega inmediata.'
                : 'Therefore, all sales are final and we do not offer refunds, credits, exchanges or returns under any circumstance. By purchasing, you expressly acknowledge and agree that you waive any right to a refund, including the right of withdrawal, to the extent the law allows it for instantly-delivered digital goods.'}
            </p>
          </Clause>

          <Clause
            id="rules-support"
            n="02"
            icon={LifeBuoy}
            title={isEs ? 'Soporte' : 'Support'}
          >
            <p>
              {isEs
                ? 'Brindamos soporte técnico exclusivamente a través de nuestro servidor de Discord oficial. Para recibir ayuda, abrí un ticket e incluí tu comprobante de compra de Tebex.'
                : 'We provide technical support exclusively through our official Discord server. To get help, open a ticket and include your Tebex purchase proof.'}
            </p>
            <p>
              {isEs
                ? 'El soporte cubre la instalación, la configuración y la corrección de errores del producto sin modificar. No incluye desarrollo a medida, integraciones con scripts de terceros ni asistencia sobre versiones alteradas.'
                : 'Support covers installation, configuration and fixing bugs in the unmodified product. It does not include custom development, third-party script integrations or assistance on altered versions.'}
            </p>
            <a
              href={brand.urls.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-1 px-5 py-2.5 rounded-full border border-white/15 text-white text-[14px] font-medium hover:border-[#c6ff3d]/40 hover:bg-[#c6ff3d]/[0.05] transition-colors"
            >
              <LifeBuoy className="w-4 h-4 text-[#c6ff3d]" />
              {isEs ? 'Abrir un ticket en Discord' : 'Open a ticket on Discord'}
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Clause>

          <Clause
            id="rules-modifications"
            n="03"
            icon={FileWarning}
            title={isEs ? 'Modificaciones externas' : 'External modifications'}
          >
            <p>
              {isEs
                ? 'No nos hacemos responsables de fallos, pérdidas de datos, conflictos ni comportamientos inesperados derivados de modificaciones realizadas al código por el comprador o por terceros.'
                : 'We are not responsible for failures, data loss, conflicts or unexpected behaviour resulting from modifications made to the code by the buyer or third parties.'}
            </p>
            <p>
              {isEs
                ? 'Cualquier archivo editado fuera de las opciones previstas en la configuración queda fuera del alcance del soporte. Te recomendamos conservar siempre una copia original antes de modificar nada.'
                : 'Any file edited outside the options provided in the configuration falls outside the scope of support. We always recommend keeping an original copy before changing anything.'}
            </p>
          </Clause>

          <Clause
            id="rules-license"
            n="04"
            icon={KeyRound}
            title={isEs ? 'Licencia y uso' : 'License & usage'}
          >
            <p>
              {isEs
                ? 'Cada compra otorga una licencia de uso personal e intransferible sobre el producto. Está prohibida la reventa, redistribución, compartición, filtración o publicación del código, total o parcial.'
                : 'Each purchase grants a personal, non-transferable license to use the product. Reselling, redistributing, sharing, leaking or publishing the code — in whole or in part — is prohibited.'}
            </p>
            <p>
              {isEs
                ? 'Los productos protegidos con escrow permanecen encriptados; intentar eludir o romper dicha protección viola estos términos y revoca la licencia.'
                : 'Escrow-protected products remain encrypted; attempting to bypass or break that protection violates these terms and revokes the license.'}
            </p>
          </Clause>

          <Clause
            id="rules-chargebacks"
            n="05"
            icon={CreditCard}
            critical
            title={isEs ? 'Contracargos y disputas' : 'Chargebacks & disputes'}
          >
            <p>
              {isEs
                ? 'Iniciar un contracargo (chargeback) o una disputa de pago sin contactarnos antes resultará en la revocación inmediata de la licencia y en el baneo permanente de nuestros servicios, productos y servidor de Discord.'
                : 'Initiating a chargeback or payment dispute without contacting us first will result in immediate license revocation and a permanent ban from our services, products and Discord server.'}
            </p>
            <p>
              {isEs
                ? 'Si tenés un problema con tu compra, abrí un ticket: siempre vamos a ayudarte a resolverlo.'
                : 'If you have a problem with your purchase, open a ticket — we will always help you resolve it.'}
            </p>
          </Clause>

          <Clause
            id="rules-acceptance"
            n="06"
            icon={ShieldCheck}
            title={isEs ? 'Aceptación de los términos' : 'Acceptance of terms'}
          >
            <p>
              {isEs
                ? 'El uso o la compra de cualquier producto implica la aceptación plena de estas reglas. Complex Studios puede actualizar estas políticas en cualquier momento; la versión vigente es siempre la publicada en esta página.'
                : 'Using or purchasing any product implies full acceptance of these rules. Complex Studios may update these policies at any time; the version in force is always the one published on this page.'}
            </p>
            <p>
              {isEs
                ? 'Estas condiciones no afectan los derechos irrenunciables que pueda otorgarte la legislación de tu país.'
                : 'These terms do not affect any non-waivable rights granted to you by the laws of your country.'}
            </p>
          </Clause>
        </div>

        <Callout type="info" title={isEs ? '¿Dudas antes de comprar?' : 'Questions before buying?'}>
          {isEs
            ? 'Escribinos en Discord antes de pagar. Preferimos resolver cualquier duda de antemano que dejarte con un producto que no encaja con tu servidor.'
            : 'Reach out on Discord before you pay. We would rather clear up any doubt up front than leave you with a product that does not fit your server.'}
        </Callout>

        <DocFooter lastUpdated="2026-05-21" onSelectDoc={onSelectDoc} accentColor="lima" />
      </motion.div>
    </div>
  );
}
