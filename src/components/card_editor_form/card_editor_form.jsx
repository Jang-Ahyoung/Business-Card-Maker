import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_editor_form.module.css';

// 에디터 폼은 스테이트에서 form으로 받은 card의 상태에 따라 보여지기 때문에
// 사용자가 입력해서 업데이트 되지않고 card가 업데이트 되어야 업데이트 내용이 보여져!
const CardEditorForm =({card,updateCard, deleteCard}) => {
    const {name,company, title, email,message,theme,fileName, fileURL} =card; 
    const onChange = event => {
        if (event.currentTarget == null) {
          return;
        }
        event.preventDefault(); // 브라우저 기본 이벤트 처리하지 않고
        updateCard({ // change발생하면 받아온 함수 이용해서
          ...card, // 기존의 카드의 키와 벨류 그대로 사용하면서
          [event.currentTarget.name]: event.currentTarget.value, // 발생하고 있는 이벤트의 currentTarget의 이름을 쓰
        });
      };
    
      const onSubmit = (event) => {
        deleteCard(card);
      };
    return(
        <form className={styles.form}>
            <input className={styles.input} type="text" name="company" value={company} onChange={onChange}/>
            <input className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
            <select className={styles.select} name="theme" value={theme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="coloful">colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title} onChange={onChange}/>
            <input className={styles.input} type="text" name="email" value={email} onChange={onChange}/>
            <textarea className={styles.textarea} name="message" value={message} onChange={onChange}></textarea>
            <div className={styles.image_input}>
            <ImageFileInput/>
            </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>

    );

};

export default CardEditorForm;