import {useState, useEffect} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import rocket from '../imgs/rocket.svg'

export default function Banner() {

  let [text, setText] = useState("")
  let [isDeleting, setIsDeleting] = useState(false)
  let word = "مطور واجهات امامية"
  let [duration, setDuration] = useState(300 - Math.random() * 100)
  let period = 1000

  useEffect(() => {

    let ticker = setInterval(() => {
      tick()
    }, duration)

    function tick() {
      let updatedText = isDeleting ? word.substring(0, text.length - 1) : word.substring(0, text.length + 1)
      setText(updatedText)
      if(isDeleting) {
        setDuration(prevDuration => prevDuration / 2)
      }
      if(!isDeleting && updatedText === word) {
        setIsDeleting(true)
        setDuration(period)
      }
      else if(isDeleting && updatedText === "") {
        setIsDeleting(false)
        setDuration(500)
      }
    }

    return () => {clearInterval(ticker)}
  }, [text])

  const handelHover = (event) => {
    let btn = document.querySelector(".contact")
    let x = event.pageX - btn.offsetLeft;
    let y = event.pageY - btn.offsetTop;
    btn.style.setProperty("--left-value", `${x}px`)
    btn.style.setProperty("--top-value", `${y}px`)
  }

  return (
    <main id="banner" className='d-flex justify-content-center align-items-center'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={8} lg={8} className='banner-text'>
            <span>مرحبا ، انا</span>
            <h1>باسل الشريف <span>{text}</span></h1>
            <p>مطور واجهات امامية وعندي شغف كبير لتعلم كل مايخص تطوير تطبيقات الويب</p>
            <a href="mailto:basel.lo0o87@gmail.com" className='button contact' onMouseEnter={handelHover}><span className='px-1'>للتواصل</span><i className="fa-solid fa-envelope px-1"></i></a>
          </Col>
          <Col md={4} lg={4} className="d-none d-md-block">
            <div className='rocket-container'>
              <img src={rocket} alt="rocket"></img>
              <div className='circles'>
                <span className='yellow'></span>
                <span className='red'></span>
                <span className='blue'></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}