import {useEffect, useState} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {

  document.body.setAttribute("dir","rtl")

  let [isMenuClicked, setIsMenuClicked] = useState(false)

  function handleClick() {
    setIsMenuClicked(!isMenuClicked)
  }

  let [darkMode, setDarkMode] = useState(true)

  function handleTheme(theme) {
    theme === "dark" ? setDarkMode(true) : setDarkMode(false)
  }

  useEffect(() => {
    darkMode ? document.body.classList.remove("white-theme-variables") : document.body.classList.add("white-theme-variables")
  }, [darkMode])

  return (
    <nav id='navbar'>
      <Container>
        <Row className='align-items-center justify-content-between'>
          <Col xs={5} sm={3} md={2} className='logo'>
            <h1>
              <a href='/'>باسل</a>
            </h1>
          </Col>
          <Col xs={5} sm={7} md={3} lg={4}>
            <div className='theme text-center'>
              <span className={darkMode ? "active" : ""} onClick={() => handleTheme("dark")}><i className="fa-solid fa-moon"></i></span>
              <span className={darkMode ? "" : "active"} onClick={() => handleTheme("light")}><i className="fa-solid fa-sun"></i></span>
            </div>
          </Col>
          <Col xs={2} className='d-block d-md-none'>
            <div className={isMenuClicked ? 'menu me-auto close' : 'menu me-auto'} onClick={handleClick}>
              <span></span>
              <span></span>
            </div>
          </Col>
          <Col md={7} lg={6} className={isMenuClicked ? 'nav-content active' : 'nav-content'}>
            <Row className='align-items-center'>
              <Col sm={12} md={5} lg={6} className='social text-center text-md-start'>
                <a href='https://twitter.com/basel__sh' target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a href='http://wa.me/970592930742' target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                <a href='https://www.instagram.com/its.__.basel/' target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href='https://www.facebook.com/basel.h.alsharif/' target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                <a href='https://github.com/Basel-01' target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
              </Col>
              <Col sm={12} md={7} lg={6} className='links text-start'>
                <a href='#banner' className="active">من انا</a>
                <a href='#skills'>مهاراتي</a>
                <a href='#projects'>اعمالي</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}