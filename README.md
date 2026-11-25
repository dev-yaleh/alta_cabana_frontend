# Espaço Alta Cabana

Site institucional responsivo do Espaço Alta Cabana, salão de eventos em Santos. A página apresenta o espaço, os tipos de celebração, a gastronomia e um formulário demonstrativo para pedidos de orçamento.

**Repositório:** [dev-yaleh/alta_cabana_frontend](https://github.com/dev-yaleh/alta_cabana_frontend)

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS 4
- Motion para animações

## Seções do site

- **Home:** carrossel de imagens do espaço.
- **Eventos:** debutantes, casamentos e mini-weddings, aniversários e bodas, e eventos corporativos.
- **Sobre:** história e estrutura do Espaço Alta Cabana.
- **Cardápio:** apresentação da gastronomia e dos pacotes.
- **Feedback:** depoimentos de clientes.
- **Contato:** formulário de solicitação de orçamento.
- **Footer:** informações de contato e redes sociais.

## Requisitos

- Node.js 20 ou superior
- npm

## Executar localmente

Na raiz do repositório:

```bash
npm ci
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Gerar e visualizar a versão de produção

```bash
npm run build
npm run preview
```

Os arquivos prontos para publicação são gerados na pasta `dist/`.

## Deploy no GitHub Pages

O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) compila o projeto e publica a pasta `dist` no GitHub Pages quando há um push para `main` ou `master`. Também é possível iniciar a publicação manualmente pela aba **Actions**.

Para habilitar a publicação no repositório:

1. Abra **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Envie as alterações para a branch `main` (ou `master`) e acompanhe o workflow na aba **Actions**.

O workflow ajusta automaticamente o caminho base para o endereço do repositório no GitHub Pages.

## Estrutura principal

```text
.
├── .github/workflows/deploy.yml
├── src/
│   ├── assets/          # Imagens locais do projeto
│   ├── components/      # Componentes das seções e da navegação
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
└── package.json
```

## Observação sobre o formulário

Atualmente, o formulário de orçamento valida os campos no navegador e exibe uma confirmação na página. Ele ainda não envia nem armazena os dados em um serviço ou backend.

## Imagens e recursos externos

Além das imagens locais em `src/assets`, algumas imagens e recursos visuais podem ser carregados de serviços externos. Esses recursos precisam de conexão com a internet para aparecer corretamente.
