/**
 * Schema for cpx-vipsystem — settings block only.
 * Source of truth: cpx-vipsystem/config/settings.lua, config/server_config.lua
 * and config/mainMenu/buyCoin.lua. Only user-tweakable settings are exposed
 * here — the item catalog, cases, hot deals and coin packages are data and are
 * edited directly in their config files.
 */
import type { ConfigSchema } from '../config-schema';
import {
  luaString,
  luaBool,
  luaNumber,
  luaSection,
} from '../lua';

export const vipsystemConfigSchema: ConfigSchema = {
  fileName: 'config/settings.lua',
  tabLabel: { en: 'settings.lua', es: 'settings.lua' },
  fields: [
    /* ── Framework ───────────────────────── */
    {
      id: 'Framework',
      type: 'select',
      label: { en: 'Framework', es: 'Framework' },
      description: {
        en: 'Only QBCore is supported at this time.',
        es: 'Por ahora solo se soporta QBCore.',
      },
      default: 'qb',
      options: [{ value: 'qb', label: 'qb-core' }],
    },

    /* ── Logs ────────────────────────────── */
    {
      id: 'Debug',
      type: 'boolean',
      label: { en: 'Debug logs', es: 'Logs de debug' },
      description: {
        en: 'Verbose console logging. Enable only while diagnosing.',
        es: 'Logs detallados en consola. Solo activar al diagnosticar.',
      },
      default: false,
    },

    /* ── Commands ────────────────────────── */
    {
      id: 'OpenCommand',
      type: 'string',
      label: { en: 'Store command', es: 'Comando de la tienda' },
      description: {
        en: 'Opens the VIP storefront. /<command>.',
        es: 'Abre la tienda VIP. /<comando>.',
      },
      default: 'vipshop',
      placeholder: 'vipshop',
    },
    {
      id: 'CasesCommand',
      type: 'string',
      label: { en: 'Cases command', es: 'Comando de cajas' },
      description: {
        en: 'Opens the mystery cases view. /<command>.',
        es: 'Abre la vista de cajas misteriosas. /<comando>.',
      },
      default: 'cajasvip',
      placeholder: 'cajasvip',
    },

    /* ── Items ───────────────────────────── */
    {
      id: 'WeaponsAreItem',
      type: 'boolean',
      label: { en: 'Weapons are items', es: 'Armas como items' },
      description: {
        en: 'Treat weapons as inventory items (ox_inventory compatible).',
        es: 'Trata las armas como items del inventario (compatible ox_inventory).',
      },
      default: true,
    },

    /* ── Test Drive ──────────────────────── */
    {
      id: 'TestDrive',
      type: 'group',
      label: { en: 'Test drive', es: 'Prueba de manejo' },
      fields: [
        {
          id: 'TestDrive_enabled',
          type: 'boolean',
          label: { en: 'Enabled', es: 'Activado' },
          description: {
            en: 'Let players test-drive vehicles before buying.',
            es: 'Deja que los jugadores prueben los vehículos antes de comprar.',
          },
          default: true,
        },
        {
          id: 'TestDrive_time',
          type: 'slider',
          label: { en: 'Duration (seconds)', es: 'Duración (segundos)' },
          default: 30,
          min: 10,
          max: 120,
          step: 5,
          unit: 's',
        },
      ],
    },

    /* ── Playtime reward ─────────────────── */
    {
      id: 'PlayTimeReward',
      type: 'group',
      label: { en: 'Playtime reward', es: 'Recompensa por tiempo de juego' },
      description: {
        en: 'Drip-feed coins to players for staying online.',
        es: 'Entrega coins a los jugadores por mantenerse conectados.',
      },
      fields: [
        {
          id: 'PlayTimeReward_enabled',
          type: 'boolean',
          label: { en: 'Enabled', es: 'Activado' },
          default: true,
        },
        {
          id: 'PlayTimeReward_interval',
          type: 'slider',
          label: { en: 'Interval (minutes)', es: 'Intervalo (minutos)' },
          default: 60,
          min: 5,
          max: 240,
          step: 5,
          unit: 'min',
        },
        {
          id: 'PlayTimeReward_amount',
          type: 'slider',
          label: { en: 'Coins per interval', es: 'Coins por intervalo' },
          default: 6,
          min: 1,
          max: 100,
          step: 1,
        },
      ],
    },

    /* ── Rate limits ─────────────────────── */
    {
      id: 'RateLimits',
      type: 'group',
      label: { en: 'Rate limits', es: 'Límites anti-spam' },
      description: {
        en: 'Milliseconds a player must wait between actions.',
        es: 'Milisegundos que un jugador debe esperar entre acciones.',
      },
      fields: [
        {
          id: 'RateLimits_purchase',
          type: 'slider',
          label: { en: 'Purchase (ms)', es: 'Compra (ms)' },
          default: 2000,
          min: 500,
          max: 10000,
          step: 250,
          unit: 'ms',
        },
        {
          id: 'RateLimits_caseOpen',
          type: 'slider',
          label: { en: 'Case open (ms)', es: 'Abrir caja (ms)' },
          default: 5000,
          min: 500,
          max: 15000,
          step: 250,
          unit: 'ms',
        },
        {
          id: 'RateLimits_codeRedeem',
          type: 'slider',
          label: { en: 'Code redeem (ms)', es: 'Canjear código (ms)' },
          default: 3000,
          min: 500,
          max: 15000,
          step: 250,
          unit: 'ms',
        },
      ],
    },

    /* ── Server / integrations ───────────── */
    {
      id: 'server',
      type: 'group',
      label: { en: 'Server keys & webhook', es: 'Claves y webhook del servidor' },
      description: {
        en: 'Lives in config/server_config.lua. Keep these private.',
        es: 'Vive en config/server_config.lua. Mantené estos valores privados.',
      },
      fields: [
        {
          id: 'DiscordWebhook',
          type: 'string',
          label: { en: 'Discord webhook URL', es: 'URL del webhook de Discord' },
          description: {
            en: 'Logs purchases and case openings. Empty = disabled.',
            es: 'Registra compras y aperturas de cajas. Vacío = desactivado.',
          },
          default: '',
          placeholder: 'https://discord.com/api/webhooks/...',
        },
        {
          id: 'SteamApiKey',
          type: 'string',
          label: { en: 'Steam API key', es: 'Clave de Steam API' },
          description: {
            en: 'Used to fetch profile images. Empty = disabled.',
            es: 'Se usa para obtener imágenes de perfil. Vacío = desactivado.',
          },
          default: '',
          placeholder: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        },
        {
          id: 'TebexSecret',
          type: 'string',
          label: { en: 'Tebex secret key', es: 'Clave secreta de Tebex' },
          description: {
            en: 'Verifies coin top-up purchases. Better set via sv_tebexSecret in server.cfg.',
            es: 'Verifica las recargas de coins. Mejor configurarla con sv_tebexSecret en server.cfg.',
          },
          default: '',
          placeholder: 'your-tebex-secret',
        },
      ],
    },
  ],

  toLua(v) {
    const out: string[] = [];
    out.push(`--[[
    cpx-vipsystem — settings
    Complex Studios

    Generated by the interactive Configuration Builder.
    Paste the settings block into config/settings.lua and the keys block into
    config/server_config.lua. The item catalog, cases, hot deals and coin
    packages stay in their own config files untouched.

    Restart the resource after changes.
]]\n`);
    out.push('CPX = CPX or {}\n');

    out.push(luaSection('FRAMEWORK & DATABASE'));
    out.push(`CPX.Framework = ${luaString(v.Framework)}`);
    out.push(`CPX.Mysql     = 'oxmysql'\n`);

    out.push(luaSection('LOGS'));
    out.push(`CPX.Debug = ${luaBool(v.Debug)}\n`);

    out.push(luaSection('COMMANDS'));
    out.push(`CPX.OpenCommand  = ${luaString(v.OpenCommand)}`);
    out.push(`CPX.CasesCommand = ${luaString(v.CasesCommand)}\n`);

    out.push(luaSection('ITEMS'));
    out.push(`CPX.WeaponsAreItem = ${luaBool(v.WeaponsAreItem)}\n`);

    out.push(luaSection('TEST DRIVE'));
    out.push(`CPX.TestDrive = {`);
    out.push(`    enabled = ${luaBool(v.TestDrive_enabled)},`);
    out.push(`    time    = ${luaNumber(v.TestDrive_time)}, -- seconds`);
    out.push(`    coords  = vector4(-50.53, -1116.43, 26.43, 70.39),`);
    out.push(`}\n`);

    out.push(luaSection('PLAYTIME REWARD'));
    out.push(`CPX.PlayTimeReward = {`);
    out.push(`    enabled  = ${luaBool(v.PlayTimeReward_enabled)},`);
    out.push(`    interval = ${luaNumber(v.PlayTimeReward_interval)}, -- minutes`);
    out.push(`    amount   = ${luaNumber(v.PlayTimeReward_amount)},    -- coins per interval`);
    out.push(`}\n`);

    out.push(luaSection('RATE LIMITS (ms) — ANTI-SPAM'));
    out.push(`CPX.RateLimits = {`);
    out.push(`    purchase   = ${luaNumber(v.RateLimits_purchase)},`);
    out.push(`    caseOpen   = ${luaNumber(v.RateLimits_caseOpen)},`);
    out.push(`    codeRedeem = ${luaNumber(v.RateLimits_codeRedeem)},`);
    out.push(`}\n`);

    out.push(luaSection('SERVER KEYS & WEBHOOK — config/server_config.lua'));
    out.push(`CPX.DiscordWebhook = ${luaString(v.DiscordWebhook)}`);
    out.push(`CPX.SteamApiKey    = ${luaString(v.SteamApiKey)}`);
    out.push(`CPX.TebexSecret    = ${luaString(v.TebexSecret)}`);

    return out.join('\n');
  },
};
