# Vanilla JSX

(This is experimental)

## Install

`npm install`

## Compile & Watch

Start dev server at `localhost:8080`:

```
npm start
```

## Build

`npm run build`

## Why?

-   Rendering like it's React, without React:
    -   'Components'
    -   JSX
-   Simple data binding: Bound elements as properties of the instance (see `this.components` in `StartView.js`). No DOM selectors anymore.
-   No framework overhead, no SPA gear, no PWA gear, usable in vanilla JS
-   ES6

## Uses cases

-   Projects which would have used jQuery before
-   Projects of small to medium complexity which won't act as SPA

## To Do

-   Get linter to ignore JSX import
