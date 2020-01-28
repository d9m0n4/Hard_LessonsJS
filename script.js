'usestrict';

function checkStr(data) {
  if (typeof data === 'string'){
    let str = data.trim();
    if (str.length > 30){
      str = str.substr(0, 30) + '...';
    }
    return str;
  }else {
    alert('Это не строка!!!');
    return;
  }
}
let questStr = prompt('Введите данные');
console.log(checkStr(questStr));