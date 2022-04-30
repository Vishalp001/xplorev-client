import { useContext, useState } from 'react'
import './writeEvPost.scss'
import { Axios } from '../../../Utility'
import { BiAddToQueue } from 'react-icons/bi'
import { Context } from '../../../context/Context'
import btnLoading from '../../../assets/images/btnLoading.svg'
import dotLoader from '../../../assets/images/dotLoader.svg'

export default function WriteECarPost() {
  const [loader, setLoader] = useState(false)
  const [evName, setEvName] = useState('')
  const [evtype, setEvtype] = useState('')
  const [upcoming, setUpcoming] = useState('')
  const [evPrice, setEvPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [type, settype] = useState('')
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
  const [imgOne, setImgOne] = useState(null)
  const [imgTwo, setImgTwo] = useState(null)
  const [imgThree, setImgThree] = useState(null)
  const [imgFour, setImgFour] = useState(null)
  const [imgFive, setImgFive] = useState(null)
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    setLoader(true)
    e.preventDefault()
    const newTrendingPost = {
      username: user.username,
      evName,
      evtype,
      upcoming,
      evPrice,
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
      batteryCapacity,
      batteryType,
    }
    if (imgOne) {
      const dataOne = new FormData()
      const filename = Date.now() + imgOne.name
      dataOne.append('name', filename)
      dataOne.append('file', imgOne)
      console.log(dataOne)

      try {
        const res = await Axios.post('/upload', dataOne)
        newTrendingPost.imgOne = res.data.url
      } catch (error) {
        console.log('Cant Upload the Photo')
      }
    }
    if (imgTwo) {
      const dataTwo = new FormData()
      const filenameTwo = Date.now() + imgTwo.name
      dataTwo.append('name', filenameTwo)
      dataTwo.append('file', imgTwo)
      console.log(dataTwo)

      try {
        const res = await Axios.post('/upload', dataTwo)
        newTrendingPost.imgTwo = res.data.url
      } catch (error) {
        console.log('Cant Upload the InsImage Photo')
      }
    }

    if (imgThree) {
      const dataThree = new FormData()
      const filenameThree = Date.now() + imgThree.name
      dataThree.append('name', filenameThree)
      dataThree.append('file', imgThree)
      console.log(dataThree)

      try {
        const res = await Axios.post('/upload', dataThree)
        newTrendingPost.imgThree = res.data.url
      } catch (error) {
        console.log('Cant Upload the imgThree Photo')
      }
    }

    if (imgFour) {
      const dataFour = new FormData()
      const filenameFour = Date.now() + imgFour.name
      dataFour.append('name', filenameFour)
      dataFour.append('file', imgFour)
      console.log(dataFour)
      try {
        const res = await Axios.post('/upload', dataFour)
        newTrendingPost.imgFour = res.data.url
      } catch (error) {
        console.log('Cant Upload the imgFour Photo')
      }
    }

    if (imgFive) {
      const dataFive = new FormData()
      const filenameFive = Date.now() + imgFive.name
      dataFive.append('name', filenameFive)
      dataFive.append('file', imgFive)
      console.log(dataFive)
      try {
        const res = await Axios.post('/upload', dataFive)
        newTrendingPost.imgFive = res.data.url
      } catch (error) {
        console.log('Cant Upload the imgFive Photo')
      }
    }

    try {
      const res = await Axios.post('/ev', newTrendingPost)
      window.location.replace('/ev_admin_post/' + res.data._id)
      setLoader(false)
    } catch (error) {
      console.log('Cant Upload the e-car Post')
    }
  }

  return (
    <div className='write container'>
      <form className='writeForm' onSubmit={handleSubmit}>
        <h2>Upload E Vehicle Images</h2>
        <div className='evImageContainer '>
          <div className='EVimgDiv'>
            {imgOne && (
              <img
                className='eCarWImage'
                src={URL.createObjectURL(imgOne)}
                alt='imgOne'
              />
            )}
            <label htmlFor='imgOne'>
              <BiAddToQueue />
            </label>
            <input
              id='imgOne'
              type='file'
              onChange={(e) => setImgOne(e.target.files[0])}
            />
          </div>
          <div className='EVimgDiv'>
            {imgTwo && (
              <img
                className='eCarWImage'
                src={URL.createObjectURL(imgTwo)}
                alt='imgOne'
              />
            )}
            <label htmlFor='imgTwo'>
              <BiAddToQueue />
            </label>
            <input
              type='file'
              id='imgTwo'
              onChange={(e) => setImgTwo(e.target.files[0])}
            />
          </div>
          <div className='EVimgDiv'>
            {imgThree && (
              <img
                className='eCarWImage'
                src={URL.createObjectURL(imgThree)}
                alt='imgOne'
              />
            )}
            <label htmlFor='imgThree'>
              <BiAddToQueue />
            </label>
            <input
              type='file'
              id='imgThree'
              onChange={(e) => setImgThree(e.target.files[0])}
            />
          </div>

          <div className='EVimgDiv'>
            {imgFour && (
              <img
                className='eCarWImage'
                src={URL.createObjectURL(imgFour)}
                alt='imgOne'
              />
            )}
            <label htmlFor='imgFour'>
              <BiAddToQueue />
            </label>
            <input
              id='imgFour'
              type='file'
              onChange={(e) => setImgFour(e.target.files[0])}
            />
          </div>
          <div className='EVimgDiv'>
            {imgFive && (
              <img
                className='eCarWImage'
                src={URL.createObjectURL(imgFive)}
                alt='imgOne'
              />
            )}
            <label htmlFor='imgFive'>
              <BiAddToQueue />
            </label>
            <input
              id='imgFive'
              type='file'
              onChange={(e) => setImgFive(e.target.files[0])}
            />
          </div>
        </div>
        <div className='evSelectContainer'>
          <select
            onChange={(e) => setEvtype(e.target.value)}
            className='form-select'
          >
            <option value=''>Select Ev Type</option>
            <option value='car'>Car</option>
            <option value='bike'>Bike</option>
          </select>
          <select
            onChange={(e) => setUpcoming(e.target.value)}
            className='form-select'
          >
            <option value=''>Is it Upcoming</option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>

        <h2>Add E Vehicle Name</h2>
        <input
          className='title'
          type='text'
          placeholder='E Car Vehicle'
          autoFocus={true}
          onChange={(e) => setEvName(e.target.value)}
        />
        <input
          className='title'
          type='text'
          placeholder='E Car Price'
          autoFocus={true}
          onChange={(e) => setEvPrice(e.target.value)}
        />

        <h2>Upload E Vehicle Specification</h2>

        <div className='wECSpec'>
          <input
            type='text'
            placeholder='Brand Name'
            autoFocus={true}
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            type='text'
            placeholder='type'
            autoFocus={true}
            onChange={(e) => settype(e.target.value)}
          />
          <input
            type='text'
            placeholder='model'
            autoFocus={true}
            onChange={(e) => setmodel(e.target.value)}
          />
          <input
            type='text'
            placeholder='color'
            autoFocus={true}
            onChange={(e) => setcolor(e.target.value)}
          />
          <input
            type='text'
            placeholder='Charging Time'
            autoFocus={true}
            onChange={(e) => setchargingTime(e.target.value)}
          />
          <input
            type='text'
            placeholder='Range'
            autoFocus={true}
            onChange={(e) => setRange(e.target.value)}
          />
          <input
            type='text'
            placeholder='Top Speed'
            autoFocus={true}
            onChange={(e) => settopSpeed(e.target.value)}
          />
          <input
            type='text'
            placeholder='Torque'
            autoFocus={true}
            onChange={(e) => setTorque(e.target.value)}
          />
          <input
            type='text'
            placeholder='Motor Power'
            autoFocus={true}
            onChange={(e) => setmotorPower(e.target.value)}
          />
          <input
            type='text'
            placeholder='Motor Type'
            autoFocus={true}
            onChange={(e) => setmotorType(e.target.value)}
          />

          <input
            type='text'
            placeholder='Transmission Types'
            autoFocus={true}
            onChange={(e) => settransmissionTypes(e.target.value)}
          />
          <input
            type='text'
            placeholder='features'
            autoFocus={true}
            onChange={(e) => setfeatures(e.target.value)}
          />
          <input
            type='text'
            placeholder='safety Features'
            autoFocus={true}
            onChange={(e) => setsafetyFeatures(e.target.value)}
          />
          <input
            type='text'
            placeholder='dimensions'
            autoFocus={true}
            onChange={(e) => setdimensions(e.target.value)}
          />
          <input
            type='text'
            placeholder='alloy Wheel Size'
            autoFocus={true}
            onChange={(e) => setalloyWheelSize(e.target.value)}
          />
          <input
            type='text'
            placeholder='kerb Weight'
            autoFocus={true}
            onChange={(e) => setkerbWeight(e.target.value)}
          />
          <input
            type='text'
            placeholder='ground Clearance'
            autoFocus={true}
            onChange={(e) => setgroundClearance(e.target.value)}
          />
          <input
            type='text'
            placeholder='Battery Type'
            autoFocus={true}
            onChange={(e) => setBatteryType(e.target.value)}
          />
          <input
            type='text'
            placeholder='Battery Capacity'
            autoFocus={true}
            onChange={(e) => setBatteryCapacity(e.target.value)}
          />
          {loader ? (
            <button className='wecPostLoader'>
              <img className='' src={dotLoader} alt='wecPostLoader' />
            </button>
          ) : (
            <button className='publishBtn' type='submit'>
              Publish
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
