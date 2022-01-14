import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import React from "react";
import NameList from "./components/namelist/NameList";

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>*/

      /*<div>
        <h1 className="mt-1 mb-3 text-danger">This is JSX Heading 1</h1>
        <ul>
          <li className="text-light">List Item 1</li>
          <li className="text-warning">List Item 2</li>
          <li className="text-success">List Item 3</li>
          <li className="text-primary">List Item 4</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet, nostrum perspiciatis quae quam rem rerum sapiente temporibus veritatis voluptates. Animi dignissimos dolor earum exercitationem laboriosam natus quam ullam voluptate.</p>
      </div>*/

    <div>
        <h1 className="mt-1 mb-3 text-danger">This is JSX Heading 1</h1>
        <NameList/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet, nostrum perspiciatis quae quam rem rerum sapiente temporibus veritatis voluptates. Animi dignissimos dolor earum exercitationem laboriosam natus quam ullam voluptate.</p>
    </div>
  );
}

export default App;
