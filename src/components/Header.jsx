import React from 'react'
import { Link } from 'react-router-dom'
import { menu, close, dundee_logo, dundee_letters, dundee_logo_w_letters} from '../assets'

const Header = () => {
  return (
    <div>
      <header>
          <nav className='w-full flex py-6 justify-between items-center'>
              <Link to="/">
                  <img 
                      src={dundee_logo_w_letters} 
                      alt='Dundee Logo'
                      className='w-[130px] h-[110px] cursor-pointer '
                  />
              </Link>
              <div className='text-[72px] text-white pl-20 font-poppins text-bold flex justify-end items-center'>
              <Link to="/">
                  <img 
                      src={dundee_letters} 
                      alt='Dundee Logo'
                      className='w-[410px] h-[110px] cursor-pointer'
                  />
              </Link>
              </div>
              <ul className='list-none sm:flex hidden justify-end font-poppins items-center flex-1 px-6'>   
                  <div className="px-24">   
                  <Link to="/about">
                      <button className="text-[32px] w-[240px] h-[85px] text-white justify-end font-bold py-2 px-6 rounded">
                          ¡Conócenos!
                      </button>
                  </Link> 
                  </div>
                  <div>
                  </div>
              </ul>
          </nav>
      </header>
    </div>
  )
}

export default Header