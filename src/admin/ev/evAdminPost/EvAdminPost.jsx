import React, { useEffect, useState, useContext } from 'react'
import './evAdminPost.scss'
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
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState('')
  const { user } = useContext(Context)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [evtype, setevType] = useState('')
  const [upcoming, setUpcoming] = useState('')
  const [evName, setevName] = useState('')
  const [eCarPrice, setECarPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [type, setType] = useState('')
  const [model, setmodel] = useState('')
  const [color, setcolor] = useState('')
  const [chargingTime, setchargingTime] = useState('')
  const [range, setRange] = useState('')
  const [topSpeed, settopSpeed] = useState('')
  const [torque, setTorque] = useState('')
  const [motorPower, setmotorPower] = useState('')
  const [motorType, setmotorType] = useState('')
  const [transmissionTypes, settransmissionTypes] = useState('')
  const [features, setfeatures] = useState('')
  const [safetyFeatures, setsafetyFeatures] = useState('')
  const [dimensions, setdimensions] = useState('')
  const [alloyWheelSize, setalloyWheelSize] = useState('')
  const [kerbWeight, setkerbWeight] = useState('')
  const [groundClearance, setgroundClearance] = useState('')
  const [batteryType, setBatteryType] = useState('')
  const [batteryCapacity, setBatteryCapacity] = useState('')

  const [updateMode, setUpdateMode] = useState(false)

  useEffect(() => {
    const GetPost = async () => {
      const res = await axios.get(`/ev/${path}`)
      setPost(res.data)
      setevName(res.data.evName)
      setevType(res.data.evtype)
      setUpcoming(res.data.upcoming)
      setECarPrice(res.data.eCarPrice)
      setBrand(res.data.brand)
      setType(res.data.type)
      setmodel(res.data.model)
      setcolor(res.data.color)
      setchargingTime(res.data.chargingTime)
      setRange(res.data.range)
      settopSpeed(res.data.topSpeed)
      setTorque(res.data.torque)
      setmotorPower(res.data.motorPower)
      setmotorType(res.data.motorType)
      settransmissionTypes(res.data.transmissionTypes)
      setfeatures(res.data.features)
      setsafetyFeatures(res.data.safetyFeatures)
      setdimensions(res.data.dimensions)
      setalloyWheelSize(res.data.alloyWheelSize)
      setkerbWeight(res.data.kerbWeight)
      setgroundClearance(res.data.groundClearance)
      setBatteryCapacity(res.data.batteryCapacity)
      setBatteryType(res.data.batteryType)
    }
    GetPost()
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/ev/${path}`, {
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
      await axios.put(`/ev/${path}`, {
        username: user.username,
        evName,
        evtype,
        upcoming,
        eCarPrice,
        brand,
        type,
        model,
        color,
        chargingTime,
        range,
        topSpeed,
        torque,
        motorPower,
        motorType,
        transmissionTypes,
        features,
        safetyFeatures,
        dimensions,
        alloyWheelSize,
        kerbWeight,
        groundClearance,
        batteryType,
        batteryCapacity,
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

      <div className='container'>
        {updateMode ? (
          <div className='evSelectContainer'>
            <select
              value={evtype}
              onChange={(e) => setevType(e.target.value)}
              className='form-select'
              aria-label='Default select example'
            >
              <option selected>Select Ev Type</option>
              <option value='car'>Car</option>
              <option value='bike'>Bike</option>
            </select>
            <select
              value={upcoming}
              onChange={(e) => setUpcoming(e.target.value)}
              className='form-select'
            >
              <option selected>Is it Upcoming</option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
        ) : (
          <div className='evType'>
            <p>
              EV Type: <span> {evtype}</span>
            </p>
            <p>
              Upcoming or not:<span> {upcoming}</span>
            </p>
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
        {post.imgOne && (
          <SwiperSlide>
            <img src={post.imgOne} />
          </SwiperSlide>
        )}
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

      {/* -----Specifications & Key Features--------- */}

      <div className='specAndFeat container'>
        <div className='spec'>
          <h1 className='vehiclename'>
            Key Specifications of
            {updateMode ? (
              <input
                className='ACarNameInput'
                type='text'
                value={evName}
                onChange={(e) => setevName(e.target.value)}
              />
            ) : (
              <span> {evName}</span>
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
                <p className='name'>Type</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                ) : (
                  <p className='data'>{type}</p>
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
                <p className='name'>charging Time</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={chargingTime}
                    onChange={(e) => setchargingTime(e.target.value)}
                  />
                ) : (
                  <p className='data'>{chargingTime}</p>
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
            </div>
            {/* COL TWO */}
            <div className='tableColTwo'>
              <div className='keySpec'>
                <p className='name'>motor Type</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={motorType}
                    onChange={(e) => setmotorType(e.target.value)}
                  />
                ) : (
                  <p className='data'>{motorType}</p>
                )}
              </div>
              <div className='keySpec'>
                <p className='name'>transmission Types</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={transmissionTypes}
                    onChange={(e) => settransmissionTypes(e.target.value)}
                  />
                ) : (
                  <p className='data'>{transmissionTypes}</p>
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
              <div className='keySpec'>
                <p className='name'>safety Features</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={safetyFeatures}
                    onChange={(e) => setsafetyFeatures(e.target.value)}
                  />
                ) : (
                  <p className='data'>{safetyFeatures}</p>
                )}
              </div>
              <div className='keySpec'>
                <p className='name'>dimensions</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={dimensions}
                    onChange={(e) => setdimensions(e.target.value)}
                  />
                ) : (
                  <p className='data'>{dimensions}</p>
                )}
              </div>
              <div className='keySpec'>
                <p className='name'>alloy WheelSize</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={alloyWheelSize}
                    onChange={(e) => setalloyWheelSize(e.target.value)}
                  />
                ) : (
                  <p className='data'>{alloyWheelSize}</p>
                )}
              </div>
              <div className='keySpec'>
                <p className='name'>kerb Weight</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={kerbWeight}
                    onChange={(e) => setkerbWeight(e.target.value)}
                  />
                ) : (
                  <p className='data'>{kerbWeight}</p>
                )}
              </div>
              <div className='keySpec'>
                <p className='name'>ground Clearance</p>
                {updateMode ? (
                  <input
                    className='lncat'
                    type='text'
                    value={groundClearance}
                    onChange={(e) => setgroundClearance(e.target.value)}
                  />
                ) : (
                  <p className='data'>{groundClearance}</p>
                )}
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarSpecificationBlog
