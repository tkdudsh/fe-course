import AvatarImg from "./AvatarImg";
import AvatarName from "./Avatarname";


export default function Avatar({name,img}){

    return(

        <div>
            <AvatarImg img={img}></AvatarImg>
            <AvatarName name={name}></AvatarName>
        </div>
    )
}