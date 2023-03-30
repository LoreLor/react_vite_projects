/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../store/context/cartContext'
import StarRating from './StarRating'

const CourseCard = styled.div`
margin-bottom: 20px;
border: 1px solid rgba(0, 0, 0, 0.1);
box-shadow: rgba(149, 157, 165, 0.1) opx 8px 24px;
display: flex;
flex-direction: column;
.item-body {
  margin: 14px 0;
  padding: 4px 18px;

    .item-name {
      line-height: 1.4;
    }

    .item-creator {
      color: rgba(0, 0, 0, 0.6);
    }

    .rating-star-val {
      margin-bottom:5px;
      margin-right: 6px;
    }

    .rating-count {
      margin-left: 4px;
    }

    .item-price-old{
      text-decoration: line-through;
      margin-left: 8px;
    }
  }

.item-btns {
  justify-self: flex-start;
  padding: 4px 8px 30px 18px;
  margin-top: auto;
  .item-btn {
    display: inline-block;
    padding: 6px 16px;
    transition: var(--transition);
    white-space: nowrap;

    &.see-details-btn {
      background-color: transparent;
      border: 1px solid var(--clr-black);
      margin-right: 5px;

      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }

    &.add-to-cart-btn {
      background-color: transparent;
      color: var(--clr-black);
      border: 1px solid var(--clr-black);

      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }
  }
}
`

const Course = (courses) => {
  const { id, category, image, course_name: name, rating_count: rating, rating_star: star, actual_price: price, discounted_price: discounted, creator } = courses
  const { addToCart } = useCartContext()

  return (
    <CourseCard>
      <div className='item-img'>
        <img src={image} alt='image_course' />
      </div>

      <div className='item-body'>
        <h5 className='item-name fs-15 fw-8'>{name}</h5>
        <span className='item-creator fs-13 fw-6'>{creator}</span>

        <div className='item-rating flex'>
          <span className='rating-star-val fs-14 fw-8 text-gold'>{star}</span>
          <StarRating star={star} />
          <span className='rating-count opacity-08 fs-13 fw-5 text-gold'>({rating})</span>
        </div>

        <div className='item-price'>
          <span className='item-price-new fs-15 fw-7'>$ {discounted}</span>
          <span className='item-price-old fs-15 fw-5'>$ {price}</span>

        </div>
      </div>

      <div className='item-btns flex'>
        <Link to={`/courses/${id}`} className='item-btn see-details-btn  fw-7 fs-15'>
          See Details
        </Link>
        <Link to='/cart' onClick={() => addToCart(id, image, name, creator, discounted, category)} className='item-btn add-to-cart-btn  fw-7 fs-15'>
          Add to Cart
        </Link>
      </div>
    </CourseCard>
  )
}

export default Course
