/**
 * 
 * class란? 객체를 생성하기 위한 설계도
 * 
 * -생성자 함수와의 차이점
 * -객체지향언어의 클래스와는 다름을 이해
 * -자바스크립트에서 실행시 내부적으로 프로토타입 기반의 형식으로 실행됨.
 * -new 키워드를 사용하여 객체를 생성
 * 
 * 형신
 * class 클래스명 {
 *      필드명(field)
 *      생성자(constructor)
 *      메소드(method)
 * }
 */

class Animal{
    //field-변수,상수 => static으로 정의,클래스 변수,상수로 부름.
    //static으로 정의된 변수, 상수는 객체 생성 전 별도의 메모리에 저장됨.
    static MAX_SIZE = 10;



    //constructor-객체 생성시 호출(new)
    constructor(name,emoji){
        this.name=name;
        this.emoji=emoji;

    }

    //method- 기능, 동작을 함수로 정의

    display=()=>{
        console.log(this.name)
        console.log(this.emoji)
    }
}

console.log(Animal.MAX_SIZE)//static으로 선언할 시 클래스 선언으로 출력가능.

let dog=new Animal('happy','🐕')

dog.display()
console.log(dog)

