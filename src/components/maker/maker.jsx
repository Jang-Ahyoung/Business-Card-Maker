import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService}) =>{
    // 코드 많을때 {} 써주고 return 안에 넣어줘
    const history = useHistory();
    // []배열 이 아닌 {}오브젝트를 써줄거야
    const [cards, setCards] = useState({
        // 키는 카드의 아이디이고 이자체가(벨류) 카드인 오브젝트가 될거야
        // 이제 배열이 아니기때문에 전달하는 곳에서 배열이 아닌것을 다 변경해줘야해*(에디터 등등)
        1: {
            id : '1', 
            name : 'Ang',
            company : 'angpeng_company',
            theme : 'dark',
            title : 'Software Engineer',
            email : 'ang@gmail.com',
            message : 'go for it',
            fileName : 'ang',
            fileURL : null,
        },
        2: {
            id : '2', 
                    name : 'Peng',
                    company : 'angpeng_company',
                    theme : 'light',
                    title : 'Software Engineer',
                    email : 'peng@gmail.com',
                    message : 'angangang',
                    fileName : 'peng',
                    fileURL : null,
        },
        3: {
            id : '3', 
                    name : 'DaekGi',
                    company : 'angpeng_company',
                    theme : 'colorful',
                    title : 'Software Engineer',
                    email : 'DaekGi@gmail.com',
                    message : 'DaekGi! DaekGi!',
                    fileName : 'DaekGi',
                    fileURL : null,
        },
      });
    // const [cards,setCards] = useState([
    //     {
    //         id : '1', 
    //         name : 'Ang',
    //         company : 'angpeng_company',
    //         theme : 'dark',
    //         title : 'Software Engineer',
    //         email : 'ang@gmail.com',
    //         message : 'go for it',
    //         fileName : 'ang',
    //         fileURL : null,

    //     },
    //     {
    //         id : '2', 
    //         name : 'Peng',
    //         company : 'angpeng_company',
    //         theme : 'light',
    //         title : 'Software Engineer',
    //         email : 'peng@gmail.com',
    //         message : 'angangang',
    //         fileName : 'peng',
    //         fileURL : null,

    //     },
    //     {
    //         id : '3', 
    //         name : 'DaekGi',
    //         company : 'angpeng_company',
    //         theme : 'coloful',
    //         title : 'Software Engineer',
    //         email : 'DaekGi@gmail.com',
    //         message : 'DaekGi! DaekGi!',
    //         fileName : 'DaekGi',
    //         fileURL : null,

    //     }
    // ]);
    const onLogout=()=>{
        authService.logout();
        // 이렇게 만들면 app의 Maker에 가서도 authService 전달해줘야되고 로그아웃 하는 것도 구현(auth_service가서)해줘야해 !
    }

    // useEffect 사용해서 사용자의 auth state변경(체인지 일어나 유저 업데이트 된다면)되면 이동해볼거야 -> 콜백함수 전달해 실행되는거야
    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(!user){
                //이것을 위해 히스토리가 필요 -> 간단히 push 이용하면돼
                // window.location.replace("/")
                history.push('/'); 
            }

        });
    })

    // //addCard는 card라는 것을 전달받아
    // const addCard = card => {
    //     // console.log(card);
    //     const updated = [...cards, card]; // 기존의 카드 그대로 복사해와서 추가로 card하나만 더해주면돼!
    //     setCards(updated); //setCards 라는 state api사용해서 업데이트된거 저장해주면돼~@!!!!
    //   };
    
      

      // input 갯수가 많아질수록 map사용하면 성능 좋지 않기때문에
      // 상태 업데이트할때 배열을 처음부터 끝까지 도는 for loop 너무너무 성능 좋지 않아서
      // 자바 스크립트에선 오브젝트 특징이용해 키와 벨류, 
      // id:'123', name:'ellie' -> 대신 id : card 카드 자체 오브젝트를 벨류로 사용하여 오브젝트 만들게되면
      
      // 업데이트할때 배열 사용했던것 처럼 ellie.card 이용해 원하는 데이터 받아오거나 업데이트 할수가있어! 
   

       // 어떤것을 업데이트위해 이전상태를 배경으로 변경될걸 업데이트할때 컴포넌트 안의 state이용해서 업데이트하면 업데이트 시점에있는 state가 오래된 것일 수도 있어
  // 동기적으로 할수 없을때도 있다는 이야기! -> 이것을 피하기 위해 컴포넌트에 있는 것에 의존해 값 변경 x 
  // setCards 정의 부분가면 Action이라고 이전을 상태값 받아와 새로운값을 하는 콜백함수를 전달해줄수도 있어<!DOCTYPE html>
  // 이 시점에서의 setCards의 상태 고대로 복사해와 setCards 아이디 이용해 오브젝트 안의 키(card.id)을 해당 그키로 새로 업데이트 되는 card 변경해주고 리턴은 업데이트된 아이들 리턴해주면돼
  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards }; // 기존의 카드 전부 복사해와서
      updated[card.id] = card; //업데이트되는 키 이용해서 오브젝트 전체를 이걸로 변경해줄거야
      return updated; // 업데이트 설정
    });
  };


  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
    
    return(
        <section className ={styles.maker}>
            {/* 로그아웃 버튼 클릭되면 함수 호출  & 위에 함수 선언해줄거야*/}
            <Header onLogout={onLogout}/>

            <div className ={styles.container}>
                {/* 외쪽 : 입력 부분 , 오른쪽 : 프리뷰 부분으로 가득채워 줄거야 */}
                <Editor FileInput={FileInput} cards ={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
                <Preview FileInput={FileInput} cards ={cards}/>
            </div>
            {/* <h1>Maker</h1> */}
        </section>


    );
}

export default Maker;