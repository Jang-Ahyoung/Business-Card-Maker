import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => (
// const Header = (props) => (
    <header  className={styles.box}>
       {/* onLogout해주거나 true해주면돼 항상 보여지게돼!*/}
            <img className={styles.logo} src="/images/logo.png" alt="logo"/>
            <p className={styles.title}>Business Card Maker</p>
            {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}


        </header>
);

export default Header;