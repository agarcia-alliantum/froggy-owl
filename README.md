# OWL Javascript Froggy Project

This project is an example on how to start a JavaScript project with the Odoo OWL framework.

Thanks to @SimonGenin for it's [original Starter Project for OWL](https://github.com/SimonGenin/OWL-JavaScript-Project-Starter)
Thanks to [Coding-Dod](https://github.com/Coding-Dodo/OWL-JavaScript-Tailwind-Project-Starter.git)


## Features

- [OWL](https://github.com/odoo/owl)
- [OWL Playground](https://odoo.github.io/owl/playground/)
- Javascript
- Livereload
- Rollup.js
- Tailwind and PostCSS
- Tests with Jest

## Installation

Install dependencies:

```bash
npm install
```

Dev with livereload:

```bash
npm run dev
```

Production build

```bash
npm run build
```

Run tests

```bash
npm run test
```

## Components
```javascript
// In this example, we show how components can be defined and created.
const { Component, useState, tags, mount } = owl;
const { xml, css } = tags;

// Counter component
const COUNTER_TEMPLATE = xml`
  <button t-on-click="state.value++">
    Click! [<t t-esc="state.value"/>]
  </button>`;

const COUNTER_STYLE = css`
  button {
    color: blue;
  }`;

class Counter extends Component {
  state = useState({ value: 0})
}
Counter.template = COUNTER_TEMPLATE;
Counter.style = COUNTER_STYLE;

// App
const APP_TEMPLATE = xml`
  <div>
    <Counter/>
    <Counter/>
  </div>`;

class App extends Component {}
App.template = APP_TEMPLATE;
App.components = { Counter };

// Application setup
mount(App, { target: document.body });
```
