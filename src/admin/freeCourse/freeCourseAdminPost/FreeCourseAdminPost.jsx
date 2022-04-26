import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import './freeCourseAdminPost.scss'
import { Context } from '../../../context/Context'

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    ['list', 'image', 'video'],
    ['clean']['code-block'],
  ],
}
const formats = [
  'header',
  'size',
  'font',
  'strike',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block',
]

const TrendingAdminPost = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const { user } = useContext(Context)

  const [post, setPost] = useState({})

  // ----FOR Update
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [enrollNo, setEnrollNo] = useState('')
  const [courseLink, setCourseLink] = useState('')
  const [insName, setInsName] = useState('')
  const [insDesc, setInsDesc] = useState('')
  const [about, setAbout] = useState('')
  const [sylabus, setSylabus] = useState('')
  const [courseLayout, setCourseLayout] = useState('')
  const [instructions, setInstructions] = useState('')

  const [updateMode, setUpdateMode] = useState(false)

  useEffect(() => {
    const GetPost = async () => {
      const res = await axios.get(`/freecourse/${path}`)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
      setEnrollNo(res.data.enrollNo)
      setCourseLink(res.data.courseLink)
      setInsName(res.data.insName)
      setInsDesc(res.data.insDesc)
      setAbout(res.data.about)
      setSylabus(res.data.sylabus)
      setCourseLayout(res.data.courseLayout)
      setInstructions(res.data.instructions)
    }
    GetPost()
  }, [path])

  // Delete Trending Post

  const handleDelete = async () => {
    try {
      await axios.delete(`/freecourse/${path}`, {
        data: { username: user.username },
      })
      window.location.replace('/admin')
    } catch (error) {
      console.log('Cant Delete The freecourse Post')
    }
  }

  // Update freecourse Post

  const handleUpdate = async () => {
    try {
      await axios.put(`/freecourse/${path}`, {
        username: user.username,
        title,
        desc,
        enrollNo,
        courseLink,
        insName,
        insDesc,
        about,
        sylabus,
        courseLayout,
        instructions,
      })
      // window.location.reload()
      setUpdateMode(false)
    } catch (error) {
      console.log('Unable to Update Freecourse Post')
    }
  }

  return (
    <>
      <div className='adminCourseView'>
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

        {/* ------- */}
        <div className='container courseImage '>
          <h4 className='inputHeading'>Course Image</h4>
          {post.coursePhoto && (
            <div className='adminCourseImgDiv'>
              <img src={post.coursePhoto} alt='coursePhoto' />
            </div>
          )}
        </div>
        <div className='container courseBio'>
          <h4 className='inputHeading'>Course Bio</h4>
          {updateMode ? (
            <textarea
              className='descInput'
              type='text'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className='desc'>{desc}</p>
          )}
        </div>
        {/* ------- */}

        <div className='courseBlogContainer'>
          <div className='courseBlogHeader'>
            <div className='nameAndBtn'>
              <h1 className='courseName'>
                {updateMode ? (
                  <input
                    className='titleInput'
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  <div>{title}</div>
                )}
              </h1>
              <p className='enrollNo'>
                {updateMode ? (
                  <input
                    className='titleInput enrollInput'
                    type='text'
                    value={enrollNo}
                    onChange={(e) => setEnrollNo(e.target.value)}
                  />
                ) : (
                  <div>{enrollNo} already enrolled</div>
                )}
              </p>

              {updateMode ? (
                <input
                  className='titleInput linkInput'
                  type='text'
                  value={courseLink}
                  onChange={(e) => setCourseLink(e.target.value)}
                />
              ) : (
                <a className='enrollBtn' target='_blank' href={courseLink}>
                  Enroll For Free
                </a>
              )}
            </div>
            <div className='offerBy'>
              <h1 className='instructor'>Course Instructor</h1>
              <div className='imgDiv'>
                <img src={post.insImage} alt='insImage' />
              </div>
              <p className='insName'>
                {updateMode ? (
                  <input
                    className='title'
                    type='text'
                    value={insName}
                    onChange={(e) => setInsName(e.target.value)}
                  />
                ) : (
                  <div>{insName}</div>
                )}
              </p>
              <p className='insPlace'>
                {updateMode ? (
                  <input
                    className='title'
                    type='text'
                    value={insDesc}
                    onChange={(e) => setInsDesc(e.target.value)}
                  />
                ) : (
                  <div>{insDesc}</div>
                )}
              </p>
            </div>
          </div>
          <div className='courseBlogTab'>
            <div>
              <div className='container'>
                <div>
                  <h4 className='inputHeading'>About</h4>
                  {updateMode ? (
                    <ReactQuill
                      placeholder='Tell your story...'
                      formats={formats}
                      modules={modules}
                      value={about}
                      onChange={(e) => setAbout(e)}
                    ></ReactQuill>
                  ) : (
                    <div
                      className='lndesc'
                      dangerouslySetInnerHTML={{
                        __html: `${about}`,
                      }}
                    ></div>
                  )}
                </div>
                <div>
                  <h4 className='inputHeading'>Sylabus</h4>
                  {updateMode ? (
                    <ReactQuill
                      placeholder='Tell your story...'
                      formats={formats}
                      modules={modules}
                      value={sylabus}
                      onChange={(e) => setSylabus(e)}
                    ></ReactQuill>
                  ) : (
                    <div
                      className='lndesc'
                      dangerouslySetInnerHTML={{
                        __html: `${sylabus}`,
                      }}
                    ></div>
                  )}
                </div>
                <div>
                  <h4 className='inputHeading'>Instructions</h4>
                  {updateMode ? (
                    <ReactQuill
                      placeholder='Tell your story...'
                      formats={formats}
                      modules={modules}
                      value={instructions}
                      onChange={(e) => setInstructions(e)}
                    ></ReactQuill>
                  ) : (
                    <div
                      className='lndesc'
                      dangerouslySetInnerHTML={{
                        __html: `${instructions}`,
                      }}
                    ></div>
                  )}
                </div>
                <div>
                  <h4 className='inputHeading'>Course Layout</h4>
                  {updateMode ? (
                    <ReactQuill
                      placeholder='Tell your story...'
                      formats={formats}
                      modules={modules}
                      value={courseLayout}
                      onChange={(e) => setCourseLayout(e)}
                    ></ReactQuill>
                  ) : (
                    <div
                      className='lndesc'
                      dangerouslySetInnerHTML={{
                        __html: `${courseLayout}`,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrendingAdminPost
