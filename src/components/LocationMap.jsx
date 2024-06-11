import React from 'react';

const LocationMap = () => {
    return (
        <div className="location-map w-full h-[60vh] md:h-[100vh]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.0132460252772!2d-0.21158350080256993!3d51.5672622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876108d5c2f4d17%3A0xff5eec2236b2a44a!2sGold%20Blatts!5e0!3m2!1sen!2s!4v1717606184628!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
            ></iframe>
        </div>
    );
};

export default LocationMap;
