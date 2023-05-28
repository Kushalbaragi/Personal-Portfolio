import React from 'react'
import '../css/contact.scss';


function Contact() {
  return (
        <section className="form-wrapper">
            
        <div className="left-wrapper">
            <p>You can reach out me at anytime <a href='mailto:Kushalbaragi83@gmail.com'>Kushalbaragi83@gmail.com</a></p>
        </div>
        <div className="right-wrapper">
           <form action="" method='post'>
            <h2>Say Hello!</h2>
            <label> Name<input type='text' name='name' placeholder='Enter Your Name'></input></label>
            <label> Email<input type='email' name='email' placeholder='Enter Your Email'></input></label>
            <label> Institute<input type='text' name='Institute' placeholder='Institute Name '></input></label>
            <label> Message<input type='text' name='messsage' placeholder='Enter Your Message'></input></label>
            <div className="btn-wrapper">
              <button className='button'>Submit</button>
              </div>
           </form>
        </div>
        </section>

    
  )
}

export default Contact;