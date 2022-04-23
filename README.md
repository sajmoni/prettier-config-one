# prettier-config-one

> My recommended minimal prettier config for all projects

## Options

```yml
semi: false
```

_Why?_

- Less visual clutter
- Easier to move code around
- Semicolons are not needed 99%+ of the time, and Prettier can insert them when they are

---

```yml
trailingComma: "all"
```

_Why?_

- Better git diff. Adding a new line won't affect the previous line
- Easier to move lines around
- Code is always transpiled anyway, so lack of browser support is irrelevant

---

```yml
singleQuote: true
```

_Why?_

- Slightly less visual clutter

---

## :package: Install

**npm**

```
npm install --save-dev prettier-config-one
```

**yarn**

```
yarn add --dev prettier-config-one
```

## How to use

In your package.json or prettier config:

```json
"prettier": {
  "extends": "prettier-config-one"
}
```
