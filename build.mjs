import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const css = readFileSync('src/reset.css', 'utf8');

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * <${pkg.homepage}>
 */`;

mkdirSync('dist', { recursive: true });
writeFileSync('dist/reset.css', `${banner}\n${css}`);
