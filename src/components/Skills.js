import {Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export default function Skills() {

  let skillsData = [
    {
      icon: "fa-brands fa-html5",
      iconColor: "#e34c26",
      text: "HTML",
    },
    {
      icon: "fa-brands fa-css3-alt",
      iconColor: "#264de4",
      text: "CSS",
    },
    {
      icon: "fa-brands fa-square-js",
      iconColor: "#f7df1e",
      text: "JavaScript",
    },
    {
      icon: "fa-brands fa-react",
      iconColor: "#61dbfb",
      text: "React",
    },
    {
      icon: "fa-brands fa-bootstrap",
      iconColor: "#563d7c",
      text: "Bootstrap",
    },
    {
      icon: "fa-brands fa-sass",
      iconColor: "#cd6799",
      text: "Sass",
    },
    {
      icon: "fa-brands fa-git-alt",
      iconColor: "#f44d27",
      text: "Git",
    }
  ]
  
  return (
    <section id="skills">
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
            <h3 className={isVisible ? "section-header animate__animated animate__heartBeat" : "section-header"}>مهاراتي</h3>
          }
        </TrackVisibility>
        <Row className='align-items-center justify-content-center'>
          {
            skillsData.map((skill, index) => {
              return (
                <Col key={index} xs={12} sm={6} md={3} className="pb-4">
                  <div className='skill'>
                      <i className={skill.icon} style={{color: skill.iconColor}}></i>
                    <p>{skill.text}</p>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}