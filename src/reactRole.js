const Discord = require('discord.js')
const LogFile = require('./logFiles')

    /**
     * Create instance of ReactRole
     * @param {Discord.Client} bot               Bot Client
     */
class reactRole {
    constructor(bot, log) {
        this.bot = bot
        this.log = log
        this.groups = {
            DEFAULT: 'DEFAULT'
        }
        this.rolemap = {}
        this.roleChannels = {}


        /**
         * Register a role.
         * @param {string} role_id       Role ID
         * @param {string} emoji_id      Emoji ID or NAME
         * @param {string} message_id    ID of expected reaction message
         * @param {string} guild_id      Guild ID
         * @param {string} group         Group of role
         */
        this.register = function(role_id, emoji_id, message_id, guild_id, group) {
            if (typeof group == 'string' && group) {
                if (group in this.groups) {
                    group = group.toUpperCase()
                    this.groups[group] = group
                } else {
                    group = groups.DEFAULT
                    this.log.log('REACTROLE', 'Unknown group: group set to DEFAULT')
                }
            } else {
                group = groups.DEFAULT
            }
            if (typeof role_id != 'string' || !role_id) {
                this.log.log('REACTROLE', 'Could not register new reaction: Invalid argument!')
            } else if (typeof emoji_id != 'string' || !emoji_id) {
                this.log.log('REACTROLE', 'Could not register new reaction: Invalid argument!')
            } else if (typeof message_id != 'string' || !message_id) {
                this.log.log('REACTROLE', 'Could not register new reaction: Invalid argument!')
            } else if (typeof guild_id != 'string' || !guild_id) {
                this.log.log('REACTROLE', 'Could not register new reaction: Invalid argument!')
            }
            emoji_id = emoji_id.split(' ')[0]
            this.rolemap[emoji_id] = [role_id, message_id, group, guild_id]
        }

        /**
         * Set reaction channel for guild
         * @param {string} guild_id      Guild ID
         * @param {string} chan_id       Channel ID
         */
        this.setChannel = function(guild_id, chan_id) {
            if (!chan_id || typeof chan_id != 'string') {
                this.log.log('REACTROLE', 'Could not set channel: Invalid argument!')
            } else if (!guild_id || typeof guild_id != 'string') {
                this.log.log('REACTROLE', 'Could not set channel: Invalid argument!')
            } else {
                this.roleChannels[guild_id] = chan_id
            }
        }

        /**
         * Add group for REACTROLE
         * @param {string} groupname     Name of the Group
         */
        this.addGroup = function(groupname) {
            if (Array.isArray(groupname)) {
                groupname.forEach(g => {
                    if (typeof g != 'string' || !g) {
                        this.log.log('REACTROLE', 'Could not set new group: Invalid argument!')
                    } else {
                        g = g.toUpperCase()
                        this.groups[g] = g
                    }
                })
            } else if (typeof groupname != 'string' || !groupname) {
                this.log.log('REACTROLE', 'Could not set new group: Invalid argument!')
            } else {
                    groupname = groupname.toUpperCase()
                    this.groups[groupname] = groupname
            }
            return this
        }

        /**
         * Add role to user via reaction and remove other roles in group
         * @param {Discord.MessageReaction} react   User's reaction
         * @param {Discord.User} user               User
         */
        this.reactRoleAdd = async function(react, user) {
            var emoji = (react.emoji.id) ? react.emoji.id : react.emoji.name,
                msg = react.message,
                member = react.message.guild.members.get(user.id),
                guild = react.message.guild,
                chan = react.message.channel

            if (emoji in this.rolemap && msg.id == this.rolemap[emoji][1] && guild.id == this.rolemap[emoji][3]) {
                for(var i in this.rolemap) {
                    if (this.rolemap[i][2] == this.rolemap[emoji][2]) {
                        if (this.rolemap[i][0] != this.rolemap[emoji][0]) {
                            if (member.roles.has(this.rolemap[i][0])) {
                                member.removeRole(this.rolemap[i][0])
                            }
                            let m = await chan.fetchMessage(this.rolemap[i][1])

                            for(var j = 0; j < m.reactions.array().length; j++) {
                                if (m.reactions.array()[j].emoji.id == i || m.reactions.array()[j].emoji.name == i) {
                                    m.reactions.array()[j].remove(user)
                                }
                            }
                        }
                    }
                }
                member.addRole(this.rolemap[emoji][0])
                this.log.log('REACTROLE', 'Added ' + this.rolemap[emoji][4] + ` to ${user.username} by reaction.`)
            } else {
                react.remove(user)
            }
        }

        /**
         * Add role to user via message and remove other roles in group
         * @param {Discord.Message} msg       Message sent by user
         * @param {string} role_name Name of the role
         */
        this.msgRoleAdd = async function(msg, role_name) {
            var member = msg.member,
                guild = msg.guild,
                chan = msg.channel
            for(em in this.rolemap) {
                if (this.rolemap[em][4] == role_name) {
                    var emoji = em
                } else {
                    this.log.log('REACTROLE', 'Could not add role: Invalid argument!')
                }
            }
            if (emoji in this.rolemap && guild.id == this.rolemap[emoji][3]) {
                for(var i in this.rolemap) {
                    if (this.rolemap[i][2] == this.rolemap[emoji][2]) {
                        if (this.rolemap[i][0] != this.rolemap[emoji][0]) {
                            if (member.roles.has(this.rolemap[i][0])) {
                                member.removeRole(this.rolemap[i][0])
                            }
                            let m = await chan.fetchMessage(this.rolemap[i][1])

                            for(var j = 0; j < m.reactions.array().length; j++) {
                                if (m.reactions.array()[j].emoji.id == i || m.reactions.array()[j].emoji.name == i) {
                                    m.reactions.array()[j].remove(member)
                                }
                            }
                        }
                    }
                }
                member.addRole(this.rolemap[emoji][0])
                this.log.log('Added ' + this.rolemap[emoji][4] + ` to ${member.user.username} by reaction.`)
            }
        }

        /**
         * Remove role from user via reaction
         * @param {string} emoji     Emoji ID or NAME
         * @param {Discord.Message} msg       Message to that the user reacted
         * @param {Discord.User} user      User who reacted
         */
        this.reactRoleRemove = function(emoji, msg, user) {
            var guild = msg.guild,
                member = guild.members.get(user.id)
                
            if (emoji in this.rolemap && msg.id == this.rolemap[emoji][1] && guild.id == this.rolemap[emoji][3]) {
                member.removeRole(this.rolemap[emoji][0])
                this.log.log('REACTROLE', 'Removed ' + this.rolemap[emoji][4] + ` from ${user.username} by reaction.`)
            }

        }

        this.bot.on('raw', async event => {
            if (event.t !== 'MESSAGE_REACTION_ADD') return
        
            const { d: data } = event
            const channel = this.bot.channels.get(data.channel_id)
        
            const user = this.bot.users.get(data.user_id)
            const message = await channel.fetchMessage(data.message_id)
        
            const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name
            const reaction = message.reactions.get(emojiKey)

            if (reaction && user.id != this.bot.user.id && reaction.message.channel.id == this.roleChannels[reaction.message.guild.id]) {
                this.reactRoleAdd(reaction, user)
            }
        })
        
        this.bot.on('raw', async event => {
            if (event.t !== 'MESSAGE_REACTION_REMOVE') return
        
            const { d: data } = event
            const channel = this.bot.channels.get(data.channel_id)
            
            const user = this.bot.users.get(data.user_id)
            const message = await channel.fetchMessage(data.message_id)
        
            const emoji = (data.emoji.id) ? data.emoji.id : data.emoji.name

            if (emoji && user.id != this.bot.user.id && channel.id == this.roleChannels[message.guild.id]) {
                this.reactRoleRemove(emoji, message, user)
            }
        })

        this.bot.on('ready', async () => {
            for(var i in this.rolemap) {
                this.rolemap[i].push(bot.guilds.get(this.rolemap[i][3]).roles.get(this.rolemap[i][0]).name)
                let g = this.bot.guilds.get(this.rolemap[i][3]),
                    chan = g.channels.get(this.roleChannels[g.id]),
                    m = await chan.fetchMessage(this.rolemap[i][1])

                m.react(i)
            
            }


            
        })
    }
}

exports.reactRole = reactRole