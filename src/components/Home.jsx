import React from "react";
import houseimg from "./images/house_img1.png";
import videoicon from "./images/video_play_icon.svg"
function homepage(){
    return(
<div>
    <div className="nav_outer_div">
      <div id="name">LOREM IPSUM</div>
      <div className="options">
        <div>Booking</div>
        <div>Facilities</div>
        <div>About Us</div>
        <div>Location</div>
        <div>Contact</div>
      </div>
      <div className="login">Login</div>
    </div>
    <div className="home_page">
      <div className="tag_list">
        <div className="tag_line">Find your perfect place to stay</div>
        <div className="tag_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
        <div className="watch_video">
          <div className="vid_icon"><img src={videoicon} alt="" /></div>
          <div className="vid_desc">Watch video</div>
        </div>
      </div>
      <div>
        <img src={houseimg} alt="" />
      </div>
    </div>
</div>
    );
};
export default homepage;