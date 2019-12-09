import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalHeader from "./components/functional-header";
import ClassFooter from "./components/class-footer";
import ClassToggle from "./components/class-toggle";
import ClassTimer from "./components/class-timer";

const App: React.FC = () => {
  return (
    <div className="App">
      <FunctionalHeader name="functional header component"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Below are 2 Examples from Official React documentation -
        </p>
        <ul>
          <li>Simple toggle button: <ClassToggle/></li>
          <li>Simple timer: <ClassTimer/></li>
        </ul>
      </header>
      <ClassFooter text="class footer component"/>
    </div>
  );
}

export default App;
