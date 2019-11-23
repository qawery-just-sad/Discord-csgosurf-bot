const { RichEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "invite",
        description: "link to invite the bot",
        usage: "!invite",
        category: "bot",
        accessableby: "Members",
        aliases: ["in", "join", "add"]
    },
    run: async (bot, message, args) => {
        const embed = new RichEmbed()
        .setTitle('Server Status Invite Link')
        .setColor(0x1e90ff)
        .setDescription('Link to invite Server Status bot!')
        .setURL('https://discordapp.com/oauth2/authorize?client_id=640531944320401421&scope=bot&permissions=8')
        .setThumbnail('https://cdn.discordapp.com/app-icons/640531944320401421/e0e255c2c18785e1f8d4ec96b7cca6e8.png?size=256');
        message.channel.send(embed);
    }
}
