  
module.exports = { 
    config: {
        name: "ping",
        description: "PONG! Displays the api & bot latency",
        usage: "!ping",
        category: "bot",
        accessableby: "Members",
        aliases: ["latency"]
    },
    run: async (bot, message, args) => {
    message.channel.send("Pinging...").then(m => {
        let choices = ["Pong! 🏓 ", "🏓 "]
        let response = choices[Math.floor(Math.random() * choices.length)]
        
        let ping = m.createdTimestamp - message.createdTimestamp
        m.edit(`${response}: Bot Latency: \`${ping}\``)
    });
  }
}