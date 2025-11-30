const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const TOKEN = 'YOUR_BOT_TOKEN'; // BU YERGA BOT TOKENINGIZNI YOZING!!!
const PORT = process.env.PORT || 3000;

// Webhook endpoint
app.post('/webhook', async (req, res) => {
    const update = req.body;

    if (update.message) {
        const chatId = update.message.chat.id;
        const text = update.message.text || '';

        await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            chat_id: chatId,
            text: `Siz yozdingiz: ${text}`
        });
    }

    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.send('Bot ishlayapti! 🚀');
});

app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishlamoqda`);
});
