/**
 * Schema for cpx-itemcarrys — settings head only.
 * Source of truth: cpx-itemcarrys/config/config.lua (settings block at the top).
 * Only the user-tweakable settings head is exposed here — Config.Locales,
 * Config.T, Positions, PropCatalog, CarryAnims and LimiterPresets stay in
 * config.lua below and are edited directly.
 */
import type { ConfigSchema } from '../config-schema';
import {
  luaString,
  luaBool,
  luaNumber,
  luaSection,
} from '../lua';

export const itemcarryConfigSchema: ConfigSchema = {
  fileName: 'config/config.lua',
  tabLabel: { en: 'config.lua', es: 'config.lua' },
  fields: [
    /* ── Framework ───────────────────────── */
    {
      id: 'Framework',
      type: 'select',
      label: { en: 'Framework', es: 'Framework' },
      description: {
        en: 'Leave on auto to detect QBCore/QBX/ESX. Set standalone to disable framework hooks.',
        es: 'Dejalo en auto para detectar QBCore/QBX/ESX. Usá standalone para desactivar los hooks de framework.',
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
        en: 'Leave on auto to detect the running inventory. Use custom to wire your own bridge.',
        es: 'Dejalo en auto para detectar el inventario activo. Usá custom para conectar tu propio puente.',
      },
      default: 'auto',
      options: [
        { value: 'auto', label: { en: 'Auto-detect', es: 'Auto-detectar' } },
        { value: 'ox_inventory', label: 'ox_inventory' },
        { value: 'qb-inventory', label: 'qb-inventory' },
        { value: 'qs-inventory', label: 'qs-inventory' },
        { value: 'custom', label: { en: 'Custom', es: 'Custom' } },
      ],
    },

    /* ── Open command ────────────────────── */
    {
      id: 'command',
      type: 'string',
      label: { en: 'Open command', es: 'Comando para abrir' },
      description: {
        en: 'Opens the admin editor. /<command>. Gated by the ACE permission below.',
        es: 'Abre el editor admin. /<comando>. Protegido por el permiso ACE de abajo.',
      },
      default: 'itemcarry',
      placeholder: 'itemcarry',
    },
    {
      id: 'openKeybind',
      type: 'string',
      label: { en: 'Open keybind', es: 'Tecla para abrir' },
      description: {
        en: 'Optional default key mapping to open the editor. Empty = command only.',
        es: 'Mapeo de tecla opcional para abrir el editor. Vacío = solo comando.',
      },
      default: '',
      placeholder: 'F7',
    },

    /* ── Permission ──────────────────────── */
    {
      id: 'acePermission',
      type: 'string',
      label: { en: 'ACE permission', es: 'Permiso ACE' },
      description: {
        en: 'ACE object required to open the editor. Grant it in server.cfg with add_ace.',
        es: 'Objeto ACE requerido para abrir el editor. Otorgalo en server.cfg con add_ace.',
      },
      default: 'cpx-itemcarrys.admin',
      placeholder: 'cpx-itemcarrys.admin',
    },

    /* ── Locale ──────────────────────────── */
    {
      id: 'Locale',
      type: 'select',
      label: { en: 'Locale', es: 'Idioma' },
      description: {
        en: 'Language for in-game notifications (Config.T entries).',
        es: 'Idioma de las notificaciones in-game (entradas de Config.T).',
      },
      default: 'es',
      options: [
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'English' },
      ],
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

    /* ── Rendering ───────────────────────── */
    {
      id: 'maxVisibleProps',
      type: 'slider',
      label: { en: 'Max visible props', es: 'Props visibles máximos' },
      description: {
        en: 'How many carry props render on a single player at once.',
        es: 'Cuántos props de carga se renderizan en un mismo jugador a la vez.',
      },
      default: 4,
      min: 1,
      max: 8,
      step: 1,
    },
    {
      id: 'refreshInterval',
      type: 'slider',
      label: { en: 'Refresh interval', es: 'Intervalo de refresco' },
      description: {
        en: 'How often the statebag sync re-evaluates nearby players.',
        es: 'Cada cuánto la sincronización por statebag re-evalúa a los jugadores cercanos.',
      },
      default: 5000,
      min: 1000,
      max: 15000,
      step: 500,
      unit: 'ms',
    },
    {
      id: 'hideInVehicle',
      type: 'boolean',
      label: { en: 'Hide in vehicle', es: 'Ocultar en vehículo' },
      description: {
        en: 'Hide carry props while the player is inside a vehicle.',
        es: 'Oculta los props de carga mientras el jugador está dentro de un vehículo.',
      },
      default: true,
    },
  ],

  toLua(v) {
    const out: string[] = [];
    out.push(`--[[
    cpx-itemcarrys — config head
    Complex Studios

    Generated by the interactive Configuration Builder.
    Paste this block at the TOP of config/config.lua, replacing the existing
    settings head. Restart the resource after changes.
]]\n`);
    out.push('Config = {}\n');

    out.push(luaSection('FRAMEWORK & INVENTORY (auto-detected)'));
    out.push(`Config.Framework = ${luaString(v.Framework)}`);
    out.push(`Config.Inventory = ${luaString(v.Inventory)}`);
    out.push(`Config.core      = nil -- resolved at runtime from the detected framework\n`);

    out.push(luaSection('ACCESS — COMMAND & PERMISSION'));
    out.push(`Config.command       = ${luaString(v.command)}`);
    out.push(`Config.openKeybind   = ${luaString(v.openKeybind)}`);
    out.push(`Config.acePermission = ${luaString(v.acePermission)}`);
    out.push(`Config.adminGroups   = { 'admin', 'god', 'superadmin' }\n`);

    out.push(luaSection('PRESENTATION'));
    out.push(`Config.accent = 'sky'`);
    out.push(`Config.locale = ${luaString(v.Locale)}\n`);

    out.push(luaSection('RENDERING'));
    out.push(`Config.maxVisibleProps = ${luaNumber(v.maxVisibleProps)}`);
    out.push(`Config.refreshInterval = ${luaNumber(v.refreshInterval)} -- ms`);
    out.push(`Config.hideInVehicle   = ${luaBool(v.hideInVehicle)}\n`);

    out.push(luaSection('LOGS'));
    out.push(`Config.debug = ${luaBool(v.Debug)}\n`);

    out.push(
      `-- Config.Locales, Config.T, Positions, PropCatalog, CarryAnims and\n` +
        `-- LimiterPresets remain in config.lua below this head — do not remove them.`,
    );

    return out.join('\n');
  },
};
