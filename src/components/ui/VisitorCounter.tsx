import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

/*
 * VisitorCounter
 * --------------
 * Calls the public Abacus counter API (https://abacus.jasoncameron.dev) to
 * track real visits to the docs site. Free, no auth, no rate limit on us.
 *
 * Behaviour:
 *  - On mount, looks at localStorage[cpx-docs-last-visit].
 *      • If > 24h ago (or never)  → POSTs a hit (counter goes +1)
 *      • Otherwise                → GETs the current value (no increment)
 *    so the same person reloading 50 times only counts once per day.
 *  - The number animates from 0 to the live value with an easeOutCubic
 *    curve so it feels alive instead of just popping in.
 *  - If the network call fails (offline, service down, blocked by an ad
 *    blocker), the component renders nothing — no broken UI.
 *
 * Namespace + key are arbitrary strings unique to this site. They cannot be
 * changed without resetting the counter, so they are kept here as constants.
 */

const NAMESPACE = 'complexstudios';
const KEY = 'docs-visitors';
const HIT = `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`;
const GET = `https://abacus.jasoncameron.dev/get/${NAMESPACE}/${KEY}`;
const STORAGE_KEY = 'cpx-docs-last-visit';
const DAY_MS = 1000 * 60 * 60 * 24;

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [displayed, setDisplayed] = useState(0);
  const [errored, setErrored] = useState(false);

  // 1. Resolve the live counter on mount.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const last = Number(localStorage.getItem(STORAGE_KEY) || '0');
        const now = Date.now();
        const shouldHit = !last || now - last > DAY_MS;

        const res = await fetch(shouldHit ? HIT : GET, {
          method: 'GET',
          // Avoid sending cookies — the API is fully public.
          credentials: 'omit',
          // Short timeout via AbortController so a slow response doesn't
          // block the user's perception of the page being ready.
          signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) throw new Error(`status ${res.status}`);
        const data: { value?: number } = await res.json();
        if (cancelled) return;
        if (typeof data.value !== 'number') throw new Error('bad payload');

        setCount(data.value);
        if (shouldHit) localStorage.setItem(STORAGE_KEY, String(now));
      } catch {
        if (!cancelled) setErrored(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // 2. Count-up animation once we have a target.
  useEffect(() => {
    if (count === null) return;
    const start = 0;
    const duration = 1400;
    const startedAt = performance.now();
    let id = 0;
    const tick = (now: number) => {
      const t = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplayed(Math.floor(start + (count - start) * eased));
      if (t < 1) id = requestAnimationFrame(tick);
      else setDisplayed(count);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [count]);

  if (errored || count === null) return <span className="opacity-30">—</span>;

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="tabular-nums"
    >
      {displayed.toLocaleString('en-US')}
    </motion.span>
  );
}
