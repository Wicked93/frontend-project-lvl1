import readlineSync from 'readline-sync';

const addName = () => {
const name = readlineSync.question('May I have your name?: ');
return console.log('Hello, ' + name + '!')
}

export {addName}