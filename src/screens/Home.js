
import nourish_thumbnail from '../images/projects/thumbnails/nourish.svg'
import qrify_thumbnail from '../images/projects/thumbnails/qrify.svg'
import jobspree_thumbnail from '../images/projects/thumbnails/jobspree.svg'

import nourish_logo from '../images/projects/logos/nourish.svg'
import qrify_logo from '../images/projects/logos/qrify.svg'
import jobspree_logo from '../images/projects/logos/jobspree.svg'
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion , AnimatePresence } from 'framer-motion';
import ProjectModal from '../components/ProjectModal'

const Home = () => {
    const [modalProject, setModalProject] = useState(null);
    const projects = [
        { id: 1, title: 'nourish', description: 'self care mobile app, with routine tracking and community' , logo:nourish_logo , thumbnail : nourish_thumbnail , full_desctiption:'The ultimate skin care and self-care app that empowers you to create personalized routines, organize them effortlessly, and share inspiration with others. Craft your perfect regimen with our vast selection of products, curate routines for specific days or events, and explore user-created routines for endless inspiration.Elevate your self-care game with Nourish.'  },
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
            <i className='star star-1'/>
            <i className='star star-2'/>
            <i className='star star-3'/>
            <i className='star star-4'/>
            <i className='star star-5'/>
            <i className='star star-6'/>
            <i className='star star-7'/>
            <i className='star star-8'/>
            <i className='star star-9'/>
            <i className='star star-10'/>
            
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