

import '../styles/earphonespage.css'
import Category from '../components/category';
import { Link } from 'react-router-dom';

const Earphones = () => {
  return (
    <>
    <div className="headertxt">
        <h1>EARPHONES</h1>
      </div>
    
    <div className='products-model-div'>
      
      
      <div className='speakermodels'>
        <div className='modelimg5'></div>

        <div className='model-desc'>
          <h4>NEW PRODUCT</h4>
          <h1>YX1 WIRELESS EARPHONES</h1>
          <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
          <button>SEE PRODUCT</button>
        </div>
            </div>

    </div>

    <Link to="/headphonespage">
            <Category
              CategoryName={'HEADPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"}
              categoryClass='headphones'
              topPosition={990}
            />
          </Link>

          <Link to="/speakerspage">
            <Category
              CategoryName={'SPEAKERS'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-speaker.jpg"}
              categoryClass='speakers'
              topPosition={1250}
            />
          </Link>

          <Link to="/earphonespage">
            <Category
              CategoryName={'EARPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-earphones.png"}
              categoryClass='earphones'
              topPosition={1490}
            />
          </Link>
    </>
  )
}

export default Earphones

