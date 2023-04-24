import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './index.scss';
import App from './App';

import logo_react from './images/logo_react.svg';
import logo_html from './images/logo_html.svg';
import logo_css3 from './images/logo_css3.svg';
import github_mark_white from './images/github_mark_white.svg';
import logo_javascript from './images/logo_javascript.svg';
import logo_spring from './images/logo_spring.svg';
import logo_java from './images/logo_java.svg';


const arrImg = [logo_html, logo_css3, github_mark_white, logo_javascript, logo_react, logo_java, logo_spring];




const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

MyLikeImage();

function MyLikeImage() {
  let index = 0;
  let timeId;

  timeId && clearInterval(timeId);

  timeId = setInterval(() => {
    index = (index + 1) % arrImg.length;
    // return arrImg[index];
    // console.log(arrImg[index]);
    // console.log(index);

    root.render(
      <App name={arrImg[index]} />
    )


  }, 2000);

}