/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

const Star = styled.span`
color: var(--clr-gold);
margin-right:2px;
font-size: 13px;
margin-bottom: -5px !important;

`

const StarRating = ({ star }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const val = index + 0.5

    return (
      <Star key={index}>
        {
          star >= index + 1
            ? (<BsStarFill />)
            : star >= val
              ? (<BsStarHalf />)
              : (<BsStar />)
        }
      </Star>
    )
  })
  return (
    <div>{stars}</div>
  )
}

export default StarRating
