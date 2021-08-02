import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  React.useEffect(() => {
    console.log('WEB ENGAGE SETUP')
    
    window.webengage.onReady(function () {
      window.webengage.webpush.prompt()
    })

    window.webengage.onReady(function () {
      window.webengage.webpush.onSubscribe(function () {
        alert('Thanks! You are now subscribed')
      })
    })
  }, [])

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
