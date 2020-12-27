import React, { useRef ,useState} from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';

// 4. 나중에 prop으로 전달받은 콜백함수 호출해줄거고
const CardAddForm = ({ FileInput , onAdd }) => {
  // 2. 폼이 submit(클릭) 되었을때 각각 input의 데이터 읽어오기위해 ref 사용해 현재 컴포넌트 데이터 읽어와 연결해줘야해!
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // Add 버튼 누를때만 업데이트 되니깐 파일바뀌면 컴포넌트 자체에서 스테이트로 가지고 있으면 된다
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const onFileChange = file => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = event => {
    console.log(event);
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '', // 현재 값이 있으면 쓰고 없다면 비어있는 문자를 쓸거야
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset(); // 사용자가 입력해서 제출하면 폼이다 리셋되도록 만들어줘
    setFile({ fileName: null, fileURL: null }); // 사진 이름도 수정으로 초기화해주면돼 ㅎㅎ
    // 우리가 만든 카드이용해 함수에 전달해주고
    onAdd(card);
  };
  return (

    // 1. css 그대로 가져가고 value -> placehold로 변경해 값들이 나타나겠끔업데이트 해주고-> CardAddForm에는 지정된 카드가 없기때문에 prop 없애주고 "Name" 형식으로 변경해줘
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef} // 2. 이렇게 각각 ref와 연결해줘
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="Theme"
      >
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="Message"
      />
      <div className={styles.image_input}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      {/* 1-2. Add 함수로 변경해주고 클릭되면 값들 읽어와 카드를 추가해줘야해 */}
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
