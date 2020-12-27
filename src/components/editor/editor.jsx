import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditorForm from '../card_editor_form/card_editor_form';
import styles from './editor.module.css';

// 에디터가 전달받고 에디터가 쓰고있는 메이커로 가서 addCard 생성해줄거야
const Editor = ({cards, addCard, updateCard, deleteCard})=>(
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1> 
        {/* 이제 card는 배열이 아니기때문에 map할수있는 상태로 변경해줘야해 -> 오브젝트 안의 모든 키를 받아와서 빙긍빙글돌고 cards안의 키를 통해서 접근할거야 */}
        {Object.keys(cards).map(key => (
      <CardEditorForm
        key={key}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
        {/* {cards.map(card =>(
            <CardEditorForm key = {card.id} card={card} updateCard={updateCard} deleteCard={deleteCard}/>
        ))} */}
        <CardAddForm onAdd ={addCard}/>
    </section>

);
export default Editor;