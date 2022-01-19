import React from 'react'
import './header.css'
import Web from './web/index'
import { useState } from 'react'
import Mobile from './mobile/index'

function Header() {

    const[isOpen,setIsOpen] = useState(false);
    return (
        <div className='header'>
          <div className='logo'>Vineeth Victor</div>
          <div className='menu'>
              <div className='web-menu'>
                  <Web />
              </div>
              <div className='mobile-menu'>
                  <div onClick={() => setIsOpen(!isOpen)}>
                     <i class="fi fi-rr-apps menu-icon"></i>
                  </div>
                  {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                  
              </div>


          </div>
        </div>
    )
}

export default Header
