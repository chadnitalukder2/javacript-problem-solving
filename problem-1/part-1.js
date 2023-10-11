// problem-1 check two number and return true one of the number is 100 or sum is 100 
/*const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;
console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));

console.log(isEqualTo100(60,10));
console.log(isEqualTo100(70,50));

console.log(isEqualTo100(60,40));
console.log(isEqualTo100(50,50));*/

//problem-2 get the extension of a filename
/*const getFilename = (str) => str.slice(str.lastIndexOf ('.'));

console.log(getFilename("index.html"));
console.log(getFilename("webpack.config.js"));*/

//problem-3 replace every character in a given string with the character following it in the alphabet
/*const moveCharasForward = (str) =>
 str
 .split('')
 .map(char => String.fromCharCode(char.charCodeAt
 (0) + 1))
 .join('');
 console.log(moveCharasForward('abcde'));*/

//problem-4  get current date
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

/*const formaDate = (date = new Date()) =>{
    const days = date. getDate();
    const months = date.getMonth();
    const years = date.getFullYear();
    return `${days} / ${months} / ${years}`
}
console.log(formaDate());*/

/* create a new string adding "New!" in front of a given string if
the given string beging with "New!" already then return the original string  */
 
/*const addNew = (str) =>'New! ${str}';
console.log(addNew('New! Offers'));*/






