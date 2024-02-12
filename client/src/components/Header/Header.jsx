import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header() {
    document.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        const scrollPosition = window.scrollY;
      
        if (scrollPosition > 0) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    
  return (
      <header className='header'>
        <div className="logo">
          <a href="/">
            <h1>Gruapp
              <hr className='hr1'/>
            </h1>        
          </a>
        </div>
            <nav className='navbar'>
                <ul>
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink to="/gruas">Gruas</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </ul>
            </nav>
      </header>
  )
}
