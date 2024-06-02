import React from "react";
import "./Home.css";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
// import vid from "../../Components/Video/vid.mp4";
import { useSelector } from "react-redux";
function Home() {
  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
  // console.log(videosFile)
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
  const NavList = [
    "All",
    "Python",
    "JavaScript",
    "React",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Gaming",
    "Comedy",
    "Music",
    "News",
    "Sports",
    "Fashion",
    "Animation",
    "Nature",
    "Travel",
    "Hinduism",
    "Ramayan",
    "Mahabharat",
    "Bhagwat",
  ];
  return (
    <div className="container_Pages_App">
      <LeftSidebar />
      <div className="container2_Pages_App">
        <div className="navigation_Home">
          {NavList.map((m) => {
            return (
              <p key={m} className="btn_nav_home">
                {m}
              </p>
            );
          })}
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Home;