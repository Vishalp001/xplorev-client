import React from 'react'
import './govEvPolicies.scss'
import Topbarpage from '../topbarpage/Topbarpage'
import { Link } from 'react-router-dom'
const GovEvPolicies = (props) => {
  return (
    <>
      <Topbarpage />
      <div className='govEvPolicies'>
        <div className='govEvPoliciesHeader'>
          <h1>ELECTRIC VEHICLE POLICIES IN INDIA</h1>
        </div>
        <div className='govEvPoliciesContent container'>
          <h1 className='subHeading'>ALL STATES EV POLICIES</h1>
          <div className='gEvPDate'>
            <div className='gEvPDateColOne'>
              {props.policies &&
                props.policies.map((p) => (
                  <div className='gEvPContent'>
                    <div className='imgDiv'>
                      <img
                        src='https://image.shutterstock.com/image-vector/world-map-vector-flat-green-260nw-425132143.jpg'
                        alt='photoEv'
                      />
                    </div>
                    <div className='gEvPInnerContent'>
                      <h1>{p.title}</h1>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${p.desc.substring(0, 100)}...`,
                        }}
                      ></p>
                      <button className='readGovPBtn'>
                        <Link to={`/blog/${p._id}?policies`}> Read Here </Link>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GovEvPolicies
