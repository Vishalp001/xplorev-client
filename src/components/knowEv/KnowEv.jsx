import React, { useRef } from 'react'
import './knowEv.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const KnowEv = (props) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <>
      <div id='knowev' className='container knowEvContainer'>
        <div className='knowEvheader'>
          <h2>Article that might help</h2>
          <h1>Read our latest article</h1>
          <p>
            <Link to='/knowevpage'> View All</Link>
          </p>
        </div>

        {/* ---------------- */}
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
          className='knowEvSlider'
        >
          {props.blog &&
            props.blog.map((b) => (
              <SwiperSlide key={b._id}>
                <div className='knowEvCardContainer'>
                  <Link to={`/blog/${b._id}?blog`}>
                    <div className='imgDiv'>
                      <img src={b.photo} alt={b.title} />
                    </div>
                    <div className='knowEvCardContent'>
                      <h1 className='title'>{b.title}</h1>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${b.desc.substring(0, 150)}...`,
                        }}
                        className='desc'
                      ></p>
                    </div>
                    <div className='knowEvCardFooter'>
                      <div className='date'>
                        {new Date(b.createdAt).toDateString()}
                      </div>
                      <div className='cats'>
                        <Link to={`/knowevpage/?cat=${b.categories}`}>
                          <p>
                            <span></span> {b.categories}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
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
      </div>
    </>
  )
}

export default KnowEv
