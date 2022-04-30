import { Axios } from '../../Utility'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
// import './evAdmin.scss'
const EvUpcomingBike = ({ upcomingBike }) => {
  const { user } = useContext(Context)
  const handleDelete = async (e) => {
    try {
      await Axios.delete(`/ev/${e}`, {
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
        <h1>Create Electric Vehicle Post</h1>
        <Link to='/create_ev_post'>
          <button className='readMore'>Create Post</button>
        </Link>
      </div>
      <div className='ECarAdmin'>
        <table className='table'>
          <thead>
            <tr>
              <th className='srNo' scope='col'>
                #
              </th>
              <th className='title' scope='col'>
                Car Name
              </th>
              <th className='desc' scope='col'>
                Car Brand
              </th>
              <th className='date' scope='col'>
                Date
              </th>
              <th className='cate' scope='col'>
                Car Model
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
            {upcomingBike &&
              upcomingBike.map((c, i) => (
                <tr key={c._id}>
                  <th scope='row'>{i + 1}</th>
                  <td>{c.evName}</td>
                  <td>{c.brand}</td>
                  <td>{new Date(c.createdAt).toDateString()}</td>
                  <td>{c.model}</td>
                  <td className='viewEdit'>
                    <Link to={`/ev_admin_post/${c._id}`}>View/Edit</Link>
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

export default EvUpcomingBike
