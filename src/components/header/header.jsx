import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
    <header >
        <div className={styles.box}>
            <img className={styles.logo} src="/images/logo.png" alt="logo"/>
    <p className={styles.title}>Business Card Maker</p>

        </div>
        </header>
);

export default Header;