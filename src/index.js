import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//全局的css文件
import './utils/fonts/iconfont.css'; //全局字体文件
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
