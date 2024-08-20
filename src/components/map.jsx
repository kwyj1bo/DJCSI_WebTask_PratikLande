import React from "react";

function Map() {
    return (
        <div className="map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176514.6064971043!2d-108.19134484086095!3d38.96818272678923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sin!4v1724090588555!5m2!1sen!2sin" 
                width={1300} 
                height={600} 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default Map;
