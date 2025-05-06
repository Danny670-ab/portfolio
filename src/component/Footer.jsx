import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {

  return (
    <div className="bg-black text-white py-8">
     <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4 ml-10 '>
              <div className='flex-1 mb-4 md:mb-0'>
              <h3 className='text-2xl font-bold mb-2'>Danny</h3>
              <p className='text-gray-400'>Full-Stack Developer based in Rwanda, specialized in web and softwaredevelopment</p>
              </div>
            </div>
            <div
             className='border-t border-gray-600 pt-4 px-20 flex flex-col md:flex-row justify-between items-center'>
              <p className='text-gray-400'>
                $copy; {new Date().getFullYear()} Danny. All right reserved
              </p>
              <div className='flex space-x-4 my-4 md:my-0'>
                <a href='https://facebook.com/Gikundiro Danny' className='text-gray-400 hover:text-white' target='_blank' rel='noopener noreferrer'>

                    <FaFacebook/>
                </a>
                <a href='https://www.linkedin.com/in/your-linkedin-Gikundiro Danny' className='text-gray-400 hover:text-white' target='_blank' rel='noopener noreferrer'>

                 <FaLinkedin/>
                  </a>
                <a href='https://twitter.com/@GikundiroDG' className='text-gray-400 hover:text-white' target='_blank' rel='noopener noreferrer'>

                    <FaTwitter/>
                </a>
                <a href='https://github.com/Danny670-ab' className='text-gray-400 hover:text-white' target='_blank' rel='noopener noreferrer'>

                    <FaGithub/>
                </a>
              </div>
            </div>
            <div className='flex space-x-4 px-20'>
            <a href='#' className='text-gray-400 hover:text-white' >
                Privacy
                </a>
                <a href='#' className='text-gray-400 hover:text-white' >
                  Terms of Services
                </a>
            </div>
    
    </div>
  )
}

export default Footer