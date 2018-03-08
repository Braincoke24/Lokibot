const { RichEmbed } = require('discord.js')
const LogFile = require('./logFiles')

class shortcut {
    constructor(bot, log) {
        this.bot = bot
        this.log = log
        this.COLORS = {
            abk: 0x7f8c8d,
            err: 0xe74c3c
        }
        this.aliases = {
            //infantry
            //heavy infantry
            //fire bird
            //musketeer
            //hammer knight
            //cavalry knight
            //golem
            //fire mage
            //gunner
            //priest
            //aladdin
            //griffin rider
            //hot-blooded xuanzang
            //pilot
            //steampunk
            //valkyrie
            'valk': 'valkyrie',
            'valkyrie': 'valkyrie',
            'walküre': 'valkyrie',
            //flame spirit
            'fs': 'flame spirit',
            'flame spirit': 'flame spirit',
            'flammengeist': 'flame spirit'
            //cleric
            //winged knight
        }

        this.cmd = function(msg, args) {
            var chan = msg.channel,
                text = args.join(' ').toLowerCase()

                if (text in this.aliases) {
                    text = this.aliases[text]
                    if (text == 'infantry') {
                        this.infantry(chan)
                    } else if (text == 'heavy infantry') {
                        this.heavyInfantry(chan)
                    }  else if (text == 'fire bird') {
                        this.fireBird(chan)
                    } else if (text == 'musketeer') {
                        this.musketeer(chan)
                    } else if (text == 'hammer knight') {
                        this.hammerKnight(chan)
                    } else if (text == 'cavalry knight') {
                        this.cavalryKnight(chan)
                    } else if (text == 'golem') {
                        this.golem(chan)
                    } else if (text == 'fire mage') {
                        this.fireMage(chan)
                    } else if (text == 'gunner') {
                        this.gunner(chan)
                    } else if (text == 'priest') {
                        this.priest(chan)
                    } else if (text == 'aladdin') {
                        this.aladdin(chan)
                    } else if (text == 'griffin rider') {
                        this.griffinRider(chan)
                    } else if (text == 'hot-blooded xuanzang') {
                        this.hotBloodedXuanzang(chan)
                    } else if (text == 'pilot') {
                        this.pilot(chan)
                    } else if (text == 'steampunk') {
                        this.steampunk(chan)
                    } else if (text == 'valkyrie') {
                        this.valkyrie(chan)
                    } else if (text == 'flame spirit') {
                        this.flameSpirit(chan)
                    } else if (text == 'cleric') {
                        this.cleric(chan)
                    } else if (text == 'winged knight') {
                        this.wingedKnight(chan)
                    }
                } else {
                    this.error(chan)
                }
        }

        this.error = function(chan) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.err)
                .setDescription('FEHLER: Keine Abkürzung für diesen Begriff vorhanden!')
             chan.send('', emb).then((m) => {
                 message = m
            })
            return message
        }

/*
__/\\\________/\\\__/\\\\\_____/\\\__/\\\\\\\\\\\__/\\\\\\\\\\\\\\\_____/\\\\\\\\\\\___        
 _\/\\\_______\/\\\_\/\\\\\\___\/\\\_\/////\\\///__\///////\\\/////____/\\\/////////\\\_       
  _\/\\\_______\/\\\_\/\\\/\\\__\/\\\_____\/\\\___________\/\\\________\//\\\______\///__      
   _\/\\\_______\/\\\_\/\\\//\\\_\/\\\_____\/\\\___________\/\\\_________\////\\\_________     
    _\/\\\_______\/\\\_\/\\\\//\\\\/\\\_____\/\\\___________\/\\\____________\////\\\______    
     _\/\\\_______\/\\\_\/\\\_\//\\\/\\\_____\/\\\___________\/\\\_______________\////\\\___   
      _\//\\\______/\\\__\/\\\__\//\\\\\\_____\/\\\___________\/\\\________/\\\______\//\\\__  
       __\///\\\\\\\\\/___\/\\\___\//\\\\\__/\\\\\\\\\\\_______\/\\\_______\///\\\\\\\\\\\/___ 
        ____\/////////_____\///_____\/////__\///////////________\///__________\///////////_____
*/

/*
__/\\\________/\\\__/\\\________/\\\__/\\\\____________/\\\\_____/\\\\\\\\\_____/\\\\\_____/\\\_____/\\\\\\\\\\\___        
 _\/\\\_______\/\\\_\/\\\_______\/\\\_\/\\\\\\________/\\\\\\___/\\\\\\\\\\\\\__\/\\\\\\___\/\\\___/\\\/////////\\\_       
  _\/\\\_______\/\\\_\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\__/\\\/////////\\\_\/\\\/\\\__\/\\\__\//\\\______\///__      
   _\/\\\\\\\\\\\\\\\_\/\\\_______\/\\\_\/\\\\///\\\/\\\/_\/\\\_\/\\\_______\/\\\_\/\\\//\\\_\/\\\___\////\\\_________     
    _\/\\\/////////\\\_\/\\\_______\/\\\_\/\\\__\///\\\/___\/\\\_\/\\\\\\\\\\\\\\\_\/\\\\//\\\\/\\\______\////\\\______    
     _\/\\\_______\/\\\_\/\\\_______\/\\\_\/\\\____\///_____\/\\\_\/\\\/////////\\\_\/\\\_\//\\\/\\\_________\////\\\___   
      _\/\\\_______\/\\\_\//\\\______/\\\__\/\\\_____________\/\\\_\/\\\_______\/\\\_\/\\\__\//\\\\\\__/\\\______\//\\\__  
       _\/\\\_______\/\\\__\///\\\\\\\\\/___\/\\\_____________\/\\\_\/\\\_______\/\\\_\/\\\___\//\\\\\_\///\\\\\\\\\\\/___ 
        _\///________\///_____\/////////_____\///______________\///__\///________\///__\///_____\/////____\///////////_____
*/

        //infantry
        this.infantry = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //heavy infantry
        this.heavyInfantry = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //fire bird
        this.fireBird = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //musketeer
        this.musketeer = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //hammer knight
        this.hammerKnight = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //cavalry knight
        this.cavalryKnight = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //golem
        this.golem = function(chan) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.abk)
                .setDescription('')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //fire mage
        this.fireMage = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //gunner
        this.gunner = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //priest
        this.priest = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //aladdin
        this.aladdin = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //griffin rider
        this.griffinRider = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //hot-blooded xuanzang
        this.hotBloodedXuanzang = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //pilot
        this.pilot = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //steampunk
        this.steampunk = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //valkyrie
        this.valkyrie = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //flame spirit
        this.flameSpirit = function(chan) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.abk)
                .setDescription('__Abkürzung:__\n**fs** = Flame spirit = Flammengeist')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //cleric
        this.cleric = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        //winged knight
        this.wingedKnight = function(chan) {
            var message
            var emb = new RichEmbed()

            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
    }
}

exports.shortcut = shortcut