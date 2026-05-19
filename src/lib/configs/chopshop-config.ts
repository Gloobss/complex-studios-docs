/**
 * Schema for cpx-chopshop / config.lua
 * Source of truth: resources/[illegal]/cpx-chopshop/config.lua
 * Surface here only the user-facing knobs that admins regularly tune.
 * The toLua() output mirrors the relevant block of config.lua.
 */
import type { ConfigSchema } from '../config-schema';
import { luaString, luaNumber, luaBool } from '../lua';

export const chopshopConfigSchema: ConfigSchema = {
  fileName: 'config.lua',
  tabLabel: { en: 'config.lua', es: 'config.lua' },
  fields: [
    /* ── Framework ───────────────────────── */
    {
      id: 'framework',
      type: 'select',
      label: { en: 'Framework', es: 'Framework' },
      description: {
        en: "'auto' detects qb-core / qbx_core / es_extended in that order.",
        es: "'auto' detecta qb-core / qbx_core / es_extended en ese orden.",
      },
      default: 'auto',
      options: [
        { value: 'auto', label: 'auto (recommended)' },
        { value: 'qb', label: 'qb-core' },
        { value: 'qbx', label: 'qbx_core' },
        { value: 'esx', label: 'es_extended' },
        { value: 'standalone', label: 'standalone' },
      ],
    },

    /* ── Target adapter ──────────────────── */
    {
      id: 'target',
      type: 'select',
      label: { en: 'Target adapter', es: 'Adaptador de target' },
      description: {
        en: 'Which target system the interact prompts use.',
        es: 'Qué sistema de target usan los prompts.',
      },
      default: 'cpx',
      options: [
        { value: 'cpx', label: 'cpx (built-in 3D interact)' },
        { value: 'ox_target', label: 'ox_target' },
        { value: 'qb-target', label: 'qb-target' },
        { value: 'custom', label: 'custom (implement bridge/target/custom.lua)' },
      ],
    },

    /* ── Language ────────────────────────── */
    {
      id: 'Locale',
      type: 'select',
      label: { en: 'Default language', es: 'Idioma por defecto' },
      description: {
        en: 'Falls back to es if a key is missing in the active locale.',
        es: 'Cae a es si una clave falta en el locale activo.',
      },
      default: 'es',
      options: [
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'English' },
      ],
    },

    /* ── Money ───────────────────────────── */
    {
      id: 'moneyType',
      type: 'select',
      label: { en: 'Money account', es: 'Cuenta de dinero' },
      description: {
        en: 'Where contract payouts land.',
        es: 'Dónde aterriza el pago de los contratos.',
      },
      default: 'cash',
      options: [
        { value: 'cash', label: 'cash' },
        { value: 'bank', label: 'bank' },
      ],
    },

    {
      id: 'debug',
      type: 'boolean',
      label: { en: 'Debug logs', es: 'Logs de debug' },
      description: {
        en: 'Verbose prints. Leave OFF in production.',
        es: 'Logs detallados. DEJAR OFF en producción.',
      },
      default: false,
    },

    /* ── Pacing ──────────────────────────── */
    {
      id: 'pacing',
      type: 'group',
      label: { en: 'Pacing', es: 'Pacing' },
      fields: [
        {
          id: 'contractTimeLimit',
          type: 'slider',
          label: { en: 'Contract time limit (min)', es: 'Tiempo del contrato (min)' },
          description: {
            en: 'Minutes the player has to find the contracted vehicle.',
            es: 'Minutos que tiene el jugador para encontrar el vehículo.',
          },
          default: 30,
          min: 5,
          max: 90,
          step: 5,
        },
        {
          id: 'completeDistance',
          type: 'slider',
          label: { en: 'Delivery distance (m)', es: 'Distancia entrega (m)' },
          description: {
            en: 'Meters from the drop zone that count as "delivered".',
            es: 'Metros desde el drop que cuentan como entregado.',
          },
          default: 8,
          min: 3,
          max: 25,
          step: 1,
        },
        {
          id: 'scrapPayback',
          type: 'slider',
          label: { en: 'Scrap payback %', es: 'Retorno de deshueso %' },
          description: {
            en: 'Fraction of vehicle price returned as scrap reward.',
            es: 'Fracción del precio devuelta como recompensa por deshueso.',
          },
          default: 0.55,
          min: 0.2,
          max: 1.0,
          step: 0.05,
        },
        {
          id: 'dispatchTimeout',
          type: 'slider',
          label: { en: 'Dispatch timeout (sec)', es: 'Timeout de dispatch (s)' },
          description: {
            en: 'Failsafe — clears stuck operations after N seconds.',
            es: 'Salvaguarda — limpia operaciones colgadas tras N segundos.',
          },
          default: 900,
          min: 300,
          max: 3600,
          step: 60,
        },
      ],
    },

    /* ── Warehouse Raid ──────────────────── */
    {
      id: 'warehouseRaid',
      type: 'group',
      label: { en: 'Police raids', es: 'Redadas policiales' },
      fields: [
        {
          id: 'raidEnabled',
          type: 'boolean',
          label: { en: 'Raids enabled', es: 'Redadas habilitadas' },
          description: {
            en: 'Periodically rolls a chance to raid a cooling vehicle.',
            es: 'Periódicamente rolea probabilidad de allanar un coche.',
          },
          default: true,
        },
        {
          id: 'raidBaseChance',
          type: 'slider',
          label: { en: 'Base chance per hour', es: 'Probabilidad base por hora' },
          description: {
            en: '0.005 = 0.5% per cooling vehicle per hour.',
            es: '0.005 = 0.5% por vehículo en cooling por hora.',
          },
          default: 0.005,
          min: 0,
          max: 0.05,
          step: 0.001,
        },
        {
          id: 'raidNotifyWindow',
          type: 'slider',
          label: { en: 'Defend window (sec)', es: 'Ventana para defender (s)' },
          description: {
            en: 'How long the player has to defend before auto-confiscate.',
            es: 'Tiempo que tiene el jugador para defender antes de la confiscación.',
          },
          default: 300,
          min: 60,
          max: 900,
          step: 30,
        },
        {
          id: 'raidDefendReward',
          type: 'slider',
          label: { en: 'Defend bonus %', es: 'Bono al defender %' },
          description: {
            en: '+20% sell price for a successfully defended vehicle.',
            es: '+20% al precio de venta si defendiste exitosamente.',
          },
          default: 0.20,
          min: 0,
          max: 0.5,
          step: 0.05,
        },
      ],
    },

    /* ── Storage Fee ──────────────────────── */
    {
      id: 'storageFee',
      type: 'group',
      label: { en: 'Storage fee', es: 'Multa de almacenaje' },
      fields: [
        {
          id: 'feeEnabled',
          type: 'boolean',
          label: { en: 'Fee enabled', es: 'Multa habilitada' },
          description: {
            en: 'Charges a daily fee on ready vehicles after the grace period.',
            es: 'Cobra multa diaria a vehículos listos tras el período de gracia.',
          },
          default: true,
        },
        {
          id: 'feeGracePeriod',
          type: 'slider',
          label: { en: 'Grace period (hours)', es: 'Período de gracia (horas)' },
          description: {
            en: 'Hours after the vehicle is ready before fees start accruing.',
            es: 'Horas tras estar listo antes de que empiece la multa.',
          },
          default: 48,
          min: 1,
          max: 168,
          step: 1,
        },
        {
          id: 'feeDailyPercent',
          type: 'slider',
          label: { en: 'Daily fee %', es: 'Multa diaria %' },
          description: {
            en: 'Fraction of sell price charged per day past grace.',
            es: 'Fracción del precio de venta cobrada por día tras gracia.',
          },
          default: 0.05,
          min: 0,
          max: 0.5,
          step: 0.01,
        },
      ],
    },

    /* ── Cooling decay ───────────────────── */
    {
      id: 'coolingDecay',
      type: 'group',
      label: { en: 'Cooling decay (opt-in)', es: 'Decay durante cooling (opt-in)' },
      fields: [
        {
          id: 'decayEnabled',
          type: 'boolean',
          label: { en: 'Decay enabled', es: 'Decay habilitado' },
          description: {
            en: 'Engine & body slowly drop while the car waits in cooling.',
            es: 'Engine y body bajan lento mientras el coche está en cooling.',
          },
          default: false,
        },
        {
          id: 'decayEnginePerHour',
          type: 'slider',
          label: { en: 'Engine drop / hour', es: 'Caída de engine / hora' },
          description: {
            en: 'Points per hour the engine value decays.',
            es: 'Puntos por hora que cae el engine.',
          },
          default: 0.5,
          min: 0,
          max: 5,
          step: 0.1,
        },
        {
          id: 'decayBodyPerHour',
          type: 'slider',
          label: { en: 'Body drop / hour', es: 'Caída de body / hora' },
          description: {
            en: 'Points per hour the body value decays.',
            es: 'Puntos por hora que cae el body.',
          },
          default: 0.3,
          min: 0,
          max: 5,
          step: 0.1,
        },
      ],
    },
  ],

  toLua: (values) => {
    // buildDefaults() flattens group fields onto the top-level values map,
    // so every field id is reachable as values[id] regardless of nesting.
    const get = <T>(id: string, def: T): T => {
      const v = values[id];
      return (v === undefined || v === null) ? def : (v as T);
    };

    return [
      '-- ════════════════════════════════════════════',
      '-- CPX Chopshop · config.lua (interactive output)',
      '-- ════════════════════════════════════════════',
      `Config = Config or {}`,
      ``,
      `Config.framework = ${luaString(get('framework', 'auto'))}`,
      `Config.target    = ${luaString(get('target', 'cpx'))}`,
      `Config.Locale    = ${luaString(get('Locale', 'es'))}`,
      `Config.moneyType = ${luaString(get('moneyType', 'cash'))}`,
      `Config.debug     = ${luaBool(get('debug', false))}`,
      ``,
      `-- Pacing`,
      `Config.contractTimeLimit = ${luaNumber(get('contractTimeLimit', 30))} * 60`,
      `Config.completeDistance  = ${luaNumber(get('completeDistance', 8))}`,
      `Config.scrapPayback      = ${luaNumber(get('scrapPayback', 0.55))}`,
      `Config.dispatchTimeout   = ${luaNumber(get('dispatchTimeout', 900))}`,
      ``,
      `-- Warehouse raids`,
      `Config.warehouseRaid = {`,
      `    enabled        = ${luaBool(get('raidEnabled', true))},`,
      `    baseChance     = ${luaNumber(get('raidBaseChance', 0.005))},`,
      `    heatMultiplier = 0.0008,`,
      `    capChance      = 0.10,`,
      `    rollIntervalMs = 300000,`,
      `    notifyWindow   = ${luaNumber(get('raidNotifyWindow', 300))},`,
      `    defendReward   = ${luaNumber(get('raidDefendReward', 0.20))},`,
      `    insurance = { enabled = false, costPercent = 0.05, payoutPercent = 0.40 },`,
      `}`,
      ``,
      `-- Storage fee`,
      `Config.storageFee = {`,
      `    enabled         = ${luaBool(get('feeEnabled', true))},`,
      `    gracePeriod     = ${luaNumber(get('feeGracePeriod', 48))} * 60 * 60,`,
      `    dailyPercent    = ${luaNumber(get('feeDailyPercent', 0.05))},`,
      `    confiscateAfter = 7 * 24 * 60 * 60,`,
      `}`,
      ``,
      `-- Cooling decay (opt-in)`,
      `Config.coolingDecay = {`,
      `    enabled       = ${luaBool(get('decayEnabled', false))},`,
      `    enginePerHour = ${luaNumber(get('decayEnginePerHour', 0.5))},`,
      `    bodyPerHour   = ${luaNumber(get('decayBodyPerHour', 0.3))},`,
      `    fuelPerHour   = 0.0,`,
      `    floor         = 50,`,
      `}`,
    ].join('\n');
  },
};
