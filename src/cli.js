import readlineSync from 'readline-sync';

const addName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  return console.log(`Hello, ${name}!`);
};

// eslint-disable-next-line import/prefer-default-export
export { addName };
