# 📊 MDE Conecta - Dashboard do Lab Hub Mulheres do Esporte


## 🚀 Sobre o Projeto

O **MDE Conecta Dashboard** é um MVP (Minimum Viable Product). Trata-se de uma plataforma de Business Intelligence (BI) interativa e visual, projetada para analisar e exibir dados sobre o perfil das mulheres profissionais no cenário esportivo brasileiro.

A plataforma oferece uma visão clara e detalhada através de:
-   **KPIs (Key Performance Indicators):** Métricas rápidas como total de participantes, idade média e percentual de formação.
-   **Gráficos Detalhados:** Análises visuais sobre distribuição demográfica (raça/cor) e áreas de atuação.
-   **Assistente de Relatórios com IA:** Uma ferramenta poderosa que utiliza a API do Google Gemini para gerar insights e relatórios analíticos a partir de perguntas em linguagem natural.
-   **Tabela Detalhada:** Visualização completa dos dados de cada participante, com filtros e ordenação.

Este projeto visa dar visibilidade, gerar insights e apoiar a tomada de decisões estratégicas para promover a diversidade e a inclusão no esporte.

---

## ✨ Tecnologias Utilizadas

Este projeto foi construído com as mais modernas tecnologias do ecossistema front-end, focando em performance, escalabilidade e uma ótima experiência de desenvolvimento.

-   **[React](https://react.dev/)**: Biblioteca principal para a construção da interface de usuário.
-   **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida que oferece um ambiente de desenvolvimento ágil.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática, garantindo um código mais robusto e livre de erros.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para a criação de designs customizados de forma rápida e eficiente.
-   **[Recharts](https://recharts.org/)**: Biblioteca de gráficos declarativa para React, utilizada para criar as visualizações de dados.
-   **[Google Gemini API](https://ai.google.dev/)**: Modelo de IA generativa que alimenta o nosso Assistente de Relatórios.

---

## 💡 Estrutura do Projeto

O projeto é organizado da seguinte forma para garantir manutenibilidade e clareza:

```
mde-conecta/
├── public/                # Arquivos estáticos e dados mock
├── src/
│   ├── components/        # Componentes React reutilizáveis (Cards, Gráficos, Tabela, etc.)
│   ├── constants/         # Constantes do projeto (cores, dados mock)
│   ├── services/          # Módulos de comunicação com APIs externas (Gemini)
│   ├── types/             # Definições de tipos e interfaces TypeScript
│   └── App.tsx            # Componente principal da aplicação
│   └── index.css          # Estilos globais e diretivas do Tailwind
│   └── index.tsx          # Ponto de entrada da aplicação
├── .gitignore             # Arquivos e pastas a serem ignorados pelo Git
├── package.json           # Dependências e scripts do projeto
├── tailwind.config.js     # Arquivo de configuração do Tailwind CSS
└── README.md              # Este arquivo :)
```

Desenvolvido por **Luciane de Castro - Head de Pesquisa e Desenvolvimento** do Lab Hub MDE | Mulheres do Esporte

