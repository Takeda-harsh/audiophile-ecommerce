import '../../../styles/zx7.css';
import Category from '../../../components/category';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
const Zx7 = () => {
    // const history = useHistory();
    
    // const goBack = () => {
    //     history.goBack();
    //   };
  return (
    <>
     
     <div className='back' >Go Back</div>
     
    
    <div className="xx99mark-details">
        
       <div className='headphonemodels'>
        <div className='zx7img'></div>

        <div className='x99-model-desc'>
          <h4>NEW PRODUCT</h4>
          <h1>ZX7
SPEAKER</h1>
          <p>Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
        </div>
            </div>
        <div className='price'>
            <p>$ 3,500</p>
            <div className='quantity-cart'>
                <div className='qty'><span className='minus'>-</span>1 <span className='add'>+</span></div> <button>ADD TO CART</button>
            </div>
        </div>
            
        <div className='description'>
            <h3>FEATURES</h3>
            <p>
            Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. 
             <br/> <br/>

             The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimizes acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.
            </p>

            <div>
                <h3>IN THE BOX</h3>
                <div className='box-items'> 
                    <p><span>2x</span>Speaker Unit</p>
                    <p><span>2x</span>Speaker Cloth Panel</p>
                    <p><span>1x</span>User Manual</p>
                    <p><span>1x</span>3.5mm 5m Audio Cable</p>
                    <p><span>1x</span>7.5m Optical Cable</p>
                </div>
            </div>

            <div className='product-images'>
                <div className='image1-zx7'></div>
                <div className='image2-zx7'></div>
                <div className='image3-zx7'></div>
            </div>
        </div>    
    </div>

    <div className='recommendation'>
        <div>
            <h3>YOU MAY ALSO LIKE</h3>
            <div className='other-headphones'>
                <div>
                    <div className='zx9'>

                    </div>
                    <h3>ZX7 SPEAKER</h3>

                    <Link to="/zx9">
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

export default Zx7
