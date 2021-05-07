# prettier-config-lollipop

## Options

```js
semi: false
```

Why?

 - Less visual clutter
 - Easier to move code around
 - Semicolons are not needed 99%+ of the time, and Prettier can insert them when they are.

---

```js
trailingComma: "all"
```

Why?

 - Better git diff. Adding a new line won't affect the previous line.
 - Easier to move lines around.
 - Code is always transpiled anyway, so lack of browser support is not relevant.

---

```js
singleQuote: true
```

Why?

 - Less escaping needed, since it's more common for strings to contain double qoutes
 - Slightly less visual clutter
