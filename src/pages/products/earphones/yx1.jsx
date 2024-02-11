import '../../../styles/yx1.css';
import Category from '../../../components/category';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
const Yx1 = () => {
    // const history = useHistory();
    
    // const goBack = () => {
    //     history.goBack();
    //   };
  return (
    <>
{/*      
     <div className='back' onClick={goBack}>Go Back</div> */}
     
    
    <div className="xx99mark-details">
        
       <div className='headphonemodels'>
        <div className='yx1img'></div>

        <div className='x99-model-desc'>
          <h4>NEW PRODUCT</h4>
          <h1>YX1 WIRELESS
EARPHONES</h1>
          <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
        </div>
            </div>
        <div className='price'>
            <p>$ 599</p>
            <div className='quantity-cart'>
                <div className='qty'><span className='minus'>-</span>1 <span className='add'>+</span></div> <button>ADD TO CART</button>
            </div>
        </div>
            
        <div className='description'>
            <h3>FEATURES</h3>
            <p>
            Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound
             <br/> <br/>

             The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
            </p>

            <div>
                <h3>IN THE BOX</h3>
                <div className='box-items'> 
                    <p><span>2x</span>Earphone Unit</p>
                    <p><span>6x</span>Multi-size Earplugs</p>
                    <p><span>1x</span>User Manual</p>
                    <p><span>1x</span>USB-C Cable</p>
                    <p><span>1x</span>Travel Pouch</p>
                </div>
            </div>

            <div className='product-images'>
                <div className='image1-yx1'></div>
                <div className='image2-yx1'></div>
                <div className='image3-yx1'></div>
            </div>
        </div>    
    </div>

    <div className='recommendation'>
        <div>
            <h3>YOU MAY ALSO LIKE</h3>
            <div className='other-headphones'>
                <div>
                    <div className='yx1-xx99-img'>

                    </div>
                    <h3>XX99 MARK I</h3>

                    <Link to="/xx99mark1">
                      <button>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
            <div className='other-headphones'>
                <div>
                    <div className='yx1-xx59-img'>

                    </div>
                    <h3>XX59</h3>
                    <Link to="/xx59">
                      <button>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
            <div className='other-headphones'>
                <div>
                    <div className='yx1-zx9-img'>

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
              topPosition={4010}
            />
          </Link>

          <Link to="/speakerspage">
            <Category
              CategoryName={'SPEAKERS'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-speaker.jpg"}
              categoryClass='speakers'
              topPosition={4250}
            />
          </Link>

          <Link to="/earphonespage">
            <Category
              CategoryName={'EARPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-earphones.png"}
              categoryClass='earphones'
              topPosition={4520}
            />
          </Link>
    </div>
    </>
  )
}

export default Yx1
