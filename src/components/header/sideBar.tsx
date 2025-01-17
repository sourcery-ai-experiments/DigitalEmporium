'use client';
import React from 'react';
import sideBarStyles from './sideBar.module.css';
import { AiOutlineUser, AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';

interface SideBarProps {
  onCloseSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onCloseSidebar }) => {
  return (
    <div className={sideBarStyles.overlay}>
      <div className={sideBarStyles.container}>
        <div className={sideBarStyles.header}>
          <a href='/' className={sideBarStyles.logo}>
            LOGO
          </a>
          <div className={sideBarStyles.icons}>
            <button>
              <AiOutlineUser />
            </button>
            <button>
              <AiOutlineHeart />
            </button>
            <button onClick={onCloseSidebar}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
        <div className={sideBarStyles.categoryLinks}>
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
          </ul>
        </div>
      </div>
      <div onClick={onCloseSidebar} className={sideBarStyles.overlayClose} />
    </div>
  );
};

export default SideBar;
