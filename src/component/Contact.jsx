import React from 'react'
import {FaPhone, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa"

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
     <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <h2 className='text-3xl font-bold text-center mb-12'> contacts Me</h2>
       <div className='flex flex-col md:flex-row items-center md:space-x-12'>
        <div className='flex-1'>
         <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> Let's Talk </h3> 
          <p> I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 '>
                <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
                <a href='mailto:gikundirodanny670@gmail.com' className='hover:underline'>gikundirodanny670@gmail.com</a>
            </div>
            <div className='mb-4 '>
                <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
                <span>+250794027348</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
                <span> Rwanda, Kigali, Kicukiro</span>
            </div>
            </div>
            <div className=' flex-1 w-full'>
             <form className='space-y-4' action="https://formspree.io/f/mjkwvvwn" method='post'>
                <div>
                   <label htmlFor='name' className='block mb-2' >Your Name</label>
                   <input type='text'
                   className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400'
                    placeholder='Enter Your Name' name='name'
                   />
                </div>
                <div>
                   <label htmlFor='email' className='block mb-2'>Email</label>
                   <input type='text'
                   className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400'
                    placeholder='Enter Your Email' name='email'
                   />
                </div>
                <div>
                   <label htmlFor='message' className='block mb-2'>Message</label>
                   <textarea type='text'
                   className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400'
                    rows="5"
                    placeholder='Enter Your Message' name='message'
                   />
                </div>
                  <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 w-full py-2 rounded-full'>Send</button>
             </form>
         </div>
      </div>
    </div>
  </div>
  )
}

export default Contact