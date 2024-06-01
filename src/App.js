import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/LeftSidebar/DrawerSidebar';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CreateEditChannel from './Pages/Channel/CreateEditChannel';
import { useDispatch } from 'react-redux';
import { fetchAllChannel } from './actions/channelUser';
import './App.css';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllChannel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo())
    dispatch(getAllwatchLater())
    dispatch(getAllHistory());
  }, [dispatch]);
  
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({ display: 'none' });
  const [vidUploadPage, setVidUploadPage] = useState(false);
  const [editCreateChannelBtn, setEditCreateChannelBtn] = useState(false);

  const toggleDrawer = () => {
    setToggleDrawerSidebar(prevState => ({
      display: prevState.display === 'none' ? 'flex' : 'none'
    }));
  };

  const clientId = '984452236024-8cutscg5ccsi806p0o235smoioavgkfe.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        {
          vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage}/>
        }
        {editCreateChannelBtn && <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn} />}
        <Navbar setEditCreateChannelBtn={setEditCreateChannelBtn} toggleDrawer={toggleDrawer} />
        <DrawerSidebar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar} />
        <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn}/>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
