import React from 'react'
import './subscribe.scss'
import subs from '../../assets/images/subs.png'

const Subscribe = () => {
  return (
    <>
      <div className='container'>
        <div className='subContainer'>
          <div className='svgDiv'>
            <div className='child'>
              <img src={subs} alt='subs' />
            </div>
            <div className='wave'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                  fill='#539F01'
                  fillOpacity='1'
                  d='M0,160L80,138.7C160,117,320,75,480,80C640,85,800,139,960,160C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
                ></path>
              </svg>
            </div>
          </div>
          <div className='subDuv'>
            <h1>Have a car Problem ? don't worry we here</h1>
            <p className='subHead'>
              Get special offer untill end of this month
            </p>
            <p className='desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className='readMoreReverse'>Call Us Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscribe
