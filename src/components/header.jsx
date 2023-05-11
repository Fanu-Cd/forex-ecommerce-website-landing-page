import logo from '../assets/fedex.svg'
import {CiSearch} from 'react-icons/ci'
import {BsFillCartFill} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
const Header=()=>{
return(
  <nav className="navbar navbar-expand-md">
  <div className="container-fluid d-flex justify-content-space-around">
    <a className="navbar-brand" href="#">
      <img src={logo} style={{width:'100%',height:'3rem'}} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <AiOutlineMenu />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
           <button className="btn dropdown-toggle"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
             Shop
           </button>
           <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="#">Action</a></li>
             <li><a className="dropdown-item" href="#">Another action</a></li>
             <li><hr className="dropdown-divider"/></li>
             <li><a className="dropdown-item" href="#">Something else here</a></li>
           </ul>
         </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Most Wanted</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">New Arrival</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Brands</a>
        </li>
      </ul>
      <input style={{maxWidth:'15rem',height:'100%'}} className="form-control" placeholder="Search" type="text" />
      <div className="hstack gap-3">
        <button className="btn">
            <BsFillCartFill />
          </button>
        <button className="btn">
            <AiOutlineUser />
          </button>
      </div>
    </div>
  </div>
</nav>
)
}
export default Header;