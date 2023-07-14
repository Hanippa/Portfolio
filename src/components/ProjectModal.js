import { motion } from "framer-motion";
const ProjectModal = ({ project, onClose }) => {
    return (
      <motion.div
        className="project-modal"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button onClick={onClose}>Close</button>
      </motion.div>
    );
  };

  export default ProjectModal