// components/EmbeddedMap.js
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";


const Map = () => {
    return (
        <div className="w-full h-full rounded-md container mx-auto p-5 flex flex-col items-center justify-center gap-5">
            <h1 className='md:text-3xl text-2xl font-semibold flex flex-row gap-2 items-center justify-center'>Visit <span className='text-red-500'>Us</span><FaLocationDot className='md:text-3xl text-2xl'/>

</h1>

            <iframe
                title="Combined Tuberculosis Hospital Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.196676105765!2d80.89309247546836!3d26.867953476672097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2cd0e46b5a3%3A0x21583b8fc49f8b69!2sCombined%20Tuberculosis%20Hospital%20(Govt.)!5e0!3m2!1sen!2sin!4v1716540027087!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;
