import React from 'react'
import { Link } from 'react-router-dom'

function carditem(props) {
  return (
    <>
      <li className='card__item'>
        <Link className='card__item__link' to={props.path}>
        <figure className='card__item__pick-wrap' data-category={props.label}>
            <img src={props.src} alt='Travel Image' className='card__item__img'/>
        </figure>
        <div className='card__item__info'>
            <h5 className='card__item__text'>{props.text}</h5>
        </div>
        </Link>
      </li>
    </>
  )
}

export default carditem
