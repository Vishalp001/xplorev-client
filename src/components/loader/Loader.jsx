import React from 'react'
import './loader.scss'
import loaderImg from '../../assets/images/dotLoader.svg'

const Loader = () => {
  return (
    <>
      <div className='mainLoader'>
        <img src={loaderImg} alt='Loading...' />
      </div>
    </>
  )
}

export default Loader
