import { useEffect, useState } from 'react';
import people1 from '../../assets/people1.webp';
import people2 from '../../assets/people2.webp';
import people3 from '../../assets/people3.webp';
import { fetchData } from '../../util.js/fetch';
import AvatarList from '../avatar/AvatarList';


 export default function EffectFetch(){

    const [data,setData]=useState([])
    const [count,setCount]=useState(0)
    const url="http://localhost:5173/data/avatar.json"

   useEffect(()=>{

     const loadData=async()=>{
    const jsonData=await fetchData("http://localhost:5173/data/avatar.json")
    setData(jsonData.alist)
     }
    

    loadData();
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