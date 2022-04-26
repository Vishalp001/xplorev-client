import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'

import './upcomingEv.scss'

// import required modules
import { EffectCoverflow } from 'swiper'

export default function App(props) {
  const [getProps, setGetProps] = useState()
  const [isActiveAll, setisActiveAll] = useState(true)
  const [isActiveCar, setisActiveCar] = useState(false)
  const [isActiveBike, setisActiveBike] = useState(false)


  useEffect(() => {
    setGetProps(props.upcoming)
  }, [props.upcoming])
  
  const allUpcoming = (type) =>{ 
    if(type == 'all'){
      setisActiveAll(true)
      setisActiveCar(false)
      setisActiveBike(false)
    }
    if(type == 'bikes'){
      setisActiveAll(false)
      setisActiveCar(false)
      setisActiveBike(true)
    }
    if(type == 'cars'){
      setisActiveAll(false)
      setisActiveCar(true)
      setisActiveBike(false)
    }
  }

  return (
    <>
      <div className='upcomingHeader container'>
        <h2>We have a list of all the upcoming Ev's.</h2>
        <div id='myDIV'>
          <button className={ isActiveAll ? "active" : "" } onClick={(e) => [setGetProps(props.upcoming),   allUpcoming("all")  ]  }>
            Upcoming Evs
          </button>
          <button
            className={ isActiveBike ? "active" : "" }
            onClick={(e) => [setGetProps(props.upcomingBike), allUpcoming("bikes") ]}
          >
            Upcoming Bikes
          </button>
          <button
            className={ isActiveCar ? "active" : "" }  
            onClick={(e) => [setGetProps(props.upcomingCar), allUpcoming("cars")]}
          >
            Upcoming Cars
          </button>
        </div>
      </div>
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
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 50,
          modifier: 10,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow]}
        className='mySwiper upcoming container'
      >
        {getProps &&
          getProps.map((eC) => (
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
                    <Link to={`/compair_upcoming_${eC.evtype}/${eC._id}`}>
                      Compair
                    </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}
