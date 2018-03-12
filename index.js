const Discord = require('discord.js')
const fs      = require('fs')
const { CmdParser } = require('discordjs-cmds')
const LogFile = require('./src/logFiles')
const OwnerCmd = require('./src/ownerCmd')
const ReactRole = require('./src/reactRole.js')
const UnitEmbed = require('./src/unitEmbed')
const PetEmbed = require('./src/petEmbed')
const Shortcut = require('./src/shortcut')
const DCEvents = require('./src/dcEvents')
const LilCmds = require('./src/littleCmds')
const CmdDistributor = require('./src/cmdDistributor')

const config = JSON.parse(fs.readFileSync('configFiles/config.json', 'utf8'))

var bot = new Discord.Client(),
    cmd = new CmdParser(bot, config.prefix),
    log = new LogFile.logFile(bot),
    owner = new OwnerCmd.ownerCmd(bot, log),
    reactRole = new ReactRole.reactRole(bot, log),
    unit = new UnitEmbed.unitEmbed(bot, log),
    pet = new PetEmbed.petEmbed(bot, log),
    sc = new Shortcut.shortcut(bot, log),
    dcevents = new DCEvents.dcEvents(bot, log),
    lilcmd = new LilCmds.littleCmds(bot, log),
    distribute = new CmdDistributor.cmdDistributor(bot, log)

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

function cmd_lang(msg, args) {
    log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
    lilcmd.language(msg, args)
}

function cmd_testEmb(msg, args) {
    log.log('CMDPARSER', `[USER: ${msg.member.user.tag}] executed command: '${msg.content}'`)
    distribute.testEmb(msg, args)
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
    distribute.pet(msg, args)
}

function cmd_unit(msg, args) {
    distribute.unit(msg, args)
}

function cmd_abk(msg, args) {
    distribute.shortcut(msg, args)
}

function cmd_sh(msg, args) {
    distribute.sh(msg, args)
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

cmd.register(cmd_say, 'say', ['tell', 'send'], 'Send a message with the bot', config.prefix + 'say <msg>', cmd.type.CHAT)
    .register(cmd_pet, 'pet', ['tier'], 'Zeigt Info über ein Pet', config.prefix + 'pet', cmd.type.EF)
    .register(cmd_unit, 'unit', ['einheit', 'einheiten'], 'Zeigt Info über eine Einheit', config.prefix + 'unit', cmd.type.EF)
    .register(cmd_setStatus, 'setstatus', ['status'], 'Verändert den Status des Bots', config.prefix + 'setstatus', cmd.type.ADMIN, 10)
    .register(cmd_abk, 'abk', ['abkürzung', 'sc', 'shortcut'], 'Zeigt Abkürzung eines Begriffes bzw. die Bedeutung einer Abkürzung', config.prefix + 'setstatus', cmd.type.EF)
    .register(cmd_sh, 'sh', ['hdg'], 'Zeigt Lösung eines Levels im Hochland der Geister', config.prefix + 'sh', cmd.type.EF)
    .register(cmd_ping, 'ping', [], 'Gibt *Pong* zurück', config.prefix + 'ping', cmd.type.CHAT)
    .register(cmd_lang, 'lang', ['language', 'sprache'], 'Stellt deine Sprache ein', config.prefix + 'lang', cmd.type.CHAT)
    .register(cmd_testEmb, 'testemb', [], 'Zeigt dir, wie dein Embed aussieht', config.prefix + 'test', cmd.type.CHAT)

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