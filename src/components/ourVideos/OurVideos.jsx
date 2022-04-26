import React, { useRef } from 'react'
import './ourVideos.scss'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'
import { IoLogoYoutube } from 'react-icons/io'

const OurVideos = (props) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <>
      <div id='videos' className='container'>
        <div className='heading'>
          <h1>Our Videos</h1>
          <div className='hrline'></div>
          <Link to='/videos'>View All </Link>
        </div>
      </div>
      {/* ------------- */}
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          210: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        // }}
        modules={[Keyboard, Navigation, Autoplay]}
        className='ourVideosSlider container'
      >
        {props.video &&
          props.video.map((v) => (
            <SwiperSlide key={v._id}>
              <a target='_blank' href={v.url}>
                <div className='imgDiv'>
                  <div className='ytThumble'>
                    <IoLogoYoutube className='ytIocn' />
                  </div>

                  <img src={v.photo} alt={v.title} />
                </div>
                <div className='detailsSection'>
                  <h1 className='videoName'>{v.title}</h1>
                </div>
              </a>
            </SwiperSlide>
          ))}
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

export default OurVideos
