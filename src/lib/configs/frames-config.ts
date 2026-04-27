/**
 * Schema for cpx-frames / shared/config.lua
 * Source of truth: D:/SERVERNEW/.../cpx-frames/shared/config.lua (180 lines).
 */
import type { ConfigSchema } from '../config-schema';
import { luaString, luaBool, luaNumber, luaArrayInline, luaSection } from '../lua';

export const framesConfigSchema: ConfigSchema = {
  fileName: 'shared/config.lua',
  tabLabel: { en: 'config.lua', es: 'config.lua' },
  fields: [
    /* 1. Framework */
    {
      id: 'Framework',
      type: 'select',
      label: { en: 'Framework', es: 'Framework' },
      default: 'auto',
      options: [
        { value: 'auto', label: 'auto' },
        { value: 'qb', label: 'qb-core' },
        { value: 'qbx', label: 'qbx_core' },
        { value: 'esx', label: 'es_extended' },
        { value: 'standalone', label: 'standalone' },
      ],
    },
    {
      id: 'Debug',
      type: 'boolean',
      label: { en: 'Debug logs', es: 'Logs de debug' },
      description: {
        en: 'Verbose server/client logs. Keep off in production.',
        es: 'Logs verbosos. Apagar en producción.',
      },
      default: false,
    },

    /* 2. Localization */
    {
      id: 'Lang',
      type: 'select',
      label: { en: 'Language', es: 'Idioma' },
      description: {
        en: 'Translates every user-facing string. Discord webhooks stay in English.',
        es: 'Traduce todos los textos al usuario. Los webhooks van siempre en inglés.',
      },
      default: 'en',
      options: [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
      ],
    },

    /* 2.1 Commands */
    {
      id: 'commands',
      type: 'group',
      label: { en: 'Slash commands', es: 'Comandos de chat' },
      description: {
        en: 'Names are language-agnostic. Pick whatever fits your server.',
        es: 'Los nombres son independientes del idioma. Lo que prefieras para tu servidor.',
      },
      fields: [
        {
          id: 'Cmd_myFrames',
          type: 'string',
          label: { en: 'Player command', es: 'Comando para jugadores' },
          description: { en: 'Opens the personal frame manager.', es: 'Abre el manager de cuadros del jugador.' },
          default: 'myframes',
        },
        {
          id: 'Cmd_admin',
          type: 'string',
          label: { en: 'Admin command', es: 'Comando para staff' },
          description: { en: 'Opens the admin panel (gated by ACE).', es: 'Abre el panel admin (con permisos ACE).' },
          default: 'framesadmin',
        },
      ],
    },

    /* 3. UI Theme */
    {
      id: 'UI_Theme',
      type: 'select',
      label: { en: 'UI theme', es: 'Tema visual' },
      description: {
        en: 'Accent palette for NUI panels, prompts and notifications.',
        es: 'Paleta de acento para los paneles NUI, prompts y notificaciones.',
      },
      default: 'sky',
      options: [
        { value: 'sky', label: 'Sky (cyan)' },
        { value: 'blue', label: 'Blue' },
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'purple', label: 'Purple' },
      ],
    },

    /* 4. Items */
    {
      id: 'items',
      type: 'group',
      label: { en: 'Inventory items', es: 'Items de inventario' },
      fields: [
        {
          id: 'PrinterItem',
          type: 'string',
          label: { en: 'Printer item', es: 'Item de la impresora' },
          default: 'printer',
        },
        {
          id: 'PhotoItem',
          type: 'string',
          label: { en: 'Photo item', es: 'Item de la foto' },
          default: 'photo',
        },
        {
          id: 'PrinterPropModel',
          type: 'string',
          label: { en: 'Printer prop model', es: 'Modelo del prop' },
          default: 'v_res_printer',
        },
        {
          id: 'Item_legacy',
          type: 'string',
          label: { en: 'Legacy frame item (pre-v2.0)', es: 'Item legacy de cuadro' },
          description: { en: 'Kept for old shipments. New installs ignore.', es: 'Para instalaciones viejas. Las nuevas pueden ignorarlo.' },
          default: 'marco',
        },
        {
          id: 'RemoveItem',
          type: 'boolean',
          label: { en: 'Consume item on placement', es: 'Consumir al colocar' },
          default: true,
        },
      ],
    },

    /* 6. Anti-spam limits */
    {
      id: 'limits',
      type: 'group',
      label: { en: 'Anti-spam limits', es: 'Límites anti-spam' },
      fields: [
        {
          id: 'MaxFramesPerPlayer',
          type: 'slider',
          label: { en: 'Max frames per player', es: 'Máx cuadros por jugador' },
          default: 20,
          min: 1,
          max: 200,
          step: 1,
        },
        {
          id: 'MaxFramesInRadiusCount',
          type: 'slider',
          label: { en: 'Max frames in radius', es: 'Máx cuadros en radio' },
          description: { en: '0 disables the cap.', es: '0 desactiva el límite.' },
          default: 10,
          min: 0,
          max: 100,
          step: 1,
        },
        {
          id: 'MaxFramesInRadiusRadius',
          type: 'slider',
          label: { en: 'Radius (m)', es: 'Radio (m)' },
          default: 8,
          min: 1,
          max: 50,
          step: 0.5,
          unit: 'm',
        },
        {
          id: 'AllowedExtensions',
          type: 'multi-select',
          label: { en: 'Allowed extensions', es: 'Extensiones permitidas' },
          default: ['.png', '.jpg', '.jpeg', '.webp', '.gif'],
          options: [
            { value: '.png', label: '.png' },
            { value: '.jpg', label: '.jpg' },
            { value: '.jpeg', label: '.jpeg' },
            { value: '.webp', label: '.webp' },
            { value: '.gif', label: '.gif' },
            { value: '.bmp', label: '.bmp' },
          ],
        },
      ],
    },

    /* 7. Placement gizmo */
    {
      id: 'placement',
      type: 'group',
      label: { en: 'Placement gizmo', es: 'Gizmo de colocación' },
      collapsed: true,
      fields: [
        {
          id: 'MinFrameSize',
          type: 'number',
          label: { en: 'Min frame size (m)', es: 'Tamaño mínimo (m)' },
          default: 0.3,
          min: 0.1,
          max: 5,
          step: 0.1,
          unit: 'm',
        },
        {
          id: 'MaxFrameSize',
          type: 'number',
          label: { en: 'Max frame size (m)', es: 'Tamaño máximo (m)' },
          default: 4,
          min: 0.5,
          max: 20,
          step: 0.1,
          unit: 'm',
        },
        {
          id: 'SizeStep',
          type: 'number',
          label: { en: 'Scroll size step', es: 'Paso del scroll' },
          default: 0.08,
          min: 0.01,
          max: 1,
          step: 0.01,
        },
        {
          id: 'RenderDoubleSided',
          type: 'boolean',
          label: { en: 'Render double-sided', es: 'Renderizar a dos caras' },
          description: { en: 'Enable for free-standing objects (poles/billboards).', es: 'Activar para objetos sin pared (postes, vallas).' },
          default: true,
        },
        {
          id: 'WalkToPlacement',
          type: 'boolean',
          label: { en: 'Walk to placement (cinematic)', es: 'Caminar al colocar (cinematográfico)' },
          default: true,
        },
      ],
    },

    /* 8. Printer */
    {
      id: 'printer',
      type: 'group',
      label: { en: 'Printer', es: 'Impresora' },
      fields: [
        { id: 'MaxPrintersPerPlayer', type: 'slider', label: { en: 'Max printers per player', es: 'Máx impresoras por jugador' }, default: 3, min: 1, max: 20, step: 1 },
        { id: 'PrintCooldown', type: 'slider', label: { en: 'Cooldown between different URLs (s)', es: 'Cooldown entre URLs distintas (s)' }, default: 30, min: 0, max: 300, step: 1, unit: 's' },
        { id: 'PrintAnimationDuration', type: 'number', label: { en: 'Print animation duration (ms)', es: 'Duración animación (ms)' }, description: { en: 'Must match the NUI animation duration.', es: 'Debe coincidir con la animación NUI.' }, default: 5000, min: 500, max: 30000, step: 100, unit: 'ms' },
        { id: 'PrinterInteractDist', type: 'number', label: { en: 'Interact distance (m)', es: 'Distancia de interacción (m)' }, default: 1.5, min: 0.5, max: 10, step: 0.1, unit: 'm' },
        { id: 'PrinterDotDist', type: 'number', label: { en: 'Dot visible distance (m)', es: 'Distancia visible del punto (m)' }, default: 3.5, min: 0.5, max: 20, step: 0.1, unit: 'm' },
        { id: 'RefundPrinterOnRemove', type: 'boolean', label: { en: 'Refund printer item on remove', es: 'Devolver el item al retirar' }, default: true },
      ],
    },

    /* 9. Rendering */
    {
      id: 'rendering',
      type: 'group',
      label: { en: 'Rendering', es: 'Renderizado' },
      fields: [
        { id: 'RenderDistance', type: 'slider', label: { en: 'Render distance (m)', es: 'Distancia de render (m)' }, default: 25, min: 5, max: 200, step: 1, unit: 'm' },
        { id: 'InteractDist', type: 'number', label: { en: 'Manage prompt distance (m)', es: 'Distancia del prompt (m)' }, default: 2, min: 0.5, max: 10, step: 0.1, unit: 'm' },
      ],
    },

    /* 10. Admin */
    {
      id: 'AdminAce',
      type: 'string',
      label: { en: 'Admin ACE permission', es: 'Permiso ACE de admin' },
      description: { en: 'add_ace identifier.fivem:xxxxx <ACE> allow', es: 'add_ace identifier.fivem:xxxxx <ACE> allow' },
      default: 'cpx-frames.admin',
    },

    /* 11. Discord */
    {
      id: 'discord',
      type: 'group',
      label: { en: 'Discord webhooks', es: 'Webhooks de Discord' },
      collapsed: true,
      fields: [
        {
          id: 'DiscordWebhook',
          type: 'string',
          label: { en: 'Webhook URL', es: 'URL del webhook' },
          description: { en: 'Empty disables ALL webhook notifications.', es: 'Vacío desactiva TODOS los webhooks.' },
          default: '',
          placeholder: 'https://discord.com/api/webhooks/...',
        },
        { id: 'WebhookName', type: 'string', label: { en: 'Webhook name', es: 'Nombre del bot' }, default: 'CPX Frames' },
        { id: 'WebhookAvatar', type: 'string', label: { en: 'Avatar URL (optional)', es: 'Avatar (opcional)' }, default: '' },
        { id: 'WebhookOnPlace', type: 'boolean', label: { en: 'On place', es: 'Al colocar' }, default: true },
        { id: 'WebhookOnReport', type: 'boolean', label: { en: 'On report', es: 'Al reportar' }, default: true },
        { id: 'WebhookOnAdminDelete', type: 'boolean', label: { en: 'On admin delete', es: 'Al borrar admin' }, default: true },
      ],
    },

    /* 12. Domain whitelist */
    {
      id: 'AllowedDomains',
      type: 'array-string',
      label: { en: 'Allowed image domains', es: 'Dominios de imagen permitidos' },
      description: {
        en: 'Empty list = any host allowed. Add hostnames to restrict.',
        es: 'Lista vacía = cualquier host. Añade hostnames para restringir.',
      },
      default: [],
      itemPlaceholder: 'i.imgur.com',
    },

    /* 15. Slideshow */
    {
      id: 'slideshow',
      type: 'group',
      label: { en: 'Slideshow', es: 'Slideshow' },
      fields: [
        { id: 'SlideshowEnabled', type: 'boolean', label: { en: 'Enable slideshow', es: 'Activar slideshow' }, default: true },
        { id: 'MaxSlideshowUrls', type: 'slider', label: { en: 'Max URLs per frame', es: 'Máx URLs por cuadro' }, default: 5, min: 2, max: 20, step: 1 },
        { id: 'SlideshowInterval', type: 'slider', label: { en: 'Interval (ms)', es: 'Intervalo (ms)' }, default: 6000, min: 1000, max: 30000, step: 250, unit: 'ms' },
      ],
    },

    /* 16. Reports */
    {
      id: 'ReportsToAutoDelete',
      type: 'slider',
      label: { en: 'Reports to auto-delete', es: 'Reportes para auto-borrar' },
      description: { en: '0 disables auto-delete.', es: '0 desactiva el auto-borrado.' },
      default: 5,
      min: 0,
      max: 50,
      step: 1,
    },
  ],

  toLua(v) {
    const out: string[] = [];
    out.push('-- Generated by CPX Frames Configuration Builder.');
    out.push('-- The output is guaranteed to be valid Lua.\n');
    out.push('Config = {}\n');

    out.push(luaSection('1. FRAMEWORK'));
    out.push(`Config.Framework = ${luaString(v.Framework)}`);
    out.push(`Config.Debug     = ${luaBool(v.Debug)}\n`);

    out.push(luaSection('2. LOCALIZATION'));
    out.push(`Config.Lang = ${luaString(v.Lang)}\n`);

    out.push(luaSection('2.1 COMMANDS'));
    out.push(`Config.Commands = {`);
    out.push(`    myFrames   = ${luaString(v.Cmd_myFrames)},`);
    out.push(`    adminPanel = ${luaString(v.Cmd_admin)},`);
    out.push(`}\n`);

    out.push(luaSection('3. UI THEME'));
    out.push(`Config.UI = {`);
    out.push(`    Theme = ${luaString(v.UI_Theme)},`);
    out.push(`}\n`);

    out.push(luaSection('4. ITEMS'));
    out.push(`Config.PrinterItem      = ${luaString(v.PrinterItem)}`);
    out.push(`Config.PhotoItem        = ${luaString(v.PhotoItem)}`);
    out.push(`Config.PrinterPropModel = ${luaString(v.PrinterPropModel)}`);
    out.push(`Config.Item             = ${luaString(v.Item_legacy)}`);
    out.push(`Config.RemoveItem       = ${luaBool(v.RemoveItem)}\n`);

    out.push(luaSection('5. ASPECT RATIOS — leave as default unless you know'));
    out.push(`Config.AspectRatios = {
    { value = 'square',   label = 'Square (1:1)',      x = 1.0,  y = 1.0 },
    { value = 'wide',     label = 'Widescreen (16:9)', x = 1.77, y = 1.0 },
    { value = 'ultra',    label = 'Ultra-wide (21:9)', x = 2.33, y = 1.0 },
    { value = 'portrait', label = 'Portrait (9:16)',   x = 0.56, y = 1.0 },
}\n`);

    out.push(luaSection('6. ANTI-SPAM LIMITS'));
    out.push(`Config.MaxFramesPerPlayer = ${luaNumber(v.MaxFramesPerPlayer)}`);
    out.push(`Config.MaxFramesInRadius  = { count = ${luaNumber(v.MaxFramesInRadiusCount)}, radius = ${luaNumber(v.MaxFramesInRadiusRadius)} }`);
    out.push(`Config.AllowedExtensions  = ${luaArrayInline(v.AllowedExtensions)}\n`);

    out.push(luaSection('7. PLACEMENT GIZMO'));
    out.push(`Config.MinFrameSize      = ${luaNumber(v.MinFrameSize)}`);
    out.push(`Config.MaxFrameSize      = ${luaNumber(v.MaxFrameSize)}`);
    out.push(`Config.SizeStep          = ${luaNumber(v.SizeStep)}`);
    out.push(`Config.RenderDoubleSided = ${luaBool(v.RenderDoubleSided)}`);
    out.push(`Config.WalkToPlacement   = ${luaBool(v.WalkToPlacement)}\n`);

    out.push(luaSection('8. PRINTER'));
    out.push(`Config.MaxPrintersPerPlayer   = ${luaNumber(v.MaxPrintersPerPlayer)}`);
    out.push(`Config.PrintCooldown          = ${luaNumber(v.PrintCooldown)}`);
    out.push(`Config.PrintAnimationDuration = ${luaNumber(v.PrintAnimationDuration)}`);
    out.push(`Config.PrinterInteractDist    = ${luaNumber(v.PrinterInteractDist)}`);
    out.push(`Config.PrinterDotDist         = ${luaNumber(v.PrinterDotDist)}`);
    out.push(`Config.RefundPrinterOnRemove  = ${luaBool(v.RefundPrinterOnRemove)}\n`);

    out.push(luaSection('9. RENDERING'));
    out.push(`Config.RenderDistance = ${luaNumber(v.RenderDistance)}`);
    out.push(`Config.InteractDist   = ${luaNumber(v.InteractDist)}\n`);

    out.push(luaSection('10. ADMIN'));
    out.push(`Config.AdminAce = ${luaString(v.AdminAce)}\n`);

    out.push(luaSection('11. DISCORD WEBHOOKS'));
    out.push(`Config.DiscordWebhook       = ${luaString(v.DiscordWebhook)}`);
    out.push(`Config.WebhookName          = ${luaString(v.WebhookName)}`);
    out.push(`Config.WebhookAvatar        = ${luaString(v.WebhookAvatar)}`);
    out.push(`Config.WebhookOnPlace       = ${luaBool(v.WebhookOnPlace)}`);
    out.push(`Config.WebhookOnReport      = ${luaBool(v.WebhookOnReport)}`);
    out.push(`Config.WebhookOnAdminDelete = ${luaBool(v.WebhookOnAdminDelete)}\n`);

    out.push(luaSection('12. DOMAIN WHITELIST'));
    if (v.AllowedDomains.length === 0) {
      out.push(`Config.AllowedDomains = {}  -- empty = any host allowed\n`);
    } else {
      out.push(`Config.AllowedDomains = ${luaArrayInline(v.AllowedDomains)}\n`);
    }

    out.push(luaSection('13. FORBIDDEN ZONES — edit manually if needed'));
    out.push(`Config.ForbiddenZones = {
    -- { label = 'Bank',     coords = vector3(-270.0, -955.0, 31.0), radius = 40.0 },
    -- { label = 'Hospital', coords = vector3(295.0, -1447.0, 29.0), radius = 60.0 },
}\n`);

    out.push(luaSection('14. CURATED PRESETS — edit manually if needed'));
    out.push(`Config.PresetImages = {
    -- { label = 'Server Logo', url = 'https://i.imgur.com/xxx.png' },
}\n`);

    out.push(luaSection('15. SLIDESHOW'));
    out.push(`Config.SlideshowEnabled  = ${luaBool(v.SlideshowEnabled)}`);
    out.push(`Config.MaxSlideshowUrls  = ${luaNumber(v.MaxSlideshowUrls)}`);
    out.push(`Config.SlideshowInterval = ${luaNumber(v.SlideshowInterval)}\n`);

    out.push(luaSection('16. REPORTS'));
    out.push(`Config.ReportsToAutoDelete = ${luaNumber(v.ReportsToAutoDelete)}\n`);

    out.push(luaSection('17. FALLBACK PROP MODELS — leave as default'));
    out.push(`Config.PropSlots = {}
Config.PropSlots[1] = {
    model       = 'xm_prop_x17_tv_scrn_13',
    textureDict = 'script_rt_prop_x17_tv_scrn_13',
}
Config.DefaultProp = 'xm_prop_x17_tv_scrn_13'`);

    return out.join('\n');
  },
};
