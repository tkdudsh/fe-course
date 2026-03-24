/**
 * 객체를 생성하는 함수 : 생성자 함수(Constructor Function)
 * 객체의 메소드 정의 : 객체안에 함수 형식으로 정의
 */

const fruit = {
    //Field
    name:'apple',
    emoji:'🍎',

    //method
    getName: function(){
        return this.name;
    },

    getEmoji: function(){
        return this.emoji
    },
    display: function(){
        return console.log(this.name,this.emoji)
    }
}
console.log(fruit);
console.log(fruit.getEmoji())
console.log(fruit.display())
