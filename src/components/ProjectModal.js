import { motion } from "framer-motion";
import back_arrow from '../images/arrow-back.svg'
const ProjectModal = ({ project, onClose }) => {
    return (
      <motion.div
      
        className="project-modal"
        
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      > 
        <div  onClick={onClose} className="modal-back">
        <img alt="back arrow" style={{width:'1em' , height:'1em'}} src={back_arrow}/>
        <h3>back</h3>
        </div>
        <div className='modal-title'>
        <h3>{project.title}</h3>
        <img alt="modal logo" src={project.logo} className="modal-logo"/>
        </div>
   
        <div className="modal-description">
        <p>{project.full_description}</p>
        </div>
    
        <div className="chip-container">
          {project.tech.map((tech => {
            return (<span className="chip">{tech}</span>)
          }))}
                
                </div>
        <a rel="noreferrer" target="_blank" href={project.url}><img className="badge" src={project.badge} alt="get project"/></a>
        <img alt="project modal thumbnail" className="modal-thumbnail" src={project.modal_thumbnail}/>
        
      </motion.div>
    );
  };

  export default ProjectModal