import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch('/api/domodedovo/hello');
      const resData = await response.json();
      setData(resData)
    }

    fetchData();
  }, []);

  if(!data){
    return (<p>Loading...</p>)
  }

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
          Learn React - Hello3
        </a>
      </header>
    </div>
  );
}

export default App;
