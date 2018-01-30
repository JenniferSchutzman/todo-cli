console.log("TODO!")
const add = require('./cmds/add')
const ls = require('./cmds/ls')
const rm = require('./cmds/rm')
const check = require('./cmds/check')
const init = require('./cmds/init')
//process.argv is the arguments passed when the program is run
const [execPath, jsPath, cmd, ...rest] = process.argv
//these first 3 named will return as a string, but the rest will return as an array
console.log('process.argv', process.argv)
console.log('execPath:', execPath)
console.log('jsPath:', jsPath)
console.log('cmd:', cmd)
console.log('rest:', rest)

console.log(handleCmd(cmd))

function handleCmd (cmd) {
//with switch you can test cases
  switch (cmd){
    case 'init':
      return init()
    case 'check':
      return check(rest)
    case 'rm':
      return rm(rest)
    case 'add':
      return add(rest)
    case 'ls':
      return ls(rest)
    case 'help':
    return 'help is coming soon'
    default:
      return 'help is coming soon'
  }
}
//add
