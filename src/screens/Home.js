import ProjectCard from '../components/ProjectCard';
import nourish_thumbnail from '../images/projects/thumbnails/nourish.svg'
import qrify_thumbnail from '../images/projects/thumbnails/qrify.svg'
import jobspree_thumbnail from '../images/projects/thumbnails/jobspree.svg'

const Home = () => {
    return (
        <>
        <div className="main-section-container">
        <h1 className="main-title">hi, i’m dekel ! 🌷<br/>a full stack developer</h1>
        </div>
        <div className="projects-section-container">
            <ProjectCard image={nourish_thumbnail} name="nourish" description="self care app"/>
            <ProjectCard image={jobspree_thumbnail} name="jobspree" description="job search tracker website"/>
            <ProjectCard image={qrify_thumbnail} name="qrify" description="qr code generator extention"/>
        </div>
        </>
    )
};

export default Home;