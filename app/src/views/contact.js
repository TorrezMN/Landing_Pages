import './static/css/contact.css';
import { AiFillFacebook, 
         AiFillTwitterCircle, 
        AiOutlineLinkedin,
        AiOutlineMail} from "react-icons/ai";


function Contact(){
  return(
    <div id='socials'>
      <div className='social_section'>
        <div className='social_item'>
            <a href='#'>
              <AiFillFacebook/>
            </a>
        </div>
        <div className='social_item'>
            <a href='#'>
              <AiFillTwitterCircle/>
            </a>
        </div>
        <div className='social_item'>
            <a href = '#'>
              <AiOutlineLinkedin/>
            </a>
        </div>
        <div className='social_item'>
            <a href='#'>
              <AiOutlineMail/>
            </a>
        </div>
      </div>
      <div className='social_section'></div>
      <div className='social_section'></div>
    
    </div>
  )
}


export default Contact;
