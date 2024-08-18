import { Link } from 'react-router-dom';
import {useContext} from "react";
import {Context} from "../../context/Context";
import "./topbar.css"
export default function TopBar() {
  const {user,dispatch}=useContext(Context);
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className="top">
        <ul className="topList">
            <li className="topListItem"><Link className='link' to="/">HOME</Link></li>
            <li className="topListItem"><Link className='link' to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className='link' to="/">CONTACT</Link></li>
            <li className="topListItem"><Link className='link' to="/write">WRITE</Link></li>
            <li className="topListItem"><Link className='link' to="/" onClick={handleLogout}>{user&& "LOGOUT" }</Link></li>
        </ul>
      <div className="topRight">
        {
          user?(
          <img className="topImg" 
          src={user.profilePic} 
          alt="" />)
          :( <ul className="topList">
          <li className="topListItem"><Link className='link' to="/login">LOGIN</Link></li>
          <li className="topListItem"><Link className='link' to="/register">REGISTER</Link></li>
          </ul>)
        }
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
