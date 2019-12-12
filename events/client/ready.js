const gamedig = require('gamedig')
const { server, prefix } = require("../../botconfig.json")

module.exports = async bot => {
    console.log(`${bot.user.username} is online`)

    function query(){
        gamedig.query({host:server.host, type:server.type, port:server.port}).then((state) =>{
        let players = state.players
        let map = state.map
        let activities = `with ${players} players, on ${map}, with my prefix ${prefix}`
        if(players>=1) {
            bot.user.setStatus('online');
            bot.user.setActivity(activities, {type: 'PLAYING'})
        }
        else if(players<1){
            bot.user.setActivity(`alone on ${map} | Prefix: ${prefix}`, {type: 'PLAYING'});
             bot.user.setStatus('idle')
        }
        }).catch((error) => {
            bot.user.setActivity(`Cyberpunk 2077 | Prefix: ${prefix}`, {type: 'PLAYING'});
            bot.user.setStatus('dnd');
            console.log(error `\n Server is offline or broken!`)
        })
    }
    var intervalms=60000;

    setInterval(query, intervalms)
}   