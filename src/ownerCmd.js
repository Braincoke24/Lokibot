const Discord = require('discord.js')

class ownerCmd {
    constructor(bot, log) {
        this.bot = bot
        this.log = log

        this.setStatus = function(type, text) {
            if (!text || typeof text != 'string' || !type || typeof type != 'string') {
                this.log.log('OWNERCMD', 'Could not set new status: Invalid argument!')
            } else {
                type = type.toUpperCase()
                if (type == '0' || type == 'PLAYING') {
                    type = 0
                } else if (type == '1' || type == 'STREAMING') {
                    type = 1
                } else if (type == '2' || type == 'LISTENING') {
                    type = 2
                } else if (type == '3' || type == 'WATCHING') {
                    type = 3
                }
                this.bot.user.setPresence({game:
                    {name: text,
                    type:type
                    }
                })
                if (type == 0) type = 'Playing'
                if (type == 1) type = 'Playing'
                if (type == 2) type = 'Listening to'
                if (type == 3) type = 'Watching'
                log.log('OWNERCMD', `Set status to '${type} ${text}'`)
            }
        }

        this.bot.on('ready', () => {
            this.log.log('OWNERSETUP', 'Modul loaded')
        })
    }
}

exports.ownerCmd = ownerCmd