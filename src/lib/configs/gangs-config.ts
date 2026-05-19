/**
 * Schema for cpx-gangs / shared/sh_config.lua
 * Mirrors the user-facing settings block. Task/level/reward catalogues
 * are NOT exposed here (those are large data tables edited directly).
 */
import type { ConfigSchema } from '../config-schema';
import {
  luaString,
  luaBool,
  luaNumber,
  luaNil,
  luaSection,
} from '../lua';

export const gangsConfigSchema: ConfigSchema = {
  fileName: 'shared/sh_config.lua',
  tabLabel: { en: 'sh_config.lua', es: 'sh_config.lua' },
  fields: [
    /* ── Framework ───────────────────────── */
    {
      id: 'Framework',
      type: 'select',
      label: { en: 'Framework', es: 'Framework' },
      description: {
        en: "'auto' detects qb-core / qbx_core / es_extended.",
        es: "'auto' detecta qb-core / qbx_core / es_extended.",
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
        en: "'auto' probes ox > qs > qb > esx.",
        es: "'auto' prueba ox > qs > qb > esx.",
      },
      default: 'auto',
      options: [
        { value: 'auto', label: 'auto (recommended)' },
        { value: 'ox', label: 'ox_inventory' },
        { value: 'qs', label: 'qs-inventory' },
        { value: 'qb', label: 'qb-inventory' },
        { value: 'esx', label: 'ESX native' },
      ],
    },

    /* ── Season ──────────────────────────── */
    {
      id: 'season',
      type: 'group',
      label: { en: 'Season cycle', es: 'Ciclo de temporadas' },
      description: {
        en: 'Tasks, rewards, and leaderboards reset every season.',
        es: 'Tareas, recompensas y leaderboards se resetean por temporada.',
      },
      fields: [
        {
          id: 'UI_seasonAnchor',
          type: 'string',
          label: { en: 'Season anchor date', es: 'Fecha ancla de la temporada' },
          description: {
            en: 'Format: YYYY-MM-DD HH:MM:SS. Reference point for cycle math.',
            es: 'Formato: YYYY-MM-DD HH:MM:SS. Punto de referencia del ciclo.',
          },
          default: '2026-02-04 00:00:00',
          placeholder: '2026-02-04 00:00:00',
        },
        {
          id: 'UI_seasonDuration',
          type: 'slider',
          label: { en: 'Season duration', es: 'Duracion de la temporada' },
          default: 8,
          min: 1,
          max: 30,
          step: 1,
          unit: ' days',
        },
      ],
    },

    /* ── Gang creation command ───────────── */
    {
      id: 'createCmd',
      type: 'group',
      label: { en: 'Gang creation command', es: 'Comando para crear bandas' },
      fields: [
        {
          id: 'CreateGang_command',
          type: 'string',
          label: { en: 'Command name', es: 'Nombre del comando' },
          description: {
            en: 'Admin command to spawn new gangs from console / chat.',
            es: 'Comando admin para crear bandas desde consola o chat.',
          },
          default: 'creategang',
          placeholder: 'creategang',
        },
        {
          id: 'CreateGang_disableUI',
          type: 'boolean',
          label: { en: 'Disable in-game UI creation', es: 'Desactivar creacion via UI' },
          description: {
            en: 'If true, gangs can only be created via the command.',
            es: 'Si es true, solo se pueden crear bandas con el comando.',
          },
          default: false,
        },
      ],
    },

    /* ── Tasks ───────────────────────────── */
    {
      id: 'tasks',
      type: 'group',
      label: { en: 'Tasks system', es: 'Sistema de tareas' },
      fields: [
        {
          id: 'Tasks_minPerGang',
          type: 'slider',
          label: { en: 'Min tasks per gang', es: 'Tareas minimas por banda' },
          default: 2,
          min: 0,
          max: 10,
          step: 1,
        },
        {
          id: 'Tasks_maxPerGang',
          type: 'slider',
          label: { en: 'Max tasks per gang', es: 'Tareas maximas por banda' },
          default: 10,
          min: 1,
          max: 30,
          step: 1,
        },
        {
          id: 'Tasks_autoAssignMinutes',
          type: 'slider',
          label: { en: 'Auto-refill cadence', es: 'Cadencia de refill' },
          description: {
            en: 'Server checks for low task pools every X minutes.',
            es: 'El server revisa pools bajos cada X minutos.',
          },
          default: 40,
          min: 5,
          max: 120,
          step: 5,
          unit: ' min',
        },
        {
          id: 'Tasks_expirationHours',
          type: 'slider',
          label: { en: 'Task expiration', es: 'Expiracion de tareas' },
          default: 24,
          min: 1,
          max: 72,
          step: 1,
          unit: ' h',
        },
        {
          id: 'Tasks_acceptanceMinutes',
          type: 'slider',
          label: { en: 'Time to accept', es: 'Tiempo para aceptar' },
          default: 15,
          min: 1,
          max: 60,
          step: 1,
          unit: ' min',
        },
        {
          id: 'Tasks_completionMinutes',
          type: 'slider',
          label: { en: 'Time to complete', es: 'Tiempo para completar' },
          default: 30,
          min: 5,
          max: 240,
          step: 5,
          unit: ' min',
        },
      ],
    },

    /* ── Extortion ───────────────────────── */
    {
      id: 'extortion',
      type: 'group',
      label: { en: 'Extortion', es: 'Extorsion' },
      fields: [
        {
          id: 'Extortion_moneyPerHour',
          type: 'number',
          label: { en: 'Income per hour ($)', es: 'Ingreso por hora ($)' },
          default: 6667,
          min: 0,
          max: 100000,
          step: 100,
        },
        {
          id: 'Extortion_maxMoney',
          type: 'number',
          label: { en: 'Income cap ($)', es: 'Tope de ingreso ($)' },
          default: 40000,
          min: 0,
          max: 1000000,
          step: 1000,
        },
        {
          id: 'Extortion_itemRequired',
          type: 'nullable-string',
          label: { en: 'Item required to extort rivals', es: 'Item para extorsionar rivales' },
          description: {
            en: 'Gang owners do NOT need the item. Set nil to disable.',
            es: 'Los dueños de banda NO necesitan el item. nil para desactivar.',
          },
          default: 'extorcion',
          placeholder: 'extorcion',
        },
        {
          id: 'Extortion_removeOnUse',
          type: 'boolean',
          label: { en: 'Consume item on use', es: 'Consumir item al usar' },
          default: true,
        },
      ],
    },

    /* ── Cache ───────────────────────────── */
    {
      id: 'cache',
      type: 'group',
      label: { en: 'Cache & performance', es: 'Cache y performance' },
      fields: [
        {
          id: 'Cache_enabled',
          type: 'boolean',
          label: { en: 'Enable cache system', es: 'Activar sistema de cache' },
          default: true,
        },
        {
          id: 'Cache_uiTTL',
          type: 'slider',
          label: { en: 'Gang UI cache TTL', es: 'TTL del cache de UI' },
          default: 600,
          min: 60,
          max: 3600,
          step: 60,
          unit: ' s',
        },
        {
          id: 'Cache_warmUpOnStart',
          type: 'boolean',
          label: { en: 'Warm cache on start', es: 'Pre-cargar cache al iniciar' },
          default: true,
        },
        {
          id: 'Opt_debugLogging',
          type: 'boolean',
          label: { en: 'Verbose debug logging', es: 'Logs de debug verbosos' },
          description: {
            en: 'Keep off in production. Spammy by design when on.',
            es: 'Mantener apagado en produccion. Spammea consola si esta on.',
          },
          default: false,
        },
      ],
    },

    /* ── Police gating ───────────────────── */
    {
      id: 'police',
      type: 'group',
      label: { en: 'Police interactions', es: 'Interaccion con policia' },
      fields: [
        {
          id: 'PoliceJobs',
          type: 'array-string',
          label: { en: 'Police job names', es: 'Nombres del trabajo policia' },
          description: {
            en: 'Job names that count as police (raid alerts, extortion blocks).',
            es: 'Nombres de jobs que cuentan como policia (raids, extorsion).',
          },
          default: ['police'],
          itemPlaceholder: 'police',
          max: 8,
        },
        {
          id: 'Notify_graffitiSpray',
          type: 'boolean',
          label: { en: 'Notify on graffiti spray', es: 'Avisar al pintar graffiti' },
          default: true,
        },
        {
          id: 'Notify_graffitiClean',
          type: 'boolean',
          label: { en: 'Notify on graffiti clean', es: 'Avisar al limpiar graffiti' },
          default: true,
        },
        {
          id: 'Notify_stashRaid',
          type: 'boolean',
          label: { en: 'Notify on stash raid', es: 'Avisar al raidear stash' },
          default: true,
        },
      ],
    },
  ],

  toLua: (values) => {
    const v = values as Record<string, unknown>;
    const out: string[] = [];

    out.push('-- ═════════════════════════════════════════════════════════');
    out.push('-- CPX GANGS - shared/sh_config.lua');
    out.push('-- Generated by docs.complex-studios — paste over the head of');
    out.push('-- the file. Tables below (Tasks definitions, Rewards, Zones,');
    out.push('-- Dealers) are edited in their own shared/sh_*.lua files.');
    out.push('-- ═════════════════════════════════════════════════════════');
    out.push('');
    out.push("Config = {} -- Don't touch this");
    out.push('');
    out.push('-- Debug mode. Keep false in production.');
    out.push('Config.Debug = false');
    out.push('');

    out.push(luaSection('FRAMEWORK + INVENTORY'));
    out.push(`Config.Framework = ${luaString(v.Framework as string)}`);
    out.push(`Config.Inventory = ${luaString(v.Inventory as string)}`);
    out.push('');

    out.push(luaSection('UI'));
    out.push('-- The dashboard opens ONLY from the cpx-laptop "Gangs" app.');
    out.push('-- command and requiredItem MUST stay nil in this release.');
    out.push('Config.UI = {');
    out.push(`    command                 = nil,`);
    out.push(`    imageSource             = "ox_inventory/web/images/",`);
    out.push(`    disablePointVisibility  = false,`);
    out.push(`    disableMemberCount      = false,`);
    out.push(`    seasonAnchor            = ${luaString(v.UI_seasonAnchor as string)},`);
    out.push(`    seasonDuration          = ${luaNumber(v.UI_seasonDuration as number)},`);
    out.push(`    requiredItem            = nil,`);
    out.push(`    commandRestriction      = function(player) return true end,`);
    out.push('}');
    out.push('');

    out.push(luaSection('GANG CREATION COMMAND'));
    out.push('Config.CreateGangCommand = {');
    out.push(`    disableUICreation = ${luaBool(v.CreateGang_disableUI as boolean)},`);
    out.push(`    command           = ${luaString(v.CreateGang_command as string)},`);
    out.push('    hasPermissions = function(player)');
    out.push('        if lib.Framework and lib.Framework.HasGroup then');
    out.push("            if lib.Framework.HasGroup(player, 'god') then return true end");
    out.push("            if lib.Framework.HasGroup(player, 'admin') then return true end");
    out.push("            if lib.Framework.HasGroup(player, 'superadmin') then return true end");
    out.push("            if lib.Framework.HasGroup(player, 'moderator') then return true end");
    out.push('        end');
    out.push('        return false');
    out.push('    end,');
    out.push('}');
    out.push('');

    out.push(luaSection('POLICE + NOTIFICATIONS'));
    const policeJobs = (v.PoliceJobs as string[]) ?? ['police'];
    out.push(
      `Config.PoliceJobs = { ${policeJobs.map((j) => luaString(j)).join(', ')} }`,
    );
    out.push('Config.ActionNotifications = {');
    out.push('    Graffities = {');
    out.push(`        Cleaning = ${luaBool(v.Notify_graffitiClean as boolean)},`);
    out.push(`        Spraying = ${luaBool(v.Notify_graffitiSpray as boolean)},`);
    out.push('    },');
    out.push(`    StashHouseBeingRaided = ${luaBool(v.Notify_stashRaid as boolean)},`);
    out.push('}');
    out.push('');

    out.push(luaSection('TASKS'));
    out.push('Config.Tasks = {');
    out.push(`    minTasksPerGang              = ${luaNumber(v.Tasks_minPerGang as number)},`);
    out.push(`    maxTasksPerGang              = ${luaNumber(v.Tasks_maxPerGang as number)},`);
    out.push(`    autoAssignInterval           = ${luaNumber(v.Tasks_autoAssignMinutes as number)},`);
    out.push(`    taskExpirationHours          = ${luaNumber(v.Tasks_expirationHours as number)},`);
    out.push(`    initialTaskCount             = 3,`);
    out.push(`    acceptanceTimeMinutes        = ${luaNumber(v.Tasks_acceptanceMinutes as number)},`);
    out.push(`    completionTimeMinutes        = ${luaNumber(v.Tasks_completionMinutes as number)},`);
    out.push(`    useTaskTimeIfAvailable       = true,`);
    out.push(`    globalMissionCooldownMinutes = 15,`);
    out.push('}');
    out.push('');

    out.push(luaSection('CACHE + OPTIMIZATION'));
    out.push('Config.Cache = {');
    out.push(`    enabled            = ${luaBool(v.Cache_enabled as boolean)},`);
    out.push(`    gangUITTL          = ${luaNumber(v.Cache_uiTTL as number)},`);
    out.push(`    warmUpOnStart      = ${luaBool(v.Cache_warmUpOnStart as boolean)},`);
    out.push(`    warmUpDelay        = 5000,`);
    out.push(`    metricsEnabled     = true,`);
    out.push(`    metricsLogInterval = 300000,`);
    out.push('}');
    out.push('Config.Optimization = {');
    out.push(`    debugLogging        = ${luaBool(v.Opt_debugLogging as boolean)},`);
    out.push(`    blipCheckInterval   = 15000,`);
    out.push(`    lockCleanupInterval = 60000,`);
    out.push(`    dbSaveInterval      = 30,`);
    out.push('}');
    out.push('');

    out.push(luaSection('EXTORTION'));
    out.push('Config.Extortion = {');
    out.push(`    moneyPerHour    = ${luaNumber(v.Extortion_moneyPerHour as number)},`);
    out.push(`    maxMoney        = ${luaNumber(v.Extortion_maxMoney as number)},`);
    out.push(
      `    ItemRequired    = ${
        v.Extortion_itemRequired == null ? luaNil() : luaString(v.Extortion_itemRequired as string)
      },`,
    );
    out.push(`    RemoveItemOnUse = ${luaBool(v.Extortion_removeOnUse as boolean)},`);
    out.push(`    TimeRival       = 180,`);
    out.push(`    TimeLeader      = 180,`);
    out.push('}');

    return out.join('\n');
  },
};
