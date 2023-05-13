import Header from './components/header'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import Button from '@mui/material/Button';
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
import {BsPaypal} from 'react-icons/bs'
import {SiMastercard} from 'react-icons/si'
import {SiVisa} from 'react-icons/si'
import p1 from './assets/pexels-aman-jakhar-1124468.jpg'
import p2 from './assets/pexels-omar-lópez-1192601.jpg'
import p3 from './assets/pexels-royal-anwar-983497.jpg'
import p4 from './assets/pexels-chloe-1043474.jpg'
import p5 from './assets/pexels-keen-9286989.jpg'
const App=()=>{
  return(<>
       <Header />
       <div id="carouselExample" className="rounded container carousel slide" data-bs-ride="carousel" style={{height:'25rem'}}>
         <div className="btn-group rounded z-index-2 d-block position-absolute bg-white" style={{top:'1rem',left:'3rem',zIndex:'2'}}>
            <button className="btn" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <AiOutlineLeft />
            </button>
            <button className="btn" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <AiOutlineRight/>
            </button>
        </div>
         <div className="carousel-inner rounded">
          <div className="carousel-item active">
           <img src={p1} className="d-block w-100 " alt="..." style={{height:'25rem'}} />
          </div>
          <div className="carousel-item">
           <img src={p2} className="d-block w-100" alt="..." style={{height:'25rem'}}  />
          </div>
          <div className="carousel-item">
           <img src={p3} className="d-block w-100" alt="..." style={{height:'25rem'}}  />
          </div>
          </div>
         </div>
        <div className='d-flex justify-content-center'>
          <Button variant='contained' className='btn text-body position-relative bg-white' style={{bottom:'6rem'}} endIcon={<BsArrowRight />}>Shop Now</Button>
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
      <div className="container row mx-auto  my-4">
            <h3 className='text-center text-lg-left col-12' style={{fontWeight:'bold'}}>Featured Products</h3>
            <div className="card p-0 col-6 col-md-3 border-0">
              <div className="card-body p-2">
                <img style={{height:'15rem'}} src={p1} className='card-img-top rounded-0' alt='Best Seller' />
                <div className="container-fluid d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <p className="m-0 py-1">Black Jacket</p>
                    <p className="m-0 py-2">$55.99</p>
                  </div>
                <button className="btn rounded bg-dark text-white" style={{height:'2rem'}}>Buy</button>
                </div>
              </div>
            </div>
            <div className="card p-2 col-6 col-md-3 border-0">
              <div className="card-body p-0">
                <img style={{height:'15rem'}} src={p2} className='card-img-top rounded-0' alt='Best Seller' />
                <div className="container-fluid d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <p className="m-0 py-1">Addidas Brand Jacket</p>
                    <p className="m-0 py-2">$89.99</p>
                  </div>
                <button className="btn rounded bg-dark text-white" style={{height:'2rem'}}>Buy</button>
                </div>
              </div>
            </div>
            <div className="card p-2 col-6 col-md-3 border-0">
              <div className="card-body p-0">
                <img style={{height:'15rem'}} src={p3} className='card-img-top rounded-0' alt='Best Seller' />
                <div className="container-fluid d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <p className="m-0 py-1">Foril New Jacket</p>
                    <p className="m-0 py-2">$199.99</p>
                  </div>
                <button className="btn rounded bg-dark text-white" style={{height:'2rem'}}>Buy</button>
                </div>
              </div>
            </div>
            <div className="card p-2 col-6 col-md-3 border-0">
              <div className="card-body p-0">
                <img style={{height:'15rem'}} src={p4} className='card-img-top rounded-0' alt='Best Seller' />
                <div className="container-fluid d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <p className="m-0 py-1">Black Suit</p>
                    <p className="m-0 py-2">$229.99</p>
                  </div>
                <button className="btn rounded bg-dark text-white" style={{height:'2rem'}}>Buy</button>
                </div>
              </div>
            </div>
            <Button size="small" variant='contained' className='my-3 mx-auto btn text-body position-relative bg-white'endIcon={<BsArrowRight />}>See More</Button>
        </div>
        <div className="container row mx-auto my-4 rounded" style={{minHeight:'15rem'}}>
          <div className='col-4 p-0'>
            <img alt="limited offer" className='rounded-left' style={{width:'100%',height:'15rem'}} src={p5} />
          </div>
          <div style={{height:'15rem'}} className='rounded-right col-8 bg-dark d-flex flex-column justify-content-center align-items-center'>
              <h6 className=" text-white text-center py-2">LIMITED OFFER</h6>
              <p style={{fontSize:'1.5rem',fontWeight:'bold'}} className="text-white py-2 text-center">35% off only this friday and get special gift</p>
             <Button size='small' variant='contained' className='btn text-body bg-white' endIcon={<BsArrowRight />}>Grab it now</Button>
          </div>
        </div>
        <div className='mx-auto my-5 d-flex flex-column justify-content-center align-items-center' style={{height:'auto',width:'70%'}}>
            <h3 style={{fontWeight:'bold'}} className='h3 text-center'>Subscribe to our newsletter to get updates to our latest collections</h3>
            <p>We will send you timely updates via email.</p>
            <div class="d-flex">
              <input class="form-control me-auto" type="text" placeholder="Enter your Email here" aria-label="Add your item here..." />
              <button style={{marginLeft:'1rem'}} type="button" class="btn btn-dark">Subscribe</button>
            </div>
            <p className='text-center'>We won't share your email for anyone else.</p>
        </div>
        <div className="row my-auto container-fluid footer" style={{minHeight:'5rem',height:'auto'}}>
           <div className='col-6 col-md-4 d-flex justify-content-center '>
            <p className='text-break text-center m-0'>Forex is an online clothes shopping platform with many products being added everyday.</p>
           </div>
           <div className='col-6 col-md-2 d-flex justify-content-center'>
            <ul style={{listStyleType:'none'}}>
              <li style={{fontWeight:'bold'}}>SHOP</li>
              <li>lorem </li>
              <li>lorem epsum</li>
              <li>lorem ep</li>
            </ul>
           </div>
           <div className='col-6 col-md-2  d-flex justify-content-center '>
           <ul style={{listStyleType:'none'}}>
              <li style={{fontWeight:'bold'}}>COMPANY</li>
              <li>lorem </li>
              <li>lorem epsum</li>
              <li>lorem ep</li>
            </ul>
           </div>
           <div className='col-6 col-md-2  d-flex justify-content-center '>
           <ul style={{listStyleType:'none'}}>
              <li style={{fontWeight:'bold'}}>SUPPORT</li>
              <li>lorem </li>
              <li>lorem epsum</li>
              <li>lorem ep</li>
            </ul>
           </div>
           <div className='col-12 col-md-2 d-flex flex-column justify-content-center align-items-center'>
            <p className='text-center' style={{fontWeight:'bold'}}>PAYMENT METHOD</p>
            <div className='d-flex justify-content-around align-items-center mx-auto' style={{width:'60%'}}>
              <BsPaypal className='' style={{minHeight:'2rem',width:'20%'}}/>
              <SiVisa className='' style={{minHeight:'2rem',width:'20%'}}/>
              <SiMastercard className='' style={{minHeight:'2rem',width:'20%'}}/>
            </div>
           </div>
           <div className='col-12 my-5 d-flex justify-content-center align-items-center'>
            <p className='text-center'>Copyright &copy; 2023 All rights reserved</p>
           </div>
        </div>
       </>
  );
}
 


  
export default App;