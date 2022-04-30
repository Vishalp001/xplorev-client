import { Axios } from '../../Utility'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './freeCourseAdmin.scss'
const FreeCourseAdmin = ({ freeCourse }) => {
  const { user } = useContext(Context)
  const handleDelete = async (e) => {
    try {
      await Axios.delete(`/freecourse/${e}`, {
        data: { username: user.username },
      })
      window.location.reload()
    } catch (error) {
      console.log('Cant Delete The freecourse Post')
    }
  }
  return (
    <>
      <div className='CreatePost'>
        <h1>Create FreeCourse Post</h1>
        <Link to='/create_free_course_post'>
          <button className='readMore'>Create Post</button>
        </Link>
      </div>
      <div className='freeCourse'>
        <table className='table'>
          <thead>
            <tr>
              <th className='srNo' scope='col'>
                #
              </th>
              <th className='title' scope='col'>
                Title
              </th>
              <th className='desc' scope='col'>
                Desc
              </th>
              <th className='date' scope='col'>
                Date
              </th>
              <th className='cate' scope='col'>
                Instructor Name
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
            {freeCourse &&
              freeCourse.map((c, i) => (
                <tr key={c._id}>
                  <th scope='row'>{i + 1}</th>
                  <td>{c.title}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: `${c.desc.substring(0, 150)}...`,
                    }}
                  ></td>
                  <td>{new Date(c.createdAt).toDateString()}</td>

                  <td>{c.insName}</td>
                  <td className='viewEdit'>
                    <Link to={`/free_course_admin_post/${c._id}`}>
                      View/Edit
                    </Link>
                  </td>
                  <td
                    className='deleteBtn'
                    onClick={(e) => handleDelete(c._id)}
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

export default FreeCourseAdmin
