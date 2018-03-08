const { RichEmbed } = require('discord.js')
const LogFile = require('./logFiles')

class unitEmbed {
    constructor(bot, log) {
        this.bot = bot
        this.log = log
        this.COLORS = {
            human: 0xd35400,
            elf: 0x2ecc71,
            undead: 0x8e44ad,
            orc: 0x3498db,
            err: 0xe74c3c,
            grey: 0x7f8c8d
        }

        this.aliases = {
            //list
            'list': 'list',
            //infantry
            'infantry': 'infantry',
            'infanterie': 'infantry',
            //heavy infantry
            //fire bird
            //musketeer
            //hammer knight
            //cavalry knight
            //golem
            'golem': 'golem'
            //fire mage
            //gunner
            //priest
            //aladdin
            //griffin rider
            //hot-blooded xuanzang
            //pilot
            //steampunk
            //valkyrie
            //flame spirit
            //cleric
            //winged knight
        }

        this.cmd = function(msg, args) {
            var chan = msg.channel,
                text = args.join(' ').toLowerCase()

            if (text in this.aliases) {
                text = this.aliases[text]
                if (text == 'list') {
                    this.list(chan)
                    this.log.log('UNITEMBED', '')
                } else if (text == 'infantry') {
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

        this.list = function(chan) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.grey)
                .setDescription('__**Liste aller Einheiten:**__')
                .addField('⠀', '__Menschen:__\nInfantrie: `.unit infantrie`')
             chan.send('', emb).then((m) => {
                 message = m
            })
            return message
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
                .setColor(this.COLORS.human)
                .setDescription('__**:mensch:Entwickelter Golem:mensch:**__\n\n★★★★★★ [Boden Einheit] :py::menschen::zwi:')
                .addField('⠀','__**Fähigkeiten:**__\n\n+ Normaler Angriff: Fügt den nahestehenden Gegnern um das Ziel Flächenschaden hinzu, wobei das Ziel zu 100% betäubt wird und die umliegenden Einheiten zufällig betäubt werden.\n\n+ Skillangriff: Beschwört ein Schutzschild das gegen physische Angriffe immun macht und das Ziel zu 100% betäubt und dabei doppelten schaden macht. Umliegende Gegner werden zufällig Betäubt.')
                .addField('⠀','+ Spezielle Fähigkeit 1: Werde niemals ohnmächtig (Immun gegen Betäubung)\n\n+ Spezielle Fähigkeit 2: Bei eingehenden Angriffen besteht eine Chance darauf, dass ein Schild beschworen wird, welches gegen 99% der physischen und magischen Angriffe schützt.')
                .setThumbnail('https://cdn.discordapp.com/attachments/416337633871003659/416340091116453918/UI_UNIT_ICONS0014.png')
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

exports.unitEmbed = unitEmbed