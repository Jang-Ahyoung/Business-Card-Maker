import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({authService}) =>{
    // 코드 많을때 {} 써주고 return 안에 넣어줘
    const history = useHistory();
    const onLogout=()=>{
        authService.logout();
        // 이렇게 만들면 app의 Maker에 가서도 authService 전달해줘야되고 로그아웃 하는 것도 구현(auth_service가서)해줘야해 !
    }

    // useEffect 사용해서 사용자의 auth state변경(체인지 일어나 유저 업데이트 된다면)되면 이동해볼거야 -> 콜백함수 전달해 실행되는거야
    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(!user){
                //이것을 위해 히스토리가 필요 -> 간단히 push 이용하면돼
                history.push('/'); 
            }

        });
    })
    
    return(
        <section className ={styles.maker}>
            {/* 로그아웃 버튼 클릭되면 함수 호출  & 위에 함수 선언해줄거야*/}
            <Header onLogout={onLogout}/>
            <h1>Maker</h1>
        </section>


    );
}


            


export default Maker;