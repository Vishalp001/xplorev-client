import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './trendingAdmin.scss'
import axios from 'axios'
import { Context } from '../../context/Context'

const TrendingAdmin = ({ trendings }) => {
  const { user } = useContext(Context)

  const handleDelete = async (e) => {
    try {
      await axios.delete(`/trending/${e}`, {
        data: { username: user.username },
      })
      window.location.reload()
    } catch (error) {
      console.log('Cant Delete The Trending Post')
    }
  }
  return (
    <>
      <div className='CreatePost'>
        <h1>Create Trenging Post</h1>
        <Link to='/create_trending_post'>
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
            {trendings &&
              trendings.map((t, index) => (
                <tr key={t._id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{t.title}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: `${t.desc.substring(0, 100)}...`,
                    }}
                  ></td>
                  <td>{new Date(t.createdAt).toDateString()}</td>

                  <td>
                    <Link to={`/?cat=${t.categories}`}>{t.categories}</Link>
                  </td>
                  <td className='viewEdit'>
                    <Link to={`/trending_admin_post/${t._id}`}>View / Edit</Link>
                  </td>
                  <td
                    className='deleteBtn'
                    onClick={(e) => handleDelete(t._id)}
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

export default TrendingAdmin
