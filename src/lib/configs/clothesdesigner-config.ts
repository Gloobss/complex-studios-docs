/**
 * Schema for cpx-clothesdesigner / config.lua (settings block only).
 * Source of truth: tebexclothsdising/config.lua header (everything before
 * BCDConfig.SupportedModels). Templates and ShaderTextures are not exposed
 * here — they are data, not user-tweakable settings.
 */
import type { ConfigSchema } from '../config-schema';
import {
  luaString,
  luaBool,
  luaNumber,
  luaSection,
} from '../lua';

export const clothesdesignerConfigSchema: ConfigSchema = {
  fileName: 'config.lua',
  tabLabel: { en: 'config.lua', es: 'config.lua' },
  fields: [
    /* ── Logs ───────────────────────────── */
    {
      id: 'Debug',
      type: 'boolean',
      label: { en: 'Debug logs', es: 'Logs de debug' },
      description: {
        en: 'Compact actionable logs. Enable only while diagnosing.',
        es: 'Logs accionables compactos. Solo activar al diagnosticar.',
      },
      default: false,
    },

    /* ── Commands ───────────────────────── */
    {
      id: 'Command',
      type: 'string',
      label: { en: 'Studio command', es: 'Comando del studio' },
      description: {
        en: 'Opens the full editor. /<command>.',
        es: 'Abre el editor completo. /<comando>.',
      },
      default: 'clothstudio',
      placeholder: 'clothstudio',
    },
    {
      id: 'LibraryCommand',
      type: 'string',
      label: { en: 'Library command', es: 'Comando de biblioteca' },
      description: {
        en: 'Opens the personal sidebar library. /<command>.',
        es: 'Abre la biblioteca personal. /<comando>.',
      },
      default: 'disingclo',
      placeholder: 'disingclo',
    },

    /* ── Framework / Inventory ─────────── */
    {
      id: 'Framework',
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
    {
      id: 'Inventory',
      type: 'select',
      label: { en: 'Inventory', es: 'Inventario' },
      description: {
        en: "'auto' probes ox → qs → codem → qb → esx in that order.",
        es: "'auto' prueba ox → qs → codem → qb → esx en ese orden.",
      },
      default: 'auto',
      options: [
        { value: 'auto', label: 'auto (recommended)' },
        { value: 'ox_inventory', label: 'ox_inventory' },
        { value: 'qs-inventory', label: 'qs-inventory' },
        { value: 'codem-inventory', label: 'codem-inventory' },
        { value: 'qb-inventory', label: 'qb-inventory' },
        { value: 'esx', label: 'ESX native' },
        { value: 'custom', label: 'custom (no-op)' },
      ],
    },
    {
      id: 'UseInventoryFlow',
      type: 'boolean',
      label: { en: 'Use inventory item flow', es: 'Usar item de inventario' },
      description: {
        en: 'Allow printing designs as wearable items. If false, only the library is available.',
        es: 'Permite imprimir diseños como items. Si es false solo queda la biblioteca.',
      },
      default: true,
    },

    /* ── Item ─────────────────────────── */
    {
      id: 'item',
      type: 'group',
      label: { en: 'Wearable item', es: 'Item de prenda' },
      fields: [
        {
          id: 'InventoryItemName',
          type: 'string',
          label: { en: 'Item name', es: 'Nombre del item' },
          description: {
            en: 'Must exist in your inventory items config (see INSTALL/items).',
            es: 'Debe existir en tu inventario (ver INSTALL/items).',
          },
          default: 'bcd_customwear',
          placeholder: 'bcd_customwear',
        },
        {
          id: 'InventoryItemLabel',
          type: 'string',
          label: { en: 'Item label', es: 'Etiqueta del item' },
          default: 'Custom garment',
          placeholder: 'Custom garment',
        },
      ],
    },

    /* ── Limits ────────────────────────── */
    {
      id: 'limits',
      type: 'group',
      label: { en: 'Limits', es: 'Límites' },
      fields: [
        {
          id: 'MaxLayers',
          type: 'slider',
          label: { en: 'Max layers per design', es: 'Máximo de capas por diseño' },
          default: 64,
          min: 16,
          max: 128,
          step: 8,
        },
        {
          id: 'MaxDesignsPerPlayer',
          type: 'slider',
          label: { en: 'Max saved designs per player', es: 'Diseños guardados por jugador' },
          default: 30,
          min: 5,
          max: 100,
          step: 5,
        },
        {
          id: 'RenderDistance',
          type: 'slider',
          label: { en: 'Render distance (m)', es: 'Distancia de render (m)' },
          description: {
            en: 'Other players see your texture within this radius.',
            es: 'Los otros jugadores ven tu textura dentro de este radio.',
          },
          default: 45,
          min: 10,
          max: 100,
          step: 5,
          unit: 'm',
        },
      ],
    },

  ],

  toLua(v) {
    const out: string[] = [];
    out.push(`--[[
    cpx-clothesdesigner — config.lua header
    Complex Studios

    Generated by the interactive Configuration Builder.
    Paste this block at the top of your config.lua (replacing the existing
    header up to BCDConfig.SupportedModels). The BCDConfig.Templates and
    BCDConfig.ShaderTextures tables below it stay untouched.

    Restart the resource after changes.
]]\n`);
    out.push('BCDConfig = {}\n');

    out.push(luaSection('LOGS'));
    out.push(`BCDConfig.Debug        = ${luaBool(v.Debug)}`);
    out.push(`BCDConfig.DebugVerbose = false\n`);

    out.push(luaSection('COMMANDS'));
    out.push(`BCDConfig.Command        = ${luaString(v.Command)}`);
    out.push(`BCDConfig.LibraryCommand = ${luaString(v.LibraryCommand)}`);
    out.push(`BCDConfig.StateBagKey    = 'bcd:wearables'\n`);

    out.push(luaSection('FRAMEWORK / INVENTORY'));
    out.push(`BCDConfig.Framework        = ${luaString(v.Framework)}`);
    out.push(`BCDConfig.Inventory        = ${luaString(v.Inventory)}`);
    out.push(`BCDConfig.UseInventoryFlow = ${luaBool(v.UseInventoryFlow)}\n`);

    out.push(luaSection('WEARABLE ITEM'));
    out.push(`BCDConfig.InventoryItemName  = ${luaString(v.InventoryItemName)}`);
    out.push(`BCDConfig.InventoryItemLabel = ${luaString(v.InventoryItemLabel)}\n`);

    out.push(luaSection('LIMITS'));
    out.push(`BCDConfig.MaxLayers           = ${luaNumber(v.MaxLayers)}`);
    out.push(`BCDConfig.MaxJsonBytes        = 2 * 1024 * 1024`);
    out.push(`BCDConfig.MaxPreviewBytes     = 8 * 1024 * 1024`);
    out.push(`BCDConfig.RenderDistance      = ${luaNumber(v.RenderDistance)}`);
    out.push(`BCDConfig.MaxDesignsPerPlayer = ${luaNumber(v.MaxDesignsPerPlayer)}\n`);

    out.push(luaSection('SUPPORTED PED MODELS'));
    out.push(`BCDConfig.SupportedModels = {`);
    out.push(`    [\`mp_m_freemode_01\`] = true,`);
    out.push(`    [\`mp_f_freemode_01\`] = true,`);
    out.push(`}\n`);

    out.push(`-- BCDConfig.Templates and BCDConfig.ShaderTextures continue below`);
    out.push(`-- in your existing config.lua. Do not delete them.`);

    return out.join('\n');
  },
};
