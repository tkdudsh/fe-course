/**
 * 단항 연산자 : ++ -- ! !!
 */
let a =10;
console.log(++a);
console.log(a++); //후위는 그 뒤의 진행되는 a에 ++되는 것임.(출력값은 11이지만, 메모리값은 12임)
console.log(a);

let b=10;

console.log(b--)//출력 10 메모리 9
console.log(--b)//출력 8 메모리 8
console.log(b)// 8
console.log(++b)//9
console.log(b++)//출력 9 메모리 10
console.log(b)//10
console.log();

let flag=true;
console.log(flag);
console.log(!flag);
console.log(!!flag);