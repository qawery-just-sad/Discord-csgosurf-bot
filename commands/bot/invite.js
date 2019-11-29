const { RichEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "invite",
        description: "link to invite the bot",
        usage: "!invite",
        category: "bot",
        accessableby: "Members",
        aliases: ["i", "add"]
    },
    run: async (bot, message, args) => {
        const embed = new RichEmbed()
        .setTitle('Server Status Invite Link')
        .setColor(0xebebeb)
        .setDescription('Link to invite Server Status bot!')
        .setURL('https://discordapp.com/oauth2/authorize?client_id=640531944320401421&scope=bot&permissions=8')
        .setThumbnail(bot.user.avatarURL);
        message.channel.send(embed);
    }
}
