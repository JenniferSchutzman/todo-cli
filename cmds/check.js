// const store = require('../lib/store')
// const {map, curry} = require('ramda')
// const ls = require('./ls')
//
//
// module.exports = function (itemToCheckId) {
//    store.get()
//
//   const newTodos = map(
//     todo =>
//     todo.id === Number(itemToCheckId)
//     ? {...todo, completed: !todo.completed} : todos, todos)
//
// store.set(newTodos)
//   return ls()
// }

const store = require('../lib/store')
const { map, curry } = require('ramda')
const ls = require('./ls')

module.exports = function(itemToCheckId) {
  store.set(
    map(
      todo =>
        todo.id === Number(itemToCheckId)
          ? { ...todo, completed: !todo.completed }
          : todo,
      store.get()
    )
  )

  return ls()
}
