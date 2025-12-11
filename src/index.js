// 필수 리액트 구동 모듈들입니다.
import React from 'react';
import ReactDOM from 'react-dom/client';
// 초기 화면을 구성하는 사용자 코드입니다.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';

// 리액트 엔진이 화면을 출력하는 코드입니다.
// id가 root인 엘리먼트에 컴포넌트를 출력.
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
