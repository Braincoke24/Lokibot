const { RichEmbed } = require('discord.js')
const LogFile = require('./logFiles')

class vorlage {
    constructor(bot, log) {
        this.bot = bot
        this.log = log
        this.COLORS = {
            abk: 0x7f8c8d,
            err: 0xe74c3c
        }

        this.error = function(chan) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.err)
                .setDescription('Fehlerhafte Eingabe! Richtiger Syntax:\n`.unit <Einheitenname>`\nFür eine Liste aller Einheiten gib `.unit list` ein.')
             chan.send('', emb).then((m) => {
                 message = m
            })
            return message
        }
    }
}

exports.vorlage = vorlage