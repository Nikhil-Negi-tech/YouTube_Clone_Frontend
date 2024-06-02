import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.ico';
import SearchBar from './SearchBar/SearchBar';
import { RiVideoAddLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { useGoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import axios from 'axios';
import Auth from '../../Pages/Auth/Auth';

function Navbar({ toggleDrawer,setEditCreateChannelBtn }) {
  const [AuthBtn, setAuthBtn] = useState(false);
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  console.log(CurrentUser);

  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`
        );
        const Email = data.email;
        console.log(Email);

        dispatch(login({ email: Email }));
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    },
    onError: (error) => {
      console.log('Login Failed', error);
    },
  });

  return (
    <>
      <div className="Container_Navbar">
        <div className="Burger_Logo_Navbar">
          <div className="burger" onClick={toggleDrawer}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to="/" className="logo_div_Navbar">
            <img src={logo} alt="logo" />
            <p className="logo_title_navbar">YouTube</p>
          </Link>
        </div>
        <SearchBar />
        <RiVideoAddLine size={22} className="vid_bell_Navbar" />
        <div className="apps_Box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
        </div>
        <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
        <div className="Auth_cont_Navbar">
          {CurrentUser ? (
            <>
            <div className="Chanel_logo_App" onClick={() => setAuthBtn(true)}>
              <p className="fstChar_logo_App">
                {CurrentUser?.result?.name
                  ? CurrentUser.result.name.charAt(0).toUpperCase()
                  : CurrentUser?.result?.email?.charAt(0).toUpperCase()}
              </p>
            </div>
            </>
          ) : (
            <>
            <button onClick={() => handleLogin()} className="Auth_Btn">
              <BiUserCircle size={22} />
              <b>Sign in</b>
            </button>
            </>
          )}
        </div>
      </div>
      {AuthBtn && <Auth setEditCreateChannelBtn={setEditCreateChannelBtn} setAuthBtn={setAuthBtn} User={CurrentUser} />}
    </>
  );
}

export default Navbar;
