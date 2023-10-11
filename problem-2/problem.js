//1. how can we swap values?
//let array =[1, 2, 3, 4, 5];
/*let temp = array[0];
array[0] = array[4];
array[4] = temp;
console.log(array);*/

//destructuring
/*[array[0], array[4]] = [array[4], array[0]];
console.log(array);*/

/*let a = 1;
let b = 2;
// [a,b] = [b,a]
// console.log(a,b);

//math
b = a + (a = b) - b;
console.log(a, b);*/


//2. how to copy thing from clipboard
/*function copyToClipBoard(str){
    const element = document.createElement
    ("textarea");
    element.value = str;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
}
function handelClick(){
    let text = document.querySelector("#text");
    copyToClipBoard(text.innerHTML)
}*/

//3. destructuring aliases
//4. get value as data type
//5. remove duplicate from array
//6. compare two arrays by value
//7. shuffling an array
//8. using comma operator