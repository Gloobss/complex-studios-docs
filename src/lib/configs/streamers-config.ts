/**
 * Schema for cpx-streamers — settings head only.
 * Source of truth: cpx-streamers/shared/config.lua (settings block at the top).
 * Only the user-tweakable head is exposed here. Config.Tiers, Config.Achievements,
 * Config.MonthlyPackages, Config.Normativas and the rest stay in config.lua below
 * and are edited directly (or live from the in-game admin panel).
 */
import type { ConfigSchema } from '../config-schema';
import { luaString, luaBool, luaNumber, luaSection } from '../lua';

export const streamersConfigSchema: ConfigSchema = {
  fileName: 'shared/config.lua',
  tabLabel: { en: 'config.lua', es: 'config.lua' },
  fields: [
    /* ── Locale ──────────────────────────── */
    {
      id: 'Locale',
      type: 'select',
      label: { en: 'Language', es: 'Idioma' },
      description: {
        en: 'Language for every in-game message and the whole UI.',
        es: 'Idioma de cada mensaje in-game y de toda la interfaz.',
      },
      default: 'es',
      options: [
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'English' },
      ],
    },

    /* ── Framework ───────────────────────── */
    {
      id: 'Framework',
      type: 'select',
      label: { en: 'Framework', es: 'Framework' },
      description: {
        en: 'Leave on auto to detect QBCore/QBX/ESX. Force one only if detection fails.',
        es: 'Dejalo en auto para detectar QBCore/QBX/ESX. Forzá uno solo si la detección falla.',
      },
      default: 'auto',
      options: [
        { value: 'auto', label: { en: 'Auto-detect', es: 'Auto-detectar' } },
        { value: 'qb', label: 'QBCore' },
        { value: 'qbx', label: 'Qbox (QBX)' },
        { value: 'esx', label: 'ESX' },
        { value: 'standalone', label: { en: 'Standalone', es: 'Standalone' } },
      ],
    },

    /* ── Inventory ───────────────────────── */
    {
      id: 'Inventory',
      type: 'select',
      label: { en: 'Inventory', es: 'Inventario' },
      description: {
        en: 'Leave on auto to detect the running inventory. Only needed for box/item rewards.',
        es: 'Dejalo en auto para detectar el inventario activo. Solo se usa para recompensas de caja/item.',
      },
      default: 'auto',
      options: [
        { value: 'auto', label: { en: 'Auto-detect', es: 'Auto-detectar' } },
        { value: 'ox', label: 'ox_inventory' },
        { value: 'qb', label: 'qb-inventory' },
        { value: 'esx', label: 'ESX' },
      ],
    },

    /* ── Commands ────────────────────────── */
    {
      id: 'cmdStreamer',
      type: 'string',
      label: { en: 'Streamer command', es: 'Comando del streamer' },
      description: {
        en: 'Command a creator types to open their dashboard. /<command>.',
        es: 'Comando que el creador escribe para abrir su panel. /<comando>.',
      },
      default: 'streamer',
      placeholder: 'streamer',
    },
    {
      id: 'cmdAdmin',
      type: 'string',
      label: { en: 'Admin command', es: 'Comando admin' },
      description: {
        en: 'Command staff types to open the admin panel. Gated by the ACE permission below.',
        es: 'Comando que el staff escribe para abrir el panel admin. Protegido por el permiso ACE de abajo.',
      },
      default: 'adminstreamers',
      placeholder: 'adminstreamers',
    },

    /* ── Permission ──────────────────────── */
    {
      id: 'AdminPermission',
      type: 'string',
      label: { en: 'Admin ACE permission', es: 'Permiso ACE admin' },
      description: {
        en: 'ACE object required to open the admin panel. Grant it with add_ace in server.cfg.',
        es: 'Objeto ACE requerido para abrir el panel admin. Otorgalo con add_ace en server.cfg.',
      },
      default: 'cpx.streamers.admin',
      placeholder: 'cpx.streamers.admin',
    },

    /* ── Cycle ───────────────────────────── */
    {
      id: 'CycleDurationDays',
      type: 'slider',
      label: { en: 'Cycle length', es: 'Duración del ciclo' },
      description: {
        en: 'How many days a reward cycle lasts before it resets.',
        es: 'Cuántos días dura un ciclo de recompensas antes de reiniciarse.',
      },
      default: 30,
      min: 1,
      max: 90,
      step: 1,
      unit: ' days',
    },
    {
      id: 'MaxRewardsPerCycle',
      type: 'slider',
      label: { en: 'Max rewards / cycle', es: 'Tope recompensas / ciclo' },
      description: {
        en: 'Hard cap of Battle Pass rewards a creator can claim per cycle. 0 = unlimited.',
        es: 'Tope duro de recompensas del Battle Pass que un creador puede reclamar por ciclo. 0 = ilimitado.',
      },
      default: 0,
      min: 0,
      max: 150,
      step: 1,
    },
    {
      id: 'ClaimInterval',
      type: 'slider',
      label: { en: 'Claim interval', es: 'Intervalo de claim' },
      description: {
        en: 'Active stream hours needed to earn one claim toward the monthly package.',
        es: 'Horas de stream activas para ganar un claim hacia el paquete mensual.',
      },
      default: 3,
      min: 1,
      max: 24,
      step: 1,
      unit: ' h',
    },

    /* ── Logs ────────────────────────────── */
    {
      id: 'Debug',
      type: 'boolean',
      label: { en: 'Debug logs', es: 'Logs de debug' },
      description: {
        en: 'Verbose console logging. Keep off on a live server.',
        es: 'Logs detallados en consola. Mantenelo apagado en un servidor en producción.',
      },
      default: false,
    },
  ],

  toLua(v) {
    const out: string[] = [];
    out.push(`--[[
    cpx-streamers — config head
    Complex Studios

    Generated by the interactive Configuration Builder.
    Paste this block at the TOP of shared/config.lua, replacing the existing
    settings head (down to Config.Cycle). Restart the resource after changes.
    Config.Tiers, Config.Achievements and the rest stay below and can also be
    edited live from the in-game admin panel.
]]\n`);
    out.push('Config = {}\n');

    out.push(luaSection('MAIN SETTINGS'));
    out.push(`Config.Locale    = ${luaString(v.Locale)}   -- 'es' | 'en'`);
    out.push(`Config.Framework = ${luaString(v.Framework)} -- auto | qb | qbx | esx | standalone`);
    out.push(`Config.Inventory = ${luaString(v.Inventory)} -- auto | ox | qb | esx\n`);

    out.push(luaSection('COMMANDS'));
    out.push('Config.Commands = {');
    out.push(`    streamer = ${luaString(v.cmdStreamer)},`);
    out.push(`    admin    = ${luaString(v.cmdAdmin)},`);
    out.push('}\n');

    out.push(luaSection('ACCESS'));
    out.push(`-- Access is granted from the admin panel (per Discord ID), not Discord roles.`);
    out.push(`Config.AdminPermission = ${luaString(v.AdminPermission)}`);
    out.push(`Config.Debug = ${luaBool(v.Debug)}\n`);

    out.push(luaSection('CYCLE & CLAIMS'));
    out.push('Config.Cycle = {');
    out.push(`    DurationDays       = ${luaNumber(v.CycleDurationDays)},`);
    out.push(`    MaxRewardsPerCycle = ${luaNumber(v.MaxRewardsPerCycle)}, -- 0 = unlimited`);
    out.push('}');
    out.push(`-- Config.ClaimSystem.ClaimInterval = ${luaNumber(v.ClaimInterval)} (set inside Config.ClaimSystem)\n`);

    out.push(
      `-- Config.Tiers, Config.Achievements, Config.MonthlyPackages and Config.Normativas\n` +
        `-- remain in config.lua below this head — do not remove them.`,
    );

    return out.join('\n');
  },
};
