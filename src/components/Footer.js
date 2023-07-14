import './styles/Footer.css';
const Footer = () => {
    return (
        <div className='footer-container'>
            <i className='flower divider-flower'/>
            <div className='sub-footer-container'>
            <div className='footer-title' >
            <h1 className='footer-item-text'>get in touch ! 💌</h1>
            </div>
            <div className='footer-items'>
            <div className='footer-item footer-item-1' >
            <h1 className='footer-item-text'>phone</h1>
            </div>
            <span>/</span>
            <div className='footer-item footer-item-2' >
            <h1 className='footer-item-text'>linkedin</h1>
            </div>
            <span>/</span>
            <div className='footer-item footer-item-3' >
                
            <h1 className='footer-item-text'>email</h1>
            </div>
            </div>
            </div>
        </div>)
}
export default Footer