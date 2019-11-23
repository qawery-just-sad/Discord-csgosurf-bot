module.exports = async bot => {
    console.log(`${bot.user.username} is online`)
    bot.user.setStatus('idle', 'Yes');
}