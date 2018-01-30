# schutz

A command line interface used to track to do items in a software project. Use the cli to create todo items, list todo items, mark a todo item as complete, and remove a todo item.  

**Installation

```
npm i schutz -g
```

##Usage

```
mkdir my-project
cd my-project
todo init
todo add read a book
todo add run 5 miles
todo ls
```


## Commands

### Initialize todo List

Creates **todos.json** file within the current directory.  Use when you wish to start anew list.  If **todos.json** already exists, 'todo init' will not do anything

```
todo init
```

###Add a todo item

```
todo add <some text describing the todo time>
```

**example**

```
todo add feed
```

###List Todos

List all todos in your todo list.
```
todo ls
```

### Mark todo complete

Toggle a todo item as complete

```
todo check <TODO ID GOES HERE>
```

**Example**
Marks the 2nd schutz item as complete or not complete if it is complete.
```
todo check 2
```

### Remove todo

deletes a specific todo item by providing the todo id

 ```
todo rm <TODO ID GOES HERE>
 ```

 **Example**

 ```
todo rm 1
 ```

 ## Future Features

 Show percent of todos completed (with reduce)
 Assign a todo to a person
 Record the data and time completed. Export the todo items to github as issues.
 Export to trello as a list
