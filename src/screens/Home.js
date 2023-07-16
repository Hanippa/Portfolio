
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
import nourish_modal_thumbnail from '../images/projects/thumbnails/modal/nourish.svg'
import qrify_modal_thumbnail from '../images/projects/thumbnails/modal/qrify.svg'
import jobspree_modal_thumbnail from '../images/projects/thumbnails/modal/jobspree.svg'

import jobspree_badge from '../images/jobspree-badge.png'
import nourish_badge from '../images/google-play-badge.png'
import qrify_badge from '../images/extention-badge.png'

const Home = () => {
  
    const [modalProject, setModalProject] = useState(null);
    const projects = [
        { id: 1, title: 'nourish', tech:['react native' , 'javascript' , 'expo' , 'html' , 'css' , 'jsx', 'firebase' , 'firestore'], url:'https://play.google.com/store/apps/details?id=com.hanippa.nourish',badge:nourish_badge, description: 'self care mobile app, with routine tracking and community' , logo:nourish_logo , thumbnail : nourish_thumbnail , modal_thumbnail:nourish_modal_thumbnail, full_description:'The ultimate skin care and self-care app that empowers you to create personalized routines, organize them effortlessly, and share inspiration with others. Craft your perfect regimen, curate routines for specific days or events, and explore user-created routines for endless inspiration.Elevate your self-care game with Nourish.'  },
        { id: 2, title: 'jobspree',tech:['django' , 'python' , 'html' , 'css' , 'chat gpt' , 'sqlite', 'nginx' , 'linux' , 'uwsgi' , 'api'], url:'https://jobspree.me/', badge:jobspree_badge, description: 'job search tracker website, with ai interview analysis' , logo:jobspree_logo, thumbnail : jobspree_thumbnail ,  modal_thumbnail:jobspree_modal_thumbnail , full_description : "jobspree changes the way you track and manage your job search journey. by providing insightful charts and analytics to monitor your progress and stay organized. Visualize your progress through interactive charts. jobspree uses to chatgpt to enable an ai interview analysis tool that provides in-depth feedback and assessment on your performance, helping you identify your strengths and areas for improvement." },
        { id: 3, title: 'qrify', tech:['javascript' , 'html' , 'css' , 'api'], url:'https://chrome.google.com/webstore/detail/qrify/fbjmmcebjamddmdonkdkekepaoemdokc',badge:qrify_badge, description: 'qr code generator extention, with code, messages, and images uploading' , logo:qrify_logo, thumbnail : qrify_thumbnail , modal_thumbnail:qrify_modal_thumbnail , full_description:'Unleash the power of QR codes with QRify, the ultimate QR code generator designed exclusively for your browser. Seamlessly create QR codes for URLs, images, code snippets, and messages, QRify revolutionizes the way you connect, share, and communicate online.'  },
      ];
      const handleCardClick = (project) => {
        setModalProject(project);
      };
    
      const handleCloseModal = () => {
        setModalProject(null);
      };


    return (
        <motion.div
        key={'home-animated'}
        exit={{ opacity:0 }}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}>
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