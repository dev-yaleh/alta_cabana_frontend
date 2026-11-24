# Espaço Alta Cabana

Landing page responsiva para o Espaço Alta Cabana, feita com React, TypeScript e Vite.

## Desenvolvimento local

```bash
npm ci
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy.yml` instala as dependências, gera `dist` e publica o site no GitHub Pages a cada envio para `main` ou `master`. Durante o deploy, ele configura automaticamente o caminho base usando o nome do repositório.

Para publicar:

1. Envie o conteúdo desta pasta para a raiz de um repositório GitHub.
2. No repositório, abra **Settings → Pages** e selecione **GitHub Actions** como fonte de publicação.
3. Envie um commit para `main` ou `master` (ou inicie o workflow manualmente pela aba **Actions**).

## Seções da página

- `NavBar`: navegação responsiva.
- `Hero`: apresentação e carrossel de imagens.
- `Eventos`: tipos de celebração e acesso ao orçamento.
- `Sobre`: história, estrutura e capacidade do espaço.
- `Cardapio`: gastronomia e pacotes.
- `Feedback`: depoimentos com navegação.
- `Contato`: formulário de orçamento.
- `Footer`: informações institucionais e contato.
