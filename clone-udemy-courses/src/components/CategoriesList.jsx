import React from 'react'
import styled from 'styled-components'
import { useCoursesContext } from '../store/context/coursesContext'
import { categoriesImg } from '../utils/images'
import Category from './Category'

const CategoriesListWrapper = styled.div`
  .categories-list-top {
    margin-bottom: 32px;
  }

  .categories-list {
    gap: 32px;
  }

  @media screen and (min-width: 600px) {
    .categories-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 800px) {
    .categories-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .categories-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

const CategoriesList = () => {
  const { categories } = useCoursesContext()

  return (
    <CategoriesListWrapper>
      <div className='container'>
        <div className='categories-list-top'>
          <h2>Top Categories</h2>
        </div>
        <div className='categories-list grid'>
          {
            categories.map((category, index) => {
              return (
                <Category
                  key={index}
                  image={categoriesImg[index]}
                  category={category}
                />
              )
            })
          }
        </div>
      </div>
    </CategoriesListWrapper>
  )
}

export default CategoriesList
