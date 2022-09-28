import {Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} className='logo text-center text-md-end pb-4 pb-md-0'>
            <h1>
              <a href='/'>باسل</a>
            </h1>
          </Col>
          <Col xs={12} md={6} className='social text-center text-md-start'>
            <a href='https://twitter.com/basel__sh' target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
            <a href='http://wa.me/970592930742' target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
            <a href='https://www.instagram.com/its.__.basel/' target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href='https://www.facebook.com/basel.h.alsharif/' target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            <a href='https://github.com/Basel-01' target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}