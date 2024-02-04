# prettier-config-one

> My recommended prettier config

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
singleQuote: true
```

_Why?_

- Slightly less visual clutter
- Doesn't require pressing "shift"
- It's in the [Google style guide](https://google.github.io/styleguide/jsguide.html#features-strings-use-single-quotes)

---

```yml
jsxSingleQuote: true
```

_Why?_

- Consistent with `singleQuote`

---

```yml
singleAttributePerLine: true
```

_Why?_

- Better git diff. Adding or removing props won't affect unrelated ones
- More consistent to always have props on new lines

---

```yml
experimentalTernaries: true
```

_Why?_

- Supposedly better readability

---

## How to use

### Automatic setup (recommended)

Use [setup-prettier](https://github.com/sajmoni/setup-prettier) to automatically add `prettier` and this config

```console
npx setup-prettier@latest
```

### Manual install

```console
npm install --save-dev prettier-config-one
```

In your package.json or prettier config:

```json
  "prettier": "prettier-config-one"
```
