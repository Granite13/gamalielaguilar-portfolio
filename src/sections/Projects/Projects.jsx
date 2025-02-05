import styles from './ProjectsStyles.module.css';
import homepanel from '../../assets/Home Panel.png';
import smartlocker from '../../assets/Smart Locker.png';
import rfid from '../../assets/RFID.png';
import ssgevs from '../../assets/EVS.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={homepanel}
        
          h3="HOME Panel"
          p="Home Automation App"
        />
        <ProjectCard
          src={smartlocker}
         
          h3="Smart Locker"
          p="Machine Learning System"
        />
        <ProjectCard
          src={rfid}
        
          h3="RFID Attendance System"
          p="Attendance Desktop App"
        />
        <ProjectCard
          src={ssgevs}
         
          h3="SSG Election Voting System"
          p="Voting System Desktop App"
        />
      </div>
    </section>
  );
}

export default Projects;
