

function Navbar() {
  return (
    <nav className="bg-white-900 text-red">
      <div className="container mx-auto flex justify-between items-center py-4">
        <span className="logo text-xl text-red-500 font-semibold">Foodle</span>
        <ul className="flex items-center space-x-3">
          <div className="centered-links hidden md:flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/aboutus">About Us</a></li>
          </div>
          <div className="end-links flex items-center space-x-6">
            <button className="text-red-400 border border-white rounded-md px-3 py-1">
              <a href="/login">Login</a>
            </button>
            <button className="text-red-500 border border-white rounded-md px-3 py-1">
              <a href="/signup">Sign Up</a>
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
