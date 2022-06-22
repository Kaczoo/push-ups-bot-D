const {token} = require('./token.json');
const Discord = require('discord.js');

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

let kanal = '872620656683003904';

client.on('messageCreate', message =>
{
    if(message.guild == null && message.content == 'pompki!')
    {
        client.channels.cache.get(kanal).send('@here robimy ' + (Math.floor(Math.random() * 51) + 50).toString() + ' pompki dzisiaj! Na podloge!');
    }
});
