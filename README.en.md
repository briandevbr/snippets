<div align="center">

# 🧩 snippets

> 🌐 Leia em [Português](./README.md)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&pause=1000&color=2F81F7&center=true&vCenter=true&width=520&height=36&lines=JS+snippets+ready+to+copy+and+paste;Every+function+tested+with+real+output;More+snippets+coming+soon)](#-features)

[![Stack](https://skillicons.dev/icons?i=js,nodejs,git,github)](#️-technologies-used)

`Pure JavaScript · 0 runtime dependencies · tested with Vitest · ISC`

</div>

Personal collection of JavaScript utility functions, meant to be copied and reused in other projects. Each snippet is self-contained, has no runtime dependencies, and comes with automated tests using [Vitest](https://vitest.dev/).

---

## 📑 Table of Contents

- [🗂️ Project Structure](#️-project-structure)
- [🗂️ Project Structure - tree](#️-project-structure---tree)
- [⚙️ Technologies used](#️-technologies-used)
- [🚀 How to run](#-how-to-run)
- [🧪 Tests](#-tests)
- [✨ Features](#-features)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🗂️ Project Structure

| Path                        | Description                                                                                                                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/sortAscending.js`      | Takes an array, validates that it only contains integers, and returns an object with the original array plus a sorted (ascending) copy                                                                                         |
| `src/sortAscending.test.js` | Test suite ([Vitest](https://vitest.dev/)) with 6 cases: sorting, immutability of the original array, negative/multi-digit numbers, and all three error paths (not an array, non-integer element, blank spot inside the array) |
| `package.json`              | Project metadata and the `npm test` script (Vitest)                                                                                                                                                                            |
| `package-lock.json`         | Lockfile for the dependencies installed by npm                                                                                                                                                                                 |
| `.gitignore`                | Ignores `node_modules/`, the Code Runner scratch file (`tempCodeRunnerFile.*`), and the test coverage report (`coverage/`)                                                                                                     |
| `LICENSE`                   | ISC license text                                                                                                                                                                                                               |
| `README.md`                 | This document, in Portuguese                                                                                                                                                                                                   |
| `README.en.md`              | English version of this document                                                                                                                                                                                               |

---

## 🗂️ Project Structure - tree

```
🗂️
├── 📁 src
│  ├── ⚙️ sortAscending.js
│  └── 🧪 sortAscending.test.js
├── 🔧 .gitignore
├── 🗒️ LICENSE
├── 📦 package-lock.json
├── 📦 package.json
├── 🇺🇸 README.en.md
└── 🇧🇷 README.md
```

---

## ⚙️ Technologies used

- [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript) (ES6+ / ESM) — implementation language for every snippet, no runtime dependencies
- [Node.js](https://nodejs.org/) — runtime used to run the snippets and the test suite
- [Vitest](https://vitest.dev/) — testing framework used in `sortAscending.test.js`

---

## 🚀 How to run

Prerequisite: [Node.js](https://nodejs.org/) installed.

```bash
git clone https://github.com/briandevbr/snippets.git
cd snippets
```

The snippets aren't an installable package — the idea is to copy the function into your own project. To quickly try `sortAscending` without copying anything, import the file directly in an ESM script:

```bash
node --input-type=module -e "
import sortAscending from './src/sortAscending.js';
console.log(sortAscending([5, 3, 9, 1, 4]));
"
```

Real output:

```
{ arrOriginal: [ 5, 3, 9, 1, 4 ], sortAscending: [ 1, 3, 4, 5, 9 ] }
```

If the input isn't an array of integers, the function doesn't throw — it returns an error object instead:

```
{ error: 'The provided input must be an array.' }
```

---

## 🧪 Tests

```bash
npm install
npm test
```

The suite (`sortAscending.test.js`, via Vitest) covers 6 cases: ascending sort, non-mutation of the original array, negative and multi-digit numbers, and all three error paths (input that isn't an array, input with a non-integer element, input with a blank spot inside the array).

> ⚠️ Vitest 5's own `package.json` declares `node: ^22.12.0 || ^24.0.0 || >=26.0.0`. On older Node versions (e.g. 18.x), `npm test` fails to even start — this doesn't affect using the snippet directly, only the test suite.

---

## ✨ Features

**Progress: 4 of 5 steps done**

- [x] Input validation (must be an array, and every element must be an integer)
- [x] Ascending sort without mutating the original array (`sort` runs on a spread copy)
- [x] Returns a descriptive error object instead of throwing an unhandled exception
- [x] Automated test suite with Vitest
- [ ] More utility snippets for the collection (planned)

---

## 🤝 Contributing

Personal practice project — no external contribution process at the moment. Suggestions are welcome via [issues](https://github.com/briandevbr/snippets/issues).

---

## 📄 License

[ISC](https://opensource.org/license/isc-license-txt/) — see the [`LICENSE`](./LICENSE) file.

---

<div align="center">
  <sub>Made by <a href="https://github.com/briandevbr">David Brian</a> · part of my personal collection of JS snippets</sub>
</div>
