const { prefix } = require("../../botconfig.json");

module.exports = async (bot, message) => { 
    if(message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
    const prefixMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
    return message.reply(`My prefix on this guild is \`${prefix}\``);}

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));
    if (!command) return;
    cmd.run(bot, message, args);
    }