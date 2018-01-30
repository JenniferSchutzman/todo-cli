const store = require('../lib/store')
const { map, join, compose, filter, propEq, reduce, add, } = require('ramda')
///the join above will take the entries after mapping, join them and then read them out 1 line after another with join('\n')

// function list (todos){
//
//   return map(<MAPPER GOES HERE> ,todos)
// }
module.exports = render

const list = compose (
  join('\n'),
  map(li)
)
const remaining = compose(
  reduce(add(1),0),
  filter(propEq('completed', false))
)
function li(todo){
  return `[${todo.completed ? 'x' : ' '}] - ${todo.id} ${todo.text}`
}
//this function wil create the styling of the text creating a format
function render(){
  const todos = store.get()
  return `
  My To Do list
  =================================================
  ${list(todos)}
  =================================================
  ${remaining(todos)} remaining
  `
}
