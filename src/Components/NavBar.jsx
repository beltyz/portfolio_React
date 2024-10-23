import './NavBar.css'

export default function NavBar()
{
    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <ul className="navbar-menu">
                        <li><a href="#home" className='navBarItem'>Home</a></li>
                        <li><a href="#skill" className='navBarItem'>Skill</a></li>
                        <li className="logo">DMYTRO</li>
                        <li><a href="#resume" className='navBarItem'>Resume</a></li>
                        <li><a href="#contact" className='navBarItem'>Contact</a></li>
                    </ul>
                </nav>
                <nav className='burgerMenu'>
                    <ul id='menu'>
                    <a href="#"><li>Home</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Info</li></a>
                        <a href="#"><li>Contact</li></a>
                        <a href="https://erikterwan.com/" ></a>
                    </ul>
                </nav>
            </div>
        </header>
      );

}