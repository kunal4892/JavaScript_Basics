- Webpack - bundles files together, minifies it too
- Babel - Transpiler that can transpile ES6 code to ES5 code.
        so that production can happen in ES6 and deployment in ES5 as it's
        compatible with all browsers.
- Change the mode in webpack.config.js to development and add extra config in   it to convert to ES5.
- Presets on Babel configs