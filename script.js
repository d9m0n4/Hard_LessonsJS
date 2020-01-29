'usestrict';

let arr =['123', '43', '51', '21', '146', '91', '211'];

for (let i = 0; i < arr.length; i++){
  if (arr[i][0] === '2' || arr[i][0] === '4') {
    console.log(arr[i]);
  }

}


for (let i = 0; i <= 100; i++) {
  let count = 0;
  for (let j = 2; j <= i; j++) {
    if (i % j) { 
      continue; 
    }
    count += 1;
  }
  if (count === 1) {
    console.log(i + ' - ' + ' Делитель этого числа: 1 и ' + i);
    
  }
}

