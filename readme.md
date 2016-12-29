# Babel setup

after initialising a package.json run the command:

```
  npm i babel-cli babel-preset-es2015 --save
```
Following this add the following to package.json scripts

```
  "babel": "babel yourfile.js --watch --out-file outputFile.js"
```

Add any babel presets or plugins
```
  "babel": {
    "presets": [
      "es2015"
    ],
    "plugins": ["transform-object-rest-spread"]
  }
```

any additional plugin can be added by finding the relevant plugin at babel e.g:
```
  npm install babel-plugin-transform-object-rest-spread --save
```

Finally to run babel run:
```
  npm run babel
```

To polyfill any needed methods without webpack add the script
```
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
```
