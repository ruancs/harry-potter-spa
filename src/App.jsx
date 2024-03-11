
import Card from './components/card'
import './styles/main.scss'
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";

function App() {
  return (
    <>
      <header>
        <img src='/public/hp.png' className='hp-logo'></img>
        <h1>Harry Potter characters</h1>
      </header>

      <main className='content-main'>
        <Card/> 
      </main>

      <footer>
        <p>made by <a href="https://github.com/ruancs" target="_blank">RuanCS</a></p>
        <a href="https://www.instagram.com/ruanksc/">
           <RiInstagramFill size="2em" />
        </a>
      <a href='https://www.linkedin.com/in/ruancsc/'>
        <FaLinkedin size="2em"/>
      </a>
      </footer>
     
    </>
  )
}

export default App
