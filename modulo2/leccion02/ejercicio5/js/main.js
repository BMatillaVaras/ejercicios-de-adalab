let years = 31;
const daysYear = 365;
const hoursDay = 24;
let totalHoursLiving = years * daysYear * hoursDay;
console.log(totalHoursLiving);
years = 23;
totalHoursLiving = years * daysYear * hoursDay; //Por qué hay que volver a especificar en qué consiste la variable?
console.log(totalHoursLiving); //Por qué no está cogiendo el nuevo valor de la variable?
