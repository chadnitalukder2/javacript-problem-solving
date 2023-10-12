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
const alphabeticalOrder = (str) =>
    str.split('').sort((a,b) => a > b ? 1 : -1)
    .join('');
console.log(alphabeticalOrder('webmaster'));
console.log(alphabeticalOrder('javascript'));










