/*check two number and return true one of the number is 100 or sum is 100 */
const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;
console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));

console.log(isEqualTo100(60,10));
console.log(isEqualTo100(70,50));

console.log(isEqualTo100(60,40));
console.log(isEqualTo100(50,50));







