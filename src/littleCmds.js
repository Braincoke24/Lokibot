const Discord = require('discord.js')
const fs      = require('fs')

global.userLanguage = JSON.parse(fs.readFileSync('./configFiles/language.json', 'utf8'))

class littleCmds {
    constructor(bot, log) {
        this.bot = bot
        this.log = log
        this.COLORS = {
            abk: 0x7f8c8d,
            err: 0xe74c3c
        }
        this.languages = {
            'english'   : 0,
            'englisch'  : 0,
            'en'        : 0,
            '0'         : 0,
            'german'    : 1,
            'deutsch'   : 1,
            'de'        : 1,
            '1'         : 1
        }

        /*
        Liste:
        wbt
        petlistsh
        OB
        arts
        artset
        ss
        fd push
        raids
        tierbuch
        guides
        tot
        */

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

        this.ping = function(msg) {
            var chan = msg.channel,
                author = msg.author
            chan.send(`Pong! ${author}`)
        }

        this.wbt = function(msg) {

        }

        this.ss = function(msg) {
            
        }

        this.language = function(msg, args) {
            var text = args.join(' '),
                author = msg.author
            if (text in this.languages) {
                text = this.languages[text]
                userLanguage[author.id] = text
                var langjson = JSON.stringify(userLanguage)
                fs.writeFile('configFiles/language.json', langjson, (err) => {
                    if (err) {
                        throw err
                    }
                })
            }
        }
    }
}

exports.littleCmds = littleCmds