import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';


const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
// 새로운 컴포넌트를 만들건대 props받으면 간단하게 ImageFileInput을 만들어서 전달하고 각각 받아온 props는 알아서 전달이 된다!
// 확장성을 넓히기 위해 import 한단계 감싸서 사용자가 FileInput 사용할때 원하는 props 전달하면 그 props에다가 필수적으로 필요한 props는 여기에서 인젝터 된다!
// 이후 App으로 인자전달해주면되
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById('root')
);
