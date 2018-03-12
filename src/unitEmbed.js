const Discord = require('discord.js')

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
        this.emojis = {
            humanIc: '<:menschen:358338613429272598>',
            elfIc: '<:elfen:358338594789785600>',
            undeadIc: '<:untote:358338633759064066>',
            orcIc: '<:orks:358338656471220234>',
            human: '<:mensch:328211338197467137>',
            elf: '<:elf:328211389590011904>',
            undead: '<:untot:328211221042167821>',
            orc: '<:ork:328211281456791552>',
            pydmg: '<:py:358332040283947008>',
            madmg: '<:magic:358335426269806594>',
            zwi: '<:zwi:358335521061077004>',
            male: '<:male:358332019668680708>',
            female: '<:female:358335385119752212>',
            fly: '<:nair:358335488987365388>',
            invis: '<:usi:358335509971599363>',
            gen0: '<:gen:358335414488268800>',
            gen1: '<:gen1:358730065845944320>',
            gen2: '<:gen2:358730095503867907>',
            gen3: '<:gen3:358730084556865548>',
            gen4: '<:gen4:358730104236670977>',
            gen5: '<:gen5:358730112130220045>',
            gen6: '<:gen6:358730120703508481>',
            gen7: '<:gen7:358730135769448448>',
            gen8: '<:gen8:358730145789378571>',
            gen9: '<:gen9:360444689750687754>',
            gen10: '<:gen10:402192079222210563>'
        }

        /**
         * Shows list of all units with commands to show info
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.list = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.grey)
                .setDescription('__**Liste aller Einheiten:**__')
                .addField('⠀', '__Menschen:__\nInfanterie: `.unit infantrie`')
             chan.send('', emb).then((m) => {
                 message = m
            })
            return message
        }

        /**
         * Shows bonus with 5* pet and needed amount of units to max bonus
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.bonus = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.grey)
                .setDescription('__**Liste der benötigten Einheiten mit 5* Pet Bonus:**__')
                .addField('⠀', '**Resistenz:**\n  **Feuerresistenz:**\n    27 Flammengeister | Pet: Rena\n  **Naturresistenz:**\n    27 Elementalisten | Pet: Chichi')
                .addField('⠀', '**Level überspringen:**\n    20 Hippogriffs | Pet: Hippong\n    14 Fairy | Pet: Tinki')
                .addField('⠀', '**Geisterausruhen:**\n    22 Dunkler Geist | Pet: Osma\n    22 Schwertmeister | Pet: Saul')
                .addField('⠀', '**Fünffacher Speed:**\n    12 Priester | Pet: Frosti')
                .addField('⠀', '**Kräftigen:**\n    10 Schwerttänzer | Pet: Oscar\n    10 Walküren | Pet: Sarah\n    10 Eisgeister | Pet: Juda\n    10 Incubus | Pet: Black')
                .addField('⠀', '**Innere Leidenschaft:**\n    10 Nagas | Pet: Sepferdchen\n    10 Medusa | Pet: Dunkle Schlange\n    10 Sylphide | Pet: Windy\n    10 Steampunk | Pet: E-77\n    +20 Einheiten (gesamt: 60), aufgeteilt wie ihr wollt')
                .addField('⠀', '**Geistererwachen:**\n    5 Lindwurmreiter | Pet: Wakong\n    5 Alchemisten | Pet: Häschen\n    5 Piloten | Pet: Winky\n    5 Lichs | Pet: Cora')
                .addField('⠀', '**Skill Push Einheiten**\n    24 Zauberer | Pet: Totem\n    24 Frostdämon | Pet: Bamba')
                .addField('⠀', '**Wiederbelebungsteam:**\n    12 Kampftrommler | Pet: Bambam\n    24 Dunkle Bogenschützen | Pet: Mondfee')
                .addField('⠀', '**Gildenraid:**\n    5 Dunkle Admirale | Pet: Jingger\n    5 Hoyden Goku | Pet: Nimbus\n    5 Heißblütiger Xuanzang | Pet: Mir\n    5 Raptorreiter | Pet: Rapty')
                .addField('⠀', '**Outlandschlacht:**\n    15 Dunkle Elfen | Pet: Chesher\n    17 Kleriker | Pet: Bernard')
             chan.send('', emb).then((m) => {
                 message = m
            })
            return message
        }

        /**
         * Send error message
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.error = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
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

        /**
         * Shows info about infantry
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.infantry = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about heavy infantry
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.heavyInfantry = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about fire bird
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.fireBird = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about musketeer
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.musketeer = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about hammer knight
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.hammerKnight = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about cavalry knight
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.cavalryKnight = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about golem
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.golem = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**Entwickelter Golem${this.emojis.humanIc}**__\n\n★★★★★★ [Boden Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\n+ Normaler Angriff: Fügt den nahestehenden Gegnern um das Ziel Flächenschaden hinzu, wobei das Ziel zu 100% betäubt wird und die umliegenden Einheiten zufällig betäubt werden.\n\n+ Skillangriff: Beschwört ein Schutzschild das gegen physische Angriffe immun macht und das Ziel zu 100% betäubt und dabei doppelten schaden macht. Umliegende Gegner werden zufällig Betäubt.')
                .addField('⠀','+ Spezielle Fähigkeit 1: Werde niemals ohnmächtig (Immun gegen Betäubung)\n\n+ Spezielle Fähigkeit 2: Bei eingehenden Angriffen besteht eine Chance darauf, dass ein Schild beschworen wird, welches gegen 99% der physischen und magischen Angriffe schützt.')
                .setFooter('Liste aller Einheiten mit .einheit liste')
                .setThumbnail('https://cdn.discordapp.com/attachments/416337633871003659/416340091116453918/UI_UNIT_ICONS0014.png')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about fire mage
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.fireMage = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about gunner
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.gunner = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about priest
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.priest = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about aladdin
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.aladdin = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about griffin rider
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.griffinRider = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about hot-blooded xuanzang
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.hotBloodedXuanzang = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about pilot
         * @param {Dicord.channel} chan         Channel for message to be send
         */
        this.pilot = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about steampunk
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.steampunk = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about valkyrie
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.valkyrie = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about flame spirit
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.flameSpirit = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about cleric
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.cleric = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }
        
        /**
         * Shows info about winged knight
         * @param {Discord.channel} chan        Channel for message to be send
         */
        this.wingedKnight = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.human)
                .setDescription(`${this.emojis.humanIc}__**NAME DES ENTWICKELTEN${this.emojis.humanIc}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.humanIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }

/*
__/\\\\\\\\\\\\\\\__/\\\______________/\\\________/\\\__/\\\\\\\\\\\\\\\_____/\\\\\\\\\\\___        
 _\/\\\///////////__\/\\\_____________\/\\\_______\/\\\_\/\\\///////////____/\\\/////////\\\_       
  _\/\\\_____________\/\\\_____________\//\\\______/\\\__\/\\\______________\//\\\______\///__      
   _\/\\\\\\\\\\\_____\/\\\______________\//\\\____/\\\___\/\\\\\\\\\\\_______\////\\\_________     
    _\/\\\///////______\/\\\_______________\//\\\__/\\\____\/\\\///////___________\////\\\______    
     _\/\\\_____________\/\\\________________\//\\\/\\\_____\/\\\_____________________\////\\\___   
      _\/\\\_____________\/\\\_________________\//\\\\\______\/\\\______________/\\\______\//\\\__  
       _\/\\\\\\\\\\\\\\\_\/\\\\\\\\\\\\\\\______\//\\\_______\/\\\\\\\\\\\\\\\_\///\\\\\\\\\\\/___ 
        _\///////////////__\///////////////________\///________\///////////////____\///////////_____
*/

        this.elfArcher = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.elfWarrior = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.poisonArcher = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.highElfArcher = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.greenEagle = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.windMage = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.ent = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.wolfWarrior = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.unicornKnight = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.fairy = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.druid = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.forestGuardian = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.hoydenGoku = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.alchemist = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        
        this.sylphid = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.swordDancer = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.hippogriff = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.elementalist = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

        this.windwalker = function(chan) {
            var message
            var emb = new Discord.RichEmbed()
                .setColor(this.COLORS.elf)
                .setDescription(`${this.emojis.elf}__**NAME DES ENTWICKELTEN${this.emojis.elf}**__\n\n★★★★★★ [BODEN / FLIEGENDE Einheit] ${this.emojis.pydmg}${this.emojis.elfIc}${this.emojis.zwi}`)
                .addField('⠀','__**Fähigkeiten:**__\n\nANGRIFFE')
                .addField('⠀','SPEZIELLE FÄHIGKEITEN')
                .setFooter('Liste aller Einheiten mit .unit list')
                .setThumbnail('LINK ZUM BILD')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }        

/*
__/\\\________/\\\__/\\\\\_____/\\\__/\\\\\\\\\\\\_____/\\\\\\\\\\\\\\\_____/\\\\\\\\\_____/\\\\\\\\\\\\________/\\\\\\\\\\\___        
 _\/\\\_______\/\\\_\/\\\\\\___\/\\\_\/\\\////////\\\__\/\\\///////////____/\\\\\\\\\\\\\__\/\\\////////\\\____/\\\/////////\\\_       
  _\/\\\_______\/\\\_\/\\\/\\\__\/\\\_\/\\\______\//\\\_\/\\\______________/\\\/////////\\\_\/\\\______\//\\\__\//\\\______\///__      
   _\/\\\_______\/\\\_\/\\\//\\\_\/\\\_\/\\\_______\/\\\_\/\\\\\\\\\\\_____\/\\\_______\/\\\_\/\\\_______\/\\\___\////\\\_________     
    _\/\\\_______\/\\\_\/\\\\//\\\\/\\\_\/\\\_______\/\\\_\/\\\///////______\/\\\\\\\\\\\\\\\_\/\\\_______\/\\\______\////\\\______    
     _\/\\\_______\/\\\_\/\\\_\//\\\/\\\_\/\\\_______\/\\\_\/\\\_____________\/\\\/////////\\\_\/\\\_______\/\\\_________\////\\\___   
      _\//\\\______/\\\__\/\\\__\//\\\\\\_\/\\\_______/\\\__\/\\\_____________\/\\\_______\/\\\_\/\\\_______/\\\___/\\\______\//\\\__  
       __\///\\\\\\\\\/___\/\\\___\//\\\\\_\/\\\\\\\\\\\\/___\/\\\\\\\\\\\\\\\_\/\\\_______\/\\\_\/\\\\\\\\\\\\/___\///\\\\\\\\\\\/___ 
        ____\/////////_____\///_____\/////__\////////////_____\///////////////__\///________\///__\////////////_______\///////////_____
*/



/*
_______/\\\\\_________/\\\\\\\\\____________/\\\\\\\\\_____/\\\\\\\\\\\___        
 _____/\\\///\\\_____/\\\///////\\\_______/\\\////////____/\\\/////////\\\_       
  ___/\\\/__\///\\\__\/\\\_____\/\\\_____/\\\/____________\//\\\______\///__      
   __/\\\______\//\\\_\/\\\\\\\\\\\/_____/\\\_______________\////\\\_________     
    _\/\\\_______\/\\\_\/\\\//////\\\____\/\\\__________________\////\\\______    
     _\//\\\______/\\\__\/\\\____\//\\\___\//\\\____________________\////\\\___   
      __\///\\\__/\\\____\/\\\_____\//\\\___\///\\\___________/\\\______\//\\\__  
       ____\///\\\\\/_____\/\\\______\//\\\____\////\\\\\\\\\_\///\\\\\\\\\\\/___ 
        ______\/////_______\///________\///________\/////////____\///////////_____
*/
    }
}

exports.unitEmbed = unitEmbed