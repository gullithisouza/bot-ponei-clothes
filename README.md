# 🤖 Bot Pônei Clothes (Discord Bot + API)

Este projeto é um **bot para Discord em Node.js**, que também expõe uma **API HTTP com Express**.
Ele utiliza variáveis de ambiente para configuração, **dotenv** para carregamento de ambiente e **PM2** para execução em produção.

O bot foi pensado para rodar de forma contínua em VPS ou servidor dedicado.

---

## 🚀 Tecnologias utilizadas

* **Node.js**
* **Discord.js**
* **Express**
* **dotenv**
* **PM2**

---

## 📁 Estrutura do projeto

```
.
├── .gitignore
├── example.env          # Exemplo de variáveis de ambiente
├── index.js             # Arquivo principal do bot e da API
├── package.json         # Dependências e scripts
├── pm2.config.js        # Configuração do PM2
└── README.md
```

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* **Node.js** (v16 ou superior)
* **npm**
* **PM2** (para produção)

Instalar o PM2 globalmente:

```bash
npm install -g pm2
```

---

## 🔧 Configuração do ambiente (.env)

O projeto utiliza variáveis de ambiente para configuração.

### 1️⃣ Criar o arquivo `.env`

Copie o arquivo de exemplo:

```bash
cp example.env .env
```

### 2️⃣ Configurar as variáveis

Edite o arquivo `.env`:

```env
DISCORD_TOKEN=seu_token_do_discord
PORT=3000
```

#### Descrição das variáveis

| Variável        | Descrição                          |
| --------------- | ---------------------------------- |
| `DISCORD_TOKEN` | Token do bot do Discord            |
| `PORT`          | Porta onde a API Express irá rodar |

⚠️ **Nunca versione o arquivo `.env`** — ele já está corretamente ignorado no `.gitignore`.

---

## 📦 Instalação das dependências

Dentro da pasta do projeto, execute:

```bash
npm install
```

---

## ▶️ Executar o bot localmente

Para rodar em ambiente de desenvolvimento:

```bash
npm run prod
```

Ou, se quiser usar hot-reload em ambiente de desenvolvimento use:

```bash
npx nodemon index.js
```

---

## 🌐 API Express

O bot também inicia um servidor Express para receber a imagem do FiveM e envia diretamente a DM do usuário via discord API.

Ao rodar corretamente, você verá no log:

```
🌐 API rodando na porta 3000
```

Isso indica que a API HTTP está ativa juntamente com o bot do Discord.

---

## 📝 Observações

* O bot depende **obrigatoriamente** do token do Discord para iniciar
* A porta da API pode ser alterada via `.env` ou PM2
* Ideal para rodar em **VPS windows, servidores Linux**
