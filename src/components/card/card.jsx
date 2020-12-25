import React from 'react';
import styles from './card.module.css';

const Card = ({card}) => {
    const DEFAULT_IMAGE = '/images/default_logo.png';
    // card.id 이렇게 반복적으로 사용하기 보다 deconstructing 이용할거야~
    const {name,company, title, email,message,theme,fileName, fileURL} =card; //이렇게 할당하면 card안의 모든 정보들이 옆으로 할당이 될거야
    const url =  fileURL || DEFAULT_IMAGE;
    return(
        // 기본적으로 styles.card 사용하고, 우리가 정의한 함수 이용해 스타일 받아올거야
        <li className ={`${styles.card} ${getStyles(theme)}`}>
            <img className ={styles.avatar} src={url} alt="profile photo"/>
            <div className ={styles.info}>
                <h1 className ={styles.name}>{name}</h1>
                <p className ={styles.company}>{company}</p>
                <p className ={styles.title}>{title}</p>
                <p className ={styles.email}>{email}</p>
                <p className ={styles.message}>{message}</p>

            </div>
        </li>
        
    );
}

function getStyles(theme){
    switch(theme){
        case 'dark':
        return styles.dark;
        case 'light':
        return styles.light;
        case 'coloful':
        return styles.coloful;

        default:
            throw new Error(`unknown theme : ${theme}`); //에러 메시지 자세하게 해준다!
    }
}
export default Card;