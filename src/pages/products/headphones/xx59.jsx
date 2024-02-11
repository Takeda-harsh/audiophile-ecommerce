import '../../../styles/xx59.css';
import Category from '../../../components/category';
import { Link } from 'react-router-dom';
const xx59 = () => {
  return (
    <>
     <Link to="/headphonespage">
     <div className='back'>Go Back</div>
     </Link>
    
    <div className="xx99mark-details">
        
       <div className='headphonemodels'>
        <div className='xx59img'></div>

        <div className='x99-model-desc'>
          <h4>NEW PRODUCT</h4>
          <h1>XX59
Headphones</h1>
          <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
        </div>
            </div>
        <div className='price'>
            <p>$ 899</p>
            <div className='quantity-cart'>
                <div className='qty'><span className='minus'>-</span>1 <span className='add'>+</span></div> <button>ADD TO CART</button>
            </div>
        </div>
            
        <div className='description'>
            <h3>FEATURES</h3>
            <p>
            These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
             <br/> <br/>

             More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C. 
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
                <div className='image1-xx59'></div>
                <div className='image2-xx59'></div>
                <div className='image3-xx59'></div>
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
                    <h3>XX99 MARK I</h3>
                    <Link to="/xx99mark1">
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
              topPosition={3960}
            />
          </Link>

          <Link to="/speakerspage">
            <Category
              CategoryName={'SPEAKERS'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-speaker.jpg"}
              categoryClass='speakers'
              topPosition={4210}
            />
          </Link>

          <Link to="/earphonespage">
            <Category
              CategoryName={'EARPHONES'}
              imageSrc={"/resources/assets/shared/mobile/image-zx9-earphones.png"}
              categoryClass='earphones'
              topPosition={4460}
            />
          </Link>
    </div>
    </>
  )
}

export default xx59
