import React, { useEffect, useState } from 'react'
import './chargingStations.scss'
import TopbarPage from '../topbarpage/Topbarpage'
import { Axios } from '../../Utility'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Rating } from '@mui/material'
import { MdOutlineBolt } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'
const ChargingStations = () => {
  const [station, setStation] = useState([])
  const [citys, setCitys] = useState([])
  const [location, setLocation] = useState([])

  // const color = [
  //   'radial-gradient(#60efbc, #58d5c9)',
  //   'radial-gradient(#f588d8, #c0a3e5)',
  //   'radial-gradient(#76b2fe, #b69efe)',
  //   'radial-gradient(#fbc1cc, #fa99b2)',
  //   'radial-gradient(#1fe4f5, #3fbafe)',
  // ]
  // var colorLength = color.length
  // for (var i = 0; i < colorLength; i++) {
  //   console.log(color[i])
  //   //Do something
  // }

  useEffect(() => {
    const fetchStations = async () => {
      const res = await Axios.get('/charging')
      let temp = []
      if (res.data.length > 0) {
        res.data.map((data) => temp.push(data.state))
      }
      setStation(temp)
    }
    fetchStations()
  }, [])

  const getCity = async (citys) => {
    const res = await Axios.get('/charging/citys', { params: citys })
    setCitys(res.data[0].citys)
  }

  const getLocation = (loc) => {
    setLocation(loc.location)
  }

  return (
    <>
      <TopbarPage />
      <div className='chargingStations'>
        <div className='chargingStationsHEader'>
          <h1>Find Charging Stations All over India </h1>
        </div>
        <div className='container'>
          <div className='inputBoxs'>
            <Autocomplete
              disablePortal
              options={station}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label='State' />}
              onChange={(e, value) => getCity(value)}
            />

            <Autocomplete
              disablePortal
              options={citys}
              getOptionLabel={(option) => option.cityName}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label='Cities' />}
              onChange={(e, value) => getLocation(value)}
            />
          </div>

          <h2>Locations in a City</h2>
          <div className=' cSCards'>
            {location.map((s) => (
              <div className='cSCard'>
                <div style={{ padding: '12px' }}>
                  <div className='name'>
                    <MdOutlineBolt className='boltIcon' />
                    <p>{s.name}</p>
                  </div>
                  <p className='adderss'>{s.adderss}</p>
                </div>
                <div className='rAndD'>
                  <Rating
                    className='ratings'
                    defaultValue={s.ratings}
                    precision={0.5}
                    readOnly
                  />
                  <p class='card__apply'>
                    <a class='card__link' href={s.direction} target='_blank'>
                      Get Direction <BsArrowRightShort />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ChargingStations
