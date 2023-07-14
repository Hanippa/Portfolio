import './styles/ProjectCard.css';
const ProjectCard = ({name , description , image , logo , onPress}) => {
    return (
        <div className='project-container' onClick={onPress}>
            <div className='project-container-left' >
            <div className='project-container-text'>
            <h1 className="project-name">{name} <img className='project-logo' src={logo} alt='project logo'/> </h1>
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