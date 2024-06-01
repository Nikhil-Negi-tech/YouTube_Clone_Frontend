import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
// import vid from "../../Components/Video/vid.mp4";
import DescribeChannel from './DescribeChannel';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Channel({setEditCreateChannelBtn,setVidUploadPage}) {

    const{Cid} = useParams();
    const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChannel === Cid).reverse();


    // const vids = [
    //     {
    //       _id: 1,
    //       video_src: vid,
    //       Chanel: "62bafe6752cea35a6c30585f",
    //       title: "video 1",
    //       Uploder: "abc",
    //       description: "video 1 description",
    //     },
    //     {
    //       _id: 2,
    //       video_src: vid,
    //       Chanel: "cdd",
    //       title: "video 2",
    //       Uploder: "abc",
    //       description: "video 2 description",
    //     },
    //     {
    //       _id: 3,
    //       video_src: vid,
    //       Chanel: "add",
    //       title: "video 3",
    //       Uploder: "abc",
    //       description: "video 3 description",
    //     },
    //     {
    //       _id: 4,
    //       video_src: vid,
    //       Chanel: "add",
    //       title: "video 3",
    //       Uploder: "abc",
    //       description: "video 3 description",
    //     },
    //   ];
    return (
        <div className="container_Pages_App">
          <LeftSidebar />
          <div className="container2_Pages_App">
            <DescribeChannel 
            Cid={Cid} 
            setVidUploadPage={setVidUploadPage}
            setEditCreateChannelBtn={setEditCreateChannelBtn}/>
            <ShowVideoGrid vids={vids} />
          </div>
        </div>
      );
}

export default Channel
