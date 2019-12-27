const { RichEmbed } = require('discord.js');
const { blue } = require("../../colors.json");

module.exports = {
    config: {
        name: "donate",
        description: "Link to donate to the bot",
        usage: "!donate",
        category: "bot",
        accessableby: "Members",
        aliases: ["d", "money", "support"]
    },
    run: async (bot, message, args) => {
        const embed = new RichEmbed()
        .setTitle('Server Status Donate Link')
        .setColor(blue)
        .setDescription('Donate to Server Status bot!(PayPal)')
        .setURL('https://www.paypal.me/qawery/5')
        .setThumbnail('https://pbs.twimg.com/profile_images/1145724063106519040/b1L98qh9_400x400.jpg');
        message.channel.send(embed);
    }
}