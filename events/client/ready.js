const gamedig = require('gamedig')
const { gdserver, prefix } = require("../../botconfig.json")

module.exports = async bot => {
    console.log(`${bot.user.username} is online`)

    function status(){
        gamedig.query(gdserver).then((state) =>{
        let players = state.players.length
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
            console.log(error, `\n Server is offline or broken!`)
        })
    }
    var intervalms=60000;

    setInterval(status, intervalms)
}   