import Child from "./Child.jsx"

function PropsComp(){
    return(
        <h1>Props임</h1>
    )
}

export default function Parent(props){
    let info={
        name:'홍길동',
        age:'98',
        address:'영월'
    }
    return(
        <>
        <h1>Parent::{props.name}</h1>
        <Child>
            <PropsComp/>
        </Child>
        </>
    )
}