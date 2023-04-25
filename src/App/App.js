import logo_react from '../images/logo_react.svg';
import logo_html from '../images/logo_html.svg';
import logo_css3 from '../images/logo_css3.svg';
import github_mark_white from '../images/github_mark_white.svg';
import logo_javascript from '../images/logo_javascript.svg';
import logo_spring from '../images/logo_spring.svg';
import logo_java from '../images/logo_java.svg';
import './App.scss';


const arrImg = [logo_html, logo_css3, github_mark_white, logo_javascript, logo_react, logo_java, logo_spring];

function MyLikeImage(props) {
  return (
    <img src={props.name || logo_html} className='App-logo' alt='logo' />
  );
}

function MyLikeDescription(props) {
  return (
    <p> {props.description || "HTML is a Hypertext Markup Language for text. Needed to place elements on a web page: text, pictures, tables and videos, etc."}</p>
  );

}


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <MyLikeImage name={props.name} />
        <MyLikeDescription description={props.description} />
      </header>
    </div>
  );
}

export default App;
