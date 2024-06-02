import React from 'react'
// import vid from "../../Components/Video/vid.mp4";
import ShowVideo from '../ShowVideo/ShowVideo'; // Assuming this is the correct path
import { useSelector } from 'react-redux';
function ShowVideoList({videoId}) {
  const vids = useSelector(s=>s.videoReducer)
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Chanel: "62bafe6752cea35a6c30585f",
  //     title: "video 1",
  //     Uploder: "abc",
  //     description: "video 1 description",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Chanel: "cdd",
  //     title: "video 2",
  //     Uploder: "abc",
  //     description: "video 2 description",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     Uploder: "abc",
  //     description: "video 3 description",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     Uploder: "abc",
  //     description: "video 3 description",
  //   },
  // ];
  return (
  
    <div className='Container_ShowVideoGrid'>
       {
        vids?.data?.filter(q=>q._id === videoId).map(vi => 
          {
            return(
                <div key={vi._id} className="video_box_app">
                  <ShowVideo vid={vi} /> 
                </div>
            )
          })
      }
    </div>
  );
}

export default ShowVideoList
