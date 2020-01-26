let number = 266219;

let array = number.toString()
  .split('')
  .map(function (item, index) {
    return parseInt(item);
  });

console.log(array);

let newArr = array.reduce((a, b) => a*b);

console.log(newArr);

let powArr = newArr ** 3;

console.log(powArr);

alert(powArr.toString().substr(0, 2)); // преобразование в строку




