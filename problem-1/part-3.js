//problem-1 find the number of even digits in an of integers
/*const countEventNumber = (arr) => 
arr.filter(num => num % 2 === 0).length;
console.log(countEventNumber([1, 2, 3, 4, 5, 6]));
console.log(countEventNumber([2, 2, 6, 9, 5, 6]));
console.log(countEventNumber([1, 8, 3, 9, 4, 6]));*/

//problem-2 find the number of even values up to a given number
/*const countEventNumber = (arr) => 
arr.filter(num => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for(let i = 1; i <= num; i++){
        returnArray.push(i);
    }
    return returnArray;
};
console.log(countEventNumber(createArrayOfNumbers(6)));
console.log(countEventNumber(createArrayOfNumbers(10)));*/

//problem-3  check whether a given array of integers is assending order
/*const isAscending = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i+1] < arr[i])
        return false;
    }
    return true;
}
console.log(isAscending([1, 2, 3, 4, 5, 6]));
console.log(isAscending([1, 7, 3, 9, 8, 6]));
console.log(isAscending([1, 2, 3, 7, 8, 9]));*/

//problem-4 get the largest even number from an array of integers
/*const largestEven = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));
console.log(largestEven([1, 2, 3, 4, 5, 6]));
console.log(largestEven([66, 2, 86, 4, 5, 79]));*/

//problem-5 replace the first digit in a string (should contains at least digit) with $ character.
/*const replaceFirstDigit = (str) => str.replace(/[0-9]/g, "$");
console.log(replaceFirstDigit("Abhnjn1jk"));
console.log(replaceFirstDigit("123bhnjn1jk"));
console.log(replaceFirstDigit("Abhnjn1j458"));*/
