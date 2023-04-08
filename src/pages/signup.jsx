import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import {validator} from './services/validator.js';
import {Server} from './services/server.js';
import {Link} from "react-router-dom"
const Signup=()=>{
    useEffect(()=>{
      document.title='Lab - Sign Up'
    },[])
    const [error,setError]=useState('');
    const [input,setInput]=useState({
        fName:'',lName:'',email:'',pass:'',cPass:'',error:'',errorColor:''
    });

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(validator(input)!=='0')
        setInput({...input,error:validator(input),color:'red'})
      else{
        // setInput({...input,error:"Success!",color:'yellow'})
        fetch('http://localhost:3001/signup',{
        method:'post',
        body:JSON.stringify(input),
        headers:{
        'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then((res)=>{
      console.log(res.res)
    })
    .catch((err)=>{console.log(err)})
        // setTimeout(()=>{window.location.replace("http://localhost:3000/login")},3000);


      }
      }
const handleChange=(e)=>{
  const {name,value}=e.target;
  setInput({...input,[name]:value})
}







    return(<>
    <div className='login signup'>
        <p style={{fontSize:'1.5rem',color:'white'}}>Create New Account</p>
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'90%',minHeight:'10rem',height:'auto',backgroundColor:'darkslategray'}}>
          <input placeholder='First Name' onChange={handleChange} value={input.fName} name='fName' required type='text' style={{width:'80%'}}  />
          <input placeholder='Last Name' onChange={handleChange} value={input.lName} name='lName' required type='text' style={{width:'80%',marginTop:'1rem',marginBottom:'1rem'}}  />
          <input placeholder='Email' onChange={handleChange} value={input.email} name='email' required type='email' style={{width:'80%'}}  />
          <input placeholder='New Password' onChange={handleChange} value={input.password} name='pass' required type='password' style={{width:'80%',marginTop:'1rem',marginBottom:'1rem'}}  />
          <input placeholder='Confirm Password' onChange={handleChange} value={input.cPassword} name='cPass' required type='password' style={{width:'80%',marginBottom:'1rem'}}  />
          <Button style={{width:'10rem'}} type='submit' variant='contained'>Submit</Button>
          <p style={{color:input.color,margin:'0'}}>{input.error}</p>
          <p style={{fontSize:'1rem',color:'white'}}>Already have  an account?</p>
           <Link to='/login'>
            <button type='button' style={{backgroundColor:'brown',borderRadius:'0.3rem',color:'white',border:'0',height:'1.3rem',width:'4rem',marginBottom:'1rem'}}>Log in</button>
           </Link>
          </form>
    </div>
    </>)
}

export default Signup;