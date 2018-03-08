const EventEmitter = require('events')
const fs = require('fs')

class logFile {
    constructor(bot) {
        this.bot = bot
        this.logpath = './log'
        this.currentPath = ''

        class Emitter extends EventEmitter {}
        this.event = new Emitter()

        /**
         * Set new path for logfiles
         * @param {string} path         Path to logfiles
         */
        this.setPath = function(path) {
            if (!path == 'string') {
                console.log('[LOGFILES] Could not change path: Invalid argument!\n')
            } else {
                this.logpath = path
            }
        }

        /**
         * Logs text in logfile and console
         * @param {string} emitter           Instance that send the text
         * @param {string} text              Text to write in log
         */
        this.log = function(emitter, text) {
            var onlypath = this.getPath(0)[0],
                path = this.getPath(0)[1].substring(onlypath.length),
                cpath = this.currentPath.substring(onlypath.length)

                if (!emitter || emitter == '') {
                    this.log('LOGFILES', 'Could not log: Invalid argument!')
                } else if (!text || text == '') {
                    this.log('LOGFILES', 'Could not log: Invalid argument!')
                } else {
                    emitter = emitter.toUpperCase()
                }

                path = path.split('_')
                cpath = cpath.split('_')
                path[4] = ' '
                cpath[4] = ' '
                path = path.join('_')
                cpath = cpath.join('_')
                if (path = cpath) {
                    console.log(`${this.getTime()} [${emitter}] ${text}`)
                    fs.appendFile(this.currentPath, `${this.getTime()} [${emitter}] ${text}\n`, (err) => {
                        if (err)
                            this.event.emit('logInError', err)
                    })
                } else {
                    this.createFile(emitter, text)
                }
        }

        /**
         * Get path for logfile n for today
         * @param {number} n                Number of logfile
         */
        this.getPath = function(n) {
            var date = new Date(),
                yyyy = date.getFullYear(),
                mm = date.getMonth() + 1,
                dd = date.getDate(),
                datearr = [yyyy, mm, dd],
                pathsplit = this.logpath.split('/'),
                onlypath = (pathsplit[pathsplit.length - 1].indexOf('.') > -1 ? pathsplit.slice(0, pathsplit.length - 1) : pathsplit).join('/')
                datearr.push('(' + n + ')')

            var datearrstr = 'log_' + datearr.join('_') + '.txt',
                path = onlypath + '/' + datearrstr

            return [onlypath, path]
        }

        /**
         * Creates logfile
         * @param {string} emitter          Instance that send the text
         * @param {string} text             Text to write in log
         */
        this.createFile = function(emitter, text) {
            var end = false
            for(var i = 1; end != true; i++) {
                var path = this.getPath(i)[1]
                this.logpath = this.getPath(i)[0]
                if (!fs.existsSync(path)) {
                    if (!fs.existsSync(this.logpath)) {
                        fs.mkdirSync(this.logpath)
                    }
                    fs.appendFile(path, `${this.getTime()} [LOGFILES] Modul loaded\n`, (err) => {
                        if (err)
                            this.event.emit('logInError', err)
                    })
                    if (emitter && text) {
                        this.log(emitter, text)
                    }
                    this.currentPath = path
                    end = true
                }
            }
        }

        this.bot.on('ready', () => {
            this.createFile()
        })

        this.getTime = function() {
            function btf(inp) {
                if (inp < 10)
                return "0" + inp;
                return inp;
            }
            var date = new Date(),
                y = date.getFullYear(),
                m = btf(date.getMonth() + 1),
                d = btf(date.getDate()),
                h = btf(date.getHours()),
                min = btf(date.getMinutes()),
                s = btf(date.getSeconds());
            return `[${d}.${m}.${y} - ${h}:${min}:${s}]`
        }
    }
}

exports.logFile = logFile