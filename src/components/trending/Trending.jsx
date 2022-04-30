import { Axios } from '../../Utility'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Link, useLocation } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './trending.scss'
import { Pagination } from 'swiper'

const Trending = ({ trendings }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <div className='trendindContainer'>
        <Swiper
          grabCursor={true}
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={false}
          spaceBetween={0}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='trendingSwiper'
        >
          {trendings &&
            trendings.slice(0, 3).map((t) => (
              <SwiperSlide key={t._id}>
                <div
                  className='sliderDiv'
                  style={{
                    backgroundImage: `url(${t.photo})`,
                  }}
                >
                  <div className='blogContainer'>
                    <div className='blogDetails'>
                      <h6 className='cats'>
                        <Link to={`/trendingnews/?cat=${t.categories}`}>
                          {t.categories}
                        </Link>
                      </h6>
                      <h1 className='title'>{t.title}</h1>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${t.desc.substring(0, 350)}...`,
                        }}
                        className='desc'
                      ></p>
                      <button className='readBtn'>
                        <Link to={`/blog/${t._id}?trending`}>Read More</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={0}
          slidesPerView={3}
          freeMode={false}
          watchSlidesProgress={false}
          modules={[Navigation, Thumbs]}
          className='trendingThumb'
        >
          {trendings &&
            trendings.slice(0, 3).map((p) => (
              <SwiperSlide key={p._id} className='thumbCard'>
                <div className='innerThumb'>
                  <h6 className='cats'>{p.categories}</h6>
                  <p className='title'>{p.title}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  )
}

export default Trending
