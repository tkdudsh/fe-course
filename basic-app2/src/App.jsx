import Hi from "./component/hi"
import People1 from "./assets/people1.webp"
import People2 from "./assets/people2.webp"
import People3 from "./assets/people3.webp"

import AvatarImg from "./component/AvatarImg"
import AvatarName from "./component/Avatarname"
import AvatarList from "./component/AvatarList"


function App() {

  let list =[
    {name:'보굴람',img:People1},
    {name:'보굴람2',img:People2},
    {name:'보굴람3',img:People3}
  ]

  return (
    <>

    <Hi></Hi>
    <AvatarImg img={People1}></AvatarImg>
    <AvatarName name='버굴럼'></AvatarName>
    <AvatarList list={list}></AvatarList>
    
    
      </>
  )
}

export default App
