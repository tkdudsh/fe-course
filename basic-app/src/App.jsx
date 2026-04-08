import AvatarImage from "./componenets/avatar/AvatarImage.jsx"
import people1 from './assets/people1.webp';
import people2 from './assets/people2.webp';
import people3 from './assets/people3.webp';
import Menu from './componenets/menu/Menu.jsx'
import style from './componenets/avatar/Avatar.module.css'
import Avatar from "./componenets/avatar/Avatar.jsx";
import AvatarList from "./componenets/avatar/AvatarList.jsx";
import AvatarImageList from "./componenets/avatar/AvatarImageList.jsx"

export default function App() {
  
  const list=[
    {img:people1},
    {img:people2},
    {img:people3}
  ]
  const alist=[
    {img:people1,name:"winston"},
    {img:people2,name:"anae"},
    {img:people3,name:'akak'}
  ]

  return ( 
    <>
    {/* <AvatarImageList imgList={list}></AvatarImageList> */}
    <AvatarList list={alist}></AvatarList>
<AvatarImage img={people1} style={style.avatar_img_circle}></AvatarImage>
      {/* <Avatar img={people1} name='보글럼'></Avatar>
      <Avatar img={people2} name='윈스턴'></Avatar> */}

    </>
  )
}

