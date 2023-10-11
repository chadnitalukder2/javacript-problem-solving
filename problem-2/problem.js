//1. how can we swap values?
let array =[1, 2, 3, 4, 5];
/*let temp = array[0];
array[0] = array[4];
array[4] = temp;
console.log(array);*/
//destructuring
[array[0], array[4]] = [array[4], array[0]];
console.log(array);


//2. how to copy thing from clipboard
//3. destructuring aliases
//4. get value as data type
//5. remove duplicate from array
//6. compare two arrays by value
//7. shuffling an array
//8. using comma operator