/**
 * 
 * deep copy(복사) -structuredClone, JSON.parse(JSON.strinify())
 * 
 * 객체의 깊은 복사는 복사본의 속성이 복사본이 만들어진 원본객체와
 * 같은 참조(메모리 내의 같은 값을 기리킴)을 공유하지 않는 복사이다
 * 따라서 원본이나 복사본을 변경할 때, 다른 객체가 변경되지 않는 것을 보장할 수 있습니다.
 */

let fruits = [//deep카피는 완저히 독립적으로
    {name:'apple',emoji:'🌭'},
    {name:'orange',emoji:'🍊'},
    {name:'melon',emoji:'🍈'},
];

let fruitsCopy = structuredClone(fruits);
console.log(fruits, typeof fruits)
console.log(fruitsCopy, typeof fruitsCopy)

fruits[0].emoji='a'
fruitsCopy[1].name='lemon'

console.log(fruits, typeof fruits)
console.log(fruitsCopy, typeof fruitsCopy)

let fruitsCopy2=JSON.parse(JSON.stringify(fruits));
console.log('-------------------------------------------------')

console.log(fruits,typeof fruits)
console.log(fruitsCopy2, typeof fruitsCopy2)

fruitsCopy2[1].name='오렌지';
console.log(fruits,typeof fruits)
console.log(fruitsCopy2, typeof fruitsCopy2)
