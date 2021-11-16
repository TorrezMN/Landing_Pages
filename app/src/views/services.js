import './static/css/services.css';
import React, { useState, useEffect, useRef} from 'react';


import { FaSlideshare } from 'react-icons/fa';
import { GiOfficeChair, GiLockers } from "react-icons/gi";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4, MdOutlineCoffeeMaker, MdOutdoorGrill, MdOutlineBathroom } from "react-icons/md";
import { IoDocumentsOutline,IoBicycleSharp } from "react-icons/io5";
import { RiProjector2Fill } from "react-icons/ri";
import { ImPrinter } from "react-icons/im";


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}


function Services(){
  const [counter, setCounter] = useState(0);

 
 useInterval(() => {
    if(counter>11){
      setCounter(0)
    }else{
    setCounter(counter + 1);
    }
  }, 2000);

 

  return(
    <div id='services'>
      
      <div id='services_container'>
 
 {(() => {

        switch (counter) {
          case 1:
            return <div className='serv'><FaSlideshare size='5em'  className='serv_icon'/><p className='serv_name'>Shared Space</p></div>
          case 2:
            return <div className='serv'><GiOfficeChair size='5em' className='serv_icon'/><p className='serv_name'>Private Office</p></div>
          case 3:
            return <div className='serv'><MdOutlineSignalWifiStatusbarConnectedNoInternet4 size='5em' className='serv_icon'/><p className='serv_name'>High Speed Internet</p></div>  
          case 4:
            return <div className='serv'><MdOutlineCoffeeMaker size='5em' className='serv_icon'/><p className='serv_name'>Coffe Area</p></div>
          case 5:
            return <div className='serv'><IoDocumentsOutline size='5em' className='serv_icon'/><p className='serv_name'>Documents Reception</p></div>
          case 6:
            return <div className='serv'><MdOutdoorGrill size='5em' className='serv_icon'/><p className='serv_name'>Outdoor Patio</p></div>
          case 7:
            return <div className='serv'><MdOutlineBathroom size='5em' className='serv_icon'/><p className='serv_name'>Bathrooms</p></div>
          case 8:
            return <div className='serv'><GiLockers size='5em' className='serv_icon'/><p className='serv_name'>Lockers</p></div>
          case 9:
            return <div className='serv'><RiProjector2Fill size='5em' className='serv_icon'/><p className='serv_name'>Blackboards & Projector</p></div>
          case 10:
            return <div className='serv'><ImPrinter size='5em' className='serv_icon'/><p className='serv_name'>Printing Machine</p></div>
          case 11:
            return <div className='serv'><IoBicycleSharp size='5em' className='serv_icon'/><p className='serv_name'>Parking for Bicycles</p></div>
          default:
            return <div className='serv'><FaSlideshare size='5em'  className='serv_icon'/><p className='serv_name'>Shared Space</p></div>            
        }

 

     })()}

      </div>
      
    </div>
  )
}


export default Services;
