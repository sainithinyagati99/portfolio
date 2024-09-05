import Navbar from "./components/navbar";
import About from './components/about'
import Projects from './components/projects';
import Skills from './components/skills';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer'

function App() {
  return (
    <>
    <div className='w-full absolute bg-gradient-to-r from-black to-gray-500'>
    <body class="flex flex-col min-h-screen">
    <Navbar/>
    <div id="about"><About/></div>
    <div id="projects"><Projects/></div>
    <div id="experience"><Experience/></div>
    <div id="contact"><Contact/></div>
    </body>
    <Footer/>
    </div>
    </>
  )
}

export default App