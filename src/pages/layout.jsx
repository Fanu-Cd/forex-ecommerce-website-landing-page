import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className='main'>
      <nav style={{width:'80%',height:'2rem',margin:'1rem auto'}}>
        {localStorage.getItem('user.exists')&&
        <ul style={{listStyleType:'none',display:'flex'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>}
        {!localStorage.getItem('user.exists')&&
        <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-between'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li style={{width:'40%'}}>
           <ul style={{width:'100%',listStyleType:'none',display:'flex',justifyContent:'space-between'}}>
             <li style={{maxWidth:'45%'}}>
               <Link to="/login">Log in</Link>
             </li>
             <li style={{maxWidth:'45%'}}>
              <Link to="/signup">Sign up</Link>
            </li>
           </ul>
          </li>
        </ul>}
      </nav>
      <hr/>
      <div style={{width:'80%',margin:'0.2rem auto',height:'auto',minHeight:'20rem'}}>
        <Outlet />
      </div>
      </div>
    </>
  )
};

export default Layout;