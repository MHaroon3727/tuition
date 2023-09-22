import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {

 
  return (
<div className='whole-body'>
    <div className='containercontact'>
      <div className='content'>
        <div className='left-side'>
          <div className='Address details'>
            <span><FontAwesomeIcon icon={faLocationDot} /></span>
            <div className='topic'>Address</div>
            <div className='text-one'>Lahore , Techesthe</div>
            <div className='text-two'> 333 J1 Joher town</div>
        </div>
        <div className='phone details'>
        <span><FontAwesomeIcon icon={faPhone} /></span>
            <div className='topic'>Phone</div>
            <div className='text-one'>+92 308 4417 922</div>
          <div className='text-two'> +92 090 0786 011</div>
        
        </div>
        <div className='Email details'>
        <span><FontAwesomeIcon icon={faEnvelope} /></span>
            <div className='topic'>Gmail</div>
            <div className='text-one'>haroonrasheed21f@gmail.com</div>
          <div className='text-two'>info.coding@gmail.com</div>
        
        </div>
      </div>
      <div className='right-side'>
        <div className='topic-text'>SEND US A MESSAGE</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. its my pleasure to help you.</p>
      
      <form action="https://formspree.io/f/myyqwpwr"
             method="POST"
            >
        <div className='input-box'>
          <input type='text' placeholder='enter your name' name="text" required
             autoComplete="off" />
        </div>
        <div className='input-box'>
          <input type='text' placeholder='enter your email' name='email' required
             autoComplete="off"/>
        </div>
        <div className='input-box message-box' name="textarea" required
             autoComplete="off">
         <textarea></textarea>
        </div>
        <div className='button'>
          <input type='submit' value="Send Now" name='button'/>
        </div>
      </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Contact;