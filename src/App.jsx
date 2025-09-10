import ScrollLinked from './Components/ScrollView'
import HeroSection from './Pages/Home'
import ProjectsSection from './Pages/Projects'
import AboutSection from './Pages/About'
import Navbar from './Components/NavBar'
import BookingForm from './Components/BookingForm'
import Footer from './Components/Footer'
import HeaderImage from './Components/HeaderImage'




function App() {

  return (
    <>
      <HeaderImage/>
       <Navbar/>
       <HeroSection />
       <ProjectsSection />
       <AboutSection />
       <BookingForm/>
       <Footer/>
    </>
  )
}

export default App
