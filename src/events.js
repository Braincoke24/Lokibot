const Discord = require('discord.js')
const LogFile = require('./logFiles')

class events {
    constructor(bot, log) {
        this.bot = bot
        this.log = log
        this.COLORS = {
            join: 0x10893E,
            leave: 0xE74856
        }

        this.joinMsg = function(member) {
            const user = member.user
            const guild = this.bot.guilds.get('415903806128128010')
            const msgchan = guild.channels.get('421029599464652810')
            var message
            var DMemb = new Discord.RichEmbed()
                .setColor(this.COLORS.join)
                .setDescription(`Willkommen ${member.user} bei Endless Frontier Germany.\n\nBevor du loslegen kannst, gibt es einige grundlegende Dinge zu beachten:\n`)
                .addField('⠀', '__**:one:: Rollenzuweisung:**__\nBitte weise dich einer Rolle hinzu, indem du Folgendes tust:\nGehe in den Textkanal #befehle auf dem Endless Frontier Germany Discord und gib `.iam level X` ein, wobei du `X` durch deine aktuelle Stufe (nur in 1000-er Schritten!) ersetzt.\nBeispiel: `.iam level 5000`.\nDanach tippe `.iam serverX` ein, wobei du `X` durch die Nummer deines Servers im Spiel ersetzt.\nBeispiel: `.iam server10`.\n')
                .addField('⠀', '__**:two:: Leitfaden für Anfänger:**__\nWir haben einen servereigenen Anfängerleitfaden, welchen du im Textkanal #anfaenger_leitfaden findest.\nLies ihn dir am Anfang am besten durch, um Anfängerfehler zu vermeiden und dir einen guten Überblick über das Spielgeschehen machen zu können.\n')
                .addField('⠀', '__**:three:: Befehle:**__\nMöchtest du nähere Informationen über eine Einheit, ein Pet, ein Artefakt uvm. bekommen, kannst du dir diese im Textkanal #befehle durch Eingabe eines Befehls einholen.\nFür eine Liste aller verfügbaren Befehle gib bitte `.help` im Textkanal #befehle ein.\n\n')
                .addField('⠀', 'Falls du weitere Fragen hast, kannst du gerne einem der Admins oder Moderatoren per Privatnachricht dein Anliegen darlegen, oder einfach in #endless_frontier_germany nachfragen.\nAnsonsten wünschen wir dir viel Spaß auf dem Server!\nLiebe Grüße\n@Lukachu#4977, @spєє∂y[кl194|-єω-]#1299 und @Braincoke#7675\n:wave:')
            var msgemb = new Discord.RichEmbed()
                .setColor(this.COLORS.join)
                .setDescription(`Willkommen ${member.user} auf Endless Frontier Germany :tada:`)
            user.send('', DMemb).then((m) => {
                 message = m
            })
            msgchan.send('', msgemb).then((m) => {
                message = m
            })
            this.log.log('MEMBERJOIN', `[USER: ${member.user.tag}] joined to ${guild.name}`)
            return message
        }

        this.leaveMsg = function(member) {
            const guild = this.bot.guilds.get('415903806128128010')
            const msgchan = guild.channels.get('421029599464652810')
            var message
            var msgemb = new Discord.RichEmbed()
                .setColor(this.COLORS.leave)
                .setDescription(`${member.user} hat den Server verlassen :no_mouth:`)
            msgchan.send('', msgemb).then((m) => {
                message = m
            })
            this.log.log('MEMBERREMOVE', `[USER: ${member.user.tag}] left ${guild.name}`)
            return message
        }

        this.bot.on('guildMemberAdd', (member) => {
            this.joinMsg(member)
        })

        this.bot.on('guildMemberRemove', (member) => {
            this.leaveMsg(member)
        })
    }
}

exports.events = events