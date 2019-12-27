const { RichEmbed } = require('discord.js');
const gamedig = require('gamedig');
const { server } = require("../../botconfig.json");
const { blue, darkpurple } = require("../../colors.json")

module.exports = {
    config: {
        name: "status",
        description: "Shows csgo server status",
        usage: "!status",
        category: "srvr",
        accessableby: "Members",
        aliases: ["join", "j", "s", "q", "qsurf", "surf", "server", "srvr", "stats"]
    },
    run: async (bot, message) => {
        gamedig.query(server).then((state) =>{
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