import Logo from "./head/Logo"
import MenuList from "./head/MenuList"
import ToggleBtn from "./head/ToggleBtn"


export default function Header(){
    const menu=[
            {"href": "#home",   "style": "header-menu-item", "name": "Home"},
            {"href": "#about",  "style": "header-menu-item", "name": "About"},
            {"href": "#skills", "style": "header-menu-item", "name": "Skills"},
            {"href": "#work",   "style": "header-menu-item", "name": "My Work"},
            {"href": "#testimonial", "style": "header-menu-item", "name": "Testimonial"},
            {"href": "#contact",     "style": "header-menu-item", "name": "Contact"}
        ]

    return(
        <header className="header">
            <Logo></Logo>
     
          <MenuList menu={menu} listClass="header-menu open"/>
        
        {/* <ToggleBtn/> */}
    </header>
        
    )
}