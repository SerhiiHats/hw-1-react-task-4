import logo_html from '../images/logo_html.svg';
import './App.scss';


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
