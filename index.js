require("dotenv").config();

const express = require("express");
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const TOKEN = process.env.DISCORD_TOKEN;

if (!TOKEN) {
    console.error("❌ ERRO: Token do bot não encontrado no .env");
    process.exit(1);
}

const app = express();

app.use(bodyParser.json({ limit: "20mb" }));

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages
    ],
    partials: [Partials.Channel]
});

bot.login(TOKEN);
bot.on("clientReady", () => {
    console.log(`🤖 Bot logado como ${bot.user.tag}`);
});


app.post("/sendPhoto", async (req, res) => {
    const { discord, image, imageName, clothes, character, city } = req.body;

    if (!discord || !image) {
        return res.status(400).send({ error: "Dados incompletos!" });
    }

    try {
        const user = await bot.users.fetch(discord);
        if (!user) {
            return res.status(404).send({ error: "Usuário não encontrado!" });
        }

        // 🔥 Remove prefixo base64 (data:image/png;base64,)
        const base64Data = image.replace(/^data:image\/\w+;base64,/, "");

        // Converte corretamente
        const buffer = Buffer.from(base64Data, "base64");

        await user.send({
            content: `## 🏙️ Cidade atual: ${city}\n\n - **Personagem:** ${character}  \n - **Roupas:** ${clothes} \n`,
            files: [{
                attachment: buffer,
                name: imageName
            }]
        });

        console.log(`📤 Foto enviada para Discord ID: ${discord}`);
        res.send({ ok: true });

    } catch (err) {
        console.error("❌ Erro ao enviar DM:", err);
        res.status(500).send({ error: "Falha ao enviar DM" });
    }
});


app.listen(PORT, () => {
    console.log(`🌐 API rodando na porta ${PORT}`);
});
