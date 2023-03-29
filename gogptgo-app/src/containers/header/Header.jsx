import React from 'react'
import './header.css';
import group from '../../assets/Group 81.png'
import HeaderIlustration from '../../assets/Header Illustration.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>
              Travel with CorgiAI
          </h1>
          
          <p>Future of travelling built by CorgiAI is not a myth. Joint the revolution</p>

          <div className='gpt3__header-content__input'>
            <input type="email" placeholder='Your email address' />
            <button type='button'>Let's Go!</button>
          </div>

          <div className='gpt3__header-content__group'>
            <img src={group} />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        
    </div>
    
  )
}

export default Header