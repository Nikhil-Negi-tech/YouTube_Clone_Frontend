import React from "react";
// import vid from "../../Components/Video/vid.mp4";
import WHL from "../../Components/WHL/WHL.jsx";
import { useSelector } from "react-redux";

function WatchHistory() {
  const historyList = useSelector(state => state.HistoryReducer);

  // const history = [
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
  return <WHL page={"History"} videoList={historyList} />;
}

export default WatchHistory;
