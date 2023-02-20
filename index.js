const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const alert = async (message) => {
  const rl = readline.createInterface({ input, output });

  if (message) {
    await rl.question(`${message} [Enter]`);
  } else {
    await rl.question('[Enter]');
  }

  rl.close();
  return;
};

const confirm = async (message) => {
  const rl = readline.createInterface({ input, output });

  const answer = await rl.question(`${message} [y/N]`);

  rl.close();

  return answer.toLowerCase() === 'y';
};

const prompt = async (message, defaultValue) => {
  const rl = readline.createInterface({ input, output });
  let question = '';

  if (message) {
    question = `${message} `;
  }

  if (defaultValue) {
    question += `[${defaultValue}] `;
  }

  const answer = await rl.question(question);

  rl.close();

  if (answer === '' && defaultValue) {
    return defaultValue;
  } else {
    return answer;
  }
};

(async () => {
  await alert();
  await alert('Please confirm');

  const value1 = await confirm('Are you sure?');
  console.log(value1);

  const value2 = await prompt('What is your name?');
  console.log(value2);

  const value3 = await prompt('What is your age?', 18);
  console.log(value3);

  const value4 = await prompt();
  console.log(value4);
})();
