const { RichEmbed } = require('discord.js')
const LogFile = require('./logFiles')

class petEmbed {
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
            //gen0
            'mambo': 'mambo'
        }

        this.cmd = function(msg, args) {
            var chan = msg.channel,
                text = args.join(' ').toLowerCase()

                if (text in this.aliases) {
                    text = this.aliases[text]
                    if (text == 'list') {
                        this.list(chan)
                    } else if (text == 'mambo') {
                        this.mambo(chan)
                    }
                } else {
                    this.error(chan)
                }
        }

        this.list = function(chan) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.grey)
                .setDescription('__**Liste aller Pets:**__')
                .addField('⠀', '__Generation 0:__\nMambo: `.pet mambo`')
             chan.send('', emb).then((m) => {
                 message = m
            })
            return message
        }

        this.error = function(chan) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.err)
                .setDescription('Fehlerhafte Eingabe! Richtiger Syntax:\n`.pet <Petname>`\nFür eine Liste aller Pets gib `.pet list` ein.')
             chan.send('', emb).then((m) => {
                 message = m
            })
            return message
        }

        this.mambo = function(chan) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription('__**Mambo**__\nHelden Paar:\n`Golem`')
                .addField('⠀','**Skill 1:**\nGold   +`300, 800, 3000, 8000, 15000`%\n\n**Skill 2:**\nGildenkrieg Menschen LP   +`9, 12, 15`%\n\n**Skill 3 Geheime Fähigkeit des Golems:**\n\n- LP unter 30% -> immun gegen schwächende Fertigkeiten\n\n- schnelle Bewegung zum ersten Gegner\n\n- erhöht LP und Verteidigung aller Einheiten um 10%\n\n- Goldlevel Max: `+30, T1 +50, T2 +70, T3 +90`\n')
                .addField('⠀','**Hochland der Geister:**\n`1-1 RL 2`\n`1-5 RL 2`\n`2-10 RL 12`\n`12-16 RL 94`\n\n**Tierpunkte:**\n`2, 4, 6, 8, 10`')
                .setThumbnail('https://cdn.discordapp.com/attachments/416337633871003659/416337792897908746/UI_PET1.png')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
    }
}

exports.petEmbed = petEmbed