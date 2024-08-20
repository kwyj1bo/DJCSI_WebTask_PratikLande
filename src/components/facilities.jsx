import React from "react";
import PrivateWorkspace from "../components/images/private_workspace.svg"
import ParkingArea from "../components/images/parking_area.svg"
import Breakfast from "../components/images/breakfast.svg"
import FreeWifi from "../components/images/free_wifi.svg"
import FreeElectricity from "../components/images/free_electricity.svg"
import SwimmingPool from "../components/images/swimming_pool.svg"
import ExerciseSpace from "../components/images/exercise_space.svg"
import OtherService from "../components/images/other_services.svg"
function facilities(){
    return(
        <div className="facilities">
            <div className="facilities_left">
                <div className="facilities_tagline">We do our best facilities provide you</div>
                <p className="facilities_description">Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                <div className="contact_now">Contact Now</div>
            </div>
            <div className="facilities_right">
                <div className="facilities_list"><img className="facilities_logo"src={PrivateWorkspace} alt="" /><div>Private Workspace</div></div>
                <div className="facilities_list"><img className="facilities_logo"src={ParkingArea} alt="" /><div>Parking Area</div></div>
                <div className="facilities_list"><img className="facilities_logo"src={Breakfast} alt="" /><div>Breakfast</div></div>
                <div className="facilities_list"><img className="facilities_logo"src={FreeWifi} alt="" /><div>Free Wifi</div></div>
                <div className="facilities_list"><img className="facilities_logo"src={FreeElectricity} alt="" /><div>Free Electricity</div></div>
                <div className="facilities_list"><img className="facilities_logo"src={SwimmingPool} alt="" /><div>Swimming Pool</div></div>
                <div className="facilities_list"><img className="facilities_logo"src={ExerciseSpace} alt="" /><div>Exercise Space</div></div>
                <div className="facilities_list"><img className="facilities_logo"src={OtherService} alt="" />Other Service</div>
            </div>
        </div>
    );
}
export default facilities;