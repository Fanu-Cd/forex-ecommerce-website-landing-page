import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './welcome';
const Home=()=>{
    return(<>
      <Welcome />
    </>)
}

export default Home;