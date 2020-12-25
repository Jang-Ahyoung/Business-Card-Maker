import { BrowserRouter, BrowserRouter as Router, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';


function App({ authService }) {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Router exact path="/">
            {/* / 홈화면 일때는 로그인화면으로 가게 만 */}
            <Login authService={authService} />
          </Router>
          <Router path="/maker">
            <Maker authService={authService} />
          </Router>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
