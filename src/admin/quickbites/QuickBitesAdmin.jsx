import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './quickBitesAdmin.scss'
import axios from 'axios'
import { Context } from '../../context/Context'

const QuickBitesAdmin = ({ quickBites }) => {
  const { user } = useContext(Context)
  const handleDelete = async (e) => {
    try {
      await axios.delete(`/quickbyte/${e}`, {
        data: { username: user.username },
      })
      window.location.reload()
    } catch (error) {
      console.log('Cant Delete The quickbyte Post')
    }
  }

  return (
    <>
      <div className='CreatePost'>
        <h1>Create QuickBite Post</h1>
        <Link to='/create_quick_bites_post'>
          <button className='readMore'>Create Post</button>
        </Link>
      </div>
      <div className='trendingAdmin'>
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
                Categories
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
            {quickBites &&
              quickBites.map((p, index) => (
                <tr key={p._id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{p.title}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: `${p.desc.substring(0, 150)}...`,
                    }}
                  ></td>
                  <td>{new Date(p.createdAt).toDateString()}</td>

                  <td>
                    <Link to={`/?cat=${p.categories}`}>{p.categories}</Link>
                  </td>
                  <td className='viewEdit'>
                    <Link to={`/quick_bites_admin_post/${p._id}`}>
                      View/Edit
                    </Link>
                  </td>
                  <td
                    className='deleteBtn'
                    onClick={(e) => handleDelete(p._id)}
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

export default QuickBitesAdmin
