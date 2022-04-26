import React, { useEffect, useRef, useState } from 'react'
import './freecoureblog.scss'
import Topbarpage from '../../topbarpage/Topbarpage'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Freecoureblog = (props) => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  const [value, setValue] = React.useState('1')

  let { search } = useLocation()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    const GetPost = async () => {
      const res = await axios.get(`/freecourse/${path}`, {
        params: location.search,
      })
      setPost(res.data)
    }

    GetPost()
  }, [path])
  console.log(post)

  return (
    <>
      <Topbarpage />
      <div className='courseBlogContainer'>
        <div className='courseBlogHeader'>
          <div className='nameAndBtn'>
            <h1 className='courseName'>{post.title}</h1>
            <p className='enrollNo'>{post.enrollNo} already enrolled</p>
            <button className='enrollBtn animate__flash'>
              <a href={post.courseLink} target='_blank'>
                Enroll For Free
              </a>
            </button>
          </div>
          <div className='offerBy'>
            <h1 className='instructor'>Course Instructor</h1>
            <div className='imgDiv'>
              <img src={post.insImage} alt='imgDiv' />
            </div>
            <p className='insName'>{post.insName}</p>
            <p className='insPlace'>{post.insDesc}</p>
          </div>
        </div>
        <div className='courseBlogTab'>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'rgb(76, 182, 40)' }}>
                <TabList
                  onChange={handleChange}
                  aria-label='lab API tabs example'
                >
                  <Tab label='About' value='1' />
                  <Tab label='Instructors' value='2' />
                  <Tab label='Syllabus' value='3' />
                  <Tab label='Course layout' value='4' />
                </TabList>
              </Box>
              <TabPanel value='1'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${post.about}`,
                  }}
                ></div>
              </TabPanel>
              <TabPanel value='2'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${post.instructions}`,
                  }}
                ></div>
              </TabPanel>
              <TabPanel value='3'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${post.sylabus}`,
                  }}
                ></div>
              </TabPanel>
              <TabPanel value='4'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${post.courseLayout}`,
                  }}
                ></div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  )
}

export default Freecoureblog
