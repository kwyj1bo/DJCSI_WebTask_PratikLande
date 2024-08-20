import React from "react";
import Google from "./images/google.svg"
import Facebook from "./images/facebook.svg"
import Instagram from "./images/instagram.svg"
function Footer(){
    return(
        <div className="outer_footer">
            <div className="left_footer">
                <div>Lorem Ipsum is simply dummy text <br />of the printing and typesetting <br /> industry</div>
                <div className="logo_collection">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Google} alt="" />
                </div>
            </div>
            <div className="right_footer">
                <div className="footerrows">
                    <div id="titleone">Home</div>
                    <div>Booking</div>
                    <div>Facilities</div>
                    <div>Location</div>
                    <div>Contact</div>
                </div>
                <div className="footerrows"> 
                    <div id="titletwo">Help</div>
                    <div>Help center</div>
                    <div>Privacy policy</div>
                    <div>FAQs</div>
                </div>
                <div className="footerrows"> 
                    <div id="titlethree">Get the app</div>
                    <div>iOS app</div>
                    <div>Android app</div>
                </div>
            </div>
        </div>
    );
}
export default Footer;