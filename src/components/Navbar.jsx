function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        👑 Maharaja Palace
      </div>

      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="book-btn">Book Now</button>

    </nav>
  );
}

export default Navbar;
