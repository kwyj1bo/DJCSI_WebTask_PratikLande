import React from "react";
import HotelOne from "../components/images/hotel_one.png";
import Stars from "../components/images/taare.png"
import HotelTwo from "../components/images/hotel_two.png";
import HotelThree from "../components/images/hotel_three.png";

function HotelsList(props) {
  return (
    <div>
      <img src={props.hotel_image} alt="Hotel" />
      <div className="hotels_location">{props.location}</div>
      <div className="hotels_name">{props.hotelname}</div>
      <div className="hotelinfo">
        <div>{props.cost}</div>
        <div className="starsandrating">
            <img src={props.stars} alt="" />
          <div>{props.rating}</div>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="hotels">
      <div className="hotels_title">Our most popular Hotels</div>
      <div className="hotels_view">
        <div className="hotels_description">
          Lorem ipsum is simply dummy text of the printing and <br /> typesetting industry.
        </div>
        <div className="view_all">View All</div>
      </div>
      <div className="sabhotels">
      <HotelsList
        hotel_image={HotelOne}
        location="London NW8 7JT England"
        hotelname="Danubis Hotel Regents Park"
        cost="$200 Per Night"
        stars={Stars}
        rating="4.8"
      />
      <HotelsList
        hotel_image={HotelTwo}
        location="London NW8 7JT England"
        hotelname="The Resident Soho"
        cost="$200 Per Night"
        stars={Stars}
        rating="4.8"
      />
      <HotelsList
        hotel_image={HotelThree}
        location="London NW8 7JT England"
        hotelname="London Bridge Hotel"
        cost="$200 Per Night"
        stars={Stars}
        rating="4.8"
      />
      </div>
    </div>
  );
}

export default Cards;
