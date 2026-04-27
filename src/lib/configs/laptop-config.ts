/**
 * Schema for cpx-laptop / shared/config.lua
 * Source of truth: D:/SERVERNEW/.../cpx-laptop/shared/config.lua (232 lines).
 * Every option here is a real, supported option in the script.
 * The toLua() output mirrors the original file structure with bilingual headers.
 */
import type { ConfigSchema } from '../config-schema';
import {
  luaString,
  luaBool,
  luaNumber,
  luaNil,
  luaSection,
} from '../lua';

export const laptopConfigSchema: ConfigSchema = {
  fileName: 'shared/config.lua',
  tabLabel: { en: 'config.lua', es: 'config.lua' },
  fields: [
    /* ── Framework ───────────────────────── */
    {
      id: 'Framework',
      type: 'select',
      label: { en: 'Framework', es: 'Framework' },
      description: {
        en: "'auto' tries to detect qb-core / qbx_core / es_extended.",
        es: "'auto' intenta detectar qb-core / qbx_core / es_extended.",
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

    /* ── Language ────────────────────────── */
    {
      id: 'Locale',
      type: 'select',
      label: { en: 'Default language', es: 'Idioma por defecto' },
      description: {
        en: 'Applied only to players who never opened the laptop before.',
        es: 'Solo se aplica a jugadores que nunca abrieron la laptop antes.',
      },
      default: 'en',
      options: [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
      ],
    },
    {
      id: 'AllowUserLanguageChange',
      type: 'boolean',
      label: {
        en: 'Allow user language change',
        es: 'Permitir cambio de idioma',
      },
      description: {
        en: 'Lets players switch language from Settings → Language.',
        es: 'Deja que el jugador cambie el idioma desde Settings → Language.',
      },
      default: true,
    },

    /* ── Database ────────────────────────── */
    {
      id: 'AutoInstallDatabase',
      type: 'boolean',
      label: { en: 'Auto-install database', es: 'Auto-instalar base de datos' },
      description: {
        en: 'Auto-creates the 9 tables on resource start. Idempotent.',
        es: 'Auto-crea las 9 tablas al iniciar. Idempotente.',
      },
      default: true,
    },

    /* ── Update check ────────────────────── */
    {
      id: 'UpdateCheckUrl',
      type: 'string',
      label: { en: 'Update check URL', es: 'URL de verificación de actualizaciones' },
      description: {
        en: 'Plain-text URL returning the latest version. Empty = disabled.',
        es: 'URL que devuelve la última versión en texto plano. Vacío = desactivado.',
      },
      default: '',
      placeholder: 'https://gist.githubusercontent.com/.../raw/version.txt',
    },

    /* ── Opening the laptop ──────────────── */
    {
      id: 'opening',
      type: 'group',
      label: { en: 'Opening the laptop', es: 'Apertura de la laptop' },
      fields: [
        {
          id: 'ItemName',
          type: 'string',
          label: { en: 'Item name', es: 'Nombre del item' },
          description: {
            en: 'Must exist in your inventory items config.',
            es: 'Tiene que existir en tu inventario.',
          },
          default: 'laptop',
          placeholder: 'laptop',
        },
        {
          id: 'UseItem',
          type: 'boolean',
          label: { en: 'Use item to open', es: 'Abrir con el item' },
          description: {
            en: 'If false, only command/keybind opens the laptop.',
            es: 'Si es false, solo abre por comando o keybind.',
          },
          default: true,
        },
        {
          id: 'Command',
          type: 'nullable-string',
          label: { en: 'Chat command', es: 'Comando de chat' },
          description: {
            en: "Disabled by default. Enable and type e.g. 'laptop' → /laptop.",
            es: 'Desactivado por defecto. Activa y escribe ej: laptop → /laptop.',
          },
          default: null,
          placeholder: 'laptop',
        },
        {
          id: 'OpenKey',
          type: 'nullable-string',
          label: { en: 'Default keybind name', es: 'Nombre del keybind' },
          description: {
            en: 'Disabled by default. Players can remap in GTA → Settings → Key Bindings.',
            es: 'Desactivado. Los jugadores pueden remapearla en GTA → Settings → Key Bindings.',
          },
          default: null,
          placeholder: 'F2',
        },
      ],
    },

    /* ── UI Colors ───────────────────────── */
    {
      id: 'colors',
      type: 'group',
      label: { en: 'UI colors', es: 'Colores de interfaz' },
      fields: [
        {
          id: 'Color_accent',
          type: 'color',
          label: { en: 'Accent color', es: 'Color principal' },
          description: {
            en: 'Buttons, hover, focus, active states.',
            es: 'Botones, hover, focus, estado activo.',
          },
          default: '#0A84FF',
        },
        {
          id: 'Color_glow',
          type: 'color',
          label: { en: 'Glow color', es: 'Color de brillo' },
          description: {
            en: 'Active window frame, glow effects.',
            es: 'Marco de ventana activa, efectos de glow.',
          },
          default: '#8C78FF',
        },
      ],
    },

    /* ── Rate Limits ─────────────────────── */
    {
      id: 'limits',
      type: 'group',
      label: { en: 'Rate limits', es: 'Límites anti-spam' },
      description: {
        en: 'Seconds a player must wait between sends.',
        es: 'Segundos entre envíos.',
      },
      fields: [
        {
          id: 'Limit_mail',
          type: 'slider',
          label: { en: 'Mail (seconds)', es: 'Correos (segundos)' },
          default: 5,
          min: 0,
          max: 60,
          step: 1,
          unit: 's',
        },
        {
          id: 'Limit_darkchat',
          type: 'slider',
          label: { en: 'Dark Chat (seconds)', es: 'Dark Chat (segundos)' },
          default: 1,
          min: 0,
          max: 60,
          step: 1,
          unit: 's',
        },
      ],
    },

    /* ── Mail ─────────────────────────────── */
    {
      id: 'mail',
      type: 'group',
      label: { en: 'Mail system', es: 'Sistema de correo' },
      fields: [
        {
          id: 'Mail_domain',
          type: 'string',
          label: { en: 'Mail domain', es: 'Dominio de correo' },
          description: {
            en: "Appears as 'user<domain>'. Examples: '@server.com', '@mycity.gta'.",
            es: "Aparece como 'usuario<dominio>'. Ej: '@server.com', '@mycity.gta'.",
          },
          default: '@complex.com',
          placeholder: '@yourserver.com',
        },
        {
          id: 'Mail_maxBodyLen',
          type: 'number',
          label: { en: 'Max body length', es: 'Máximo de caracteres' },
          default: 5000,
          min: 100,
          max: 50000,
          step: 100,
        },
      ],
    },

    /* ── Documents ────────────────────────── */
    {
      id: 'documents',
      type: 'group',
      label: { en: 'Documents', es: 'Documentos' },
      fields: [
        {
          id: 'Doc_printCost',
          type: 'number',
          label: { en: 'Print cost', es: 'Costo de impresión' },
          default: 5,
          min: 0,
          max: 1000,
          step: 1,
        },
        {
          id: 'Doc_moneyType',
          type: 'select',
          label: { en: 'Money type', es: 'Tipo de dinero' },
          default: 'cash',
          options: [
            { value: 'cash', label: 'cash' },
            { value: 'bank', label: 'bank' },
          ],
        },
      ],
    },
  ],

  toLua(v) {
    const out: string[] = [];
    out.push(`--[[
    CPX Laptop — user settings / opciones del usuario
    Complex Studios

    Generated by the interactive Configuration Builder.
    Restart the resource after changes.
]]\n`);
    out.push('Config = {}\n');

    /* Framework */
    out.push(luaSection('FRAMEWORK'));
    out.push(`-- 'auto' | 'qb' | 'qbx' | 'esx' | 'standalone'`);
    out.push(`Config.Framework = ${luaString(v.Framework)}\n`);

    /* Language */
    out.push(luaSection('LANGUAGE / IDIOMA'));
    out.push(`Config.Locale = ${luaString(v.Locale)}`);
    out.push(`Config.AllowUserLanguageChange = ${luaBool(v.AllowUserLanguageChange)}\n`);

    /* DB */
    out.push(luaSection('DATABASE / BASE DE DATOS'));
    out.push(`Config.AutoInstallDatabase = ${luaBool(v.AutoInstallDatabase)}\n`);

    /* Update check */
    out.push(luaSection('UPDATE CHECK'));
    out.push(`Config.UpdateCheckUrl = ${luaString(v.UpdateCheckUrl)}\n`);

    /* Opening */
    out.push(luaSection('OPENING / APERTURA'));
    out.push(`Config.ItemName = ${luaString(v.ItemName)}`);
    out.push(`Config.UseItem  = ${luaBool(v.UseItem)}`);
    out.push(`Config.Command  = ${v.Command === null ? luaNil() : luaString(v.Command)}`);
    out.push(`Config.OpenKey  = ${v.OpenKey === null ? luaNil() : luaString(v.OpenKey)}\n`);

    /* Colors */
    out.push(luaSection('UI COLORS / COLORES'));
    out.push(`Config.Colors = {`);
    out.push(`    accent = ${luaString(v.Color_accent)},`);
    out.push(`    glow   = ${luaString(v.Color_glow)},`);
    out.push(`}\n`);

    /* Limits */
    out.push(luaSection('RATE LIMITS / LÍMITES'));
    out.push(`Config.Limits = {`);
    out.push(`    mail     = ${luaNumber(v.Limit_mail)},`);
    out.push(`    darkchat = ${luaNumber(v.Limit_darkchat)},`);
    out.push(`}\n`);

    /* Mail */
    out.push(luaSection('MAIL / CORREO'));
    out.push(`Config.Mail = {`);
    out.push(`    domain     = ${luaString(v.Mail_domain)},`);
    out.push(`    maxBodyLen = ${luaNumber(v.Mail_maxBodyLen)},`);
    out.push(`}\n`);

    /* Documents */
    out.push(luaSection('DOCUMENTS / DOCUMENTOS'));
    out.push(`Config.Documents = {`);
    out.push(`    printCost = ${luaNumber(v.Doc_printCost)},`);
    out.push(`    moneyType = ${luaString(v.Doc_moneyType)},`);
    out.push(`}\n`);

    /* External apps stays as-is — we don't expose this in the builder
       because it's a registry of installed companion resources. Users edit
       it manually if they own more CPX apps. */
    out.push(luaSection('EXTERNAL APPS — edit manually if you own them'));
    out.push(`Config.ExternalApps = {
    restaurant   = { resource = 'cpx-restaurants',  enabled = 'auto', tebexUrl = 'https://complex-studios-store.tebex.io' },
    fooddelivery = { resource = 'cpx-restaurants',  enabled = 'auto', tebexUrl = 'https://complex-studios-store.tebex.io' },
    chopshop     = { resource = 'cpx-chopshop',     enabled = 'auto', tebexUrl = 'https://complex-studios-store.tebex.io' },
    gangs        = { resource = 'cpx-gangsready',   enabled = 'auto', tebexUrl = 'https://complex-studios-store.tebex.io' },
    racing       = { resource = 'cpx-racingapp',    enabled = 'auto', tebexUrl = 'https://complex-studios-store.tebex.io' },
    pjportal     = { resource = 'pj-portal',        enabled = 'auto', tebexUrl = '', premium = false },
    printing     = { resource = 'cpx-printing',     enabled = 'auto', tebexUrl = '', premium = false },
}`);

    return out.join('\n');
  },
};
