const gamedig = require('gamedig')
const { server, prefix } = require("../../botconfig.json")

module.exports = async bot => {
    console.log(`${bot.user.username} is online`)
    bot.user.setStatus('idle')
    bot.user.setActivity('Cyberpunk 2077', {type: 'PLAYING'});
}