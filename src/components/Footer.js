import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className='social text-center'>
          <a href='https://twitter.com/basel__sh' target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
          <a href='http://wa.me/970592930742' target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
          <a href='https://www.instagram.com/its.__.basel/' target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href='https://www.facebook.com/basel.h.alsharif/' target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
          <a href='https://github.com/Basel-01' target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
        </div>
      </Container>
    </footer>
  )
}