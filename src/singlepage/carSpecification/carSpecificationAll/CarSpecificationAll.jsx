import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './carSpecificationAll.scss'
import TopBarPage from '../../topbarpage/Topbarpage'
import { Link } from 'react-router-dom'
const CarSpecificationAll = (props) => {
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerpage = 3
  const pagesVisited = pageNumber * usersPerpage

  const displayUsers = props.eCar
    .slice(pagesVisited, pagesVisited + usersPerpage)
    .map((eC) => {
      return (
        <div key={eC._id} className='allCarItems'>
          <div className='imgDiv'>
            <img src={eC.imgOne} alt={eC.eCarName} />
          </div>
          <div className='carInfo'>
            <div className='carName'>{eC.evName}</div>
            <div className='carPrice'>Rs {eC.evPrice}*</div>
            <div className='carBtns'>
              <button className='specificationBtn'>
                <Link to={`/ev_spec/${eC._id}`}>Specification</Link>
              </button>
              <button className='compair'>
                <Link to={`/compair_cars/${eC._id}`}>Compair</Link>
              </button>
            </div>
          </div>
        </div>
      )
    })

  const pageCount = Math.ceil(props.eCar.length / usersPerpage)

  console.log(pageCount, 'pageCount')

  const changePage = ({ selected }) => {
    setPageNumber(selected)
    window.scrollTo(0, 0)
  }
  return (
    <>
      <TopBarPage />
      <div className='container'>
        <div className='spHeader'>
          <h1>Electric Cars</h1>
          <p>
            3 Min reads that are fun, insightful and easy to understand.
            <br />
            This is Finshots as you know it.
          </p>
        </div>

        {/* ------------ */}
        <div className='allCarCards'>{displayUsers}</div>
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
    </>
  )
}

export default CarSpecificationAll
