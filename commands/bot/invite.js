const { RichEmbed } = require('discord.js');
const { whiteish } = require("../../colors.json")

module.exports = {
    config: {
        name: "invite",
        description: "Link to invite the bot to your server!",
        usage: "!invite",
        category: "bot",
        accessableby: "Members",
        aliases: ["i", "add"]
    },
    run: async (bot, message, args) => {
        const embed = new RichEmbed()
        .setTitle('Server Status Invite Link')
        .setColor(whiteish)
        .setDescription('Link to invite Server Status bot!')
        .setURL('https://discordapp.com/oauth2/authorize?client_id=640531944320401421&scope=bot&permissions=8')
        .setThumbnail(bot.user.avatarURL);
        message.channel.send(embed);
    }
}
