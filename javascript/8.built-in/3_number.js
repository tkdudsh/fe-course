/**
 * Number 클래스
 * - valueOf()
 * - toString()...
 */

let a= 100;
let b= 1234567;
let aa = new Number(100);
let bb = new Number(132456);

console.log(a,typeof a)
console.log(b, typeof b)
console.log(aa, typeof aa)
console.log(bb,typeof bb)

console.log(a.toLocaleString())
console.log(b.toLocaleString())
console.log(aa.toLocaleString())
console.log(bb.toLocaleString())

console.log()
let number='123113412'
let locNumber=parseInt(number).toLocaleString();

console.log(locNumber)

let fnumber='51231.93412'
let flocNumber=parseFloat(fnumber).toLocaleString();
let FflocNumber=parseFloat(fnumber).toFixed();
let FflocNumber2=parseFloat(fnumber).toFixed(2);

console.log(flocNumber)
console.log(FflocNumber)
console.log(FflocNumber2)