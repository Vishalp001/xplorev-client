import React, { useEffect, useState } from 'react'
import './compairCars.scss'
import Topbar from '../../components/topBar/Topbar'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Axios } from '../../Utility'
import { useLocation } from 'react-router-dom'

const CompairCars = (props) => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [carNameOne, setCarNameOne] = useState(path)
  const [carNameTwo, setCarNameTwo] = useState('')
  const [carOneData, setCarOneData] = useState('')
  const [carTwoData, setCarTwoData] = useState('')
  const [showTable, setshowTable] = useState(false)

  useEffect(() => {
    const GetPost = async () => {
      setshowTable(false)
      const res = await Axios.get(`/ev/${path}`)
      setCarOneData(res.data)
      console.log(res.data)
    }
    GetPost()
    setshowTable(true)
  }, [path])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const getCarOne = async () => {
      const res = await Axios.get(`/ev/${carNameOne}`)
      setCarOneData(res.data)
    }
    const getCarTwo = async () => {
      const res = await Axios.get(`/ev/${carNameTwo}`)
      setCarTwoData(res.data)
    }
    getCarOne()
    getCarTwo()
  }

  return (
    <>
      <Topbar />
      <div className='container CCompair'>
        <div>
          <form className='selectCar' onSubmit={handleSubmit}>
            <div className='inputOne'>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Car One</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={carNameOne}
                  label='Car One'
                  onChange={(e) => setCarNameOne(e.target.value)}
                >
                  {props.eCar &&
                    props.eCar.map((c) => (
                      <MenuItem key={c._id} value={c._id}>
                        {c.evName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
            <div className='inputTwo'>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Car Two</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={carNameTwo}
                  label='Car Two'
                  onChange={(e) => setCarNameTwo(e.target.value)}
                >
                  {props.eCar &&
                    props.eCar.map((c) => (
                      <MenuItem key={c._id} value={c._id}>
                        {c.evName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
            <button className='compairBtn' type='submit'>
              Compair
            </button>
          </form>
        </div>

        <div className='compairHeader'>
          <div className='imgDiv'>
            <img src={carOneData.imgOne} alt='' />
          </div>
          <div className='carName'>
            <span className='nameOne'>{carOneData.evName}</span>
            <span className='vs'>VS</span>
            <span className='nameTwo'>{carTwoData.evName}</span>
          </div>

          <div className='imgDiv'>
            <img src={carTwoData.imgOne} alt='' />
          </div>
        </div>

        <div className='tableDiv'>
          <div className='tableHead'>
            <div className='spec'>Specification</div>
            <div className='name'>{carOneData.evName}</div>
            <div className='name'>{carTwoData.evName}</div>
          </div>
          <table>
            <tr>
              <td>Car Price</td>
              <td>{carOneData.evPrice}</td>
              <td>{carTwoData.evPrice}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{carOneData.type}</td>
              <td>{carTwoData.type}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{carOneData.model}</td>
              <td>{carTwoData.model}</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>{carOneData.color}</td>
              <td>{carTwoData.color}</td>
            </tr>
            <tr>
              <td>Charging Time</td>
              <td>{carOneData.chargingTime}</td>
              <td>{carTwoData.chargingTime}</td>
            </tr>
            <tr>
              <td>Range</td>
              <td>{carOneData.range}</td>
              <td>{carTwoData.range}</td>
            </tr>
            <tr>
              <td>Top Speed</td>
              <td>{carOneData.topSpeed}</td>
              <td>{carTwoData.topSpeed}</td>
            </tr>
            <tr>
              <td>Torque</td>
              <td>{carOneData.torque}</td>
              <td>{carTwoData.torque}</td>
            </tr>
            <tr>
              <td>Motor Power</td>
              <td>{carOneData.motorPower}</td>
              <td>{carTwoData.motorPower}</td>
            </tr>
            <tr>
              <td>Transmission Types</td>
              <td>{carOneData.transmissionTypes}</td>
              <td>{carTwoData.transmissionTypes}</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>{carOneData.features}</td>
              <td>{carTwoData.features}</td>
            </tr>
            <tr>
              <td>Safety Features</td>
              <td>{carOneData.safetyFeatures}</td>
              <td>{carTwoData.safetyFeatures}</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>{carOneData.dimensions}</td>
              <td>{carTwoData.dimensions}</td>
            </tr>
            <tr>
              <td>Alloy WheelSize</td>
              <td>{carOneData.alloyWheelSize}</td>
              <td>{carTwoData.alloyWheelSize}</td>
            </tr>
            <tr>
              <td>Kerb Weight</td>
              <td>{carOneData.kerbWeight}</td>
              <td>{carTwoData.kerbWeight}</td>
            </tr>
            <tr>
              <td>Ground Clearance</td>
              <td>{carOneData.groundClearance}</td>
              <td>{carTwoData.groundClearance}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default CompairCars
