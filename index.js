const {getAllFilePathsWithExtension, readFile} = require('./fileSystem');
const {readLine} = require('./console');
const todoRe = /\/\/ TODO (.*)\n?/;
console.log(todoRe)

const files = getFiles();

console.log('Please, write your command!');
readLine(processCommand);

function getFiles() {
    const filePaths = getAllFilePathsWithExtension(process.cwd(), 'js');
    return filePaths.map(path => readFile(path));
}

function getTodos() {
    return files.map(file => file.match(todoRe)[1])
}

function processCommand(command) {
    switch (command) {
        case 'exit':
            process.exit(0);
            break;
        case 'show':
            let todos = getTodos();
            console.log(todos);
            break;
        default:
            console.log('wrong command');
            break;
    }
}

// TODO you can do it!
