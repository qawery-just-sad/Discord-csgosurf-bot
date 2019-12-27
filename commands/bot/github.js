const { RichEmbed } = require('discord.js');
const { dark } = require("../../colors.json")

module.exports = {
    config: {
        name: "github",
        description: "Help develop the bot",
        usage: "!github",
        category: "bot",
        accessableby: "Members",
        aliases: ["git", "contribute"]
    },
    run: async (bot, message, args) => {
        const embed = new RichEmbed()
        .setTitle('Help develop the bot!')
        .setColor(dark)
        .setDescription('Link to Server Status bot github page!')
        .setURL('https://github.com/qawery-just-sad/Discord-csgosurf-bot')
        .setThumbnail('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png');
        message.channel.send(embed);
    }
}