// var lang = prompt('Выберите Язык'); /

// if (lang === 'ru') {
//   var weekArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; // тут походу я понял в чем отличие var от let =)
// } else if (lang === 'en') {
//   var weekArr = ['md', 'th', 'wd', 'td', 'fr', 'st', 'sd']
// }
// alert(weekArr);

const lang = prompt('Выберите Язык');


//-------- Через if ---------//
// let weekArr;
// if (lang === 'ru') {
//   weekArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// } else if (lang === 'en') {
//   weekArr = ['md', 'th', 'wd', 'td', 'fr', 'st', 'sd'];
// }
// alert(weekArr);

//-------Через switch ------//
// let weekArr;
// switch (lang) {
//   case 'ru':
//     weekArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//     break;
//   case 'en':
//     weekArr = ['md', 'th', 'wd', 'td', 'fr', 'st', 'sd'];
//     break;
// }

// alert(weekArr);
//---------Многомерный массив------//
let weekArrRu = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let weekArrEn = ['md', 'th', 'wd', 'td', 'fr', 'st', 'sd'];
let langAnswer = lang === 'ru' ? 0 : 1;
let arr = [
  ['ru', weekArrRu],
  ['eng', weekArrEn]
];

alert(arr[langAnswer][1]);

//----2.2-------//
let namePerson = prompt('Укажите имя:');
let PersonResult = namePerson === 'Артем' ? console.log('Директор') :
                  namePerson === 'Максим' ? console.log('преподаватель') :
                  console.log('Студент');
                    
