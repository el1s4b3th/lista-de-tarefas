# Lista de Tarefas

Aplicação web de lista de tarefas (to-do list) construída com **React**, **Vite** e **Tailwind CSS**.

## Funcionalidades

- Adicionar novas tarefas
- Marcar/desmarcar tarefas como concluídas
- Excluir tarefas
- Filtrar por **Todas**, **Pendentes** ou **Concluídas**
- Limpar todas as tarefas concluídas de uma vez
- Contador de tarefas pendentes
- Persistência automática no navegador via `localStorage`

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior (recomendado: versão LTS mais recente)
- npm (instalado junto com o Node.js)

## Instalação

```bash
git clone https://github.com/el1s4b3th/lista-de-tarefas.git
cd lista-de-tarefas
npm install
```

## Como executar

| Comando           | Descrição                                                        |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento em `http://localhost:5173`  |
| `npm run build`   | Gera a versão de produção na pasta `dist/`                       |
| `npm run preview` | Serve localmente a versão de produção gerada pelo `build`        |
| `npm run lint`    | Verifica o código com o ESLint                                   |

## Estrutura do projeto

```
lista-de-tarefas/
├── public/                  # Arquivos estáticos
├── src/
│   ├── components/
│   │   ├── TaskFilters.jsx  # Botões de filtro (Todas / Pendentes / Concluídas)
│   │   ├── TaskForm.jsx     # Formulário para adicionar tarefas
│   │   └── TaskItem.jsx     # Item individual da lista
│   ├── constants/
│   │   └── filters.js       # Definição dos filtros de tarefas
│   ├── hooks/
│   │   └── useLocalStorage.js # Hook para persistir estado no localStorage
│   ├── App.jsx              # Componente principal
│   ├── index.css            # Importação do Tailwind CSS
│   └── main.jsx             # Ponto de entrada da aplicação
├── index.html
├── package.json
└── vite.config.js
```
