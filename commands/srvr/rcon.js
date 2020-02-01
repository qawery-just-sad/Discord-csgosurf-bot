const hand = require('srcds-rcon');
const { rconpass, server, admins } = require("../../botconfig.json");
const Rcon = hand({address:`${server.host}:${server.port}`, password:rconpass})

module.exports = {
    config: {
        name: "rcon",
        description: "Throw the command at the server!",
        usage: "!rcon (valid rcon commands)",
        category: "srvr",
        accessableby: "Admins",
        aliases: ["console", "con"]
    },
    run: async (bot, message, args) => {
        let die = false;
        for (let element of admins){
            if (element == message.member.id) {die = true}
        }
        if (die == false) {return message.channel.send(`**You don't have permissions to do that :middle_finger:**`)}
        else if (!args.length) {return message.channel.send(`**:warning: Please provide valid rcon command**`)}
        else { var fargs = args.join(" ");
        try{
            await Rcon.connect();
            await Rcon.command(fargs).then(Response => message.channel.send(`***:white_check_mark: Success!***\n \`\`\`${Response}\`\`\``))
            Rcon.disconnect()
        } catch(error) {
            message.channel.send(`**:warning: There was an error try again later.**`);
            if (error.details && error.details.partialResponse) {console.log(`Got partial response: ${err.details.partialResponse}`), console.log(error)}
        }
    }
    }
}  
