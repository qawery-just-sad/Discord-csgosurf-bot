
module.exports = {
    config: {
        name: "breathtaking",
        description: "Breath taking Keanu",
        usage: "!breathtaking",
        category: "bot",
        accessableby: "Members",
        aliases: ["bt"]
    },
    run: async (bot, message, args) => {
        message.channel.send("", {files: ['https://media1.tenor.com/images/5da95f8d44b36a5b55f2bc91eb0ac767/tenor.gif']});
    }
}