const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message',  async (msg) => {
    if (msg.content.toLowerCase() === 'ping') {
        await msg.reply('pong');
    };
});

client.login(process.env.BOT_TOKEN);