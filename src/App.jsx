
import './App.css'
import NavBar from './components/NavBar'
import SpeakerZX9 from './components/SpeakerZX9'
import Category from './components/category'
import Hero from './components/hero'

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
      
    </>
  )
}

export default App
