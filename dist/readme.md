# turfu

This module was generated using AB Tasty module CLI. You can find more infomation and documentation about modules at https://abtasty.gitbooks.io/module/.

## Preview your module

Launch your module in a new window and watch for changes.
```bash
npm start
```

## Main files

* `main.js`
Main source code of your module
* `icon.png`
Icon for your module (recommended size: 200x200px)

## Included

* [Rollup.js](https://rollupjs.org/) module bundler (like Webpack but smaller and faster).
* ES6 support using [Babel](https://babeljs.io/).
* JavaScript Linting with [ESLint](http://eslint.org/) and [Airbnb style](https://github.com/airbnb/javascript).
* JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
* [Prettier](https://prettier.io/) to format code.

**We heard your module have an UI, so we allowed ourselves to include some extra:**
* [Pug](https://github.com/aMarCruz/rollup-plugin-pug) (aka Jade) to transforms html files into JS template.
* [PostCSS](https://github.com/egoist/rollup-plugin-postcss) to automatically append your CSS to head just using `import 'yourstyle.css'` and also use CSS plugins including:
  * [CSSnext](http://cssnext.io/) to use the latest CSS syntax today.
  * [cssnano](http://cssnano.co/) to minify CSS.

## Add your module to AB Tasty

1. First, you'll need to have your module on NPM:
    * Create a minified bundle with `npm run build`
    * Bump the version of your module ([using semver](http://semver.org/)) with `npm version [patch|minor|major]`
    * Publish it to NPM: `npm publish`
2. Once your module is on NPM, you can now add it on AB Tasty at https://marketplace.abtasty.com/publish.
