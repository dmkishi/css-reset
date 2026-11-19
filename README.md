CSS Reset
================================================================================
[DM Kishi's custom CSS reset](https://github.com/dmkishi/css-reset/).

Install
--------------------------------------------------------------------------------
### Add this package to your project
```sh
pnpm add @dmkishi/css-reset
npm install @dmkishi/css-reset
```

### Add this reset to your CSS
CSS imports from `node_modules` requires a bundler such as Vite or
[`postcss-import`](https://www.npmjs.com/package/postcss-import).

```css
@import '@dmkishi/css-reset/dist/reset.css' layer(reset);
```

Install without a bundler
--------------------------------------------------------------------------------
Pick one:

- CDN `<link>` (simplest). Load it before your own stylesheet:
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dmkishi/css-reset@1.3.2/dist/reset.min.css">
  <link rel="stylesheet" href="styles.css">
  ```
- CDN `@import` with a layer. Put it before any other rules in your stylesheet:
  ```css
  @import url('https://cdn.jsdelivr.net/npm/@dmkishi/css-reset@1.3.2/dist/reset.min.css') layer(reset);
  ```
  The browser requests the reset only after your stylesheet has downloaded.
- Copy the file into your project, e.g. download the CDN URL above to
  `vendor/reset.css`. Load it with `<link>` or a relative import:
  ```css
  @import url('vendor/reset.css') layer(reset);
  ```
- npm without a bundler. This works only if your server publishes `node_modules`;
  otherwise, copy the file:
  ```css
  @import url('/node_modules/@dmkishi/css-reset/dist/reset.css') layer(reset);
  ```

### Notes
- **Version pinning**: `@1.3.2` locks one exact version, while `@1` follows 1.x
  releases. Use an exact version in production.
- **Layer order**: `<link>` can't put a stylesheet in a cascade layer; only
  `@import` can. If you use other layers, declare their order first, e.g.
  `@layer reset, base, components;`.

Develop
--------------------------------------------------------------------------------
1. Install:
     ```sh
     git clone https://github.com/dmkishi/css-reset.git
     cd css-reset
     pnpm install
     ```
1. Edit and lint with `pnpm lint`
1. Update:
   - **README.md**: Version numbers in the CDN URLs and add an entry to the Changelog.
   - **package.json**: Version number.
1. Publish: `git push && pnpm publish`
   - Both actions run the linter and builder as necessary.
   - If you are not logged in, `pnpm login`

Changelog
--------------------------------------------------------------------------------
### v1.3.2 (2026-11-19)
- Add instructions for usage without a bundler.
- Improve Husky script, pre-push.

### v1.3.1 (2026-5-1)
- Improve README.

### v1.3.0 (2026-5-1)
- Add padding reset to `<ul>`.
- Improve README.

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
