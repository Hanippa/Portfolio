
import './styles/style.css';
import Home from './screens/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
