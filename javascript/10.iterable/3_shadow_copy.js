/**
 * 성적관리 프로그램
 */

function createList(){
    return [];
}

function createMember(scoreList,name,kor,eng,math){
    scoreList.push({name,kor,eng,math})
}

function searchName(scoreList,name){
    return scoreList.find(a=>a.name ===name)
}

function searchScore(scoreList,sub,score){
    return scoreList.filter(item=>item[sub]>=score)
}

function updateScore(scoreList,sub,score){
    return scoreList.map((item)=> item[sub] <100 ?{...item, sub:item[sub]+score}: item)
}

let scoreList = createList();
let hong=createMember(scoreList,'홍길동',100,100,100)
let ss=createMember(scoreList,'홍길',10,100,80)
let aa=createMember(scoreList,'홍동',40,100,90)
let bb=createMember(scoreList,'길동',100,100,100)

console.log(scoreList)
console.log(scoreList.length)

console.log(searchName(scoreList,'길동'));
console.log(searchScore(scoreList,'kor',100));

//모든 학생의 수학 점수에 +5

console.log(updateScore(scoreList,'math',5))