'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStore,
  faUser,
  faHeart,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

import styles from './index.module.css';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.combinedContainer}>
          <button className={styles.sidebarToggle} onClick={toggleSidebar}>
            =
          </button>
          <div className={styles.logo}>
            <a href='#'>Logo</a>
          </div>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchInput}
              type='search'
              name='search'
              placeholder='Search here'
              autoComplete='off'
            />
          </div>
        </div>

        <div className={styles.navbarLinks}>
          <ul className={styles.primaryLinks}>
            <li>
              <a href='#'>
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.sidebarOpen : ''
        }`}
      >
        <button className={styles.closeButton} onClick={toggleSidebar}></button>
        <div className={styles.categoryLinks}>
          <ul>
            <li>
              <a href='#'>KADIN</a>
            </li>
            <li>
              <a href='#'>ERKEK</a>
            </li>
            <li>
              <a href='#'>ÇOCUK</a>
            </li>
            <li>
              <a href='#'>BEBEK</a>
            </li>
            <li>
              <a href='#'>FIRSATLAR</a>
            </li>
            <li>
              <a href='#'>SÜRDÜRÜLEBİLİRLİK</a>
            </li>{' '}
            <li>
              <a href='#'>KADIN</a>
            </li>
            <li>
              <a href='#'>ERKEK</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
