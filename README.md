# prettier-config-one

> My recommended minimal prettier config for all projects

## Options

```js
semi: false
```

_Why?_

 - Less visual clutter
 - Easier to move code around
 - Semicolons are not needed 99%+ of the time, and Prettier can insert them when they are

---

```js
trailingComma: "all"
```

_Why?_

 - Better git diff. Adding a new line won't affect the previous line
 - Easier to move lines around
 - Code is always transpiled anyway, so lack of browser support is irrelevant

---

```js
singleQuote: true
```

_Why?_

 - Slightly less visual clutter

## :package: Install

**npm**

```
npm install prettier-config-one
```

**yarn**

```
yarn add prettier-config-one
```

## How to use

In your package.json or prettierconfig

```json
"prettier": {
 "extends": "prettier-config-one"
}
```
