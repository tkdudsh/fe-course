/**
 * 클래스의 필드에 선언되는 변수,상수에 대한 접근 제한자
 * 
 * 변수, 상수 앞에 #을붙이면 private으로 설정, 클래스 내부접근 o , 외부 접근 x
 * private을 수정하고싶다면, 
 * 
 *#이 붙지 않으면 public 내부 외부접근 가능
 */

 class Person{
    #empno;
    name;
    age;

    constructor(empno,name,age){
        this.#empno=empno
        this.name=name;
        this.age=age;
    }

    display=()=>{
        console.log(this.#empno,this.name,this.age)
    }
    setEmpNo=(empno)=>{
        this.#empno=empno;
    }

    getEmpNo=()=>{
        return this.#empno
    }
 }

 let hong=new Person('1234','홍길동',30)
hong.display()

hong.empno='1211'
hong.display();
hong.setEmpNo("3244")
console.log(hong.getEmpNo())
hong.display();