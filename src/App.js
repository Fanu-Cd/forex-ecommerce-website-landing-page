import Header from './components/header'
import pic from './assets/fedex.svg'
import pic2 from './assets/photo-1558788353-f76d92427f16.jpg'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import Button from '@mui/material/Button';
import {BsFillCartFill} from 'react-icons/bs'
import {SiOrigin} from 'react-icons/si'
import {MdOutlineSentimentSatisfied} from 'react-icons/md'
import {ImEnter} from 'react-icons/im'
import {TbFreeRights} from 'react-icons/tb'
import {TbBrandAdobe} from 'react-icons/tb'
import {SiBrandfolder} from 'react-icons/si'
import {TbBrandAirtable} from 'react-icons/tb'
import {TbBrandAlpineJs} from 'react-icons/tb'
import {TbBrandApplePodcast} from 'react-icons/tb'
import {TbBrandAsana} from 'react-icons/tb'
import {TbBrandBackbone} from 'react-icons/tb'
import {TbBrandBandcamp} from 'react-icons/tb'

const App=()=>{
  return(<>
       <Header />
       {/* <section className="container front" style={{display:'flex',flexDirection:'column',borderRadius:'0.5rem',width:'100%',height:'30rem'}}>
         <div style={{borderRadius:'0.5rem',marginTop:'1rem',marginLeft:'auto'}} className="btn-group btn-light" role="group" aria-label="Basic example">
          <button type="button" disabled className="btn btn-light"><AiOutlineLeft /></button>
          <button type="button" className="btn btn-light"><AiOutlineRight /></button>
        </div>
        <div className="text-center d-flex flex-column justify-content-center align-items-center mt-1 mx-auto" style={{width:'80%',minHeight:'10rem',height:'auto'}}>
          <h1 className="display1" style={{fontWeight:'bold',color:'white'}}>
            Level up your styles with our summer collections
          </h1>
          <Button className="mt-5" size="medium" variant="contained" style={{color:'black',backgroundColor:'white'}} endIcon={<AiOutlineRight />}>Shop Now</Button>
        </div>
       </section> */}
       <div id="carouselExample" className="container front carousel slide">
       <div className="btn-group rounded z-index-2 d-block position-absolute" style={{top:'1rem',left:'3rem',zIndex:'2',backgroundColor:'white'}}>
  <button className="btn" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <AiOutlineLeft />
  </button>
  <button className="btn" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <AiOutlineRight/>
  </button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic} className="d-block w-100 object-fit-cover " alt="..." style={{height:'20rem',zIndex:'1'}} />
    </div>
    <div className="carousel-item">
      <img src={pic} className="d-block w-100 object-fit-cover" alt="..." style={{height:'25rem'}}  />
    </div>
    <div className="carousel-item">
      <img src={pic} className="d-block w-100 object-fit-cover" alt="..." style={{height:'25rem'}}  />
    </div>
  </div>
  
</div>
       <div className="container mt-3 px-2 d-flex flex-column" style={{minHeight:"5rem",height:'auto'}}>
          <h3 className="text-center text-lg-left" style={{fontWeight:'bold'}}>Brands</h3>
          <div className="container-fluid row  justify-content-center" style={{gridGap:'3rem',minHeight:'3rem',height:'auto'}}>
            <TbBrandAdobe className='col-4 col-md-1' style={{minHeight:'2rem'}}/>
            <SiBrandfolder className='col-4 col-md-1' style={{minHeight:'2rem'}}/>
            <TbBrandAirtable className='col-4 col-md-1' style={{minHeight:'2rem'}}/>
            <TbBrandAlpineJs className='col-4 col-md-1' style={{minHeight:'2rem'}}/>
            <TbBrandApplePodcast className='col-4 col-md-1' style={{minHeight:'2rem'}}/>
            <TbBrandAsana className='col-4 col-md-1' style={{minHeight:'2rem'}}/>
            <TbBrandBackbone className='col-4 col-md-1' style={{minHeight:'2rem'}}/>
            <TbBrandBandcamp className='col-4 col-md-1' style={{minHeight:'2rem'}}/>
          </div>
        </div> 
       <div className="container mt-5  px-2 d-flex flex-column" style={{minHeight:"5rem",height:'auto'}}>
          <h3 className='text-center text-lg-left' style={{fontWeight:'bold'}}>We provide best customer experiences</h3>
          <div className="container-fluid row" style={{minHeight:'3rem',height:'auto'}}>
            <div className="card col-6 col-md-3 border-0">
              <div className="card-body">
                <SiOrigin className='border rounded card-img-top' style={{width:'30%',minHeight:'2rem'}}/>
              <div style={{fontWeight:'bold'}} className="card-title">Original Products</div>
              <div className="card-text">
                sfsfsfasfdfdsfsfsfsdfsdfsfsdfsdfsdf
              </div>
            </div>
            </div>
            <div className="card col-6 col-md-3 border-0">
              <div className="card-body">
              <MdOutlineSentimentSatisfied className='border rounded card-img-top' style={{width:'30%',minHeight:'2rem'}}/>
              <div style={{fontWeight:'bold'}} className="card-title">Satisfaction Guarantee</div>
              <div className="card-text">
                sfsfsfasfdfdsfsfsfsdfsdfsfsdfsdfsdf
              </div>
            </div>
            </div>
            <div className="card col-6 col-md-3 border-0">
             <div className="card-body">
             <ImEnter className='border rounded card-img-top' style={{width:'30%',minHeight:'2rem'}}/>
              <div style={{fontWeight:'bold'}} className="card-title">New Arrival Everyday</div>
              <div className="card-text">
                sfsfsfasfdfdsfsfsfsdfsdfsfsdfsdfsdf
              </div>
            </div>
            </div>
            <div className="card col-6 col-md-3 border-0">
             <div className="card-body">
             <TbFreeRights className='border rounded card-img-top' style={{width:'30%',minHeight:'2rem'}}/>
              <div style={{fontWeight:'bold'}} className="card-title">Fast & Free Shopping</div>
              <div className="card-text">
                sfsfsfasfdfdsfsfsfsdfsdfsfsdfsdfsdf
              </div>
            </div>
            </div>
          </div>
        </div>
       </>
  );
}
 


  
export default App;