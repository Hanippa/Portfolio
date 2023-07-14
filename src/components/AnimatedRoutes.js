import Home from '../screens/Home';
import About from '../screens/About'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';
import Resume from '../screens/Resume';


import { Route, Routes , useLocation, redirect } from 'react-router-dom';

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        
<>
        <div className='background'>
        <div className='background-circle background-circle-1'></div>
        <div className='background-circle background-circle-2'></div>
        </div>
      <Nav/>
<AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <redirect from="/resume" to="../resume.pdf" />
      </Routes>
      </AnimatePresence>
      <Footer/>
      </>
       
    )
}
export default AnimatedRoutes