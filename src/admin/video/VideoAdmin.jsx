import { Axios } from '../../Utility'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './videoAdmin.scss'
const VideoAdmin = ({ video }) => {
  const { user } = useContext(Context)
  const handleDelete = async (e) => {
    try {
      await Axios.delete(`/video/${e}`, {
        data: { username: user.username },
      })
      window.location.reload()
    } catch (error) {
      console.log('Cant Delete The Post')
    }
  }
  return (
    <>
      <div className='CreatePost'>
        <h1>Create Video Post</h1>
        <Link to='/create_video_post'>
          <button className='readMore'>Create Post</button>
        </Link>
      </div>
      <div className='VideoAdmin'>
        <table className='table'>
          <thead>
            <tr>
              <th className='srNo' scope='col'>
                #
              </th>
              <th className='title' scope='col'>
                Title
              </th>

              <th className='date' scope='col'>
                Date
              </th>

              <th className='edit' scope='col'>
                View/Edit
              </th>
              <th className='delete' scope='col'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {video &&
              video.map((v, i) => (
                <tr key={v._id}>
                  <th scope='row'>{i + 1}</th>
                  <td>{v.title}</td>

                  <td className='date'>
                    {new Date(v.createdAt).toDateString()}
                  </td>

                  <td className='viewEdit'>
                    <Link to={`/video_admin_post/${v._id}`}>View/Edit</Link>
                  </td>
                  <td
                    className='deleteBtn'
                    onClick={(e) => handleDelete(v._id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default VideoAdmin
