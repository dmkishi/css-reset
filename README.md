CSS Reset
================================================================================
[DM Kishi's custom CSS reset](https://github.com/dmkishi/css-reset/).

Install
--------------------------------------------------------------------------------
```sh
pnpm add @dmkishi/css-reset
npm install @dmkishi/css-reset
```

Usage
--------------------------------------------------------------------------------
CSS imports from `node_modules` requires a bundler such as Vite or
[`postcss-import`](https://www.npmjs.com/package/postcss-import).

```css
@import '@dmkishi/css-reset/dist/reset.css' layer(reset);
```

Develop
--------------------------------------------------------------------------------
1. Install: `git clone https://github.com/dmkishi/css-reset.git && pnpm install`
1. Edit and lint with `pnpm lint`
1. Update version numbers and changelog and commit
1. Publish: `git push && pnpm publish`
   - Both actions run the linter and builder as necessary.

Changelog
--------------------------------------------------------------------------------
### v1.2.2 (2026-4-4)
- Fix usage example in README.
- Remove `<ol>` reset.

### v1.2.1 (2026-4-3)
- Set publishConfig access to public for scoped package.

### v1.2.0 (2026-4-3)
- Add preserve comment w/ project name, version, and link to reset CSS.
- Switch to PNPM.
- Improve README.

### v1.1.1 (2025-3-30)
- Fix missing "description" property.

### v1.1.0 (2025-3-30)
- Add rule for `<address>`.
- Add support for NPM.

### v1.0.0 (2025-3-28)
- Initial release.

Acknowledgments
--------------------------------------------------------------------------------
Taken from:
- <https://www.joshwcomeau.com/css/custom-css-reset/>
- <https://piccalil.li/blog/a-more-modern-css-reset/>
