import './styles/Nav.css';
const Nav = () => {
    return (
<div className='nav-container'>
    <div className='nav-logo'>
    <h1>dekel matslich</h1>
    </div>
    <div className='nav-items'>
    <div className='nav-item nav-item-1' >
    <h1 className='nav-item-text'>home</h1>
    </div>
    <div className='nav-item nav-item-2' >
    <h1 className='nav-item-text'>about</h1>
    </div>
    <div className='nav-item nav-item-3' >
    <h1 className='nav-item-text'>resume</h1>
    </div>
    </div>
</div>)
}
export default Nav