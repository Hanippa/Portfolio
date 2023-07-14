
import nourish_thumbnail from '../images/projects/thumbnails/nourish.svg'
import qrify_thumbnail from '../images/projects/thumbnails/qrify.svg'
import jobspree_thumbnail from '../images/projects/thumbnails/jobspree.svg'

import nourish_logo from '../images/projects/logos/nourish.svg'
import qrify_logo from '../images/projects/logos/qrify.svg'
import jobspree_logo from '../images/projects/logos/jobspree.svg'
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion'
import ProjectModal from '../components/ProjectModal'

const Home = () => {
    const [modalProject, setModalProject] = useState(null);
    const projects = [
        { id: 1, title: 'nourish', description: 'self care mobile app, with routine tracking and community' , logo:nourish_logo , thumbnail : nourish_thumbnail  },
        { id: 2, title: 'jobspree', description: 'job search tracker website, with ai interview analysis' , logo:jobspree_logo, thumbnail : jobspree_thumbnail  },
        { id: 3, title: 'qrify', description: 'qr code generator extention, with code, messages, and images uploading' , logo:qrify_logo, thumbnail : qrify_thumbnail  },
      ];
      const handleCardClick = (project) => {
        setModalProject(project);
      };
    
      const handleCloseModal = () => {
        setModalProject(null);
      };

    return (
        <motion.div       initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <div className="main-section-container">
        <h1 className="main-title">hi, i’m dekel ! <i className='flower'/><br/>a full stack developer</h1>
        </div>
        <div className="projects-section-container">
            <i className='flower divider-flower-project'/>
            {projects.map((project) => {
                return (<ProjectCard onPress={() => handleCardClick(project)} key={project.id} logo={project.logo} image={project.thumbnail} name={project.title} description={project.description}/>)
            })}
        <AnimatePresence>
        {modalProject && (
            <div className='project-modal-overlay'>
<ProjectModal project={modalProject} onClose={handleCloseModal} />
            </div>
          
        )}
      </AnimatePresence>
        </div>
        </motion.div>
       
    )
};

export default Home;