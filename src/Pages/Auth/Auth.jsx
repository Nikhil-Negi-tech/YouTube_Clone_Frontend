import React from 'react';
import './Auth.css';
import { googleLogout } from '@react-oauth/google';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser';
import { Link } from 'react-router-dom';

function Auth({ User, setAuthBtn, setEditCreateChannelBtn}) {
  const dispatch = useDispatch();

  const onLogoutSuccess = () => {
    googleLogout();
    dispatch(setCurrentUser(null));
    alert('You have been logged out successfully');
  };

  return (
    <div className="Auth_container" onClick={() => setAuthBtn(false)}>
      <div className="Auth_container2" onClick={(e) => e.stopPropagation()}>
        <div className="User_Details">
          <div className="Chanel_logo_App">
            <p className="fstChar_logo_App">
              {User?.result.name
                ? User?.result.name.charAt(0).toUpperCase()
                : User?.result.email.charAt(0).toUpperCase()}
            </p>
          </div>
          <div className="email_Auth">{User?.result.email}</div>
        </div>
        <div className="btns_Auth">
          {
            User?.result.name ?<>
            {
              <Link to = {`/channel/${User?.result._id}`} className="btn_Auth">
                Your Channel
              </Link>
            }
            </>:<>
            <input type="submit" className="btn_Auth" value="Create Your Channel" onClick={()=>setEditCreateChannelBtn(true)}/>
            </>
          }
          <div onClick={onLogoutSuccess} className="btn_Auth">
            <BiLogOut />
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;