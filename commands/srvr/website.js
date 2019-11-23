const { RichEmbed } = require('discord.js');

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
        .setColor(0x1e90ff)
        .setDescription('Our server website!')
        .setURL('http://178.235.37.225:82/')
        .setThumbnail('http://178.235.37.225:82/img/qsurflogo-mini.png');
        message.channel.send(embed);
    }
}
