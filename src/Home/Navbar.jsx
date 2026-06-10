import { Link } from 'react-router';
import { use, useState } from 'react';
import { Autchontex } from './LoginAndRegister/Context/AuthContext';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {user,signOutUser} = use(Autchontex)

  const handalLogout = e => {
    signOutUser()
  }



  return (
    <nav className="bg-white shadow-lg rounded-2xl p-4 my-3">
      <div className="lg:flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Profast
        </Link>

        {/* Mobile button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/services">Services</Link>
          <Link to="/coverage">Coverage</Link>
          <Link to="/about">About</Link>
          <Link to="/addparcel">AddParcel</Link>
          <Link to="/dashboard">DashBoard</Link>
          {
            user ? <button onClick={handalLogout} className='btn'>Logout</button>:<Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</Link>
          }
        </div>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="md:hidden mt-4 flex flex-col gap-3">
          <Link to="/services">Services</Link>
          <Link to="/coverage">Coverage</Link>
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/login" className="bg-blue-600  px-4 py-2 rounded text-center text-black">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;