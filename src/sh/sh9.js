const { RichEmbed } = require('discord.js')
const LogFile = require('../logFiles')

class sh9 {
    constructor(bot, log) {
        this.bot = bot
        this.log = log
        this.COLORS = {
            sh: 0x68768A,
            err: 0xe74c3c
        }

        this.cmd = function(msg, args) {
            var chan = msg.channel

            if (args[1] > 0 && args[1] < 21) {
                if (args[1] == 1) {
                    this.sh1(chan)
                } else if (args[1] == 2) {
                    this.sh2(chan)
                } else if (args[1] == 3) {
                    this.sh3(chan)
                } else if (args[1] == 4) {
                    this.sh4(chan)
                } else if (args[1] == 5) {
                    this.sh5(chan)
                } else if (args[1] == 6) {
                    this.sh6(chan)
                } else if (args[1] == 7) {
                    this.sh7(chan)
                } else if (args[1] == 8) {
                    this.sh8(chan)
                } else if (args[1] == 9) {
                    this.sh9(chan)
                } else if (args[1] == 10) {
                    this.sh10(chan)
                } else if (args[1] == 11) {
                    this.sh11(chan)
                } else if (args[1] == 12) {
                    this.sh12(chan)
                } else if (args[1] == 13) {
                    this.sh13(chan)
                } else if (args[1] == 14) {
                    this.sh14(chan)
                } else if (args[1] == 15) {
                    this.sh15(chan)
                } else if (args[1] == 16) {
                    this.sh16(chan)
                } else if (args[1] == 17) {
                    this.sh17(chan)
                } else if (args[1] == 18) {
                    this.sh18(chan)
                } else if (args[1] == 19) {
                    this.sh19(chan)
                } else if (args[1] == 20) {
                    this.sh20(chan)
                }
            } else {
                this.error(chan, args[1])
            }
        }

        this.error = function(chan, text) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.err)
                .setDescription(`Level '1 - ${text}' existiert nicht!`)
             chan.send('', emb).then((m) => {
                 message = m
            })
            return message
        }

        this.sh1 = function(chan) {

        }

        this.sh2 = function(chan) {
            
        }

        this.sh3 = function(chan) {
            
        }
        
        this.sh4 = function(chan) {

        }

        this.sh5 = function(chan) {

        }

        this.sh6 = function(chan) {

        }

        this.sh7 = function(chan) {

        }

        this.sh8 = function(chan) {

        }

        this.sh9 = function(chan) {

        }

        this.sh10 = function(chan) {

        }

        this.sh11 = function(chan) {

        }

        this.sh12 = function(chan) {

        }

        this.sh13 = function(chan) {

        }

        this.sh14 = function(chan) {

        }

        this.sh15 = function(chan) {

        }

        this.sh16 = function(chan) {

        }

        this.sh17 = function(chan) {

        }

        this.sh18 = function(chan) {

        }

        this.sh19 = function(chan) {

        }

        this.sh20 = function(chan) {

        }


    }
}

exports.sh9 = sh9