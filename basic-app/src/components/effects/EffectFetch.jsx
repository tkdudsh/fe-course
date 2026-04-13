import { useEffect, useState } from 'react';
import people1 from '../../assets/people1.webp';
import people2 from '../../assets/people2.webp';
import people3 from '../../assets/people3.webp';
import AvatarList from '../avatar/AvatarList';


 export default function EffectFetch(){

    const [data,setData]=useState([])
    const [count,setCount]=useState(0)
    const url="http://localhost:5173/data/alist.json"

   useEffect(()=>{

     const fetchData=async()=>{
    const response = await fetch(url)
    const jsondata = await response.json();
    setData(jsondata)
     }
    

    fetchData();
   },[count])

   console.log(data)
    
  

    return (
        <>
        <h2>{count}</h2>

            <AvatarList list={data}></AvatarList>        

            <button type="button" onClick={()=>setCount(count+1)}>
                증가(+)
            </button>
        </>
    )
}