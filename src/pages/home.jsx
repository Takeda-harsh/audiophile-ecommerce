import '../styles/home.css';
import Category from '../components/category';
import Hero from '../components/hero';
import SpeakerZX9 from '../components/SpeakerZX9';
import SpeakerZX7 from '../components/SpeakerZX7';
import EarphonesYX1 from '../components/EarphonesYX1';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <div className="home-container">
        <Hero className="hero" />
        
        <div className="categories-container">
          <Link to="/headphonespage">
            <Category
              CategoryName={'HEADPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"}
              categoryClass='headphones'
            />
          </Link>

          <Link to="/speakerspage">
            <Category
              CategoryName={'SPEAKERS'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-speaker.jpg"}
              categoryClass='speakers'
            />
          </Link>

          <Link to="/earphonespage">
            <Category
              CategoryName={'EARPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-earphones.png"}
              categoryClass='earphones'
            />
          </Link>
        </div>

       
        <SpeakerZX9 />
        <SpeakerZX7 />
        <EarphonesYX1 />
      </div>
    </>
  );
};

export default Home;
