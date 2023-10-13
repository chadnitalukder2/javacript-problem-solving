//problem-1 report if it is a leap year
/*const isLeapYear = (year) => year % 4 === 0;
console.log(isLeapYear(2015));
console.log(isLeapYear(2016));*/

//problem-2 compare teo objects to determine (additional properties)
/*const objA = { a: 1, b: 2, c: 1};
const objB = { a: 1, b: 1, c: 1};
const objC = { a: 1, b: 2, c: 1};

const objectsEqual =(a, b) => {
    Object.keys(a).every(key => b[key]);
    // console.log(Object.keys(a));
    // console.log(Object.keys(b));
};
console.log(objectsEqual(objA, objB));*/

//problem-3 program to convert a comma-separated values (CSV) string to a 2D array. A new line indicates a new row in the array.
/*const parseCSV = (csvString) => 
    csvString.split('\n').map(row => row.split(','));
const str = `abc, def, ghi
  jkl, mno, pqr
  stu, vwx, yza`;
console.log(parseCSV(str));*/

//problem-4  program to generate a random hexadecimal color code.
/*const getRandomHexNumber = () =>
    Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () => '#' + Array.from( {length: 6}).map(getRandomHexNumber).join('');
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());*/

//problem-5
/* function that returns true if the provided predicate
 function returns true for all elements in a collection, false otherwise*/

/* const isEveryElem = (arr, fn) => {
    for (let i = 0; i < arr.length; i++){
        if (!fn(arr[i])){
            return false;
        }
    }
    return true
 }
 console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 0));
 console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 3));

// console.log(isEveryElem[1, 2, 3, 4, 5].every(x => x > 0));
 //console.log( isEveryElem[1, 2, 3, 4, 5].every(x => x > 3));
*/


//part-5-----------------------------------------------------------------------------------------------------

//problrm-1 returns a passed string with letters in alphabetical order
/*const alphabeticalOrder = (str) =>
    str.split('').sort((a,b) => a > b ? 1 : -1)
    .join('');
console.log(alphabeticalOrder('webmaster'));
console.log(alphabeticalOrder('javascript'));*/

//problem-2 that accepts a string as a parameter and counts the number of vowels within the string
/*const countLetters = (
    str, letters = ['a', 'e', 'i', 'o', 'u']) =>
    str
        .split('')
        .filter(s => letters.indexOf(s) > -1)
        .length;
console.log(countLetters('abcde')); 
console.log(countLetters('abcde', ['b', 'u']));
*/

//problem-3 funtion to convert an amount to coins
/*const countCoin = ( money, coins = [25, 10, 5, 2, 1]) => {

const totalCoins = [];
for(let i = 0; i < coins.length; i++){
    const thisCoinNum =  Math.floor(money / coins[i]);
    for(let y = 0; y < thisCoinNum; y++) {
        totalCoins.push(coins[i]);
    }
    money -= coins[i] * thisCoinNum;
}
return totalCoins;
}
console.log(countCoin(54));*/

//problem-4 extract unique characters from a string
/*const getUniqueChars = (str) =>
str.split('').filter(
    (item, index, arr) => 
    arr.slice(index + 1).indexOf(item) === -1
);*/
// const getUniqueChars = (str) =>
//     [... new Set(str.split(''))]
// console.log(getUniqueChars('aaaabbbbccccdddd'));


//problem-5 find the first not repeated character
/*const getNinRepeatedChars = (str) =>
str.split('')
.filter((item, index, arr) =>
arr.filter(arrItem => arrItem === item).length === 1
);
console.log(getNinRepeatedChars('aabbccddffggejjkkffjj'));*/




