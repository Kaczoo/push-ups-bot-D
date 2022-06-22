// npm install discord.js
// node bot.js

const Discord = require('discord.js');

const {token} = require('./token.json');
const {kanal} = require('./kanal.json');

const client = new Discord.Client
({
    intents:
    [
        'GUILDS',
        'GUILD_MESSAGES',
        'DIRECT_MESSAGES'
    ],
    partials:
    [
        'MESSAGE',
        'CHANNEL'
    ]
});

client.login(token);

client.on('ready' , () =>
{
    console.log('Dziala chyba');
});

client.on('messageCreate', message =>
{
    if(message.guild == null && message.content == 'pompki!')
    {
        client.channels.cache.get(kanal).send('@here robimy ' + (Math.floor(Math.random() * 51) + 50).toString() + ' pompki dzisiaj! Na podloge!');
    }
});
