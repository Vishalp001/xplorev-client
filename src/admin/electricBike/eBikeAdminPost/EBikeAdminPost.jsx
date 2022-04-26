import React, { useEffect, useState, useContext } from 'react'
import './eBikeAdminPost.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../../context/Context'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { FreeMode, Navigation, Thumbs } from 'swiper'

const CarSpecificationBlog = () => {
  const [updateMode, setUpdateMode] = useState(false)
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState('')
  const { user } = useContext(Context)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const [eBikeName, setEBikeName] = useState('')
  const [eBikePrice, setEBikePrice] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setmodel] = useState('')
  const [color, setcolor] = useState('')
  const [topSpeed, settopSpeed] = useState('')
  const [range, setRange] = useState('')
  const [torque, setTorque] = useState('')
  const [motorPower, setmotorPower] = useState('')
  const [chargingTime, setChargingTime] = useState('')
  const [batteryType, setBatteryType] = useState('')
  const [batteryCapacity, setBatteryCapacity] = useState('')
  const [features, setfeatures] = useState('')
  // const [imgOne, setImgOne] = useState(null)
  // const [imgTwo, setImgTwo] = useState(null)
  // const [imgThree, setImgThree] = useState(null)
  // const [imgFour, setImgFour] = useState(null)
  // const [imgFive, setImgFive] = useState(null)

  useEffect(() => {
    const GetPost = async () => {
      const res = await axios.get(`/ebike/${path}`)
      setPost(res.data)
      setEBikeName(res.data.eBikeName)
      setEBikePrice(res.data.eBikePrice)
      setBrand(res.data.brand)
      setmodel(res.data.model)
      setcolor(res.data.color)
      settopSpeed(res.data.topSpeed)
      setRange(res.data.range)
      setTorque(res.data.torque)
      setmotorPower(res.data.motorPower)
      setChargingTime(res.data.chargingTime)
      setBatteryType(res.data.batteryType)
      setBatteryCapacity(res.data.batteryCapacity)
      setfeatures(res.data.features)
    }
    GetPost()
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/ebike/${path}`, {
        data: { username: user.username },
      })
      window.location.replace('/admin')
    } catch (error) {
      console.log('Cant Delete The E Car Post')
    }
  }

  // Update Trending Post

  const handleUpdate = async () => {
    try {
      await axios.put(`/ebike/${path}`, {
        username: user.username,
        eBikeName,
        eBikePrice,
        brand,
        model,
        color,
        topSpeed,
        range,
        torque,
        motorPower,
        chargingTime,
        batteryType,
        batteryCapacity,
        features,
      })
      // window.location.reload()
      setUpdateMode(false)
    } catch (error) {
      console.log('Unable to Update E Car Post')
    }
  }

  return (
    <>
      {/* ------ */}
      <div className='deleteEdit'>
        {updateMode ? (
          <div>
            <button onClick={(e) => setUpdateMode(false)}>Cancle</button>
            <button onClick={handleUpdate}>Update</button>
          </div>
        ) : (
          <div>
            <button onClick={(e) => setUpdateMode(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
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
        <SwiperSlide>
          <img src={post.imgOne} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={post.imgTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={post.imgThree} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={post.imgFour} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={post.imgFive} />
        </SwiperSlide>
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
        <SwiperSlide>
          <img src={post.imgOne} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={post.imgTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={post.imgThree} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={post.imgFour} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={post.imgFive} />
        </SwiperSlide>
      </Swiper>

      {/* -----Specifications & Key Features--------- */}

      <div className='specAndFeat container'>
        <div className='spec'>
          <h1 className='vehiclename'>
            Key Specifications of
            {updateMode ? (
              <input
                className='ACarNameInput'
                type='text'
                value={eBikeName}
                onChange={(e) => setEBikeName(e.target.value)}
              />
            ) : (
              <span> {eBikeName}</span>
            )}
          </h1>

          <div className='specAndFeatTable'>
            {/* COL ONE */}
            <div className='tableColOne'>
              <div className='keySpec'>
                <p className='name'>brand</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                ) : (
                  <p className='data'>{brand}</p>
                )}
              </div>

              <div className='keySpec'>
                <p className='name'>model </p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={model}
                    onChange={(e) => setmodel(e.target.value)}
                  />
                ) : (
                  <p className='data'>{model}</p>
                )}
              </div>
              <div className='keySpec'>
                <p className='name'>color </p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={color}
                    onChange={(e) => setcolor(e.target.value)}
                  />
                ) : (
                  <p className='data'>{color}</p>
                )}
              </div>
              <div className='keySpec'>
                <p className='name'>top Speed</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={topSpeed}
                    onChange={(e) => settopSpeed(e.target.value)}
                  />
                ) : (
                  <p className='data'>{topSpeed}</p>
                )}
              </div>

              <div className='keySpec'>
                <p className='name'>range </p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                  />
                ) : (
                  <p className='data'>{range}</p>
                )}
              </div>

              <div className='keySpec'>
                <p className='name'>torque</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={torque}
                    onChange={(e) => setTorque(e.target.value)}
                  />
                ) : (
                  <p className='data'>{torque}</p>
                )}
              </div>
              <div className='keySpec'>
                <p className='name'>motor Power</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={motorPower}
                    onChange={(e) => setmotorPower(e.target.value)}
                  />
                ) : (
                  <p className='data'>{motorPower}</p>
                )}
              </div>
              <div className='keySpec'>
                <p className='name'>charging Time</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={chargingTime}
                    onChange={(e) => setChargingTime(e.target.value)}
                  />
                ) : (
                  <p className='data'>{chargingTime}</p>
                )}
              </div>
            </div>
            {/* COL TWO */}
            <div className='tableColTwo'>
              <div className='keySpec'>
                <p className='name'>Battery Type</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={batteryType}
                    onChange={(e) => setBatteryType(e.target.value)}
                  />
                ) : (
                  <p className='data'>{batteryType}</p>
                )}
              </div>
              <div className='keySpec'>
                <p className='name'>Battery Capacity</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={batteryCapacity}
                    onChange={(e) => setBatteryCapacity(e.target.value)}
                  />
                ) : (
                  <p className='data'>{batteryCapacity}</p>
                )}
              </div>

              <div className='keySpec'>
                <p className='name'>features</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={features}
                    onChange={(e) => setfeatures(e.target.value)}
                  />
                ) : (
                  <p className='data'>{features}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarSpecificationBlog
