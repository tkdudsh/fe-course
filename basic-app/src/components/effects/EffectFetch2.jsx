import AvatarImageList from '../../components/avatar/AvatarImageList'
import style from '../../components/avatar/Avatar.module.css'
import { useEffect, useState } from 'react'
import { fetchData } from '../../util.js/fetch';



export default function EffectFetch2(){

    const [data,setData]= useState([]);

    const url = 'http://localhost:5173/data/avatar.json'

    useEffect(()=>{

        const fetchData2= async ()=>{
            const jsonData= await fetchData("http://localhost:5173/data/avatar.json");
            const newList= jsonData.list.map((item)=>({
                ...item,style:style.avatar_img_circle
            }));
            setData(newList)
            // setData(jsonData)
        }

        fetchData2();
        // fetch("http://localhost:5173/data/list.json")
        // .then((response)=>response.json())
        // .then((jsonData)=>setData(jsonData))
        // .catch((error)=>console.log(error))
    },[])

    console.log(data)



    return(

        <>
            <AvatarImageList imgList={data}></AvatarImageList>
        </>
    )
}