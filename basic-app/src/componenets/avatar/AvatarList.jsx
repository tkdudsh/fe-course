
import Avatar from "./Avatar"
import style from './Avatar.module.css'
export default function AvatarList({list}){
    return(
        <div className={style.avatar_list}>
            {
                list.map((item)=>{

                   return <Avatar name={item.name} img={item.img}></Avatar>
                })
            }
            

        </div>
    )
}