<div align="center">

# 🧩 snippets

> 🌐 Read this in [English](./README.en.md)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&pause=1000&color=2F81F7&center=true&vCenter=true&width=520&height=36&lines=Snippets+JS+prontos+pra+copiar+e+colar;Cada+fun%C3%A7%C3%A3o+testada+com+sa%C3%ADda+real;Mais+snippets+chegando+em+breve)](#-funcionalidades)

[![Stack](https://skillicons.dev/icons?i=js,nodejs,git,github)](#️-tecnologias-usadas)

`JavaScript puro · 0 dependências · licença não especificada`

</div>

Coleção pessoal de funções JavaScript utilitárias, pensadas para serem copiadas e reaproveitadas em outros projetos. Cada snippet é independente, sem dependências externas, e cresce conforme novas funções vão sendo adicionadas.

---

## 📑 Sumário

- [🗂️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🗂️ Estrutura do Projeto - tree](#️-estrutura-do-projeto---tree)
- [⚙️ Tecnologias usadas](#️-tecnologias-usadas)
- [🚀 Como rodar](#-como-rodar)
- [✨ Funcionalidades](#-funcionalidades)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

---

## 🗂️ Estrutura do Projeto

| Caminho | Descrição |
|---|---|
| `sortAscending.js` | Recebe um array, valida se é composto só por inteiros e retorna um objeto com o array original e uma cópia ordenada de forma ascendente |
| `.gitignore` | Ignora o `tempCodeRunnerFile.js`, arquivo de rascunho gerado pela extensão Code Runner do VSCode |
| `README.md` | Este documento, em português |
| `README.en.md` | Versão em inglês deste documento |

---

## 🗂️ Estrutura do Projeto - tree

```
🗂️
├── 🔧 .gitignore
├── 🇺🇸 README.en.md
├── 🇧🇷 README.md
└── ⚙️ sortAscending.js
```

---

## ⚙️ Tecnologias usadas

- [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript) (ES6+) — linguagem de implementação de todos os snippets, sem dependências externas
- [Node.js](https://nodejs.org/) — usado para testar as funções localmente

---

## 🚀 Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/briandevbr/snippets.git
cd snippets
```

Os snippets não são um pacote instalável — a ideia é copiar a função para o seu projeto. Para testar rapidamente sem copiar nada, cole o conteúdo do arquivo direto no Node:

```bash
node -e "
$(cat sortAscending.js)
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

## ✨ Funcionalidades

**Progresso: 3 de 4 etapas concluídas**

- [x] Validação de entrada (precisa ser um array e todos os elementos precisam ser inteiros)
- [x] Ordenação ascendente sem alterar o array original (`sort` roda sobre uma cópia feita com spread)
- [x] Retorno de erro descritivo em vez de exceção não tratada
- [ ] Novos snippets utilitários da coleção (em planejamento)

---

## 🤝 Contribuindo

Projeto pessoal de treino — sem processo de contribuição externa no momento. Sugestões são bem-vindas via [issues](https://github.com/briandevbr/snippets/issues).

---

## 📄 Licença

Licença não especificada.

---

<div align="center">
  <sub>Feito por <a href="https://github.com/briandevbr">David Brian</a> · parte da minha coleção pessoal de snippets JS</sub>
</div>
