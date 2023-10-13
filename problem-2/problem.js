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
/*const hasSameElements = (a, b) => {
    return a.length === b.length && a.every((v, i) =>
    v === b[i])
};
console.log(hasSameElements([1, 2, 6], [1, 2, 6]));
console.log(hasSameElements([1, 6, 5], [1, 2, 6]));*/

//7. shuffling an array
/*const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.sort(() => Math.random() - 0.5));*/

//8. using comma operator
/*let x = 1;
x =(x++, x);
console.log(x);

let y =(2,3)
console.log(y);*/

/*let a = [[1, 2, 3, 4 ],[3, 4, 5], [5, 6], [7]];
for ( let i = 0, j = 3; i <= 3; i++, j--){
    console.log("a [" + i + "][" + j + "] = " + a[i][j]);
}*/



//problem -1 what will be the output of the below code?
/*console.log([] + []); // blank ""
console.log({} + []); //[object object] ""
 true + 5 = 6*/

//pronblem-2 what will be the output of bolow code?
/*function myFunction() {
    return 'Bangladesh'
}
const string = myFunction `hello`;
console.log(string);*/

//problem-3 how to make all text contents of a website editables?
//contenteditable

//problem-4  what will be the output ofbelow code?
/*function b(){
    console.log(`the length is ${this.length}`);
}
let a ={
    length: 10,
    method: function(b){
        arguments[0]();
    }
};
a.method(b, 5);*/

//problem-5  what will be the output ofbelow code?
/*const a = 'constructor';
console.log(a[a](05));*/

//problem-6 what will be output?
//console.log(0.1 + 0.2);

//problem-7 
//console.log(("Bangladesh").__proto__.proto__.proto.__);

//problem-8 make a function that sorts its argument without using loops

const myFunction = function(){
    return  [].slice.call(arguments).sort();
};
console.log(myFunction(2, 5, 1, 4, 3));




