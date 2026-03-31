/**
 * 배열의 요소를 치환하는 함수
 */
function replace(array, oldItem, newItem) {
    let idx = 0;
    for (let item of array) {
        if (item === oldItem) {
            array.splice(idx, 1, newItem);
        }
        idx++;
    }
    return array;
}

/**
 * 객체 배열의 emoji를 치환하는 함수
 */
function replaceObj(array, oldItem, newItem) {
    let arrayCopy = Array.from(array); // 배열 복사
    let idx = 0;

    for (let item of arrayCopy) {
        if (item.emoji === oldItem) {
            arrayCopy.splice(idx, 1, {
                name: item.name,
                emoji: newItem
            });
        }
        idx++;
    }

    return arrayCopy;
}

// function replace2(array,oldItem,newItem)
// {let arrayCopy2=array.forEach((item,idx) => {
//     if(item===oldItem) arrayCopy.splice(idx,1,newItem)

//     return element.emoji =='🍕'
// });}

function replace3(array,oldIt,newIt){
    let arrayCopy3=array.map((item,idx)=>{
        if(item==oldIt){
            array.splice(idx,1,newIt)
        }
    })
    return arrayCopy3
}

function replace4(array,oldIt,newIt){
    return array.map(item=>(item==oldIt) ? item=newIt : item);
}


let fruit = ['🍓', '🍎', '🍋', '🍕', '🍈'];
let fruitObj = [
    { name: 'apple', emoji: '🍎' },
    { name: 'pizza', emoji: '🍕' }
];

let obj1 = replace(fruit, '🍎', '🍏');
let obj2 = replaceObj(fruitObj, '🍎', '🍏');


console.log(obj1);     // ['🍓', '🍏', '🍋', '🍕', '🍈']
console.log(obj2);     // [{name:'apple', emoji:'🍏'}, {name:'pizza', emoji:'🍕'}]
console.log(fruitObj); // 원본 유지

// let obj3=replace2(fruitObj, '🍎', '🍏')
let obj4 = replaceObj(fruit, '🍎', '🍏');
let obj5=replace4(fruit,'🍎', '🍏')
console.log()
console.log(obj4)
console.log(obj5)
