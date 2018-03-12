const { RichEmbed } = require('discord.js')

class shortcut {
    constructor(bot, log) {
        this.bot = bot
        this.log = log
        this.COLORS = {
            abk: 0x7f8c8d,
            err: 0xe74c3c
        }
        this.aliases = {
    //UNITS
        //HUMANS
            //infantry
            'infantry': 'infantry',
            'infanterie': 'infantry',
            'inf': 'infantry',
            //heavy infantry
            'heavy infantry': 'heavy infantry',
            'schwere infantrie': 'heavy infantry',
            'hi': 'heavy infantry',
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
        //ELVES
            //elf archer
            //elf warrior
            //poison archer
            //high elf archer
            //green eagle
            //wind mage
            //ent
            //wolf warrior
            //unicorn knight
            //fairy
            //druid
            //forest guardian
            //hoyden goku
            //alchemist
            //sylphid
            //sword dancer
            //hippogriff
            //elementalist
            //windwalker
        //UNDEADS
            //skeleton unit
            //warlock
            //ghost
            //skeleton warrior
            //great hammer unit
            //black magic wizard
            //hands of death
            //bomb unit
            //death unit
            //death knight
            //death archer
            //dark ninja
            //succubus
            //dark admiral
            //lich
            //medusa
            //incubus
            //dark spirit
            //dark elf
            //abyss mage
        //ORCS
            //orc fighter
            //orc hunter
            //frost mage
            //orc wing
            //orc ax unit
            //orc hammer unit
            //big foot
            //ice wizard
            //wolf rider
            //sorcerer
            //battle drummer
            //raptor rider
            //wyvern rider
            //naga
            //ice spirit
            //blade master
            //frost demon
            //siren
    //PETS
        //GEN 0
            //mambo
            //joe
            //mummy
            //piggy
            //potang
            //uni
            //joker
            //snork
            //phoenic
            //indy
            //grim reaper
            //woola
        //GEN 1
            //icy
            //tinkey
            //moon
        //GEN 2
            //magic lamp
            //squirrel
            //sleepy
            //boom boom
        //GEN 3
            //griffy
            //leo
            //devil
            //totem
        //GEN 4
            //mir
            //nimbus
            //jingger
            //rapty
        //GEN 5
            //winky
            //bunny
            //cora
            //wakong
        //GEN 6
            //e-77
            //windy
            //dark snake
            //seahorse
        //GEN 7
            //sarah
            //oscar
            //black
            //juda
        //GEN 8
            //rena
            //hippong
            //osma
            //saul
        //GEN 9
            //bernard
            //chichi
            //chesher
            //bamba
        //GEN 10
            //cat knight
            //mori
            //cerbero
            //octopa
        //RAID 1
            //skole
            //harping
            //gnome
            //bellial
            //senior skole
            //senior harping
            //senior gnome
            //senior bellial
        //RAID 2
            //lavark
            //hellyme
            //furion
            //bahat
            //senior lavark
            //senior hellyme
            //senior furion
            //senior bahat
        //RAID 3
            //tarad
            //neru
            //gorgon
            //beel
            //senior tarad
            //senior neru
            //senior gorgon
            //senior beel
        //EVENT
            //red
            //blue
            //green
            //purple
            //celeste
            //h-reaper
            //christy
            //toby
            //hallokin
            //cookoo
            //nills
            //rudolph
            //lime
            //jindo
            //flame sorceress
            //forest sorceress
        //SECRET SHOP
            //black tortoise
            //phoenix
            //white tiger
            //cleo
            //blue dragon
            //gold dragon
            //human guardian
            //elf guardian
            //undead guardian
            //orc guardian
        //GREEK GODS
            //dionysus
            //zeus
            //aphrodite
            //ares
            //athena
            //artemis
            //apollo
            //demeter
            //poseidon
            //hephaistos
            //hermes
            //hera
        //NORDIC GODS
            //loki
            //freya
            //odin
            //thor
            //vernandi
            //skuld
            //urd
            //skadi
            //freyr
            //baldur
            //tyr
            //heimdall
        //OUTLAND BATTLE
            //puppy
            //coby
            //hotbee
            //pangpang
            //lye
            //hot pony

            //jelly
            //opener
            //boongboong
            //nepen quiver
            //greenbee
            //gently
            
            //big eye
            //clapper
            //black jack
            //eye bye
            //red horn
            //pallabook
            
            //punpun
            //celt
            //chilly
            //wingvl
            //jason
            //teaser
            /*

            */
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

exports.shortcut = shortcut