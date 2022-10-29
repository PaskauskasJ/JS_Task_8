/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
  this.sum = function () {
    return this.number1 + this.number2;
  };
  this.subtraction = function (number1, number2) {
    return this.number1 - this.number2;
  };
  this.multiplication = function (number1, number2) {
    return this.number1 * this.number2;
  };
  this.division = function (number1, number2) {
    return this.number1 / this.number2;
  };
}

let numbers1 = new Calculator(100, 20);
let numbers2 = new Calculator(500, 25);

console.log(numbers1.sum());
console.log(numbers1.subtraction());
console.log(numbers1.multiplication());
console.log(numbers1.division());

console.log(numbers2.sum());
console.log(numbers2.subtraction());
console.log(numbers2.multiplication());
console.log(numbers2.division());
