module.exports = async bot => {
    console.log(`${bot.user.username} is online`)
    bot.user.setStatus('idle')
    bot.user.setActivity('Cyberpunk 2077', {type: 'PLAYING'});
}