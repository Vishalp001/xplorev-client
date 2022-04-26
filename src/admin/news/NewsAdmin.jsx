import axios from 'axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './newsAdmin.scss'
const NewsAdmin = ({ news }) => {
  const { user } = useContext(Context)
  const handleDelete = async (e) => {
    try {
      await axios.delete(`/news/${e}`, {
        data: { username: user.username },
      })
      window.location.reload()
    } catch (error) {
      console.log('Cant Delete The News Post')
    }
  }
  return (
    <>
      <div className='CreatePost'>
        <h1>Create News Post</h1>
        <Link to='/create_news_post'>
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
            {news &&
              news.map((n, i) => (
                <tr key={n._id}>
                  <th scope='row'>{i + 1}</th>
                  <td>{n.title}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: `${n.desc.substring(0, 150)}...`,
                    }}
                  ></td>
                  <td>{new Date(n.createdAt).toDateString()}</td>

                  <td>
                    <Link to={`/?cat=${n.categories}`}>{n.categories}</Link>
                  </td>
                  <td className='viewEdit'>
                    <Link to={`/news_admin_post/${n._id}`}>View/Edit</Link>
                  </td>
                  <td
                    className='deleteBtn'
                    onClick={(e) => handleDelete(n._id)}
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

export default NewsAdmin
