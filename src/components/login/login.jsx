import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    //화면에서 다른 라우터로 갈때 : 히스토리 이용!!
    const history = useHistory();
    // 로그인되면 maker 화면으로 갈수있도록 만들거야
    const goToMaker = userId => {
        // history 에서는 push이용해서 우리가 가고 싶은 곳 선택해가면돼
        // 여기선 사용자 정보를 함꼐 전달해줘야해 (로그인했을때 콘솔에 찍히는 유니크 아이디 전달해주면돼)
        // history.push('/maker');
        history.push({
            pathname:'/maker',
            state:{id:userId}, //데이터도 전달
        });

    };

    useEffect(()=>{
        authService
        .onAuthChange(user => {// (사용자가 바뀌면 무언가 수행하는 함수)콜백을 전달해줘야해
            // 여기에서 사용자가 로그인했다면 user라는 데이터 있을 것이고, 사용자가 로그아웃 했다면 사용자 유저가 null일거야
            user && goToMaker(user.uid);
            // 사용자 있다면 gotomaker로 이동할거야 -> 이렇게 하면 로그인된 정보 있기때문에 바로 maker로 이동하는 것 확인가능<!DOCTYPE html>
            


        });
    });


    // 로그인 컴포넌트 안에 로그인 할수있는 함수 만들거야
    const onLogin = (event) =>{
        // 이안에는 providerName 전달해줘야해
        authService.login(event.currentTarget.textContent)
        // .then(console.log);
        .then(data => goToMaker(data.user.uid)); // 데이터 받아지면 goToMaker 호출해 데이터 안의 id오브젝트의 uid를 전달해줄거야
    };
    return (
        <section className={styles.container}>
            <Header/>
            <section >
                <div className={styles.login}>
                    <h2 >Login</h2>
                    <p className={styles.desc}>별도의 계정 생성없이 <br/>간편하게 가입하세요 👍</p>
                </div>
                
                <ul className={styles.login_buttom}>
                    {/* 클릭발생하면 저 함수 호출되도록 */}
                    <li className={styles.list}><button className={styles.btn} onClick={onLogin}><img src="/images/google.png" alt="google"/>Google</button></li>
                    <li ><img src="/images" alt=""/><button className={styles.btn} onClick={onLogin}><img src="/images/github.png" alt="google"/>Github</button></li>
                </ul>
            </section>
            {/* <Footer/> */}
        </section>

    );


}
export default Login;