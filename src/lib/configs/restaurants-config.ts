/**
 * Schema for cpx-restaurants — split across 2 builder tabs:
 *   1) config/main.lua       — framework / theme / inventory / target / timings (the "I'd actually edit this" stuff)
 *   2) config/progression.lua — XP per action + daily task targets
 *
 * config/animations.lua is intentionally NOT exposed in the builder. It is a
 * 200-line lookup table of prop offsets and FX particles — editing those
 * via toggles would be misleading, and you almost never change them.
 */
import type { ConfigSchema } from '../config-schema';
import { luaString, luaBool, luaNumber, luaSection } from '../lua';

/* ──────────────────────────────────────────────────────────────────────────
 * MAIN
 * ────────────────────────────────────────────────────────────────────────── */

export const restaurantsMainSchema: ConfigSchema = {
  fileName: 'config/main.lua',
  tabLabel: { en: 'main.lua', es: 'main.lua' },
  fields: [
    {
      id: 'language',
      type: 'select',
      label: { en: 'Language', es: 'Idioma' },
      default: 'en',
      options: [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
      ],
    },
    {
      id: 'theme',
      type: 'select',
      label: { en: 'UI theme', es: 'Tema visual' },
      description: {
        en: 'Affects 3D prompts, dot, restaurant app and food delivery app.',
        es: 'Afecta los prompts 3D, el punto, la app del restaurante y la de delivery.',
      },
      default: 'lime',
      options: [
        { value: 'lime', label: 'Lime' },
        { value: 'sky', label: 'Sky' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'violet', label: 'Violet' },
        { value: 'rose', label: 'Rose' },
        { value: 'blue', label: 'Blue' },
        { value: 'red', label: 'Red' },
        { value: 'emerald', label: 'Emerald' },
        { value: 'orange', label: 'Orange' },
      ],
    },

    {
      id: 'integration',
      type: 'group',
      label: { en: 'Framework integration', es: 'Integración con tu framework' },
      fields: [
        {
          id: 'framework',
          type: 'select',
          label: { en: 'Framework', es: 'Framework' },
          default: 'auto',
          options: [
            { value: 'auto', label: 'auto (recommended)' },
            { value: 'qb', label: 'qb-core' },
            { value: 'qbx', label: 'qbx_core' },
            { value: 'esx', label: 'es_extended' },
          ],
        },
        {
          id: 'banking',
          type: 'select',
          label: { en: 'Banking system', es: 'Sistema de banca' },
          default: 'Renewed-Banking',
          options: [
            { value: 'Renewed-Banking', label: 'Renewed-Banking' },
            { value: 'qb-banking', label: 'qb-banking' },
            { value: 'qb-management', label: 'qb-management' },
            { value: 'okokBanking', label: 'okokBanking' },
          ],
        },
        {
          id: 'inventory',
          type: 'select',
          label: { en: 'Inventory', es: 'Inventario' },
          description: {
            en: 'auto = first started inventory. ox > qb > qs > codem > esx.',
            es: 'auto = el primero que esté iniciado. ox > qb > qs > codem > esx.',
          },
          default: 'auto',
          options: [
            { value: 'auto', label: 'auto' },
            { value: 'ox_inventory', label: 'ox_inventory' },
            { value: 'qb-inventory', label: 'qb-inventory' },
            { value: 'qs-inventory', label: 'qs-inventory' },
            { value: 'codem-inventory', label: 'codem-inventory' },
            { value: 'esx', label: 'esx (legacy native)' },
            { value: 'custom', label: 'custom (your own bridge)' },
          ],
        },
        {
          id: 'target',
          type: 'select',
          label: { en: 'Target / interact system', es: 'Sistema de interacción' },
          default: 'cpx',
          options: [
            { value: 'cpx', label: 'cpx (built-in dot+prompt, recommended)' },
            { value: 'ox_target', label: 'ox_target / core_focus' },
            { value: 'qb-target', label: 'qb-target' },
            { value: 'custom', label: 'custom (your own)' },
          ],
        },
        {
          id: 'debug',
          type: 'boolean',
          label: { en: 'Debug logs (F8)', es: 'Logs de debug (F8)' },
          default: false,
        },
      ],
    },

    {
      id: 'database',
      type: 'group',
      label: { en: 'Database & updates', es: 'Base de datos y actualizaciones' },
      fields: [
        {
          id: 'AutoInstallDatabase',
          type: 'boolean',
          label: { en: 'Auto-install database', es: 'Auto-instalar base de datos' },
          default: true,
        },
        {
          id: 'UpdateCheckUrl',
          type: 'string',
          label: { en: 'Update check URL', es: 'URL de verificación' },
          description: {
            en: 'Empty = disabled. Plain-text URL with the latest version.',
            es: 'Vacío = desactivado. URL en texto plano con la versión.',
          },
          default: '',
        },
        {
          id: 'StoreUrl',
          type: 'string',
          label: { en: 'Store URL', es: 'URL de la tienda' },
          default: 'https://complex-studios-store.tebex.io',
        },
      ],
    },

    {
      id: 'ui',
      type: 'group',
      label: { en: 'UI positioning', es: 'Posicionamiento UI' },
      fields: [
        {
          id: 'progressbarPos',
          type: 'select',
          label: { en: 'Progress bar position', es: 'Posición del progress bar' },
          default: 'middle',
          options: [
            { value: 'top', label: 'top' },
            { value: 'middle', label: 'middle' },
            { value: 'bottom', label: 'bottom' },
          ],
        },
        {
          id: 'textuiPos',
          type: 'select',
          label: { en: 'TextUI position', es: 'Posición del TextUI' },
          default: 'right-center',
          options: [
            { value: 'top-left', label: 'top-left' },
            { value: 'top-right', label: 'top-right' },
            { value: 'right-center', label: 'right-center' },
            { value: 'bottom-left', label: 'bottom-left' },
            { value: 'bottom-right', label: 'bottom-right' },
          ],
        },
      ],
    },

    {
      id: 'interact',
      type: 'group',
      label: { en: '3D interact prompt', es: 'Prompt 3D' },
      fields: [
        {
          id: 'keyHoldDuration',
          type: 'slider',
          label: { en: 'Hold duration (ms)', es: 'Duración del hold (ms)' },
          default: 600,
          min: 100,
          max: 3000,
          step: 50,
          unit: 'ms',
        },
        {
          id: 'promptDistance',
          type: 'number',
          label: { en: 'Prompt distance (m)', es: 'Distancia del prompt (m)' },
          default: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          unit: 'm',
        },
        {
          id: 'dotDistance',
          type: 'number',
          label: { en: 'Dot distance (m)', es: 'Distancia del punto (m)' },
          default: 3.5,
          min: 0.5,
          max: 20,
          step: 0.1,
          unit: 'm',
        },
      ],
    },

    {
      id: 'times',
      type: 'group',
      label: { en: 'Action timings', es: 'Tiempos de acción' },
      collapsed: true,
      fields: [
        { id: 'time_preparing', type: 'slider', label: { en: 'Preparing (ms)', es: 'Preparar (ms)' }, default: 2000, min: 200, max: 30000, step: 100, unit: 'ms' },
        { id: 'time_makeFood', type: 'slider', label: { en: 'Cooking (ms)', es: 'Cocinar (ms)' }, default: 10000, min: 500, max: 60000, step: 250, unit: 'ms' },
        { id: 'time_eatFood', type: 'slider', label: { en: 'Eating (ms)', es: 'Comer (ms)' }, default: 9000, min: 500, max: 60000, step: 250, unit: 'ms' },
        { id: 'time_takeOrder', type: 'slider', label: { en: 'Take order (ms)', es: 'Tomar pedido (ms)' }, default: 5000, min: 500, max: 30000, step: 250, unit: 'ms' },
        { id: 'time_delivery', type: 'slider', label: { en: 'Delivery handoff (ms)', es: 'Entrega (ms)' }, default: 3000, min: 500, max: 30000, step: 250, unit: 'ms' },
      ],
    },

    {
      id: 'limits',
      type: 'group',
      label: { en: 'Operational limits', es: 'Límites operativos' },
      collapsed: true,
      fields: [
        { id: 'maxPreparesPerTime', type: 'slider', label: { en: 'Max prepares per session', es: 'Máx preparaciones por sesión' }, default: 10, min: 1, max: 100, step: 1 },
        { id: 'useOxInventoryCraft', type: 'boolean', label: { en: 'Use ox_inventory craft (else ox_lib menu)', es: 'Usar craft de ox_inventory (si no, menú ox_lib)' }, default: false },
        { id: 'toggleDutyZones', type: 'boolean', label: { en: 'Auto on-duty when entering zone', es: 'On-duty automático al entrar en zona' }, default: true },
        { id: 'offlineShopsUpdate', type: 'slider', label: { en: 'Offline shops refresh (ms)', es: 'Refresco de tiendas offline (ms)' }, default: 5000, min: 1000, max: 60000, step: 500, unit: 'ms' },
      ],
    },

    {
      id: 'rateLimits',
      type: 'group',
      label: { en: 'Rate limits', es: 'Límites anti-spam' },
      collapsed: true,
      fields: [
        { id: 'rate_enabled', type: 'boolean', label: { en: 'Enable rate limits', es: 'Activar rate limits' }, default: true },
        { id: 'rate_consuming', type: 'slider', label: { en: 'Consuming (ms)', es: 'Consumir (ms)' }, default: 3000, min: 0, max: 30000, step: 100, unit: 'ms' },
        { id: 'rate_crafting', type: 'slider', label: { en: 'Crafting (ms)', es: 'Crafteo (ms)' }, default: 1000, min: 0, max: 30000, step: 100, unit: 'ms' },
        { id: 'rate_recipeCreate', type: 'slider', label: { en: 'Recipe create (ms)', es: 'Crear receta (ms)' }, default: 5000, min: 0, max: 60000, step: 100, unit: 'ms' },
      ],
    },

    {
      id: 'visualEffects',
      type: 'group',
      label: { en: 'Visual effects (cooking)', es: 'Efectos visuales (cocinar)' },
      collapsed: true,
      fields: [
        { id: 'fx_enabled', type: 'boolean', label: { en: 'Enable visual FX', es: 'Activar FX' }, default: true },
        { id: 'fx_networkSync', type: 'boolean', label: { en: 'Sync over network', es: 'Sincronizar en red' }, default: true },
        { id: 'fx_showToAll', type: 'boolean', label: { en: 'Show to all players', es: 'Mostrar a todos' }, default: true },
        { id: 'fx_renderDistance', type: 'slider', label: { en: 'Render distance (m)', es: 'Distancia de render (m)' }, default: 25, min: 5, max: 100, step: 1, unit: 'm' },
        { id: 'fx_enableProps', type: 'boolean', label: { en: 'Enable progressive props (alpha)', es: 'Activar props progresivos (alpha)' }, default: false },
        { id: 'fx_enableParticles', type: 'boolean', label: { en: 'Enable particles', es: 'Activar partículas' }, default: true },
        { id: 'fx_particleIntensity', type: 'slider', label: { en: 'Particle intensity', es: 'Intensidad' }, default: 2.5, min: 0.5, max: 5, step: 0.1 },
      ],
    },

    {
      id: 'builder',
      type: 'group',
      label: { en: 'Restaurant builder (in-game editor)', es: 'Editor in-game' },
      collapsed: true,
      fields: [
        { id: 'builder_enabled', type: 'boolean', label: { en: 'Enable builder', es: 'Activar editor' }, default: true },
        { id: 'builder_command', type: 'string', label: { en: 'Command', es: 'Comando' }, default: 'restaurantbuilder' },
        { id: 'builder_aceTag', type: 'string', label: { en: 'ACE permission tag', es: 'ACE permission' }, default: 'cpx-restaurants.builder' },
        { id: 'builder_rateEnabled', type: 'boolean', label: { en: 'Anti-abuse rate limit', es: 'Anti-abuso (rate limit)' }, default: true },
        { id: 'builder_maxOpsPerMinute', type: 'slider', label: { en: 'Max ops per minute', es: 'Máx ops por minuto' }, default: 60, min: 10, max: 600, step: 10 },
        { id: 'builder_autoSeed', type: 'boolean', label: { en: 'Auto-seed restaurants on first boot', es: 'Auto-cargar restaurantes en primer arranque' }, default: true },
      ],
    },
  ],

  toLua(v) {
    const out: string[] = [];
    out.push('-- ==========================================================================');
    out.push('-- cpx-restaurants — Main Configuration');
    out.push('-- Generated by the interactive Configuration Builder.');
    out.push('-- ==========================================================================\n');
    out.push('Config = Config or {}\n');

    out.push(luaSection('Localization & Theme'));
    out.push(`Config.language = ${luaString(v.language)}`);
    out.push(`Config.theme    = ${luaString(v.theme)}\n`);

    out.push(luaSection('Framework / Inventory / Banking / Target'));
    out.push(`Config.framework = ${luaString(v.framework)}`);
    out.push(`Config.banking   = ${luaString(v.banking)}`);
    out.push(`Config.inventory = ${luaString(v.inventory)}`);
    out.push(`Config.target    = ${luaString(v.target)}`);
    out.push(`Config.core      = nil  -- set by bridge at runtime`);
    out.push(`Config.debug     = ${luaBool(v.debug)}\n`);

    out.push(luaSection('Database & Updates'));
    out.push(`Config.AutoInstallDatabase = ${luaBool(v.AutoInstallDatabase)}`);
    out.push(`Config.UpdateCheckUrl      = ${luaString(v.UpdateCheckUrl)}`);
    out.push(`Config.StoreUrl            = ${luaString(v.StoreUrl)}\n`);

    out.push(luaSection('Inventory image paths (defaults)'));
    out.push(`Config.imagesDirectory = 'nui://ox_inventory/web/images/%s.png'
Config.fallbackImages = {
    food    = 'nui://ox_inventory/web/images/burger.png',
    drink   = 'nui://ox_inventory/web/images/water.png',
    default = 'nui://ox_inventory/web/images/restaurant_food.png',
}\n`);

    out.push(luaSection('UI Positioning'));
    out.push(`Config.progressbarPos = ${luaString(v.progressbarPos)}`);
    out.push(`Config.textuiPos      = ${luaString(v.textuiPos)}\n`);

    out.push(luaSection('3D Interact prompt'));
    out.push(`Config.interact = {`);
    out.push(`    keyHoldDuration = ${luaNumber(v.keyHoldDuration)},`);
    out.push(`    promptDistance  = ${luaNumber(v.promptDistance)},`);
    out.push(`    dotDistance     = ${luaNumber(v.dotDistance)},`);
    out.push(`}\n`);

    out.push(luaSection('Action Timings (ms)'));
    out.push(`Config.times = {`);
    out.push(`    preparing = ${luaNumber(v.time_preparing)},`);
    out.push(`    makeFood  = ${luaNumber(v.time_makeFood)},`);
    out.push(`    eatFood   = ${luaNumber(v.time_eatFood)},`);
    out.push(`    takeOrder = ${luaNumber(v.time_takeOrder)},`);
    out.push(`    delivery  = ${luaNumber(v.time_delivery)},`);
    out.push(`}\n`);

    out.push(luaSection('Operational Limits'));
    out.push(`Config.maxPreparesPerTime  = ${luaNumber(v.maxPreparesPerTime)}`);
    out.push(`Config.useOxInventoryCraft = ${luaBool(v.useOxInventoryCraft)}`);
    out.push(`Config.toggleDutyZones     = ${luaBool(v.toggleDutyZones)}`);
    out.push(`Config.offlineShopsUpdate  = ${luaNumber(v.offlineShopsUpdate)}`);
    out.push(`Config.sitsGetUpKey        = 38\n`);

    out.push(`Config.boxes = { slots = 10, weight = 50 }\n`);

    out.push(luaSection('Rate Limits'));
    out.push(`Config.rateLimits = {`);
    out.push(`    enabled      = ${luaBool(v.rate_enabled)},`);
    out.push(`    consuming    = ${luaNumber(v.rate_consuming)},`);
    out.push(`    crafting     = ${luaNumber(v.rate_crafting)},`);
    out.push(`    recipeCreate = ${luaNumber(v.rate_recipeCreate)},`);
    out.push(`}\n`);

    out.push(luaSection('Discord Webhooks (paste your URLs manually)'));
    out.push(`Config.logs = {
    createRecipe       = '',
    editRecipe         = '',
    deleteRecipe       = '',
    menuImageEdited    = '',
    registers          = '',
    offlineShopItemBuy = '',
    craftItem          = '',
}\n`);

    out.push(luaSection('Visual Effects'));
    out.push(`Config.visualEffects = {`);
    out.push(`    enabled           = ${luaBool(v.fx_enabled)},`);
    out.push(`    networkSync       = ${luaBool(v.fx_networkSync)},`);
    out.push(`    showToAll         = ${luaBool(v.fx_showToAll)},`);
    out.push(`    renderDistance    = ${luaNumber(v.fx_renderDistance)},`);
    out.push(`    enableProps       = ${luaBool(v.fx_enableProps)},`);
    out.push(`    progressiveProps  = true,`);
    out.push(`    enableParticles   = ${luaBool(v.fx_enableParticles)},`);
    out.push(`    particleIntensity = ${luaNumber(v.fx_particleIntensity)},`);
    out.push(`    ambientEnabled    = false,`);
    out.push(`    enableToolProps   = false,`);
    out.push(`}\n`);

    out.push(luaSection('Builder (in-game restaurant editor)'));
    out.push(`Config.builder = {`);
    out.push(`    enabled  = ${luaBool(v.builder_enabled)},`);
    out.push(`    command  = ${luaString(v.builder_command)},`);
    out.push(`    aliases  = { 'rbuilder', 'restbuild' },`);
    out.push(`    aceTag   = ${luaString(v.builder_aceTag)},`);
    out.push(`    rateLimit = { enabled = ${luaBool(v.builder_rateEnabled)}, maxOpsPerMinute = ${luaNumber(v.builder_maxOpsPerMinute)} },`);
    out.push(`    respectActiveUsers = true,`);
    out.push(`    optimisticConcurrency = true,`);
    out.push(`    autoSeed = ${luaBool(v.builder_autoSeed)},`);
    out.push(`    markerColors = {
        station       = { 80,  230, 120 },
        prepare       = { 250, 180, 80  },
        stash         = { 80,  150, 240 },
        tray          = { 90,  220, 230 },
        menu          = { 200, 130, 240 },
        music         = { 240, 200, 90  },
        chair         = { 180, 180, 180 },
        ped           = { 240, 130, 200 },
        register      = { 180, 240, 100 },
        pos           = { 100, 220, 255 },
        management    = { 240, 240, 240 },
        box           = { 240, 200, 150 },
        garage        = { 130, 150, 230 },
        drivethru_in  = { 200, 240, 100 },
        drivethru_out = { 240, 100, 100 },
        delivery      = { 240, 80,  80  },
    },`);
    out.push(`}\n`);

    out.push(luaSection('Delivery NPC locations & peds — edit manually'));
    out.push(`-- See the original config/main.lua shipped with the resource for the
-- full list. Keeping the defaults in-place will work out of the box.`);

    return out.join('\n');
  },
};

