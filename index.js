const Discord = require('discord.js')
const fs      = require('fs')
const { CmdParser } = require('discordjs-cmds')
const LogFile = require('./src/logFiles')
const OwnerCmd = require('./src/ownerCmd')
const ReactRole = require('./src/reactRole.js')
const UnitEmbed = require('./src/unitEmbed')
const PetEmbed = require('./src/petEmbed')
const Shortcut = require('./src/shortcut')
const Events = require('./src/events')
const LilCmds = require('./src/littleCmds')
const SH1 = require('./src/sh/sh1')
const SH2 = require('./src/sh/sh2')
const SH3 = require('./src/sh/sh3')
const SH4 = require('./src/sh/sh4')
const SH5 = require('./src/sh/sh5')
const SH6 = require('./src/sh/sh6')
const SH7 = require('./src/sh/sh7')
const SH8 = require('./src/sh/sh8')
const SH9 = require('./src/sh/sh9')
const SH10 = require('./src/sh/sh10')


const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

var bot = new Discord.Client(),
    cmd = new CmdParser(bot, config.prefix),
    log = new LogFile.logFile(bot),
    owner = new OwnerCmd.ownerCmd(bot, log),
    reactRole = new ReactRole.reactRole(bot, log),
    unit = new UnitEmbed.unitEmbed(bot, log),
    pet = new PetEmbed.petEmbed(bot, log),
    ss = new Shortcut.shortcut(bot, log),
    events = new Events.events(bot, log),
    lilcmd = new LilCmds.littleCmds(bot, log)
    sh1 = new SH1.sh1(bot, log),
    sh2 = new SH2.sh2(bot, log),
    sh3 = new SH3.sh3(bot, log),
    sh4 = new SH4.sh4(bot, log),
    sh5 = new SH5.sh5(bot, log),
    sh6 = new SH6.sh6(bot, log),
    sh7 = new SH7.sh7(bot, log),
    sh8 = new SH8.sh8(bot, log),
    sh9 = new SH9.sh9(bot, log),
    sh10 = new SH10.sh10(bot, log)

bot.on('ready', () => {
    log.log('BOT', `Logged in as ${bot.user.username}`)
})
/*
________/\\\\\\\\\__/\\\________/\\\_____/\\\\\\\\\_____/\\\\\\\\\\\\\\\_        
 _____/\\\////////__\/\\\_______\/\\\___/\\\\\\\\\\\\\__\///////\\\/////__       
  ___/\\\/___________\/\\\_______\/\\\__/\\\/////////\\\_______\/\\\_______      
   __/\\\_____________\/\\\\\\\\\\\\\\\_\/\\\_______\/\\\_______\/\\\_______     
    _\/\\\_____________\/\\\/////////\\\_\/\\\\\\\\\\\\\\\_______\/\\\_______    
     _\//\\\____________\/\\\_______\/\\\_\/\\\/////////\\\_______\/\\\_______   
      __\///\\\__________\/\\\_______\/\\\_\/\\\_______\/\\\_______\/\\\_______  
       ____\////\\\\\\\\\_\/\\\_______\/\\\_\/\\\_______\/\\\_______\/\\\_______ 
        _______\/////////__\///________\///__\///________\///________\///________
*/

function cmd_say(msg, args) {
    log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
    msg.channel.send(args.join(' '))
}

function cmd_ping(msg, args) {
    log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
    lilcmd.ping(msg)
}

/*
__/\\\\\\\\\\\\\\\__/\\\\\\\\\\\\\\\_        
 _\/\\\///////////__\/\\\///////////__       
  _\/\\\_____________\/\\\_____________      
   _\/\\\\\\\\\\\_____\/\\\\\\\\\\\_____     
    _\/\\\///////______\/\\\///////______    
     _\/\\\_____________\/\\\_____________   
      _\/\\\_____________\/\\\_____________  
       _\/\\\\\\\\\\\\\\\_\/\\\_____________ 
        _\///////////////__\///______________
*/

function cmd_pet(msg, args) {
    log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
    pet.cmd(msg, args)
}

function cmd_unit(msg, args) {
    log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
    unit.cmd(msg, args)
}

function cmd_abk(msg, args) {
    log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
    ss.cmd(msg, args)
}

