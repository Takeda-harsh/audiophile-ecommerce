import '../styles/headphonespage.css'
import Category from '../components/category';
import { Link } from 'react-router-dom';

const Headphones = () => {
  return (
    <>
    <div className="headertxt">
        <h1>HEADPHONES</h1>
      </div>
    
    <div className='products-model-div'>
      
      
      <div className='headphonemodels'>
        <div className='modelimg'></div>

        <div className='model-desc'>
          <h4>NEW PRODUCT</h4>
          <h1>XX99 Mark II Headphones</h1>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <button>SEE PRODUCT</button>
        </div>
            </div>

      <div className='headphonemodels'>
        <div className='modelimg1'></div>

        <div className='model-desc'>
        
          <h1>XX99 Mark I Headphones</h1>
          <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>
      <div className='headphonemodels'>
        <div className='modelimg2'></div>

        <div className='model-desc'>
        
          <h1>XX59 Headphones</h1>
          <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>

    <Link to="/headphonespage">
            <Category
              CategoryName={'HEADPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"}
              categoryClass='headphones'
              topPosition={2420}
            />
          </Link>

          <Link to="/speakerspage">
            <Category
              CategoryName={'SPEAKERS'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-speaker.jpg"}
              categoryClass='speakers'
              topPosition={2650}
            />
          </Link>

          <Link to="/earphonespage">
            <Category
              CategoryName={'EARPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-earphones.png"}
              categoryClass='earphones'
              topPosition={2920}
            />
          </Link>
    </>
  )
}

export default Headphones
