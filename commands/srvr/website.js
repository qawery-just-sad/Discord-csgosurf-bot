const { RichEmbed } = require('discord.js');
const { blue } = require("../../colors.json")

module.exports = {
    config: {
        name: "website",
        description: "website of server",
        usage: "!website",
        category: "srvr",
        accessableby: "Members",
        aliases: ["web"]
    },
    run: async (bot, message, args) => {
        const embed = new RichEmbed()
        .setTitle('QSURF Website')
        .setColor(blue)
        .setDescription('Our server website!')
        .setURL('http://178.235.37.225:82/')
        .setThumbnail('http://178.235.37.225:82/img/qsurflogo-mini.png');
        message.channel.send(embed);
    }
}
