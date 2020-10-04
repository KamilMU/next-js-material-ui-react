import React from 'react';
import styles from './Header.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

function Header({ user }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerContent__notification}><Avatar alt="profile pic" src="/notifications.png" /></div>
          <div className={styles.headerContent__profilePic}><Avatar alt="profile pic" src="/profile.png" /></div>
          <div className={styles.headerContent__name}>{user.name}</div>
        </div>
      </header>
    </>
  );
}

export default Header;