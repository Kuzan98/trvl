import React from 'react'
import './card.css'

function card() {
  return (
    <div className='card'>
      <h1>Check out these epic destinations</h1>
      <div className='card__container'>
        <div className='card__wrapper'>
            <ul className='card__items'>
                <carditem 
                src='react-website-foreign-1/public/Spring Summer Waterfall Falls Photography Studio Backdrop Background Banner.jpeg'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Adventure'
                path='/services'
                />
                <carditem 
                src='react-website-foreign-1/public/Serene Beach Sunset Art Print - Tranquil Coastal Landscape.jpeg'
                text='Walk on the amazing beaches of Bali'
                label='Sandy Beaches'
                path='/services'
                />
            </ul>
            <ul className='card__items'>
                <carditem 
                src='react-website-foreign-1/public/f4e89d94-b788-489e-9aca-8d3f03103b5d.jpeg'
                text='Set sail in the Atlantic and visit the uncharted waters'
                label='Mystery'
                path='/services'
                />
                <carditem 
                src='react-website-foreign-1/public/Premium Photo _ Awesome photography of a soccer football stadium on fire.jpeg'
                text='Watch your favourite football team in England'
                label='Adrenaline'
                path='/products'
                />
                <carditem 
                src='react-website-foreign-1/public/Our Marrakech Desert Trips.jpeg'
                text='Trample over the Sahara on a guided camel tour'
                label='Explore'
                path='/sign-up'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default card
