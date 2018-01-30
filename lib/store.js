const fs = require('fs')

//in {} we are pulling teh get and set data to set it up as value pairs

module.exports = { get: get, set: set}

//get is going to grab the contents of a file named todos.json, parse it into
//a json object and return it frmo the function
//is gonna live in the current directoy of where our app is runnning
function get (){
  return JSON.parse(fs.readFileSync('./todos.json', 'utf-8'))
}

//set is going to take the data (json object) and transform it into text and then
//write the text/json objectto the file system as the todos.json
function set (data){
  fs.writeFileSync('./todos.json', JSON.stringify(data))
}
