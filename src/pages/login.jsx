import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import {Link} from "react-router-dom"

const Login=()=>{
    useEffect(()=>{
        document.title='Lab - Log in'
      },[])
    const [error,setError]=useState('');
    return(<>
    <div className='login'>
        <p style={{fontSize:'1.5rem',color:'white'}}>Log in</p>
        <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'90%',height:'10rem',backgroundColor:'darkslategray'}}>
          <input placeholder='Email' type='email' style={{width:'80%'}}  />
          <input placeholder='Password' type='password' style={{width:'80%',marginTop:'1rem',marginBottom:'1rem'}}  />
          <Button style={{width:'10rem'}} type='submit' variant='contained'>Log in</Button>
          <p style={{color:'red',margin:'0'}}>{error}</p>
          <p style={{fontSize:'1rem',color:'white'}}>Don't have  an account?</p>
           <Link to='/signup'>
            <button type='button' style={{backgroundColor:'brown',borderRadius:'0.3rem',color:'white',border:'0',height:'1.3rem',width:'4rem'}}>Sign Up</button>
           </Link>
          </form>
    </div>
    </>)
}

export default Login;