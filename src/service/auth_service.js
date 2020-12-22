import firebase from 'firebase';

// 여기에선 사용자가 로그인, 로그아웃 하거나 이런 authentication관련된 일을 하는 클래스
class AuthService {
    // firebase에서 auth함수 이용해 간단히 로그인 가능, -> 중복되는 로직이기때문에 어떤 프로바이터 쓸건지 전달해주면 거기에 맞추어 로그인 할 수 있게 해줘
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebase.auth().signInWithPopup(providerName);
    }
}

export default AuthService;