import './styles/ProjectCard.css';
const ProjectCard = ({name , description , image}) => {
    return (
        <div className='project-container'>
            <div className='project-container-left' >
            <div className='project-container-text'>
            <h1 className="project-name">{name}</h1>
            <p className="project-description">{description}</p>
            </div>
            </div>
            <div className='project-container-right' >
            <img className='project-container-image' src={image} alt='project thumbnail'/>
                </div>
        </div>
    )
};

export default ProjectCard;