const hand = require('rcon-srcds');
const { rconpass, server } = require("../../botconfig.json");
const Rcon = new hand({host:server.host, port:server.port, maximumPacketSize: 0, encoding: 'ascii', timeout: 2500})

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
        if (!message.member.hasPermission("ADMINISTRATOR")) {return message.channel.send(`**You don't have permissions to do that :middle_finger:**`)}
        else if (!args.length) {return message.channel.send(`**:warning: Please provide valid rcon command**`)}
        else { var fargs = args.join(" ");
        try{
            if (Rcon.authenticated != 1) await Rcon.authenticate(rconpass);
            await Rcon.execute(fargs).then(Response => message.channel.send(`***:white_check_mark: Success!***\n \`\`\`${Response}\`\`\``))
        } catch(error){message.channel.send(`**:warning: There was an error try again later.**`), console.log(error)}}
    }
}  
