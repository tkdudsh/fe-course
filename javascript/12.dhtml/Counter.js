const counter=(type)=>{
    let num=document.querySelector('#number').textContent
    console.log(type)

    
        if(type =='+'){
            if(num>=0){
        document.querySelector('#number').textContent= ++num;
    }}
    else{
        if(num>0){
        document.querySelector('#number').textContent = --num;
    }
}
}