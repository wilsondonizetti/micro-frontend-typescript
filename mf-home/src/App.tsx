import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App(): any {
  useEffect(() => {
    console.log('mount home')
    return () => {
      console.log('cleanup home')      
    }
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.REACT_APP_CONTENT_HOST}/${logo}`} className="App-logo" alt="logo" />
        <h1>Micro Front-end HOME - React</h1>
      </header>
    </div>
  );
}

export default App;
