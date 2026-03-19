/**
 * 참조 데이터 타입: 객체(object)
 * -배열(array):[data,data.....]
 * -객체(object) : {'프로퍼티':data,'프로퍼티':data.............}
 */

let apple = null;
apple={
    'name':'사영노',
    'color':'blue',
    'img':'😁',
    'age':23,  
}
console.log(typeof apple,apple)
console.log(apple.name)
console.log(apple.color)
console.log(apple.img)
console.log(apple.age)

// orange 객체를 생성 후 타입, 객체, name, color, price, emoji를 콘솔 출력

let orange =null
orange ={
    'name':'사영노',
    'color':'blue',
    'price':5000,
    'emoji':'🍊'
}
console.log(typeof orange)
console.log(orange)
console.log(orange.name)
console.log(orange.color)
console.log(orange.price)
console.log(orange.emoji)


let fruitList =null;

fruitList=['apple','🍎',100,200,true]//자바스크립트엔 모든 데이터가 같은 배열에 존재 가능(하지만 비추천)

console.log(fruitList[1])
console.log(fruitList[2])
console.log(fruitList[3])
console.log(fruitList[4])

//객체타입을 요소로 하는 배열 생성.

let fruitListObj=null;
fruitListObj=[apple,orange]//객체로써 넣은 거임.
console.log(apple,orange)
console.log(fruitListObj[0].name)//apple의 네임을 꺼내옴
console.log(fruitListObj[1].price)//orange의 price를 꺼내옴