const { RichEmbed } = require('discord.js');
const gamedig = require('gamedig');
const { server } = require("../../botconfig.json");
const { blue, darkpurple } = require("../../colors.json")

module.exports = {
    config: {
        name: "join",
        description: "link to invite the bot",
        usage: "!join",
        category: "srvr",
        accessableby: "Members",
        aliases: ["j", "q", "qsurf", "surf", "server", "srvr"]
    },
    run: async (bot, message) => {
        gamedig.query({host:server.host, type:server.type, port:server.port}).then((state) =>{
            let players = state.players.length;
            let max = state.maxplayers;
            let map = state.map;
            const embed = new RichEmbed()
            .setTitle("CSGO QSURF Server")
            .setColor(blue)
            .addField(`Current map`, `${map}`, true)
            .addField(`Players`, `${players} /${max}`, true)
            .addField(`** Connect Link**`, `**steam://connect/178.235.37.225:27014 **`)
            .setThumbnail(bot.user.avatarURL);
            message.channel.send(embed);
        }
        ).catch((error) =>{
            console.log(error);
            const embed = new RichEmbed()
            .setTitle('CSGO QSURF Server')
            .setColor(darkpurple)
            .setDescription('**SERVER IS OFFLINE**')
            .setThumbnail(bot.user.avatarURL);
            message.channel.send(embed);
        })}
}