import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // 引入antd样式
import './css/App.css'; // 引入全局的共同样式
import './css/login.css'; // 登录页样式
import './css/main.css'; // 内页的样式
import App from './routes/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
