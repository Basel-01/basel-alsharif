import {useState, useEffect} from 'react'
export default function ScrollToTop() {

  let [scrollToTopBtn, setScrollToTopBtn] = useState(false)

  useEffect(() => {
    function handelScrollBtn() {
      window.scrollY >= 800 ? setScrollToTopBtn(true) : setScrollToTopBtn(false)
    }
    window.addEventListener("scroll", handelScrollBtn)
    return () => {
      window.removeEventListener("scroll", handelScrollBtn);
    };
  }, [])

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button className={scrollToTopBtn ? "scroll-btn show" : "scroll-btn"} onClick={scrollUp}>
      <i className="fa-sharp fa-solid fa-jet-fighter-up"></i>
    </button>
  )
}