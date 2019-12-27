  
module.exports = { 
    config: {
        name: "ping",
        description: "PONG! Displays the bot latency",
        usage: "!ping",
        category: "bot",
        accessableby: "Members",
        aliases: ["latency"]
    },
    run: async (bot, message, args) => {
    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        m.edit(`Pong! 🏓 : Bot Latency: \`${ping}\``)
    });
  }
}