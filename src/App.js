import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';


function App({ FileInput, authService }) {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {/* / 홈화면 일때는 로그인화면으로 가게 만 */}
            <Login authService={authService} />

          </Route>
          <Route path="/maker">
            <Maker FileInput={FileInput} authService={authService} />

          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
