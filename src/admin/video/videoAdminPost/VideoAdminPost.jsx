import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import './videoAdminPost.scss'
import { Context } from '../../../context/Context'

const VideoAdminPost = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const { user } = useContext(Context)

  const [post, setPost] = useState({})

  // ----FOR Update
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [updateMode, setUpdateMode] = useState(false)

  useEffect(() => {
    const GetPost = async () => {
      const res = await axios.get(`/video/${path}`)
      setPost(res.data)
      setTitle(res.data.title)
      setUrl(res.data.url)
    }
    GetPost()
  }, [path])

  // Delete Trending Post

  const handleDelete = async () => {
    try {
      await axios.delete(`/video/${path}`, {
        data: { username: user.username },
      })
      window.location.replace('/admin')
    } catch (error) {
      console.log('Cant Delete The video Post')
    }
  }

  // Update Trending Post

  const handleUpdate = async () => {
    try {
      await axios.put(`/video/${path}`, {
        username: user.username,
        title,
        url,
      })
      // window.location.reload()
      setUpdateMode(false)
    } catch (error) {
      console.log('Unable to Update Video Post')
    }
  }

  return (
    <>
      <div className='lnBlog videoAdminPost'>
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
        <div className='lnHead'>
          {updateMode ? (
            <>
              <input
                className='title'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </>
          ) : (
            <>
              <h1 className='title'>{title}</h1>
            </>
          )}
          <div className='lncatAndDate'>
            <p className='lndate'>{new Date(post.createdAt).toDateString()}</p>
            {updateMode ? (
              <input
                className='lncat'
                type='text'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            ) : (
              <p className='lncat'>{url}</p>
            )}
          </div>
        </div>
        {post.photo && (
          <div className='lnImgDiv'>
            <img src={post.photo} alt={title} />
          </div>
        )}

        <div className='lndescAndShare'></div>
      </div>
    </>
  )
}

export default VideoAdminPost