/* ──────────────────────────────────────────────────────────────────────────
 * PROGRESSION
 * ────────────────────────────────────────────────────────────────────────── */

export const restaurantsProgressionSchema: ConfigSchema = {
  fileName: 'config/progression.lua',
  tabLabel: { en: 'progression.lua', es: 'progression.lua' },
  fields: [
    {
      id: 'xp',
      type: 'group',
      label: { en: 'XP per action', es: 'XP por acción' },
      fields: [
        { id: 'xp_cooking_food', type: 'slider', label: { en: 'Cook food recipe', es: 'Cocinar receta de comida' }, default: 10, min: 0, max: 1000, step: 1 },
        { id: 'xp_cooking_drink', type: 'slider', label: { en: 'Cook drink recipe', es: 'Cocinar receta de bebida' }, default: 10, min: 0, max: 1000, step: 1 },
        { id: 'xp_delivery_npc', type: 'slider', label: { en: 'Classic NPC delivery', es: 'Delivery clásico (NPC)' }, default: 50, min: 0, max: 2000, step: 5 },
        { id: 'xp_customer_order', type: 'slider', label: { en: 'Customer Food Delivery order', es: 'Pedido Food Delivery (cliente)' }, default: 75, min: 0, max: 2000, step: 5 },
      ],
    },
    {
      id: 'tasks',
      type: 'group',
      label: { en: 'Daily task targets', es: 'Objetivos diarios' },
      description: {
        en: 'Reset at server midnight. Player meets target → bonus XP.',
        es: 'Reinicio a medianoche del servidor. Cumplir objetivo → XP bonus.',
      },
      fields: [
        { id: 'task_food_target', type: 'slider', label: { en: 'Cook meals — target', es: 'Cocinar platos — objetivo' }, default: 30, min: 1, max: 200, step: 1 },
        { id: 'task_food_xp', type: 'slider', label: { en: 'Cook meals — XP', es: 'Cocinar platos — XP' }, default: 100, min: 0, max: 5000, step: 10 },
        { id: 'task_drink_target', type: 'slider', label: { en: 'Prepare drinks — target', es: 'Preparar bebidas — objetivo' }, default: 30, min: 1, max: 200, step: 1 },
        { id: 'task_drink_xp', type: 'slider', label: { en: 'Prepare drinks — XP', es: 'Preparar bebidas — XP' }, default: 100, min: 0, max: 5000, step: 10 },
        { id: 'task_delivery_target', type: 'slider', label: { en: 'Deliveries — target', es: 'Deliveries — objetivo' }, default: 5, min: 1, max: 100, step: 1 },
        { id: 'task_delivery_xp', type: 'slider', label: { en: 'Deliveries — XP', es: 'Deliveries — XP' }, default: 200, min: 0, max: 5000, step: 10 },
        { id: 'task_customer_target', type: 'slider', label: { en: 'Customer orders — target', es: 'Pedidos cliente — objetivo' }, default: 10, min: 1, max: 100, step: 1 },
        { id: 'task_customer_xp', type: 'slider', label: { en: 'Customer orders — XP', es: 'Pedidos cliente — XP' }, default: 300, min: 0, max: 5000, step: 10 },
      ],
    },
  ],

  toLua(v) {
    return `-- ==========================================================================
-- cpx-restaurants — Progression
-- Generated by the Configuration Builder.
-- ==========================================================================

Config = Config or {}
Config.Progression = Config.Progression or {}

${luaSection('XP per Action')}
Config.Progression.XPActions = {
    cooking_food   = ${luaNumber(v.xp_cooking_food)},
    cooking_drink  = ${luaNumber(v.xp_cooking_drink)},
    delivery_npc   = ${luaNumber(v.xp_delivery_npc)},
    customer_order = ${luaNumber(v.xp_customer_order)},
}

${luaSection('Daily Tasks (reset at server midnight)')}
Config.Progression.DailyTasks = {
    {
        id           = 'cooking_food',
        labelKey     = 'task_daily_cooking_food',
        labelDefault = 'Cook Meals',
        counter      = 'food',
        target       = ${luaNumber(v.task_food_target)},
        completionXP = ${luaNumber(v.task_food_xp)},
    },
    {
        id           = 'cooking_drink',
        labelKey     = 'task_daily_cooking_drink',
        labelDefault = 'Prepare Drinks',
        counter      = 'drink',
        target       = ${luaNumber(v.task_drink_target)},
        completionXP = ${luaNumber(v.task_drink_xp)},
    },
    {
        id           = 'deliveries',
        labelKey     = 'task_daily_deliveries',
        labelDefault = 'Complete Deliveries',
        counter      = 'deliveries',
        target       = ${luaNumber(v.task_delivery_target)},
        completionXP = ${luaNumber(v.task_delivery_xp)},
    },
    {
        id           = 'customer_orders',
        labelKey     = 'task_daily_customer_orders',
        labelDefault = 'Handle Customer Orders',
        counter      = 'customer_orders',
        target       = ${luaNumber(v.task_customer_target)},
        completionXP = ${luaNumber(v.task_customer_xp)},
    },
}
`;
  },
};

/** Both schemas exported as a single array for easy import in the doc page. */
export const restaurantsConfigSchemas = [
  restaurantsMainSchema,
  restaurantsProgressionSchema,
];
