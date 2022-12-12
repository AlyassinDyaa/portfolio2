import React, {useState, useEffect}  from 'react'
import  './Footer.scss'
import {AppWrap, MotionWrap} from "../../wrapper"
import ReactTooltip from 'react-tooltip';
import {motion} from "framer-motion"
import {client , urlFor} from "../../client"
import {images} from '../../constants'
import {AiOutlineMail} from "react-icons/ai"


const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
    <h2 className = 'head-text'> Contact Me</h2>
    <div className = 'app__footer-cards'>
      <div className = 'app__footer-card'>
        {/*<img src={images.email} alt="email"/>*/}
        <AiOutlineMail className='app__footer-icon'/>
        <a href = 'mailto:hello@akers.com' className='p-text'>hello@akers.com</a>
      </div>
      <div className = 'app__footer-card'>
        <img src={images.mobile} alt="mobile"/>
        <a href = 'tel: +1 (123) 456-7890' className='p-text'>+1-123-456-7890</a>
      </div>
    </div>

    {/* CREATING THE CONTACT FORM */}
    <div className=' app__footer-form app__flex'>
      <div className='app__flex'>
        <input className='p-text' type="text" placeholder='Your Name' name= "name" value={username} onChange={handleChangeInput}/>
      </div>
      <div className='app__flex'>
        <input className='p-text' type="email" placeholder='Your Email' name= "email" value={email} onChange={handleChangeInput}/>
      </div>

      <div>
        <textarea 
        className = 'p-text'
        placeholder = 'Your Message'
        value = {message}
        name = {message}
        onChange = {handleChangeInput}/>
      </div>
      <button type='button' className='p-text' onClick={handleSubmit}> {loading? 'sending': ' SEND' }</button>

    </div>
    </>
  )
}

//export default Footer
export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'footer',
  //'app__whitebg',
);