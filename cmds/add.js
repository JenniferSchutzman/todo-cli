
const store = require('../lib/store')
//pull the whole lib with R below
//const R = require('ramda')

const {reduce, trim } = require('ramda')
const ls = require('./ls')

//schutz add This is some text
module.exports = function (arrText){
  console.log('hurray Im inside the add function')
  //text -- This is some text
  //todos is the array of todos from the json file that we get() from the store.
  const todos = store.get()
  const newTodo = createTodo(arrText, todos.length)
  const newTodos = append(newTodo, todos)
  store.set(newTodos)

  return ls()
//we will need to return the new list of todos with a function named ls ()

//will add the todo item into the array within memory
  function append (value, arr){
    return [...arr, value] //this is the spread operator related to the rest operator
  }

  function join (sep, arrWords){
    return reduce(function (acc,value) {
      return trim(`${acc}${sep}${value}`)
    }, '', arrWords)
  }

  function createTodo (arrtText, id) {
      return {text: join(' ', arrText), completed: false, id: id + 1}
  }

}
