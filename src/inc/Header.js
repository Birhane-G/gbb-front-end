import '../styles/Style.css';

function Header() {

  return (
  <section className='header' id="navbar">
    <div className='header-cont'>
      <div className='logo'>
        <h1>GBB</h1>
      </div>
      <div className='contents'>
        <nav className='navigation'>
          <ul>
            <a href='/'><li>Home</li></a>
            <a href='/'><li>Portifolio</li></a>
            <a href='/'><li>Service</li></a>
            <a href='/'><li>About us</li></a>
            <a href='/'><li>Contact</li></a>
        </ul>
      </nav>
        </div>
    </div>
  </section>);
}

window.onscroll = function(){sticky()};
var navbar = document.getElementById("navbar");
function sticky(){
  if(window.pageYOffset >= 20)
  {
      navbar.classList.add('sticky');
  }
  else
  {
      navbar.classList.remove('sticky');
  }
}

export default Header;
