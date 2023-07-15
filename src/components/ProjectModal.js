import { motion } from "framer-motion";
import back_arrow from '../images/arrow-back.svg'
import nourish_modal_thumbnail from '../images/projects/thumbnails/modal/nourish.svg'
import google_play from '../images/google-play-badge.png'
const ProjectModal = ({ project, onClose }) => {
    return (
      <motion.div
      
        className="project-modal"
        
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      > 
        <div  onClick={onClose} className="modal-back">
        <img alt="back arrow" style={{width:'2em' , height:'2em'}} src={back_arrow}/>
        <h1  >back</h1>
        </div>
        <h3>{project.title}</h3>
        <p>{project.full_description}</p>
        <a rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.hanippa.nourish"><img className="google-play" src={google_play} alt="get on google play"/></a>
        <img alt="project modal thumbnail" className="modal-thumbnail" src={nourish_modal_thumbnail}/>
        
      </motion.div>
    );
  };

  export default ProjectModal