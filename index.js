const Discord = require('discord.js');
const Gamedig = require('gamedig');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})

client.login(token);

client.on('message', message => {
    if(message.content.startsWith(`${prefix}ping`)) {
        message.channel.send("Ping =")
    }
})

