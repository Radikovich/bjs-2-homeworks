"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return arr;
  } else if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(Math.round(x1), Math.round(x2));
    return arr;
  } else {
    const x1 = -b / (2 * a);
    arr.push(Math.round(x1));
    return arr;
  }
}

"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = 0;
  let p = (parseInt(percent) / 12) / 10;

  if (isNaN(p) || p < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(parseInt(contribution)) || parseInt(contribution) < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(parseInt(amount)) || parseInt(amount) < 0) {
      return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    let today = new Date();
    if (today.getFullYear() > date.getFullYear()) {
      return `Параметр "Cрок ипотеки" содержит неправильное значение "${date}"`;
    } else {
      let s = amount - contribution;						 
      let n = date.getMonth() - today.getMonth() + (12 * (date.getFullYear() - today.getFullYear()));
      let monthlyFee = s * (p + (p / (((1 + p)^n) - 1)));
      let totalAmount = (monthlyFee * n).toFixed(2);
      console.log(totalAmount);
      return totalAmount;
    }
  }
}
