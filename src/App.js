import React from 'react';
import './styles/style.css';



import AnimatedRoutes from './components/AnimatedRoutes'
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <div className="App">
     <BrowserRouter >
      <AnimatedRoutes/>
    </BrowserRouter>
    </div>
  );
}

export default App;
