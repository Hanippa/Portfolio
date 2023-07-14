import './styles/Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
<div className='nav-container'>
    <div className='nav-logo'>
    <h1>dekel matslich <i className='flower'/></h1>
    </div>
    <div className='nav-items'>
    <div className='nav-item nav-item-1 nav-selected' >
        <div className='nav-item-background'></div>
        <Link  to="/"><h1 className='nav-item-text'>home /</h1></Link>
    </div>
    <div className='nav-item nav-item-2' >
    <div className='nav-item-background'></div>
    <Link to="/about"><h1 className='nav-item-text'>about /</h1></Link>
    </div>
    <div className='nav-item nav-item-3 ' >
    <div className='nav-item-background'></div>
    <Link to="/resume"><h1 className='nav-item-text'>resume /</h1></Link>
    </div>
    </div>
</div>)
}
export default Nav