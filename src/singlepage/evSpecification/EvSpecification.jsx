import React, { useEffect, useRef, useState } from 'react'
import './EvSpecificationblog.scss'
import TopbarPage from '../topbarpage/Topbarpage'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { useLocation } from 'react-router-dom'
import { Axios } from '../../Utility'

const CarSpecificationBlog = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  useEffect(() => {
    const GetPost = async () => {
      const res = await Axios.get(`/ev/${path}`)
      setPost(res.data)
    }
    GetPost()
  }, [path])

  return (
    <>
      <TopbarPage />

      {/* ------ */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='carspecificationSwiper container'
      >
        {post.imgOne && (
          <SwiperSlide>
            <img src={post.imgOne} />
          </SwiperSlide>
        )}
        {post.imgTwo && (
          <SwiperSlide>
            <img src={post.imgTwo} />
          </SwiperSlide>
        )}
        {post.imgThree && (
          <SwiperSlide>
            <img src={post.imgThree} />
          </SwiperSlide>
        )}
        {post.imgFour && (
          <SwiperSlide>
            <img src={post.imgFour} />
          </SwiperSlide>
        )}
        {post.imgFive && (
          <SwiperSlide>
            <img src={post.imgFive} />
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='carspecificationThumb container'
      >
        {post.imgOne && (
          <SwiperSlide>
            <img src={post.imgOne} />
          </SwiperSlide>
        )}
        {post.imgTwo && (
          <SwiperSlide>
            <img src={post.imgTwo} />
          </SwiperSlide>
        )}
        {post.imgThree && (
          <SwiperSlide>
            <img src={post.imgThree} />
          </SwiperSlide>
        )}
        {post.imgFour && (
          <SwiperSlide>
            <img src={post.imgFour} />
          </SwiperSlide>
        )}
        {post.imgFour && (
          <SwiperSlide>
            <img src={post.imgFour} />
          </SwiperSlide>
        )}
      </Swiper>

      {/* -----Specifications & Key Features--------- */}

      <div className='specAndFeat container'>
        <div className='spec'>
          <h1 className='vehiclename'>Key Specifications of {post.evName}</h1>

          <div className='specAndFeatTable'>
            {/* COL ONE */}
            <div className='tableColOne'>
              {post.brand && (
                <div className='keySpec'>
                  <p className='name'>Brand</p>
                  <p className='data'>{post.brand}</p>
                </div>
              )}
              {post.type && (
                <div className='keySpec'>
                  <p className='name'>Type</p>
                  <p className='data'>{post.type}</p>
                </div>
              )}
              {post.model && (
                <div className='keySpec'>
                  <p className='name'>model</p>
                  <p className='data'>{post.model}</p>
                </div>
              )}
              {post.color && (
                <div className='keySpec'>
                  <p className='name'>color</p>
                  <p className='data'>{post.color}</p>
                </div>
              )}
              {post.chargingTime && (
                <div className='keySpec'>
                  <p className='name'>charging Time</p>
                  <p className='data'>{post.chargingTime}</p>
                </div>
              )}
              {post.range && (
                <div className='keySpec'>
                  <p className='name'>range</p>
                  <p className='data'>{post.range}</p>
                </div>
              )}
              {post.topSpeed && (
                <div className='keySpec'>
                  <p className='name'>top Speed</p>
                  <p className='data'>{post.topSpeed}</p>
                </div>
              )}
              {post.torque && (
                <div className='keySpec'>
                  <p className='name'>torque</p>
                  <p className='data'>{post.torque}</p>
                </div>
              )}
              {post.motorPower && (
                <div className='keySpec'>
                  <p className='name'>motor Power</p>
                  <p className='data'>{post.motorPower}</p>
                </div>
              )}
            </div>
            {/* COL TWO */}
            <div className='tableColTwo'>
              {post.motorType && (
                <div className='keySpec'>
                  <p className='name'>motor Type</p>
                  <p className='data'>{post.motorType}</p>
                </div>
              )}
              {post.transmissionTypes && (
                <div className='keySpec'>
                  <p className='name'>transmission Types</p>
                  <p className='data'>{post.transmissionTypes}</p>
                </div>
              )}
              {post.features && (
                <div className='keySpec'>
                  <p className='name'>features</p>
                  <p className='data'>{post.features}</p>
                </div>
              )}
              {post.safetyFeatures && (
                <div className='keySpec'>
                  <p className='name'>safety Features</p>
                  <p className='data'>{post.safetyFeatures}</p>
                </div>
              )}
              {post.dimensions && (
                <div className='keySpec'>
                  <p className='name'>dimensions</p>
                  <p className='data'>{post.dimensions}</p>
                </div>
              )}
              {post.alloyWheelSize && (
                <div className='keySpec'>
                  <p className='name'>alloy WheelSize</p>
                  <p className='data'>{post.alloyWheelSize}</p>
                </div>
              )}
              {post.kerbWeight && (
                <div className='keySpec'>
                  <p className='name'>kerb Weight</p>
                  <p className='data'>{post.kerbWeight}</p>
                </div>
              )}
              {post.groundClearance && (
                <div className='keySpec'>
                  <p className='name'>ground Clearance</p>
                  <p className='data'>{post.groundClearance}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarSpecificationBlog
