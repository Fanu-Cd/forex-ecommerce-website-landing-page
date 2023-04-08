import {Link} from "react-router-dom"

const Welcome=()=>{
    return(<>
    <span style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <p style={{fontSize:'2rem',color:'darkslategray'}}>Welcome User.</p>
    <Link to='/login'>
        <button style={{width:'10rem',color:'white',backgroundColor:'brown',height:'3rem',border:'0',borderRadius:'0.5rem'}}>Get Started Now</button>
    </Link>
    </span>
    </>)
}

export default Welcome;