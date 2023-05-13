import logo from '../assets/fedex.svg'
import {BsFillCartFill} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import {CiSearch} from 'react-icons/ci'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
const Header=()=>{
return(
  <nav className="navbar navbar-expand-md">
  <div className="container-fluid d-flex justify-content-space-around">
    <a className="navbar-brand" href="javascript:void(0);">
      <img src={logo} alt="fedex" style={{width:'100%',height:'3rem'}} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <AiOutlineMenu />
    </button>
    <div className="collapse d-md-flex justify-content-between navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
           <button className="btn dropdown-toggle"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
             Shop
           </button>
           <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
             <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
             <li><hr className="dropdown-divider"/></li>
             <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
           </ul>
         </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="javascript:void(0);">Most Wanted</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">New Arrival</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">Brands</a>
        </li>
      </ul>
        <TextField
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CiSearch />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        size='small'
        placeholder='Search'
        style={{maxWidth:'25rem'}}
      />
      <div className="d-flex">
        <button className="btn" >
            <BsFillCartFill/>
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