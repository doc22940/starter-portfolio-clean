import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand pl-2 pr-2'>
          <a
            onClick={() => {
              setIsActive(!isActive);
            }}
            role='button'
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div className={`navbar-menu pl-2 pr-2 ${isActive ? 'is-active' : ''}`}>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <Link
                to='/'
                className='navbar-item nav_title'
                onClick={() => setIsActive(!isActive)}>
                Home
              </Link>
              <Link
                to='/portfolio'
                className='navbar-item nav_title'
                onClick={() => setIsActive(!isActive)}>
                Portfolio
              </Link>
              <Link
                to='/aboutme'
                className='navbar-item nav_title'
                onClick={() => setIsActive(!isActive)}>
                About Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navigation;
