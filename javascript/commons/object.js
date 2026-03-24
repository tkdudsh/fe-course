/**
 * 
 * 객체 관리 CRUD 모듈.
 */
export function setvalue(object,key,value){
    object[key]=value;
}

export function getvalue(object,key){
    return object[key]
}

export function updateValue(object,key,newvalue){
    object[key]=newvalue

}

export function deleteValue(object,deletekey){
    delete object[deletekey];
    
}

/**
 * 객체 생성 모듈
 */

let objects={}

export function getObjects(){
    return objects;
}

export function createObject(objectName){
    return objects[objectName]={};
}

export function deleteObject(objectName){
 delete objects[objectName];
}

export function getObject(objectName){
    return objects[objectName];
}
export function setObject(key,value){
    return objects[key]=value;
}

/**
 * 생성자 함수를 이용한 객체 CRUD
 */

export function Fruit(name,emoji){
    this.name=name;
    this.emoji=emoji;

    this.display = () => {
        console.log(this.name,this.emoji)
    }
}