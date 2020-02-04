
function declens(num, words) {
  let result;
  let count = num % 100;
  if (count >= 5 && count <= 20) {
    result = words[2];
  } else {
    count = count % 10;
    if (count === 1) {
      result = words[0];
    } else if (count >= 2 && count <= 4) {
      result = words[1];
    } else {
      result = words[2];
    }
  }
  return result;
}


let fild = document.getElementById('time');

function cuurentTime() {
  let date = new Date();
  let options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour12: false,

  };
  let a = date.toLocaleString('ru', options);
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  return ('Сегодня ' + a + ' ' + year + ' ' + declens(year,
    ['год', 'года', 'года']) + ' ' + hours + ' ' + declens(hours,
    ['час', 'часа', 'часов']) + ' ' + minutes + ' ' + declens(minutes,
    ['минута', 'минуты', 'минут']) + ' ' + seconds + ' ' + declens(seconds,
    ['секунда', 'секунды', 'секунд']));
}
cuurentTime();
setInterval( function(){
  fild.innerHTML = cuurentTime()
}, 1000);


let sFild = document.getElementById('time-2');

function shortDate() {
  let date = new Date();

  let sHours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let sMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let sSeconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  let sDay = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let sMonth = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    return (sDay + '.' + sMonth + '.' + date.getFullYear() + '-' + sHours + ':' + sMinutes + ':' + sSeconds);
}
shortDate();
setInterval(function() {
  sFild.innerHTML = shortDate();
}, 1000);




