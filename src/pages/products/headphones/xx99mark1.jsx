import '../../../styles/xx99mark1.css';
import Category from '../../../components/category';
import { Link } from 'react-router-dom';
const xx99mark1 = () => {
  return (
    <>
     <Link to="/headphonespage">
     <div className='back'>Go Back</div>
     </Link>
    
    <div className="xx99mark-details">
        
       <div className='headphonemodels'>
        <div className='xx99mark1img'></div>

        <div className='x99-model-desc'>
          <h4>NEW PRODUCT</h4>
          <h1>XX99 Mark I Headphones</h1>
          <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
        </div>
            </div>
        <div className='price'>
            <p>$ 1,750</p>
            <div className='quantity-cart'>
                <div className='qty'><span className='minus'>-</span>1 <span className='add'>+</span></div> <button>ADD TO CART</button>
            </div>
        </div>
            
        <div className='description'>
            <h3>FEATURES</h3>
            <p>
            As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. <br/> <br/>

            From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector. 
            </p>

            <div>
                <h3>IN THE BOX</h3>
                <div className='box-items'> 
                    <p><span>1x</span>Headphone Unit</p>
                    <p><span>2x</span>Replacement Earcups</p>
                    <p><span>1x</span>User Manual</p>
                    <p><span>1x</span>3.5mm 5m Audio Cable</p>
                </div>
            </div>

            <div className='product-images'>
                <div className='image1-mark1'></div>
                <div className='image2-mark1'></div>
                <div className='image3-mark1'></div>
            </div>
        </div>    
    </div>

    <div className='recommendation'>
        <div>
            <h3>YOU MAY ALSO LIKE</h3>
            <div className='other-headphones'>
                <div>
                    <div className='xx99m'>

                    </div>
                    <h3>XX99 MARK II</h3>

                    <Link to="/xx99mark">
                      <button>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
            <div className='other-headphones'>
                <div>
                    <div className='xx99m1-1'>

                    </div>
                    <h3>XX59</h3>
                    <Link to="/xx59">
                      <button>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
            <div className='other-headphones'>
                <div>
                    <div className='xx99m1-2'>

                    </div>
                    <h3>ZX9 SPEAKER</h3>
                    <Link to="/zx9">
                      <button>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
        </div>
        <Link to="/headphonespage">
            <Category
              CategoryName={'HEADPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"}
              categoryClass='headphones'
              topPosition={3980}
            />
          </Link>

          <Link to="/speakerspage">
            <Category
              CategoryName={'SPEAKERS'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-speaker.jpg"}
              categoryClass='speakers'
              topPosition={4240}
            />
          </Link>

          <Link to="/earphonespage">
            <Category
              CategoryName={'EARPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-earphones.png"}
              categoryClass='earphones'
              topPosition={4490}
            />
          </Link>
    </div>
    </>
  )
}

export default xx99mark1
