import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    // 로그인 컴포넌트 안에 로그인 할수있는 함수 만들거야

    const onLogin = (event) =>{
        // 이안에는 providerName 전달해줘야해
        authService.login(event.currentTarget.textContent)
        .then(console.log);

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