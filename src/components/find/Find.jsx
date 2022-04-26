import React from 'react'
import './find.scss'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'

const Find = () => {
  return (
    <>
      <div className='container find'>
        <div className='findHeading'>
          <h1>Find your perfect electric car here</h1>
        </div>
        <div className='inputs'>
          <button className='inpBtns'>
            <div>
              <span>Select EV (0)</span>
              <span className='inputlogo'>
                <FiChevronDown className='inputArrow' />
              </span>
            </div>
          </button>
          <button className='inpBtns'>
            <div>
              <span>Select Brand (0)</span>
              <span className='inputlogo'>
                <FiChevronDown className='inputArrow' />
              </span>
            </div>
          </button>
          <button className='inpBtns'>
            <div>
              <span>Price Range .(0)</span>
              <span className='inputlogo'>
                <FiChevronDown className='inputArrow' />
              </span>
            </div>
          </button>
          <button className='submitBtn'>
            <div>
              <span>Submit</span>
              <span className='btnlogo'>
                <HiArrowNarrowRight className='btnArrow' />
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Find
