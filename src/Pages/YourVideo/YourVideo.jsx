import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
// import vid from "../../Components/Video/vid.mp4";
import "./YourVideo.css";
import { useSelector } from "react-redux";

function YourVideo() {



  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChannel === CurrentUser?.result?._id).reverse();


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
    <div className="container_Pages_App">
      <LeftSidebar />
      <div className="container2_Pages_App">
        <div className="container_yourvideo">
          <h1>Your Videos</h1>
          {
            CurrentUser ? (<>
            <ShowVideoGrid vids={vids} />
            </>):<>
            <h3>Please Login to see Your uploaded video list</h3>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default YourVideo;
