import React from 'react';
import './styles/style.css';
import { useEffect } from 'react';


import AnimatedRoutes from './components/AnimatedRoutes'
import { BrowserRouter } from 'react-router-dom';
function App() {

  useEffect(() => {
    document.title = 'dekel matslich';
  }, []);

  return (
    <div className="App">
     <BrowserRouter >
      <AnimatedRoutes/>
    </BrowserRouter>
    </div>
  );
}

export default App;
