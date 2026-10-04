<div align="center">

# 🧩 snippets

> 🌐 Read this in [English](./README.en.md)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&pause=1000&color=2F81F7&center=true&vCenter=true&width=520&height=36&lines=Snippets+JS+prontos+pra+copiar+e+colar;Cada+fun%C3%A7%C3%A3o+testada+com+sa%C3%ADda+real;Mais+snippets+chegando+em+breve)](#-funcionalidades)

[![Stack](https://skillicons.dev/icons?i=js,nodejs,git,github)](#️-tecnologias-usadas)

`JavaScript puro · 0 dependências de runtime · testes com Vitest · ISC`

</div>

Coleção pessoal de funções JavaScript utilitárias, pensadas para serem copiadas e reaproveitadas em outros projetos. Cada snippet é independente, sem dependências de runtime, e acompanhado de testes automatizados com [Vitest](https://vitest.dev/).

---

## 📑 Sumário

- [🗂️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🗂️ Estrutura do Projeto - tree](#️-estrutura-do-projeto---tree)
- [⚙️ Tecnologias usadas](#️-tecnologias-usadas)
- [🚀 Como rodar](#-como-rodar)
- [🧪 Testes](#-testes)
- [✨ Funcionalidades](#-funcionalidades)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

---

## 🗂️ Estrutura do Projeto

| Caminho | Descrição |
|---|---|
| `src/sortAscending.js` | Recebe um array, valida se é composto só por inteiros e retorna um objeto com o array original e uma cópia ordenada de forma ascendente |
| `sortAscending.test.js` | Suíte de testes ([Vitest](https://vitest.dev/)) com 5 casos: ordenação, imutabilidade do array original, números negativos/de vários dígitos e os dois caminhos de erro |
| `package.json` | Metadados do projeto e script `npm test` (Vitest) |
| `package-lock.json` | Lockfile das dependências instaladas pelo npm |
| `.gitignore` | Ignora `node_modules/`, o arquivo de rascunho do Code Runner (`tempCodeRunnerFile.*`) e o relatório de cobertura (`coverage/`) |
| `LICENSE` | Texto da licença ISC |
| `README.md` | Este documento, em português |
| `README.en.md` | Versão em inglês deste documento |

---

## 🗂️ Estrutura do Projeto - tree

```
🗂️
├── 📁 src
│  └── ⚙️ sortAscending.js
├── 🔧 .gitignore
├── 🗒️ LICENSE
├── 📦 package-lock.json
├── 📦 package.json
├── 🇺🇸 README.en.md
├── 🇧🇷 README.md
└── 🧪 sortAscending.test.js
```

---

## ⚙️ Tecnologias usadas

- [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript) (ES6+ / ESM) — linguagem de implementação de todos os snippets, sem dependências de runtime
- [Node.js](https://nodejs.org/) — runtime usado para rodar os snippets e a suíte de testes
- [Vitest](https://vitest.dev/) — framework de testes usado em `sortAscending.test.js`

---

## 🚀 Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/briandevbr/snippets.git
cd snippets
```

Os snippets não são um pacote instalável — a ideia é copiar a função para o seu projeto. Para testar o `sortAscending` rapidamente sem copiar nada, importe o arquivo direto num script ESM:

```bash
node --input-type=module -e "
import sortAscending from './src/sortAscending.js';
console.log(sortAscending([5, 3, 9, 1, 4]));
"
```

Saída real:

```
{ arrOriginal: [ 5, 3, 9, 1, 4 ], sortAscending: [ 1, 3, 4, 5, 9 ] }
```

Se a entrada não for um array de inteiros, a função não lança exceção — ela retorna um objeto de erro:

```
{ error: 'The provided input must be an array.' }
```

---

## 🧪 Testes

```bash
npm install
npm test
```

A suíte (`sortAscending.test.js`, via Vitest) cobre 5 casos: ordenação crescente, não alteração do array original, números negativos e de vários dígitos, e os dois caminhos de erro (entrada que não é array, entrada com elemento não inteiro).

> ⚠️ O Vitest 5 declara em seu `package.json` o requisito `node: ^22.12.0 || ^24.0.0 || >=26.0.0`. Em versões mais antigas do Node (ex.: 18.x), `npm test` falha na inicialização — isso não afeta o uso direto do snippet, apenas a suíte de testes.

---

## ✨ Funcionalidades

**Progresso: 4 de 5 etapas concluídas**

- [x] Validação de entrada (precisa ser um array e todos os elementos precisam ser inteiros)
- [x] Ordenação ascendente sem alterar o array original (`sort` roda sobre uma cópia feita com spread)
- [x] Retorno de erro descritivo em vez de exceção não tratada
- [x] Suíte de testes automatizados com Vitest
- [ ] Novos snippets utilitários da coleção (em planejamento)

---

## 🤝 Contribuindo

Projeto pessoal de treino — sem processo de contribuição externa no momento. Sugestões são bem-vindas via [issues](https://github.com/briandevbr/snippets/issues).

---

## 📄 Licença

[ISC](https://opensource.org/license/isc-license-txt/) — veja o arquivo [`LICENSE`](./LICENSE).

---

<div align="center">
  <sub>Feito por <a href="https://github.com/briandevbr">David Brian</a> · parte da minha coleção pessoal de snippets JS</sub>
</div>
