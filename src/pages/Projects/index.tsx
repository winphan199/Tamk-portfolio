import ProjectWrappers from '~/components/ProjectsWrapper';
import SideBar from '~/components/SideBar';

function Projects() {
  return (
    <div>
      {/* SideBar */}
      <SideBar />
      {/* Projects show here */}
      <ProjectWrappers />
    </div>
  );
}

export default Projects;
