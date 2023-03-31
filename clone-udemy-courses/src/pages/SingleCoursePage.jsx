import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import StarRating from '../components/StarRating'
import { useCoursesContext } from '../store/context/coursesContext'
import { MdInfo } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import { RiClosedCaptioningFill } from 'react-icons/ri'
import { FaShoppingCart } from 'react-icons/fa'
import { BiCheck } from 'react-icons/bi'
import { useCartContext } from '../store/context/cartContext'

const SingleCourseWrapper = styled.div`
  background: var(--clr-dark);
  color: var(--clr-white);

  .course-intro {
    padding: 40px 16px;
    max-width: 992px;

    .course-details {
      padding-top: 20px;
    }

    .course-category {
      padding: 0px 8px;
      border-radius: 6px;
    }

    .course-head {
      font-size: 38px;
      line-height: 1.2;
      padding: 12px 0 0 0;
    }

    .course-para {
      padding: 12px 0;
    }

    .rating-star-val {
      margin-right: 7px;
      padding-bottom: 5px;
      color: var(--clr-violet);
    }

    .students-count {
      margin-left: 8px;
    }

    .rating-count {
      margin-left: 8px;
      color: var(--clr-violet);
    }

    .course-info {
      li {
        margin-bottom: 2px;
        &:nth-child(2) {
          margin-top: 10px;
        }
      }

      .course-info-txt {
        text-transform: capitalize;
        margin-left: 8px;
        margin-bottom: 4px;
      }
    }

    .course-price {
      margin-top: 12px;
      .old-price {
        color: #eceb99;
        text-decoration: line-through;
        margin-left: 10px;
      }
    }

    .course-btn {
      margin-top: 16px;
      margin-bottom: 16px;
      .add-to-cart-btn {
        border: 1px solid var(--clr-violet);
        padding: 8px 30px;
        span {
          margin-left: 12px;
        }
        
        &:hover {
          background-color: rgba(230, 22, 233, 0.26);
          border: 1px solid var(--clr-purple);
          
        }
      }
    }

    @media screen and (min-width: 888px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 40px;
      .course-details {
        padding-top: 0;
      }
      .course-img {
        order: 2;
      }     
    }

    @media screen and (min-width: 1400px) {
      grid-template-columns: 60% 40%;
    }
  }

  .course-full {
    padding: 40px 16px;
    
    .course-sc-title {
      font-size: 22px;
      font-weight: 700;
      margin: 12px 0;
    }
    .course-learn {
      max-width: 992px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-learn-list {
        li {
          margin: 5px 0;
          display: flex;
          span {
            &:nth-child(1) {
              opacity: 0.7;
              margin-right: 12px;
            }
          }
        }

        
    }

    .course-content {
      max-width: 992px;
      margin-top: 30px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-content-list {
        li {
          background-color: #f7f9fa;
          padding: 12px 18px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 10px;
          font-weight: 800;
          font-size: 15px;
        }
      }
    }
  }
`

const SingleCoursePage = () => {
  const { id } = useParams()
  const { singleCourse, getSingleCourse } = useCoursesContext()
  const { addToCart } = useCartContext()
  // console.log('id', singleCourse)

  useEffect(() => {
    getSingleCourse(id)
  }, [])

  // destructuring
  const { category, image, course_name: name, description, rating_count: rating, rating_star: star, students, creator, updated_date: date, lang, actual_price: price, discounted_price: discounted, what_you_will_learn: learnItems, content } =
  singleCourse

  return (
    <SingleCourseWrapper>
      <div className='course-intro mx-auto grid'>
        <div className='course-img'>
          <img src={image} alt={name} />
          <div className='course-details'>
            <div className='course-category bg-white text-dark text-capitalize fw-6 fs-12 d-inline-block'>
              {category}
            </div>
            <div className='course-head'>
              <h5>{name}</h5>
            </div>
            <div className='course-body'>
              <p className='course-para fs-18'>{description}</p>
              <div className='course-rating flex'>
                <span className='rating-star-val fw-8 fs-16'>{star}</span>
                <StarRating star={star} />
                <span className='rating-count fw-5 fs-14'>( {rating} )</span>
                <span className='students-count fs-14'>{students}</span>
              </div>

              <ul className='course-info'>
                <li>
                  <span className='fs-14'>
                    Created by
                    <span className='fw-6 opacity-08'>{creator}</span>
                  </span>
                </li>

                <li className='flex'>
                  <span>
                    <MdInfo />
                  </span>
                  <span className='fs-14 course-info-txt fw-5'>
                    Last updates {date}
                  </span>
                </li>

                <li className='flex'>
                  <span>
                    <TbWorld />
                  </span>
                  <span className='fs-14 course-info-txt fw-5'>{lang}</span>
                </li>

                <li className='flex'>
                  <span>
                    <RiClosedCaptioningFill />
                  </span>
                  <span className='fs-14 course-info-txt fw-5'>{lang}[Auto]</span>
                </li>
              </ul>
            </div>

            <div className='course-foot'>
              <div className='course-price'>
                <span className='new-price fs-26 fw-8'>$ {discounted}</span>
                <span className='old-price fs-26 fw-6'>$ {price}</span>
              </div>
            </div>

            <div className='course-btn'>
              <Link
                to='/cart'
                className='add-to-cart-btn d-inline-block fw-7 bg-violet'
                onClick={() => addToCart(id, image, name, creator, discounted, category)}
              >
                Add to <FaShoppingCart />
              </Link>
            </div>
          </div>
        </div>

        <div className='course-full bg-white text-dark'>
          <div className='course-learn mx-auto'>
            <div className='course-sc-title'>What you'll learn</div>
            <ul className='course-learn-list grid'>
              {learnItems &&
                learnItems.map((learn, index) => {
                  return (
                    <div key={index}>
                      <li>
                        <span>
                          <BiCheck />
                        </span>
                        <span className='fs-14 fw-5 opacity-07'>{learn}</span>
                      </li>
                    </div>
                  )
                })}
            </ul>
          </div>

          <div className='course-content mx-auto'>
            <div className='course-sc-title'>Course content</div>
            <ul className='course-content-list'>
              {content &&
                content.map((contentItem, index) => {
                  return (
                    <li key={index}>
                      <span>{contentItem}</span>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </SingleCourseWrapper>
  )
}

export default SingleCoursePage
