import logo from './visuals/Logo.svg';

const Navbar = (props) => {
  // const style = props.style || {};
  const position = props.position || {};

  return (
    // <nav style={props.abs ? "position: abs" : ""}>
    <nav style={{ position }}>
      <img src={logo} alt="logo" className="logo" draggable="false" />
      <div>
        <a href="/">Home</a>
        <a href="/newsletters">Newsletters</a>
        {/* <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
        <a href="/about">Topics</a>
      </div>
    </nav>
  )
};
// Navbar.defaultProps = {
//   position: static
// }

export default Navbar;