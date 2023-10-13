//problem-1. how can we swap values?
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


//problem-2. how to copy thing from clipboard
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

//problem-3. destructuring aliases
/*const language ={
    name: "JavaScript",
    founded: 1995,
    founder: "Brendan Eich"
};
const{name: languageName, founder: createrName} = language;
console.log(languageName, createrName);*/

//4. get value as data type
/*const element = document.querySelector('#number').valueAsNumber;
console.log(element);*/

//5. remove duplicate from array
/*const array = [1, 2, 3, 4, 2, 3, 5, 6, 5, 2];
console.log([...new Set(array)]);*/

//6. compare two arrays by value
const hasSameElements = (a, b) => {
    return a.length === b.length && a.every((v, i) =>
    v === b[i])
};
console.log(hasSameElements([1, 2, 6], [1, 2, 6]));
console.log(hasSameElements([1, 6, 5], [1, 2, 6]));

//7. shuffling an array
//8. using comma operator