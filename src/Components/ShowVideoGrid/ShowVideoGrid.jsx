import React from 'react';
import ShowVideo from '../ShowVideo/ShowVideo'; // Assuming this is the correct path
import './ShowVideoGrid.css';

function ShowVideoGrid({ vids }) {
  
  return (
    <div className='Container_ShowVideoGrid'>
      {
        vids?.map(vi => 
          {
            return(
                <div key={vi._id} className="video_box_app">
                  <ShowVideo vid={vi} /> {/* Pass videoId to ShowVideoList */}
                </div>
            )
          })
      }
    </div>
  );
}

export default ShowVideoGrid;
