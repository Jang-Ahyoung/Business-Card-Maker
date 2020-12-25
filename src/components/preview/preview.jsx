import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css'

const Preview = ({cards}) => (

    <section className={styles.preview}>
        <h1 className={styles.title}>Card Preview</h1> 
        <ul className={styles.card}>
        {cards.map(card =>(// {}를 쓰면 리턴해줘야되기때문에 없애고 ()로 작업해줘!
            <Card card={card}/> // card 컴포넌트가 없기때문에 만들어줄거야!
        ))}
        </ul>
    </section>
          
    );

export default Preview;