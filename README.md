# Inteligência de Mercado — Frontend

Frontend do Sistema de Inteligência de Mercado da Let's. É um único arquivo
`.dc.html` (nenhum passo de build) que roda direto no navegador, sem instalar
nada — só precisa do backend rodando ao lado.

## Arquivo ativo

**`Inteligência de Mercado Let's v3.dc.html`** é a versão em uso. O arquivo sem
o "v3" é um rascunho antigo, mantido só como histórico — não é mais usado.

## Como rodar

Este frontend depende do backend (repositório `estudo-de-mercado-app`) já
rodando em `http://127.0.0.1:8000` (endereço fixo no início do arquivo, na
constante `API_BASE`).

1. Suba o backend primeiro (veja o README daquele repositório) — ou, se os dois
   projetos estiverem lado a lado na mesma pasta (`letsmi-backend/` e esta
   pasta), use o atalho `letsmi-backend/iniciar_sistema.bat`, que sobe o
   servidor, espera ele responder e já abre este arquivo no navegador.
2. Se preferir abrir manualmente: com o backend no ar, dê duplo clique em
   `Inteligência de Mercado Let's v3.dc.html` (abre em `file://` mesmo, sem
   servidor de arquivos — o backend já libera CORS pra isso).

## Estrutura da pasta

- `Inteligência de Mercado Let's v3.dc.html` — a aplicação inteira (HTML +
  CSS + JavaScript num arquivo só).
- `support.js` — runtime do formato `.dc.html` (interpreta as tags `sc-if`/
  `sc-for` e os bindings `{{ }}` usados no arquivo acima).
- `_ds/` — bundle da identidade visual da Let's (fontes Neo Sans Pro, cores,
  tipografia) usado pela página.
- `uploads/` — arquivos anexados durante a edição do sistema (não afeta o
  funcionamento em produção).
