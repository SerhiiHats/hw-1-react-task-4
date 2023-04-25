import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App/App';

import logo_react from './images/logo_react.svg';
import logo_html from './images/logo_html.svg';
import logo_css3 from './images/logo_css3.svg';
import logo_github_mark_white from './images/github_mark_white.svg';
import logo_javascript from './images/logo_javascript.svg';
import logo_spring from './images/logo_spring.svg';
import logo_java from './images/logo_java.svg';

const arrImg = [logo_html, logo_css3, logo_github_mark_white, logo_javascript, logo_react, logo_java, logo_spring];
const arrDescription = [
  "HTML is a Hypertext Markup Language for text. Needed to place elements on a web page: text, pictures, tables and videos, etc.",
  "CSS is Cascading Style Sheets. The language for describing the appearance of a document written in html. Needed to set colors, fonts, the location of individual blocks and other appearance of web pages.",
  "GitHub is a services collaborative development and project hosting service. With the help of GitHub, an unlimited number of programmers from anywhere in the world can work on the project code.",
  "JavaScript is a programming language used as an embeddable language for accessing application objects. It is widely used in browsers as a scripting language for creating interactive web pages.",
  "React is a JavaScript language library for developing user interfaces. It helps to quickly and easily implement reactivity - the phenomenon when, in response to a change in one element, everything else changes.",
  "Java is a programming language that can work with complex datasets and large amounts of data in real time. Primarily used to create server applications.",
  "Spring is a framework for the Java language. It is necessary for fast and convenient design and creation of applications. Spring can be used as a foundation for many different applications."
]

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);

document.querySelector('.container').addEventListener("click", e => {
  if (e.target.className !== "menu") {
    return;
  }
  const str = e.target.id;
  const index = Number(str.match(/\d+/)[0]);
  root.render(
    <App name={arrImg[index]} description={arrDescription[index]} />
  );
});