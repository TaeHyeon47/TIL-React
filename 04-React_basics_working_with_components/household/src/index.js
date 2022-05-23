// React와 ReactDom은 package.json의 dependencies에서 가져온다.
import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDom으로

import './index.css'; // 자바스크립트 파일처럼 입력하여, css파일이 작동한다.
// App도 최종적으로 Component이다.
import App from './App'; // App은 기본적으로 JS 파일이다. 하지만 외부 라이브러리나 나의 파일인경우 .js를 생략할 수 있다.
// import App from './App.js';
import reportWebVitals from './reportWebVitals';

///////////////////////////////////////////////
///// Analyzing a Standard React Project //////
///////////////////////////////////////////////

// Index.js here is the first file to execute.

// ReactDOM.createRoot creates basically the main entry point
// the main hook of the overall user interface you are about to build with React.
// It tells React where this React application, this user interface, which you build with React in the end
// should be placed in the web page that is loaded. And that leads us to one other file.
// the index.html file in that public folder
// index.html in publick folder is the single HTML file which is in the end loaded by the browser here.
// because it's a so-called single page application.
// document.getElementById('root')는 public 폴더의 index.html의 "<div id="root"></div>"를 가져온 것이다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// index.html의 "<div id="root"></div>"는 최종적으로 <App />에 랜더링 된다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
