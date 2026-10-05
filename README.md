# 🎬 CineHub

O **SeriesHub** é uma aplicação web desenvolvida com React e TypeScript para consulta e gerenciamento de séries favoritas.

A aplicação consome dados da API do TMDB, permitindo visualizar séries populares, realizar buscas, acessar informações detalhadas de cada séries e salvar favoritos, que permanecem armazenados localmente no navegador.

O projeto foi desenvolvido com o objetivo de consolidar conceitos de React, TypeScript, consumo de APIs, React Router e gerenciamento de estado global com Redux Toolkit.

---

## 🚀 Funcionalidades

- 🎥 Listagem de séries populares
- 🔎 Busca de séries por título
- 📄 Visualização dos detalhes de cada série
- ⭐ Exibição da avaliação dos série
- ❤️ Adição e remoção de série dos favoritos
- 🗑️ Opção para limpar todos os favoritos
- 🔍 Busca entre os série favoritos
- 💾 Persistência dos favoritos utilizando Local Storage
- ⏳ Feedback visual durante o carregamento dos dados
- ⚠️ Tratamento de erros na comunicação com a API
- 🇧🇷 Informações dos série em português do Brasil
- 📱 Layout responsivo para diferentes tamanhos de tela

---

## 🛠️ Tecnologias utilizadas

- React
- TypeScript
- Vite
- React Router
- Redux Toolkit
- React Redux
- CSS Modules
- React Icons
- TMDB API
- Local Storage

---

## 🧠 Conceitos praticados

Durante o desenvolvimento do SeriesHub foram aplicados conceitos como:

- Componentização
- Props e tipagem com TypeScript
- Estados com `useState`
- Efeitos colaterais com `useEffect`
- Formulários controlados
- Manipulação de eventos
- Requisições assíncronas com `fetch`, `async` e `await`
- Tratamento de erros com `try`, `catch` e `finally`
- Rotas e parâmetros dinâmicos
- Navegação com React Router
- Gerenciamento de estado global com Redux Toolkit
- Criação de slices, reducers e actions
- Hooks tipados para Redux
- Custom Hooks
- Persistência de dados com Local Storage
- CSS Modules
- Responsividade com Media Queries

---

## 📂 Estrutura do projeto

```text
src/
├── assets/
├── components/
├── constants/
├── hooks/
├── pages/
├── routes/
├── services/
├── store/
├── types/
├── utils/
├── App.tsx
├── index.css
└── main.tsx
```

A aplicação foi organizada separando componentes, páginas, serviços, tipos, gerenciamento de estado e funções auxiliares, facilitando a manutenção e a reutilização do código.

---

## 🌐 API

Os dados dos filmes são fornecidos pela **TMDB API (The Movie Database)**.

A aplicação utiliza endpoints para:

- Buscar séries populares
- Pesquisar séries por título
- Consultar os detalhes de uma série

As requisições são realizadas utilizando `fetch` e autenticação através do **API Read Access Token** do TMDB.

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/ricardohcoco/serieshub.git
```

### 2. Entre na pasta do projeto

```bash
cd serieshub
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_TOKEN=seu_token_tmdb
VITE_API_POPULAR=https://api.themoviedb.org/3/movie/popular
VITE_API_SEARCH=https://api.themoviedb.org/3/search/movie
VITE_API_DETAILS=https://api.themoviedb.org/3/movie
```

> O arquivo `.env` não deve ser enviado ao repositório. Certifique-se de que ele esteja incluído no `.gitignore`.

Para obter as credenciais necessárias, crie uma conta no TMDB e gere um **API Read Access Token**.

### 5. Execute o projeto

```bash
npm run dev
```

A aplicação será iniciada em ambiente de desenvolvimento.

---

## 💾 Favoritos

As séries favoritas são armazenadas globalmente utilizando **Redux Toolkit**.

Sempre que o estado dos favoritos é alterado, os dados são sincronizados com o `localStorage` do navegador.

Dessa forma, os favoritos permanecem disponíveis mesmo após atualizar ou fechar a página.

---

## 🔐 Observação sobre o token da API

O token utilizado pela aplicação é armazenado em uma variável de ambiente e o arquivo `.env` não é versionado.

Como o SeriesHub é uma aplicação exclusivamente front-end, variáveis `VITE_*` utilizadas pelo código cliente podem ser acessíveis no navegador após o build.

Em uma aplicação que exigisse proteção real de uma credencial privada, as requisições autenticadas deveriam ser realizadas através de um backend ou função server-side.

---

## 📱 Responsividade

O CineHub possui layout responsivo, adaptando a exibição dos filmes e das páginas para diferentes tamanhos de tela.

A listagem utiliza CSS Grid e Media Queries para reorganizar os cards conforme o espaço disponível.

---

## 📌 Objetivo do projeto

O SeriesHub foi desenvolvido como um projeto de consolidação dos estudos em desenvolvimento front-end. Ele é uma continuidade do CineHub

O principal objetivo foi reunir em uma única aplicação conceitos estudados separadamente, especialmente:

**React + TypeScript + React Router + APIs + Redux Toolkit + Local Storage.**

---

## 👨‍💻 Autor

Desenvolvido por **Ricardo Coco**.