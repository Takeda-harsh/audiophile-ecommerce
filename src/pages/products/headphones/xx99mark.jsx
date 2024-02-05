import '../../../styles/xx99mark.css';
import Category from '../../../components/category';
import { Link } from 'react-router-dom';
const xx99mark = () => {
  return (
    <>
     <Link to="/headphonespage">
     <div className='back'>Go Back</div>
     </Link>
    
    <div className="xx99mark-details">
        
       <div className='headphonemodels'>
        <div className='modelimg'></div>

        <div className='x99-model-desc'>
          <h4>NEW PRODUCT</h4>
          <h1>XX99 Mark II Headphones</h1>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
        </div>
            </div>
        <div className='price'>
            <p>$ 2,999</p>
            <div className='quantity-cart'>
                <div className='qty'><span className='minus'>-</span>1 <span className='add'>+</span></div> <button>ADD TO CART</button>
            </div>
        </div>
            
        <div className='description'>
            <h3>FEATURES</h3>
            <p>
            Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. <br/> <br/>

            The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic. 
            </p>

            <div>
                <h3>IN THE BOX</h3>
                <div className='box-items'> 
                    <p><span>1x</span>Headphone Unit</p>
                    <p><span>2x</span>Replacement Earcups</p>
                    <p><span>1x</span>User Manual</p>
                    <p><span>1x</span>3.5mm 5m Audio Cable</p>
                    <p><span>1x</span>Travel Bag</p>
                </div>
            </div>

            <div className='product-images'>
                <div className='image1'></div>
                <div className='image2'></div>
                <div className='image3'></div>
            </div>
        </div>    
    </div>

    <div className='recommendation'>
        <div>
            <h3>YOU MAY ALSO LIKE</h3>
            <div className='other-headphones'>
                <div>
                    <div className='xx99m1'>

                    </div>
                    <h3>XX99 MARK I</h3>
                    <button>SEE PRODUCT</button>
                </div>
            </div>
            <div className='other-headphones'>
                <div>
                    <div className='xx99m1-1'>

                    </div>
                    <h3>XX59</h3>
                    <button>SEE PRODUCT</button>
                </div>
            </div>
            <div className='other-headphones'>
                <div>
                    <div className='xx99m1-2'>

                    </div>
                    <h3>XX99 MARK I</h3>
                    <button>SEE PRODUCT</button>
                </div>
            </div>
        </div>
        <Link to="/headphonespage">
            <Category
              CategoryName={'HEADPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"}
              categoryClass='headphones'
              topPosition={4020}
            />
          </Link>

          <Link to="/speakerspage">
            <Category
              CategoryName={'SPEAKERS'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-speaker.jpg"}
              categoryClass='speakers'
              topPosition={4280}
            />
          </Link>

          <Link to="/earphonespage">
            <Category
              CategoryName={'EARPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-earphones.png"}
              categoryClass='earphones'
              topPosition={4530}
            />
          </Link>
    </div>
    </>
  )
}

export default xx99mark
