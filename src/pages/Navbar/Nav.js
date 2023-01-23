import React from 'react';
import { Link } from 'react-router-dom';
import logo from './HK.png';
const Nav = () => {
    return (
        <div className="navbar bg-base-400 shadow-2xl uppercase">
  <div className="flex-1">
    <img src={logo} alt=""className='w-20'/>
    <Link className="btn btn-ghost text-xl hidden lg:flex">Team</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/view'>See User</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Nav;