import '../../../styles/zx9.css';
import Category from '../../../components/category';
import { Link } from 'react-router-dom';
const zx9 = () => {
  return (
    <>
     <Link to="/headphonespage">
     <div className='back'>Go Back</div>
     </Link>
    
    <div className="xx99mark-details">
        
       <div className='headphonemodels'>
        <div className='zx9img'></div>

        <div className='x99-model-desc'>
          <h4>NEW PRODUCT</h4>
          <h1>ZX9
SPEAKER</h1>
          <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
        </div>
            </div>
        <div className='price'>
            <p>$ 4,500</p>
            <div className='quantity-cart'>
                <div className='qty'><span className='minus'>-</span>1 <span className='add'>+</span></div> <button>ADD TO CART</button>
            </div>
        </div>
            
        <div className='description'>
            <h3>FEATURES</h3>
            <p>
            Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
             <br/> <br/>

             Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
            </p>

            <div>
                <h3>IN THE BOX</h3>
                <div className='box-items'> 
                    <p><span>2x</span>Speaker Unit</p>
                    <p><span>2x</span>Speaker Cloth Panel</p>
                    <p><span>1x</span>User Manual</p>
                    <p><span>1x</span>3.5mm 5m Audio Cable</p>
                    <p><span>1x</span>10m Optical Cable</p>
                </div>
            </div>

            <div className='product-images'>
                <div className='image1-zx9'></div>
                <div className='image2-zx9'></div>
                <div className='image3-zx9'></div>
            </div>
        </div>    
    </div>

    <div className='recommendation'>
        <div>
            <h3>YOU MAY ALSO LIKE</h3>
            <div className='other-headphones'>
                <div>
                    <div className='zx7'>

                    </div>
                    <h3>ZX7 SPEAKER</h3>

                    <Link to="/zx7">
                      <button>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
            <div className='other-headphones'>
                <div>
                    <div className='zx7-xx99-img'>

                    </div>
                    <h3>XX99 MARK I</h3>
                    <Link to="/xx99mark1">
                      <button>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
            <div className='other-headphones'>
                <div>
                    <div className='xx59-img'>

                    </div>
                    <h3>XX59</h3>
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
              topPosition={4230}
            />
          </Link>

          <Link to="/earphonespage">
            <Category
              CategoryName={'EARPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-earphones.png"}
              categoryClass='earphones'
              topPosition={4480}
            />
          </Link>
    </div>
    </>
  )
}

export default zx9
