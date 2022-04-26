import axios from 'axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './blogAdmin.scss'
const BlogAdmin = ({ blog }) => {
  const { user } = useContext(Context)
  const handleDelete = async (e) => {
    try {
      await axios.delete(`/blog/${e}`, {
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
        <h1>Create Blog Post</h1>
        <Link to='/create_blog_post'>
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
            {blog &&
              blog.map((b, i) => (
                <tr key={b._id}>
                  <th scope='row'>{i + 1}</th>
                  <td>{b.title}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: `${b.desc.substring(0, 150)}...`,
                    }}
                  ></td>
                  <td>{new Date(b.createdAt).toDateString()}</td>

                  <td>
                    <Link to={`/?cat=${b.categories}`}>{b.categories}</Link>
                  </td>
                  <td className='viewEdit'>
                    <Link to={`/blog_admin_post/${b._id}`}>View/Edit</Link>
                  </td>
                  <td
                    className='deleteBtn'
                    onClick={(e) => handleDelete(b._id)}
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

export default BlogAdmin
