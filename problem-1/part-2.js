//problem-1 
/* creat a new string from a given string taking the first 3 characters
and the last 3 charqcters of a string and adding them together. the string 
length must be 3 or more, if not, the orginal string is returened */

/*const makeNewString = (str) =>
str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
console.log(makeNewString('abc'));
console.log(makeNewString('abcdef'));
console.log(makeNewString('abc123abc123'));
console.log(makeNewString('ab'));*/

//problem-2
/*extract the first half of a string of even length*/

/*const firstHalf = (str) => str.slice(0, str.length / 2);
console.log(firstHalf('temp'));
console.log(firstHalf('temple'));
console.log(firstHalf('temples'));*/


//problem-3 concatenate two strings except their first character
/*const concatenate = (str1, str2) => 
    str1.slice(1) + str2.slice(1);

    console.log(concatenate('abc', 'def'));
    console.log(concatenate('junior', 'developer'));*/


//problem-4 find out which one is nearest to 100
/*const closesetTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;
console.log(closesetTo100(99, 1));
console.log(closesetTo100(49, 51));
console.log(closesetTo100(50, 50));*/


//problem-5 check a given string contains 2 to 4 occurrences of a specified character
/*const countChars = (str, char) =>
str.split('').filter(ch => ch === char).length;

const contains2To4 = (str, char) =>
countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4('ooh!', 'o'));
console.log(contains2To4('oh!', 'o'));
console.log(contains2To4('oooh!', 'o'));
console.log(contains2To4('ooooh!', 'o'));
console.log(contains2To4('oooooh!', 'o'));*/

