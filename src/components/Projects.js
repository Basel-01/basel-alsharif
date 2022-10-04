import {useState, useEffect} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import projectsData from './projectsData';

export default function Projects() {

  let [showAll, setShowAll] = useState(false)
  let [projectsSlice, setProjectsSlice] = useState(projectsData.slice(0,8))

  function projectsLoad () {
    setShowAll(prevShowAll => !prevShowAll)
  }

  useEffect(() => {
    showAll ? setProjectsSlice(projectsData) : setProjectsSlice(prevprojectsSlice => projectsData.slice(0,8))
  }, [showAll])

  return (
    <section id="projects">
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
            <h3 className={isVisible ? "section-header animate__animated animate__heartBeat" : "section-header"}>اعمالي</h3>
          }
        </TrackVisibility>
        <Row className='align-items-center justify-content-center'>
          {
            projectsSlice.map((project, projectIndex) => {
              return (
                <Col key={projectIndex} md={12} lg={6} className="pb-5">
                  <div className='project'>
                    <a href={project.projectUrl} target="_blank" rel="noreferrer">
                      <div className='project-image' style={{backgroundImage: `url(${project.projectBg})`}}></div>
                      <div className='project-desc'>
                        <p>{project.projectName}</p>
                        <div className='techs'>
                          {
                            project.techs.map((tech, techIndex) => {
                              return (
                                <i key={techIndex} className={tech.icon} style={{color: tech.iconColor}}></i>
                              )
                            })
                          }
                        </div>
                      </div>
                    </a>
                  </div>
                </Col>
              )
            })
          }
        </Row>
        <button className='button' onClick={projectsLoad}>
          {
            showAll ?
            <><span className='px-1'>اظهار مشاريع اقل</span><i className="fa-solid fa-arrow-up px-1"></i></>
            :
            <><span className='px-1'>اظهار جميع المشاريع</span><i className="fa-solid fa-arrow-down px-1"></i></>
          }
        </button>
      </Container>
    </section>
  )
}