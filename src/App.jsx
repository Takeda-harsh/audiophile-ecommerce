
import './App.css'
import NavBar from './components/NavBar'
import SpeakerZX9 from './components/SpeakerZX9'
import SpeakerZX7 from './components/SpeakerZX7'
import Category from './components/category'
import Hero from './components/hero'
import EarphonesYX1 from './components/EarphonesYX1'
import Mission from './components/Mission'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <NavBar/>
      <Hero/>

      <Category CategoryName={'HEADPHONES'} 
      imageSrc={"../resources/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"}
      categoryClass='headphones'/>

      <Category 
      CategoryName={'SPEAKERS'} 
      imageSrc={"../resources/assets/shared/mobile/image-zx9-speaker.jpg"}
      categoryClass='speakers'
      />
      <Category 
      CategoryName={'EARPHONES'} 
      imageSrc={"../resources/assets/shared/mobile/image-zx9-earphones.png"}
      categoryClass='earphones'
      />

      <SpeakerZX9/>
      <SpeakerZX7/>
      <EarphonesYX1/>
      <Mission/>
      <Footer/>
      
    </>
  )
}

export default App
