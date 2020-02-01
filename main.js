'use strict';

let week = ['ВС','ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

let toDay = new Date();

for(let i = 0; i < week.length; i++) {
    if (i === toDay.getDay() && i === 0 || i === toDay.getDay() && i === 6) {
      document.write('<p><b><i>' + week[i] + '</i></b></p>');
    }else if (i === 0 || i === 6) {
      document.write('<p><i>' + week[i] + '</i></p>');
    }else if (i === toDay.getDay()) {
      document.write('<p><b>' + week[i] + '</b></p>');
    }else{
      document.write('<p>' + week[i] + '</p>');
    }
}

console.log(toDay.getDay());
