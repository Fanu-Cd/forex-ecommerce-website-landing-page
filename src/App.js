import Header from './components/header'
import pic from './assets/fedex.svg'
import pic2 from './assets/photo-1558788353-f76d92427f16.jpg'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import Button from '@mui/material/Button';
import {BsFillCartFill} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
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
import p1 from './assets/pexels-aman-jakhar-1124468.jpg'
import p2 from './assets/pexels-omar-lópez-1192601.jpg'
import p3 from './assets/pexels-royal-anwar-983497.jpg'
import p4 from './assets/pexels-chloe-1043474.jpg'
const App=()=>{
  return(<>
       <Header />
       <div id="carouselExample" className="rounded container front carousel slide" data-bs-ride="carousel">
         <div className="btn-group rounded z-index-2 d-block position-absolute" style={{top:'1rem',left:'3rem',zIndex:'2',backgroundColor:'white'}}>
            <button className="btn" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <AiOutlineLeft />
            </button>
            <button className="btn" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <AiOutlineRight/>
            </button>
        </div>
         <div className="carousel-inner rounded">
          <div className="carousel-item active">
           <img src={p1} className="d-block w-100 " alt="..." style={{objectFit:'cover',height:'25rem'}} />
          </div>
          <div className="carousel-item">
           <img src={p2} className="d-block w-100" alt="..." style={{objectFit:'cover',height:'25rem'}}  />
          </div>
          <div className="carousel-item">
           <img src={p3} className="d-block w-100" alt="..." style={{objectFit:'cover',height:'25rem'}}  />
          </div>
          </div>
         </div>
        <div className='d-flex justify-content-center'>
          <Button variant='contained' className='btn text-body position-relative bg-white' style={{bottom:'6rem'}} endIcon={<BsArrowRight />}>Shop Now</Button>
        </div>
       <div className="container mt-3 px-2 d-flex flex-column" style={{height:"5rem",height:'auto'}}>
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
      <div className="container row mx-auto">
            <div style={{height:'15rem'}} className="rounded col-sm-6 col-12">
              <img src={p1} className='rounded' style={{width:'100%',objectFit:'cover',height:'100%'}} alt='Best Seller' />
            </div>
            <div style={{height:'15rem'}} className="rounded col-sm-6 col-12">
              <img src={p2} className='rounded' style={{width:'100%',objectFit:'cover',height:'100%'}} alt='Best Seller' />
            </div>
            <div style={{height:'15rem'}} className=" rounded col-sm-6 col-12">
              <img src={p3} className='rounded' style={{width:'100%',objectFit:'cover',height:'100%'}} alt='Best Seller' />
            </div>
            <div style={{height:'15rem'}} className=" rounded col-sm-6 col-12">
              <img src={p4} className='rounded' style={{width:'100%',objectFit:'cover',height:'100%'}} alt='Best Seller' />
            </div>
        </div>
        <div className="container row mx-auto my-3 rounded" style={{minHeight:'15rem'}}>
          <div className='col-4'>
            <img className='rounded-left' style={{objectFit:'cover',width:'100%',height:'15rem'}} src={p2} />
          </div>
          <div style={{height:'15rem'}} className='rounded-right col-8 bg-dark d-flex flex-column justify-content-center align-items-center'>
              <h6 className=" text-white text-center py-2">LIMITED OFFER</h6>
              <p style={{fontSize:'1.5rem',fontWeight:'bold'}} className="text-white py-2 text-center">35% off only this friday and get special gift</p>
             <Button size='small' variant='contained' className='btn text-body bg-white' endIcon={<BsArrowRight />}>Grab it now</Button>
          </div>
        </div>
        <div className='mx-auto d-flex flex-column justify-content-center align-items-center bg-info' style={{height:'auto',width:'70%'}}>
            <h3 style={{fontWeight:'bold'}} className='h3 text-center'>Subscribe to our newsletter to get updates to our latest collections</h3>
            <p></p>
        </div>
       </>
  );
}
 


  
export default App;