

import '../styles/speakerspage.css'
import Category from '../components/category';
import { Link } from 'react-router-dom';

const Speakers = () => {
  return (
    <>
    <div className="headertxt">
        <h1>SPEAKERS</h1>
      </div>
    
    <div className='products-model-div'>
      
      
      <div className='speakermodels'>
        <div className='modelimg3'></div>

        <div className='model-desc'>
          <h4>NEW PRODUCT</h4>
          <h1>ZX9
speaker</h1>
          <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <button>SEE PRODUCT</button>
        </div>
            </div>

      <div className='headphonemodels'>
        <div className='modelimg4'></div>

        <div className='model-desc'>
        
          <h1>ZX7
SPEAKER</h1>
          <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>
      
    </div>

    <Link to="/headphonespage">
            <Category
              CategoryName={'HEADPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"}
              categoryClass='headphones'
              topPosition={1660}
            />
          </Link>

          <Link to="/speakerspage">
            <Category
              CategoryName={'SPEAKERS'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-speaker.jpg"}
              categoryClass='speakers'
              topPosition={1920}
            />
          </Link>

          <Link to="/earphonespage">
            <Category
              CategoryName={'EARPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-earphones.png"}
              categoryClass='earphones'
              topPosition={2170}
            />
          </Link>
    </>
  )
}

export default Speakers

