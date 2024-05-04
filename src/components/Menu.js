import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.svg';
import '../js/scripts';

const Menu = () => {
    return (
        <>
        <div className='mobile-menu'><Link to='' onClick={(e)=>e.preventDefault()}><FontAwesomeIcon icon={faBars}/></Link></div>
        <nav>
          <ul className='mainmenu hidden'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className='parent'><Link to="/product-categories">Product Categories</Link><FontAwesomeIcon icon={faChevronDown} />
              <ul className='submenu hidden justify-evenly'>
                <li className='parent'><Link to="/product-categories/beauty">Beauty</Link>
                <img className='App-logo' src={logo} alt='image'/>
                  <ul className='submenu flex-col flex-wrap'>
                      <li><Link to="/category-1">Sub Category 1</Link></li>
                      <li><Link to="/category-2">Sub Category 2</Link></li>
                      <li><Link to="/category-3">Sub Category 3</Link></li>
                      <li><Link to="/category-4">Sub Category 4</Link></li>
                      <li><Link to="/category-5">Sub Category 5</Link></li>
                  </ul>
                </li>
                <li className='parent'><Link to="/category-2">Category 2</Link>
                <img className='App-logo' src={logo} alt='image'/>
                  <ul className='submenu flex-col flex-wrap'>
                      <li><Link to="/category-1">Sub Category 1</Link></li>
                      <li><Link to="/category-2">Sub Category 2</Link></li>
                      <li><Link to="/category-3">Sub Category 3</Link></li>
                      <li><Link to="/category-4">Sub Category 4</Link></li>
                      <li><Link to="/category-5">Sub Category 5</Link></li>
                  </ul>
                </li>
                <li className='parent'><Link to="/category-3">Category 3</Link>
                <img className='App-logo' src={logo} alt='image'/>
                  <ul className='submenu flex-col flex-wrap'>
                      <li><Link to="/category-1">Sub Category 1</Link></li>
                      <li><Link to="/category-2">Sub Category 2</Link></li>
                      <li><Link to="/category-3">Sub Category 3</Link></li>
                      <li><Link to="/category-4">Sub Category 4</Link></li>
                      <li><Link to="/category-5">Sub Category 5</Link></li>
                  </ul>
                </li>
                <li className='parent'><Link to="/category-4">Category 4</Link>
                <img className='App-logo' src={logo} alt='image'/>
                  <ul className='submenu flex-col flex-wrap'>
                      <li><Link to="/category-1">Sub Category 1</Link></li>
                      <li><Link to="/category-2">Sub Category 2</Link></li>
                      <li><Link to="/category-3">Sub Category 3</Link></li>
                      <li><Link to="/category-4">Sub Category 4</Link></li>
                      <li><Link to="/category-5">Sub Category 5</Link></li>
                  </ul>
                </li>
                <li className='parent'><Link to="/category-5">Category 5</Link>
                <img className='App-logo' src={logo} alt='image'/>
                  <ul className='submenu flex-col flex-wrap'>
                      <li><Link to="/category-1">Sub Category 1</Link></li>
                      <li><Link to="/category-2">Sub Category 2</Link></li>
                      <li><Link to="/category-3">Sub Category 3</Link></li>
                      <li><Link to="/category-4">Sub Category 4</Link></li>
                      <li><Link to="/category-5">Sub Category 5</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to="/my-account">My Account</Link></li>
            <li className='parent'><Link to="/categories">Product Categories</Link><FontAwesomeIcon icon={faChevronDown} />
              <ul className='submenu hidden justify-evenly'>
                <li className='parent'><Link to="/category-1">Category 1</Link>
                <img className='App-logo' src={logo} alt='image'/>
                  <ul className='submenu flex-col flex-wrap'>
                      <li><Link to="/category-1">Sub Category 1</Link></li>
                      <li><Link to="/category-2">Sub Category 2</Link></li>
                      <li><Link to="/category-3">Sub Category 3</Link></li>
                      <li><Link to="/category-4">Sub Category 4</Link></li>
                      <li><Link to="/category-5">Sub Category 5</Link></li>
                  </ul>
                </li>
                <li className='parent'><Link to="/category-2">Category 2</Link>
                <img className='App-logo' src={logo} alt='image'/>
                  <ul className='submenu flex-col flex-wrap'>
                      <li><Link to="/category-1">Sub Category 1</Link></li>
                      <li><Link to="/category-2">Sub Category 2</Link></li>
                      <li><Link to="/category-3">Sub Category 3</Link></li>
                      <li><Link to="/category-4">Sub Category 4</Link></li>
                      <li><Link to="/category-5">Sub Category 5</Link></li>
                  </ul>
                </li>
                <li className='parent'><Link to="/category-3">Category 3</Link>
                <img className='App-logo' src={logo} alt='image'/>
                  <ul className='submenu flex-col flex-wrap'>
                      <li><Link to="/category-1">Sub Category 1</Link></li>
                      <li><Link to="/category-2">Sub Category 2</Link></li>
                      <li><Link to="/category-3">Sub Category 3</Link></li>
                      <li><Link to="/category-4">Sub Category 4</Link></li>
                      <li><Link to="/category-5">Sub Category 5</Link></li>
                  </ul>
                </li>
                <li className='parent'><Link to="/category-4">Category 4</Link>
                <img className='App-logo' src={logo} alt='image'/>
                  <ul className='submenu flex-col flex-wrap'>
                      <li><Link to="/category-1">Sub Category 1</Link></li>
                      <li><Link to="/category-2">Sub Category 2</Link></li>
                      <li><Link to="/category-3">Sub Category 3</Link></li>
                      <li><Link to="/category-4">Sub Category 4</Link></li>
                      <li><Link to="/category-5">Sub Category 5</Link></li>
                  </ul>
                </li>
                <li className='parent'><Link to="/category-5">Category 5</Link>
                <img className='App-logo' src={logo} alt='image'/>
                  <ul className='submenu flex-col flex-wrap'>
                      <li><Link to="/category-1">Sub Category 1</Link></li>
                      <li><Link to="/category-2">Sub Category 2</Link></li>
                      <li><Link to="/category-3">Sub Category 3</Link></li>
                      <li><Link to="/category-4">Sub Category 4</Link></li>
                      <li><Link to="/category-5">Sub Category 5</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        </>
    );
}

export default Menu;