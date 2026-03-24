/**
 * 생성자 함수를 통한 객체 생성
 * 
 * -객체의 틀을 이용하여 다수의 객체 생성하는 함수
 */

// const Fruit={

//     name:'과사',
//     emoji:'🍎'
// }

//객체 틀 정의 => 생성자 함수로 생성된

function Fruit(name,color,emoji){
    // let name=undefined;
    this.name=name;
    this.color=color;
    this.emoji=emoji;

    this.display=()=>{  
        console.log(this.name,this.color,this.emoji)
    }
}

let apple = new Fruit('사과','빨간색','🍎');
let lemon = new Fruit('레몬','노란색','🍎');
let mango = new Fruit('망고','주황색','🍎');

apple.display()
lemon.display()
mango.display()



function Score(name,kor,eng,math){

    this.name=name;
    this.kor=kor;
    this.eng=eng;
    this.math=math;

    this.display=()=>{
        console.log(this.name,this.kor,this.eng,this.math)
    }

    this.sum=()=>{
        return this.kor+this.eng+this.math
    }

    this.average=()=>{
        return parseInt(this.sum()/3);
    }
}

function createScoreList(l1,l2,l3,l4,l5){
    return {l1,l2,l3,l4,l5}

}


let hong =new Score('홍길동',10,30,40)
let smith =new Score('스미스',10,30,40)
let lee =new Score('이순신',10,30,40)
let kim =new Score('김유신',10,30,40)
let james =new Score('제임스',10,30,40)



let scoreList = createScoreList(hong,smith,lee,kim,james)


hong.display();
smith.display();
lee.display();
kim.display();
james.display();
console.log(scoreList)

console.log(hong.sum())
console.log(hong.average())
