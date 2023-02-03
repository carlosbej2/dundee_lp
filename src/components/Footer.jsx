import React from 'react'

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer>
        <div id="redes_sociales" className="py-12 px-6 flex flex-col items-center">
          <div className='py-2 px-0'></div>
          <div className="flex flex-row">
              <FaFacebook className="text-3xl mr-5"/>
              <FaTwitter className="text-3xl mr-5"/>
              <FaInstagram className="text-3xl mr-5"/>
          </div> 
          <p className="text-base font-light font-poppins mt-2 text-center items-center">Síguenos en nuestras redes sociales</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer