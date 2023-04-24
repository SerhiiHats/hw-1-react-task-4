import logo_react from './images/logo_react.svg';
import logo_html from './images/logo_html.svg';
import logo_css3 from './images/logo_css3.svg';
import github_mark_white from './images/github_mark_white.svg';
import logo_javascript from './images/logo_javascript.svg';
import logo_spring from './images/logo_spring.svg';
import logo_java from './images/logo_java.svg';
import './App.scss';



const arrImg = [logo_html, logo_css3, github_mark_white, logo_javascript, logo_react, logo_java, logo_spring];


// function MyLikeImage() {
//   let index = 0;
//   let i = 0;
//   let timeId;

//   timeId && clearInterval(timeId);

//   timeId = setInterval(() => {
//     index = (index + 1) % arrImg.length;
//     console.log(arrImg[index]);
//     console.log(index);

//   }, 2000);


// }

function MyLikeImage(props) {
  return (
    <img src={props.name} className='App-logo' alt='logo' />
  );
}


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <img src={logo_javascript} className='App-logo' alt="logo" /> */}
        {/* <MyLikeImage name={logo_react} /> */}
        {
          console.log("Hello")}
        {/* {console.log(MyLikeImage())} */}

        <MyLikeImage name={props.name || logo_javascript} />
        {/* <MyLikeImage name={MyLikeImage()} /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
