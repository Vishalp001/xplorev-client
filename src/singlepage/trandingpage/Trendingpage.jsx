import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Topbarpage from '../topbarpage/Topbarpage'

const Trendingpage = (props) => {
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerpage = 3
  const pagesVisited = pageNumber * usersPerpage

  const displayUsers = props.trendings
    .slice(pagesVisited, pagesVisited + usersPerpage)
    .map((t) => {
      return (
        <div className='gridItem'>
          <div className='imgDiv'>
            <img src={t.photo} alt={t.title} />
          </div>
          <div className='cardContain'>
            <Link to={`/blog/${t._id}?trending`}>
              <h1 className='title'>{t.title}</h1>
              <p
                className='desc'
                dangerouslySetInnerHTML={{
                  __html: `${t.desc.substring(0, 350)}...`,
                }}
              ></p>
            </Link>
            <p className='cat'>
              <Link to={`?cat=${t.categories}`}>{t.categories}</Link>
            </p>
          </div>
        </div>
      )
    })

  const pageCount = Math.ceil(props.trendings.length / usersPerpage)

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
            <h1>Trending News</h1>
            <p>
              3 Min reads that are fun, insightful and easy to understand.
              <br />
              This is Finshots as you know it.
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

export default Trendingpage
