

let name='tkdudsh'
let age= 30
let address='서울시 강남구'

let person= {

    // name,age,address
    name:name,
    age:age,
    address:address
}

console.log(person)

function createObject(x,y){
    return {x,y}
}

const createObjectArrow=(x,y)=>{
    return {x,y}
}

let number1=createObject(1,2)
let number2=createObjectArrow(3,4)
console.log(number1)
console.log(number2)
console.log(person)

//사원이름,나이,주소,소속부서 정보를 입력받아, 사원객체를 반환하는 함수 정의
//createEmployee, arrow function 사용

const createEmplyee=(name,age,address,work)=>{

    return {name,age,address,work}
}

let em=createEmplyee('사영노',27,'서울시 양천구', '백수')
console.log(em)

let empList=[
    ['홍길동',27,'서울시 양천구', 'ㅁㅁ'],
    ['이순신',27,'서울시 양천구', 'ㄴㄴ'],
    ['존',27,'서울시 양천구', 'ㅇㅇ'],
]
console.log(empList);

console.log("---------------------")

for(let i=0;i<empList.length;i++){
    // let rows='';
    let object={};
    for(let j=0;j<empList[i].length;j++){
        if(j==0){

            object.name =empList[i][j]
            
        }
        else if(j==1){
            object.age =empList[i][j]
        }
        else if(j==2){
            object.address =empList[i][j]
        }
        else if(j==3){
            object.work =empList[i][j]
        }
        
    }
}
for(let i=0;i<empList.length;i++){
    // let rows='';
    let object=null;
    let name=undefined;
    let age=undefined;
    let address=undefined;
    let work=undefined;
    for(let j=0;j<empList[i].length;j++){
        if(j==0){

            name =empList[i][j]
        }
        else if(j==1){
            age =empList[i][j]
        }
        else if(j==2){
            address =empList[i][j]
        }
        else if(j==3){
            work =empList[i][j]
        }
        
    }
    object=createEmplyee(name,age,address,work)
    console.log(object)
}