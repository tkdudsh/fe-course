/**
 * 
 * static 상수, 메서드 정의 - 클래스 상수, 클래스 메소드
 * 
 * 호출시 : 클래스명.상수 , 클래스명.메서드
 */



class Fruit{

    static MAX_SIZE=10;
    name;
    color;
    emoji;


    constructor(name,color,emoji){
        this.name=name;
        this.color=color;
        this.emoji=emoji;
    }

    static getName=()=>{//메모리 공간이 달라서 같은 명명을하여도 오류 안남
        
        return this.name;
    }
    getName=()=>{
        return this.name;
    }
    static create=(name,color,emoji)=>{//static이 붙어있으니까 class이름으로 호출
        return new Fruit(name,color,emoji)
    }
}

let apple= new Fruit('apple','red','🍎')
console.log(apple)
console.log(apple.getName())

let lemon=Fruit.create('lemon','yellow','🍋')

console.log(lemon)
