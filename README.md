# prettier-config-lollipop

## Options

```js
semi: false
```

_Why?_

 - Less visual clutter.
 - Easier to move code around.
 - Semicolons are not needed 99%+ of the time, and Prettier can insert them when they are.

---

```js
trailingComma: "all"
```

_Why?_

 - Better git diff. Adding a new line won't affect the previous line.
 - Easier to move lines around.
 - Code is always transpiled anyway, so lack of browser support is not relevant.

---

```js
singleQuote: true
```

_Why?_

 - Less escaping needed, since it's more common for strings to contain double qoutes.
 - Slightly less visual clutter.
