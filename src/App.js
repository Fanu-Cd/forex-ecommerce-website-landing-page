import Header from './components/header'
import pic from './assets/fedex.svg'
import pic2 from './assets/photo-1558788353-f76d92427f16.jpg'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import Button from '@mui/material/Button';
import {BsFillCartFill} from 'react-icons/bs'

const App=()=>{
  return(<>
       <Header />
       <section className="container front" style={{display:'flex',flexDirection:'column',borderRadius:'0.5rem',width:'100%',height:'30rem'}}>
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
       </section>
       <div className="container bg-info d-flex flex-column" style={{minHeight:"5rem",height:'auto'}}>
          <h3>Brands</h3>
          <div className="hstack bg-success" style={{minHeight:'3rem',height:'auto'}}>
          </div>
       </div>
       <div className="container px-2 d-flex flex-column" style={{minHeight:"5rem",height:'auto'}}>
          <h3 className='textwrap' style={{maxWidth:'15rem'}}>We provide best customer experiences</h3>
          <div className="container-fluid row" style={{minHeight:'3rem',height:'auto'}}>
            <div className="card col-6 col-md-3 border-0">
              <div className="card-body">
               <img style={{width:'30%',}} className='border rounded card-img-top' src={pic} alt="orig" />
              <div style={{fontWeight:'bold'}} className="card-title">Original Products</div>
              <div className="card-text">
                sfsfsfasfdfdsfsfsfsdfsdfsfsdfsdfsdf
              </div>
            </div>
            </div>
            <div className="card col-6 col-md-3 border-0">
              <div className="card-body">
              <img style={{width:'30%',}} className='border rounded card-img-top' src={pic} alt="orig" />
              <div style={{fontWeight:'bold'}} className="card-title">Satisfaction Guarantee</div>
              <div className="card-text">
                sfsfsfasfdfdsfsfsfsdfsdfsfsdfsdfsdf
              </div>
            </div>
            </div>
            <div className="card col-6 col-md-3 border-0">
            <img style={{width:'30%',}} className='border rounded card-img-top' src={pic} alt="orig" />
              <div style={{fontWeight:'bold'}} className="card-title">New Arrival Everyday</div>
              <div className="card-text">
                sfsfsfasfdfdsfsfsfsdfsdfsfsdfsdfsdf
              </div>
            </div>
            <div className="card col-6 col-md-3 border-0">
            <img style={{width:'30%',}} className='border rounded card-img-top' src={pic} alt="orig" />
              <div style={{fontWeight:'bold'}} className="card-title">Fast & Free Shopping</div>
              <div className="card-text">
                sfsfsfasfdfdsfsfsfsdfsdfsfsdfsdfsdf
              </div>
            </div>
          </div>
       </div>
       </>
  );
}
 


  
export default App;