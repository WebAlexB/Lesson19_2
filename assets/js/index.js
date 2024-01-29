const arrNum = ['   123456  ',' -0123456  ','     -12345  ','   -023456',' -000016   ',' -000000123456  ',' - 000000123456  ',' +000123456  '];

const regularNums = arrNum.map(arr => {
    const numericValue = parseFloat(arr.replace(/^\s*([-+]?[0-9]+)\s*$/, '$1'));
    const isValid = numericValue !== 0 && numericValue % 123456 === 0;
    return isValid ? 'так' : 'ні';
});

console.log(regularNums);
