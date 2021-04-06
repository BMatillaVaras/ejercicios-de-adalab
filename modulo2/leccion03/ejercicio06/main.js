let avocados;
const avocadoPrice = 1.5;
const money = 6;

money >= avocadoPrice
  ? console.log(`${(avocados = money / avocadoPrice)}`)
  : console.log(`${(avocados = 0)}`);
