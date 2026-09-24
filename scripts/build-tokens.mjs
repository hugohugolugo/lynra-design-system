// Regenerates tokens/tokens.json (W3C DTCG) from the :root block in colors_and_type.css.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const css = readFileSync(new URL('../colors_and_type.css', import.meta.url), 'utf8');
const start = css.indexOf(':root');
const root = css.slice(start, css.indexOf('}', start)).replace(/\/\*[\s\S]*?\*\//g, '');
const tokens = {};
const set = (path, v) => { let o = tokens; path.slice(0, -1).forEach(k => (o = o[k] ??= {})); o[path.at(-1)] = v; };
const refPath = r => r.startsWith('lynra-') ? `{color.brand.${r.slice(6)}}` : `{color.semantic.${r}}`;

for (const [, name, raw] of root.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
  const val = raw.replace(/\s+/g, ' ').trim();
  const ref = val.match(/^var\(--([a-z0-9-]+)\)$/i);
  const rules = [
    [/^lynra-/, n => ['color', 'brand', n.slice(6)], 'color'],
    [/^(bg|fg|border|divider|link)/, n => ['color', 'semantic', n], 'color'],
    [/^font-/, n => ['font', 'family', n.slice(5)], 'fontFamily'],
    [/^fs-/, n => ['font', 'size', n.slice(3)], 'dimension'],
    [/^lh-/, n => ['font', 'lineHeight', n.slice(3)], 'number'],
    [/^tracking-/, n => ['font', 'letterSpacing', n.slice(9)], 'dimension'],
    [/^space-/, n => ['space', n.slice(6)], 'dimension'],
    [/^(layout|header)/, n => ['layout', n], 'dimension'],
    [/^radius-/, n => ['radius', n.slice(7)], 'dimension'],
    [/^shadow-/, n => ['shadow', n.slice(7)], 'shadow'],
    [/^ease-/, n => ['motion', 'easing', n.slice(5)], 'cubicBezier'],
    [/^dur-/, n => ['motion', 'duration', n.slice(4)], 'duration'],
  ];
  const [, toPath, type] = rules.find(([re]) => re.test(name)) ?? [null, n => ['decorative', n], 'other'];
  set(toPath(name), { $type: type, $value: ref ? refPath(ref[1]) : val, $extensions: { css: `--${name}` } });
}

mkdirSync(new URL('../tokens/', import.meta.url), { recursive: true });
writeFileSync(new URL('../tokens/tokens.json', import.meta.url), JSON.stringify({
  $description: 'Lynra Design System tokens (W3C DTCG format). Generated from colors_and_type.css — CSS is the source of truth.',
  ...tokens,
}, null, 2) + '\n');
console.log('tokens/tokens.json written');
