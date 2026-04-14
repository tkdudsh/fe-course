export default function Header(){

    return(

       <header class="header">
      <Logo class="header-logo">
        <img class="header-logo-img" src="images/favicon.ico" alt="logo" />
        <h1 class="header-logo-title">Judy</h1>
      </Logo>
      <nav>
        <ul class="header-menu">
          <li><a href="#home" class="header-menu-items active">Home</a></li>
          <li><a href="#About" class="header-menu-items">About</a></li>
          <li><a href="#Skills" class="header-menu-items">Skills</a></li>
          <li><a href="#My work" class="header-menu-items">My work</a></li>
          <li>
            <a href="#Testimonial" class="header-menu-items">Testimonial</a>
          </li>
          <li><a href="#contact" class="header-menu-items">contact</a></li>
        </ul>
        <button class="header-toggle"><i class="fa-solid fa-bars"></i></button>
      </nav>
    </header>

    )
}