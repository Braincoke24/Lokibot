const Discord = require('discord.js')
const Shortcut = require('./shortcut')
const fs = require('fs')

const unitConfig = JSON.parse(fs.readFileSync('./configFiles/unitConfig.json', 'utf8'))
const unitEmbed = JSON.parse(fs.readFileSync('./src/embeds/unitEmbed.json', 'utf8'))
const petConfig = JSON.parse(fs.readFileSync('./configFiles/petConfig.json', 'utf8'))
const petEmbed = JSON.parse(fs.readFileSync('./src/embeds/petEmbed.json', 'utf8'))
const config = JSON.parse(fs.readFileSync('./configFiles/config.json', 'utf8'))
const shEmbed = {
    1: JSON.parse(fs.readFileSync('./src/embeds/shEmbed_1.json', 'utf8')),
    2: JSON.parse(fs.readFileSync('./src/embeds/shEmbed_2.json', 'utf8')),
    3: JSON.parse(fs.readFileSync('./src/embeds/shEmbed_3.json', 'utf8')),
    4: JSON.parse(fs.readFileSync('./src/embeds/shEmbed_4.json', 'utf8')),
    5: JSON.parse(fs.readFileSync('./src/embeds/shEmbed_5.json', 'utf8')),
}

class cmdDistributor {
    constructor(bot, log) {
        this.bot = bot
        this.log = log
        this.COLORS = {
            'human': 0xd35400,
            'elf': 0x2ecc71,
            'undead': 0x8e44ad,
            'orc': 0x3498db,
            'greek': 0x7f8c8d,
            'nordic': 0x7f8c8d,
            'event': 0x00B7C3,
            'raid1': 0x847545,
            'raid2': 0xDA3B01,
            'raid3': 0x498205,
            'raid4': 0x8e44ad,
            grey: 0x7f8c8d,
            err: 0xe74c3c
        }
        this.moduleSyntax = {
            'UNITEMBED': ['Syntay error! Correct syntax:\n`' + config.prefix + 'unit <unitname/petname>`\nFor a list with all units enter `' + config.prefix + 'unit list`.', 'Fehlerhafte Eingabe! Richtiger Syntax:\n`' + config.prefix + 'einheit <Einheitenname/Tiername>`\nFür eine Liste aller Einheiten gib `' + config.prefix + 'einheit liste` ein.'],
            'PETEMBED': ['Syntay error! Correct syntax:\n`' + config.prefix + 'pet <petname/unitname>`\nFor a list with all pets enter `' + config.prefix + 'pet list`.', 'Fehlerhafte Eingabe! Richtiger Syntax:\n`' + config.prefix + 'tier <Tiername/Einheitenname>`\nFür eine Liste aller Tiere gib `' + config.prefix + 'tier liste` ein.'],
            'SHEMBED': ['Syntay error! Correct syntax:\n`' + config.prefix + 'sh <page>-<level>`', 'Fehlerhafte Eingabe! Richtiger Syntax:\n`' + config.prefix + 'sh <Seite>-<Level>`'],
            'SHORTCUT': ['Syntay error! Correct syntax:\n`' + config.prefix + 'sc <term/shortcut>`\nFor a list with all shortcuts enter `' + config.prefix + 'sc list`.', 'Fehlerhafte Eingabe! Richtiger Syntax:\n`' + config.prefix + 'abk <Begriff/Abkürzung>`\nFür eine Liste aller Abkürzungen gib `' + config.prefix + 'abk liste` ein.']
        }

        this.unit = function(msg, args) {
            var chan = msg.channel,
                text = args.join(' ').toLowerCase()
            if (msg.author.id in userLanguage) {
                var lang = userLanguage[msg.author.id]
            } else {
                var lang = userLanguage['default']
            }
            if (text in unitConfig) {
                text = unitConfig[text]
                var message
                var emb = new Discord.RichEmbed()
                    if (unitEmbed[text].color) {
                        emb.setColor(this.COLORS[unitEmbed[text].color])
                    } else {
                        emb.setColor(this.COLORS.grey)
                    }
                    emb.setDescription(unitEmbed[text].description)
                    if (unitEmbed[text].fields) {
                        for (var i = 0; i < Object.keys(unitEmbed[text].fields).length; i++) {
                            emb.addField('⠀',unitEmbed[text].fields[i])
                        }
                    }
                    if (unitEmbed[text].footer) {
                        emb.setFooter(unitEmbed[text].footer)
                    } else {
                        emb.setFooter(unitEmbed.footer)
                    }
                    if (unitEmbed[text].thumbnail) {
                        emb.setThumbnail(unitEmbed[text].thumbnail)
                    }
                chan.send('', emb).then((m) => {
                    message = m
                })
                this.log.log('UNITEMBED', `<USER: ${msg.member.user.tag}> successfully executed command: '${msg.content}'`)
            } else {
                this.error(chan, 'UNITEMBED', lang)
                this.log.log('UNITEMBED', `<USER: ${msg.member.user.tag}> failed to execute command: '${msg.content}': Argument: "` + text + `" doesn't exist.`)
            }
        }

        this.pet = function(msg, args) {
            var chan = msg.channel,
                text = args.join(' ').toLowerCase()
            if (msg.author.id in userLanguage) {
                var lang = userLanguage[msg.author.id]
            } else {
                var lang = userLanguage['default']
            }
            if (text in petConfig) {
                text = petConfig[text]
                var message
                var emb = new Discord.RichEmbed()
                    if (petEmbed[text].color) {
                        emb.setColor(this.COLORS[petEmbed[text].color])
                    } else {
                        emb.setColor(this.COLORS.grey)
                    }
                    emb.setDescription(petEmbed[text].description)
                    if (petEmbed[text].fields) {
                        for (var i = 0; i < Object.keys(petEmbed[text].fields).length; i++) {
                            emb.addField('⠀',petEmbed[text].fields[i])
                        }
                    }
                    if (petEmbed[text].footer) {
                        emb.setFooter(petEmbed[text].footer)
                    } else {
                        emb.setFooter(petEmbed.footer)
                    }
                    if (petEmbed[text].thumbnail) {
                        emb.setThumbnail(petEmbed[text].thumbnail)
                    }
                chan.send('', emb).then((m) => {
                    message = m
                })
                this.log.log('PETEMBED', `<USER: ${msg.member.user.tag}> successfully executed command: '${msg.content}'`)
            } else {
                this.error(chan, 'PETEMBED', lang)
                this.log.log('PETEMBED', `<USER: ${msg.member.user.tag}> failed to execute command: '${msg.content}': Argument: "` + text + `" doesn't exist.`)
            }
        }

        this.sh = function(msg, args) {
            var chan = msg.channel,
                args = args[0].split('-'),
                page = args[0],
                lvl = args[1]
            if (msg.author.id in userLanguage) {
                var lang = userLanguage[msg.author.id]
            } else {
                var lang = userLanguage['default']
            }
            if (0 < page < 26 && 0 < lvl < 21) {
                const fileNumber = Math.ceil(page / 5)
                var message
                var emb = new Discord.RichEmbed()
                    .setColor(this.COLORS.grey)
                    .setDescription(shEmbed[fileNumber][page][lvl].description)
                    if (shEmbed[fileNumber][page][lvl].fields) {
                        for (var i = 0; i < Object.keys(shEmbed[fileNumber][page][lvl].fields).length; i++) {
                            emb.addField('⠀',shEmbed[fileNumber][page][lvl].fields[i])
                        }
                    }
                    emb.setImage(shEmbed[fileNumber][page][lvl].image)
                    .setThumbnail(shEmbed[1].thumbnail)
                chan.send('', emb).then((m) => {
                    message = m
                })
                this.log.log('SHEMBED', `<USER: ${msg.member.user.tag}> successfully executed command: '${msg.content}'`)
            } else {
                this.error(chan, 'SHEMBED', lang)
                this.log.log('SHEMBED', `<USER: ${msg.member.user.tag}> failed to execute command: '${msg.content}': Argument: "` + text + `" doesn't exist.`)
            }
        }

        this.shortcut = function(msg, args) {
            var sc = new Shortcut.shortcut(bot, log)
        }

        this.testEmb = function(msg, args) {
            var chan = msg.channel,
                text = args.join(' ')
            const testObj = JSON.parse(text)
            var message
            var emb = new Discord.RichEmbed()
                if (testObj.color) {
                    emb.setColor(testObj.color)
                } else {
                    emb.setColor(this.COLORS.grey)
                }
                if (testObj.description) {
                    emb.setDescription(testObj.description)
                }
                if (testObj.fields) {
                    for (var i = 0; i < Object.keys(testObj.fields).length; i++) {
                        emb.addField('⠀',testObj.fields[i])
                    } 
                }
                if (testObj.image) {
                    emb.setImage(testObj.image)
                }
                if (testObj.footer) {
                    emb.setFooter(testObj.footer)
                }
                if (testObj.thumbnail) {
                    emb.setThumbnail(testObj.thumbnail)
                }
            chan.send('', emb).then((m) => {
                message = m
            })
        }

        this.error = function(chan, mod, lang) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.err)
                .setDescription(this.moduleSyntax[mod][lang])
             chan.send('', emb).then((m) => {
                 message = m
            })
            return message
        }
    }
}

exports.cmdDistributor = cmdDistributor