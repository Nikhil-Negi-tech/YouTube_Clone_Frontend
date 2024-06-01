import React from 'react'
import{Link} from 'react-router-dom'
import './ShowVideo.css'
function ShowVideo({vid}) {
    
  return (
    <>
        <Link to={`/videopage/${vid?._id}`}>
            <video
                src={`${vid?.video_src}`}
                className="video_ShowVideo"
            />
        </Link>
        <div className="video_description">
            <div className="Chanel_logo_App">
                <div className="fstChar_logo_App">
                    <>{vid?.Uploder?.charAt(0).toUpperCase()}</>
                </div>
            </div>
            <div className="video_details">
                <p className="title_vid_ShowVideo">title</p>
                <pre className="vid_views_UploadTime">1-1-2001</pre>
                <pre className="vid_views_UploadTime">
                    5 views <div className="dot"></div> video uploaded 1 year ago
                </pre>
            </div>
        </div>
    </>
  )
}

export default ShowVideo
