import logo from './visuals/Logo.svg';

const Navbar = () => (
  <nav>
    <img src={logo} alt="logo" className="logo" draggable="false" />
    <a href="/">Home</a>
    <a href="/newsletters">Newsletters</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
);

export default Navbar;