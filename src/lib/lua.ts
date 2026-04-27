/**
 * Helpers to emit syntactically valid Lua strings from JS values.
 * Single source of truth for the ConfigGenerator output.
 */

/** Escape a string and wrap in single quotes. */
export function luaString(s: string): string {
  return `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

/** Format a number — integers stay integer, floats keep up to 4 decimals stripped. */
export function luaNumber(n: number): string {
  if (!Number.isFinite(n)) return '0';
  if (Number.isInteger(n)) return String(n);
  // Trim trailing zeros after decimals.
  return parseFloat(n.toFixed(4)).toString();
}

export function luaBool(b: boolean): string {
  return b ? 'true' : 'false';
}

/** A bare nil literal. */
export function luaNil(): string {
  return 'nil';
}

/** Dispatch any JS primitive / array / plain object to Lua. */
export function luaValue(v: unknown): string {
  if (v === null || v === undefined) return luaNil();
  if (typeof v === 'string') return luaString(v);
  if (typeof v === 'number') return luaNumber(v);
  if (typeof v === 'boolean') return luaBool(v);
  if (Array.isArray(v)) return luaArrayInline(v);
  if (typeof v === 'object') return luaObjectInline(v as Record<string, unknown>);
  return luaNil();
}

/** Inline array: { 'a', 'b', 'c' } */
export function luaArrayInline(arr: unknown[]): string {
  return `{ ${arr.map(luaValue).join(', ')} }`;
}

/** Inline object: { foo = 1, bar = 'x' } */
export function luaObjectInline(obj: Record<string, unknown>): string {
  const entries = Object.entries(obj).map(([k, v]) => `${k} = ${luaValue(v)}`);
  return `{ ${entries.join(', ')} }`;
}

/** Multi-line array, one entry per row. */
export function luaArrayMultiline(arr: unknown[], indent = '    '): string {
  if (arr.length === 0) return '{}';
  const lines = arr.map((v) => `${indent}${luaValue(v)},`);
  return `{\n${lines.join('\n')}\n}`;
}

/** Multi-line object, one entry per row. */
export function luaObjectMultiline(
  obj: Record<string, unknown>,
  indent = '    '
): string {
  const keys = Object.keys(obj);
  if (keys.length === 0) return '{}';
  const lines = keys.map((k) => `${indent}${k} = ${luaValue(obj[k])},`);
  return `{\n${lines.join('\n')}\n}`;
}

/** Build a `Config.foo = value` line with an optional comment block above. */
export function luaAssign(
  key: string,
  value: unknown,
  comment?: string
): string {
  const head = comment
    ? comment
        .split('\n')
        .map((line) => `-- ${line}`)
        .join('\n') + '\n'
    : '';
  return `${head}${key} = ${luaValue(value)}`;
}

/** Build a banner-style comment block (for sections). */
export function luaSection(title: string): string {
  const bar = '═'.repeat(45);
  return `-- ${bar}\n-- ${title}\n-- ${bar}`;
}
