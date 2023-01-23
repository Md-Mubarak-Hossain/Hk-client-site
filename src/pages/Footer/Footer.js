import React from 'react';
import { Link } from 'react-router-dom';
import logo from './HK.png';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
  <div className='flex flex-col place-items-center'>
    <img src={logo} alt="" className='w-24 mx-1'/>
    <p>HK Based team.<br/>Providing reliable tech since 2023</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;