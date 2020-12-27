import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

// 이름 받아와야되고 업로드 완료되 파일 바뀌면 불러 줄 수 있는 콜백도 받아와야한다
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(); // 컴포넌트에 접근해 정의한 이름 연결시켜주고
  const onButtonClick = event => {
    // 버튼 클릭되면 input 클릭된것처럼 해야해
    event.preventDefault(); // 이벤트 받아와 페이지 refresh되는거 방지해줘
    inputRef.current.click(); // 클릭되면 input 현재를 클릭! = 버튼을 클릭했지만 input을 클릭한것과 동일한 효과야!
  };

  const onChange = async event => {
    // 사용자가 클릭하면 업로드되고 파일 선택해 input에 데이터 변경돼었을때 사진 업로드하고 url받아와야해
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]); // 타겟에 있는 파일 알아와야해 업로드 서비스에 전달해줘야해
    //ImageUploader에서 async로 전달했기때문에 promise가 리턴돼.then()으로 캐치해서 리턴하거나 async붙여줘서 비동기적으로 처리해줄수있어
    // await붙여줘서 실행될때까지 기다렸다 완료되면 uploaded에 할당해주는거지
    
    console.log(event.target.files[0]);
    console.log(uploaded);
    setLoading(false);
    onFileChange({ // 파일 바뀐거 알려줘야해 -> 업로드된 파일 정보도 함께 리턴해주고 구현해줘
      name: uploaded.original_filename,
      url: uploaded.url, // 이 함수 이용하는 컴포넌트들에도 각각 전달해줘야해
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef} // 연결
        className={styles.input}
        type="file" // 입력 타입을 파일로!
        accept="image/*" // 수용할수있는 파일 타입 = img타입이고/* 확장자는 상관없어
        name="file"
        onChange={onChange} // 온체인지 발생하면 우리가 정의한 onChange 호출할거야
        // html에서 기본적으로 보여지는 ui를 css로 꾸밀 수 있는 방법은 많이 없고
        // 우리는 css이용해 input를 보여주지않고 우리가 정의한 ui보여준뒤 클릭발생하면 input을 우리가 수동적으로 코드로 클릭할거야
      />
      {!loading && ( // 
        // 실제로 사용자가 클릭하게될 버튼!
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || 'No file'} 
          {/* 선택된 파일이 없어 이름이 없다면 */}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
