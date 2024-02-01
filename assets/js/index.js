const arrNum = ['   123456  ',' -0123456  ','     -12345  ','   -023456',' -000016   ',' -000000123456  ',' - 000000123456  ',' +000123456  '];
const regex = /^\s*[-+]?0*([1-9]\d{5}|0{6})\s*$/;
const result = arrNum.map(str => regex.test(str) ? 'так' : 'ні');

console.log(result);