function cmd_sh(msg, args) {
    args = args[0].split('-')
    if (args[0] == 1) {
        log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
        sh1.cmd(msg, args)
    } else if (args[1] == 2) {
        log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
        sh2.cmd(msg, args)
    } else if (args[2] == 3) {
        log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
        sh3.cmd(msg, args)
    } else if (args[3] == 4) {
        log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
        sh4.cmd(msg, args)
    } else if (args[4] == 5) {
        log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
        sh5.cmd(msg, args)
    } else if (args[5] == 6) {
        log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
        sh6.cmd(msg, args)
    } else if (args[6] == 7) {
        log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
        sh7.cmd(msg, args)
    } else if (args[7] == 8) {
        log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
        sh8.cmd(msg, args)
    } else if (args[8] == 9) {
        log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
        sh9.cmd(msg, args)
    } else if (args[9] == 10) {
        log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
        sh10.cmd(msg, args)
    } else if (args[10] == 11) {

    } else if (args[11] == 12) {

    } else if (args[12] == 13) {

    } else if (args[13] == 14) {

    } else if (args[14] == 15) {

    } else if (args[15] == 16) {

    } else if (args[16] == 17) {

    } else if (args[17] == 18) {

    } else if (args[18] == 19) {

    } else if (args[19] == 20) {

    } else if (args[20] == 21) {

    } else if (args[21] == 22) {

    } else if (args[22] == 23) {

    } else if (args[23] == 24) {

    } else if (args[24] == 25) {

    } else {

    }
}

/*
_______/\\\\\_______/\\\______________/\\\__/\\\\\_____/\\\__/\\\\\\\\\\\\\\\____/\\\\\\\\\_____        
 _____/\\\///\\\____\/\\\_____________\/\\\_\/\\\\\\___\/\\\_\/\\\///////////___/\\\///////\\\___       
  ___/\\\/__\///\\\__\/\\\_____________\/\\\_\/\\\/\\\__\/\\\_\/\\\_____________\/\\\_____\/\\\___      
   __/\\\______\//\\\_\//\\\____/\\\____/\\\__\/\\\//\\\_\/\\\_\/\\\\\\\\\\\_____\/\\\\\\\\\\\/____     
    _\/\\\_______\/\\\__\//\\\__/\\\\\__/\\\___\/\\\\//\\\\/\\\_\/\\\///////______\/\\\//////\\\____    
     _\//\\\______/\\\____\//\\\/\\\/\\\/\\\____\/\\\_\//\\\/\\\_\/\\\_____________\/\\\____\//\\\___   
      __\///\\\__/\\\_______\//\\\\\\//\\\\\_____\/\\\__\//\\\\\\_\/\\\_____________\/\\\_____\//\\\__  
       ____\///\\\\\/_________\//\\\__\//\\\______\/\\\___\//\\\\\_\/\\\\\\\\\\\\\\\_\/\\\______\//\\\_ 
        ______\/////____________\///____\///_______\///_____\/////__\///////////////__\///________\///__
*/

function cmd_setStatus(msg, args) {
    owner.setStatus(args[0], args.join(' ').substring(args[0].length + 1))
    log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
}

//LOGFILE SETUP
log.setPath('./log')

//CMDPARSER SETUP
cmd.setHost(config.owner)

cmd.setOptions({
    msgcolor:  0x0cd682,
    cmdlog: false
})

cmd.addType('EF')

cmd.setPerms(['417728725933883434', '417774024442118164'], 1)

cmd.register(cmd_say, 'say', ['tell', 'send'], 'Send a message with the bot', config.prefix + 'say <msg>', cmd.type.CHAT, 1)
    .register(cmd_pet, 'pet', ['tier'], 'Zeigt Info über ein Pet', config.prefix + 'pet', cmd.type.EF)
    .register(cmd_unit, 'unit', ['einheit'], 'Zeigt Info über eine Einheit', config.prefix + 'unit', cmd.type.EF)
    .register(cmd_setStatus, 'setstatus', ['status'], 'Verändert den Status des Bots', config.prefix + 'setstatus', cmd.type.ADMIN, 10)
    .register(cmd_abk, 'abk', ['abkürzung', 'ss', 'shortcut'], 'Zeigt Abkürzung eines Begriffes bzw. die Bedeutung einer Abkürzung', config.prefix + 'setstatus', cmd.type.EF)
    .register(cmd_sh, 'sh', ['hdg'], 'Zeigt Lösung eines Levels im Hochland der Geister', config.prefix + 'sh', cmd.type.EF)
    .register(cmd_ping, 'ping', [], 'Gibt *Pong* zurück', config.prefix + 'ping', cmd.type.CHAT)

//REACTROLE SETUP
reactRole.addGroup('ROLLE')
reactRole.addGroup('ROLLO')

reactRole.setChannel('415903806128128010', '417736342542221323')

reactRole.register('417728725933883434', '419776692513406978', '417770810472792075', '415903806128128010', 'ROLLE')
reactRole.register('417774024442118164', '419798747363409920', '417770810472792075', '415903806128128010', 'ROLLE')
reactRole.register('418134665812115467', '419805705101377536', '417774111767658501', '415903806128128010', 'ROLLO')
reactRole.register('418134708077985794', '419805713053908992', '417774111767658501', '415903806128128010', 'ROLLO')
reactRole.register('419864126068621322', '3⃣ ', '417984891746123786', '415903806128128010', 'ROLLO') 

//BOT LOGIN
bot.login(config.token)
