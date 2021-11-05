import './static/css/services.css';

import { FaSlideshare } from 'react-icons/fa';
import { GiOfficeChair,
         GiExplosiveMeeting,
         GiKitchenTap,
         GiLockers } from "react-icons/gi";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4, 
         MdOutlineCoffeeMaker,
         MdOutlineCleaningServices,
         MdOutdoorGrill,
         MdOutlineBathroom } from "react-icons/md";
import { IoDocumentsOutline,
         IoBicycleSharp } from "react-icons/io5";
import { RiProjector2Fill } from "react-icons/ri";
import { ImPrinter } from "react-icons/im";




function Services(){
  return(
    <div id='services'>

        <div className='serv'>
          <FaSlideshare size='3em' />
          <p className='serv_name'>shared space</p>
        </div>
        <div className='serv'>
          <GiOfficeChair size='3em'/>
          <p className='serv_name'>private office</p>
        </div>
        <div className='serv'>
          <GiExplosiveMeeting size='3em'/>
          <p className='serv_name'>Meeting rooms</p>
        </div>
        <div className='serv'>
          <MdOutlineSignalWifiStatusbarConnectedNoInternet4 size='3em'/>
          <p className='serv_name'>High speed Internet</p>
        </div>
        <div className='serv'>
          <MdOutlineCoffeeMaker size='3em'/>
          <p className='serv_name'>Coffe Area</p>
        </div>
        <div className='serv'>
          <GiKitchenTap size='3em'/>
          <p className='serv_name'>Equipped kitchen</p>
        </div>
        <div className='serv'>
          <IoDocumentsOutline size='3em'/>
          <p className='serv_name'>Documents reception</p>
        </div>
        <div className='serv'>
          <MdOutlineCleaningServices size='3em'/>
          <p className='serv_name'>Housekeeping</p>
        </div>
        <div className='serv'>
          <MdOutdoorGrill size='3em'/>
          <p className='serv_name'>Outdoor patio</p>
        </div>
        <div className='serv'>
          <MdOutlineBathroom size='3em'/>
          <p className='serv_name'>Bathrooms with shower</p>
        </div>
        <div className='serv'>
          <GiLockers size='3em'/>
          <p className='serv_name'>Lockers</p>
        </div>
        <div className='serv'>
          <RiProjector2Fill size='3em'/>
          <p className='serv_name'>Blackboards and projector</p>
        </div>
        <div className='serv'>
          <ImPrinter size='3em'/>
          <p className='serv_name'>Printing machine</p>
        </div>
        <div className='serv'>
          <IoBicycleSharp size='3em'/>
          <p className='serv_name'>Parking for bicycles</p>
        </div>
    </div>
  )
}


export default Services;
