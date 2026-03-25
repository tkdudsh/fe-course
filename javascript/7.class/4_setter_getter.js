/**
 * 
 * 사원 클래스 정의
 * - 사원번호, 사원명, 나이를 입력받아 객체 생성
 */

class Employee{
    #empno
    #name
    #age

    constructor(empno,name,age){
        this.#empno=empno
        this.#name=name;
        this.#age=age;
    }

    getEmpno=()=>{ return this.#empno}
    getName=()=>{ return this.#name}
    getAge=()=>{ return this.#age}

    setEmpno=(empno)=>{ this.#empno=empno}
    setName=(name)=>{ this.#name=name}
    setAge=(age)=>{ this.#age=age}

    display=()=>{
        console.log(this.#empno,this.#name,this.#age)
    }
}

let hong= new Employee()

hong.setEmpno('1234')
hong.setName('홍길동')
hong.setAge(30)
hong.display()

let smith = new Employee('1321','스미스', 31)

smith.display();

let empList=[];

// empList[0] =hong;
// empList[1] = smith;
empList.push('hong');
empList.push('smith');

console.log(empList);

let empListObj={}
empListObj['hong']=hong;
empListObj['smith']=smith;
console.log(empListObj)