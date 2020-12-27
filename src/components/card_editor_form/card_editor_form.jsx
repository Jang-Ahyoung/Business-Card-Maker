import React, { useRef }  from 'react';
import Button from '../button/button';
import styles from './card_editor_form.module.css';

// 에디터 폼은 스테이트에서 form으로 받은 card의 상태에 따라 보여지기 때문에
// 사용자가 입력해서 업데이트 되지않고 card가 업데이트 되어야 업데이트 내용이 보여져!
const CardEditorForm =({FileInput, card,updateCard, deleteCard}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const {name,company, title, email,message,theme,fileName, fileURL} =card; 

    const onFileChange = file => {
        updateCard({
          ...card,
          fileName: file.name,
          fileURL: file.url,
        });
      };

      
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
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={nameRef}
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        ref={themeRef}
        value={theme}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        ref={titleRef}
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        ref={emailRef}
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        ref={messageRef}
        name="message"
        value={message}
        onChange={onChange}
      />            <div className={styles.image_input}>
            <FileInput name={fileName} onFileChange={onFileChange} />
            </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>

    );

};

export default CardEditorForm;