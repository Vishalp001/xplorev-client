import React, { useEffect, useState, useRef } from 'react'
import './blog.scss'
import Topbarpage from '../../topbarpage/Topbarpage'
import Loader from '../../../components/loader/Loader'
import { GrTwitter, GrFacebook } from 'react-icons/gr'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { HiMail } from 'react-icons/hi'
import ReadingBar from '../../../components/readingbar/ReadingBar'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Blog = (props) => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  const [loader, setLoader] = useState(true)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  let { search } = useLocation()
  console.log(search)

  useEffect(() => {
    const GetPost = async () => {
      const res = await axios.get(`/trending/blogs/${path}`, {
        params: location.search,
      })
      setPost(res.data)
      setLoader(false)
    }

    GetPost()
  }, [path])

  return (
    <>
      <Topbarpage />
      {loader ? (
        <Loader />
      ) : (
        <>
          <ReadingBar />

          <div className='lnBlog'>
            <div className='lnHead'>
              <h1 className='title'>{post.title}</h1>
              <div className='lncatAndDate'>
                <p className='lndate'>
                  {new Date(post.createdAt).toDateString()}
                </p>
                <p className='lncat'>{post.categories}</p>
              </div>
            </div>
            <div className='lnImgDiv'>
              <img src={post.photo} alt={post.title} />
            </div>

            <div className='lndescAndShare'>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${post.desc}`,
                }}
                className='lndesc'
              ></div>
              <div className='lnShare'>
                <div className='lnShareDiv'>
                  <p className='lnshareText'>Share this</p>
                  <div className='lnShareIcons'>
                    <p>
                      <GrTwitter />
                    </p>
                    <p>
                      <FaLinkedinIn />
                    </p>
                    <p>
                      <FaFacebookF />
                    </p>
                    <p>
                      <IoLogoWhatsapp />
                    </p>
                    <p>
                      <HiMail />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />

          {/* --------Related Articles------ */}

          {search === '?trending' && (
            <div className='container'>
              <h1>Related Trending Articles</h1>
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
                className='blogRelatedArticle '
              >
                {props.trendings &&
                  props.trendings.map((b) => (
                    <SwiperSlide key={b._id}>
                      <div className='knowEvCardContainer'>
                        <Link to={`/blog/${b._id}?trending`}>
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
                              <Link to={`/trendingnews/?cat=${b.categories}`}>
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
          )}
          {search === '?news' && (
            <div className='container'>
              <h1>Related News Articles</h1>

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
                className='blogRelatedArticle '
              >
                {props.news &&
                  props.news.map((b) => (
                    <SwiperSlide key={b._id}>
                      <div className='knowEvCardContainer'>
                        <Link to={`/blog/${b._id}?news`}>
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
                              <Link to={`/latestnews/?cat=${b.categories}`}>
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
          )}
          {search === '?blog' && (
            <div className='container'>
              <h1>Related Blogs Articles</h1>

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
                className='blogRelatedArticle '
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
          )}
        </>
      )}
    </>
  )
}

export default Blog
