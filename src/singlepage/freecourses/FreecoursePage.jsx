import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './freecoursePage.scss'
import { Link } from 'react-router-dom'
import Topbarpage from '../topbarpage/Topbarpage'

const FreecoursePage = (props) => {
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerpage = 3
  const pagesVisited = pageNumber * usersPerpage

  const displayUsers = props.freeCourse
    .slice(pagesVisited, pagesVisited + usersPerpage)
    .map((c) => {
      return (
        <div key={c._id} className='gridItem'>
          <div className='imgDiv'>
            <img src={c.coursePhoto} alt={c.title} />
          </div>
          <div className='cardContain'>
            <h1 className='title'>{c.title}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: `${c.desc.substring(0, 350)}...`,
              }}
              className='desc'
            ></p>
          </div>
          <Link to={`/freecoursesblog/${c._id}`}>
            <button className='enrollBtnBlogs'>Enroll</button>
          </Link>
        </div>
      )
    })

  const pageCount = Math.ceil(props.freeCourse.length / usersPerpage)

  console.log(pageCount, 'pageCount')

  const changePage = ({ selected }) => {
    setPageNumber(selected)
    window.scrollTo(0, 0)
  }
  return (
    <>
      <Topbarpage />
      <div className='spQuickbitesWrapper'>
        <div className='container spQuickbites'>
          <div className='spHeader'>
            <h1>Free Courses</h1>
            <p>
              Advanced Industry Relevant Courses
              <br />
              Top Job Leading Courses
            </p>
          </div>

          <div className='spQBCards'>
            <div className='gridContainer'>{displayUsers}</div>
          </div>
          <ReactPaginate
            previousLabel={<AiOutlineArrowLeft />}
            nextLabel={<AiOutlineArrowRight />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDIsabled'}
            activeClassName={'paginationActive'}
          />
        </div>
      </div>
    </>
  )
}

export default FreecoursePage
