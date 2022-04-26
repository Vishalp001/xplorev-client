import React, { useRef } from 'react'
import './electricCar.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const ElectricCar = (props) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <>
      <div id='electriccars' className='container'>
        <div className='heading'>
          <h1>Electric Cars</h1>
          <div className='hrline'></div>
          <Link to='/all_cars'>View All </Link>
        </div>
      </div>

      {/* -------------CARDS------ */}
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          210: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Keyboard, Navigation, Autoplay]}
        className='electricCarSlider container'
      >
        {props.eCar &&
          props.eCar.map((eC) => (
            <SwiperSlide key={eC._id}>
              <div className='imgDiv'>
                <img src={eC.imgOne} alt='imgOne' />
                <div className='imgDivGradient'></div>
              </div>
              <div className='detailsSection'>
                <h1 className='carName'>{eC.evName}</h1>
                <p className='carPrice'>Rs {eC.evPrice}*</p>
                <div className='carsBtn'>
                  <button className='compair'>
                    <Link to={`/ev_spec/${eC._id}`}>Specification</Link>
                  </button>
                  <button className='compair'>
                    <Link to={`/compair_cars/${eC._id}`}>Compair</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        {/* <button className='specification'>Specification</button> */}
        <div className='arrow'>
          <div className='' ref={prevRef}>
            <TiArrowSortedDown className='prev' /> <span>Prev</span>
          </div>
          <div className='' ref={nextRef}>
            <span>Next</span>
            <TiArrowSortedDown className='next' />
          </div>
        </div>
      </Swiper>
    </>
  )
}

export default ElectricCar
