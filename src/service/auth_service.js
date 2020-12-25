import firebase from 'firebase';
import firebaseApp from './firebase';

// 여기에선 사용자가 로그인, 로그아웃 하거나 이런 authentication관련된 일을 하는 클래스
class AuthService {
    // firebase에서 auth함수 이용해 간단히 로그인 가능, -> 중복되는 로직이기때문에 어떤 프로바이터 쓸건지 전달해주면 거기에 맞추어 로그인 할 수 있게 해줘
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    logout() {
        //firebasdApp을 이용하는 것이 더 좋아
        firebase.auth().signOut();
    }

    // 새로운 함수 추가( onUserChanged (사용자 바뀌었을때 원하는 기능 수행하는)콜백 함수 받는 함수)
    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            // 사용자가 바뀔때마다 전달받는 사용자 정보를우리가 함수로 전달받은 함수에 전달하면서 호출해줄거야
            onUserChanged(user); // 하고 다시 컴포넌트login으로 돌아가!

        })
    }
}

export default AuthService;