import React from 'react'
import '../App.css';
import { Button } from './button';
import './hsection.css';

function hsection() {
  return (
    <div className='h-container'>
        <video src='react-website-foreign-1/public/starry-sky-tree-moewalls-com.mp4' autoPlay lopp muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='h-btns'>
        <button 
        className='btns'
         buttonStyle='btn--outline' 
         buttonSize='btn--large'
         >
            GET STARTED
         </button>
         <button 
        className='btns'
         buttonStyle='btn--primary' 
         buttonSize='btn--large'
         >
            WATCH TRAILER <i className='far fa-play-circle' />
         </button>
      </div>
    </div>
  )
}

export default hsection
