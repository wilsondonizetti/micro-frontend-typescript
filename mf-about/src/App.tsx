import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    console.log('mount about')
    return () => {
      console.log('cleanup about')      
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.REACT_APP_CONTENT_HOST}/${logo}`} className="App-logo" alt="logo" />
        <h1>Micro Front-end About - React</h1>
      </header>
    </div>
  );
}

export default App;
