import { useContext, useState } from 'react'
import './writeVideoPost.scss'
import { Axios } from '../../../Utility'
import dotLoader from '../../../assets/images/dotLoader.svg'
import { Context } from '../../../context/Context'

export default function WriteVideoPost() {
  const [loader, setLoader] = useState(false)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    setLoader(true)
    e.preventDefault()
    const newVideoPost = {
      username: user.username,
      title,
      url,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      console.log(data)

      try {
        const res = await Axios.post('/upload', data)
        newVideoPost.photo = res.data.url
      } catch (error) {
        console.log('Cant Upload the Photo')
      }
    }
    try {
      const res = await Axios.post('/video', newVideoPost)
      window.location.replace('/video_admin_post/' + res.data._id)
      setLoader(false)
    } catch (error) {
      console.log('Cant Upload the Video Post')
    }
  }
  return (
    <div className='write'>
      {file && (
        <img
          className='writeImg'
          src={URL.createObjectURL(file)}
          alt='writeImg'
        />
      )}
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type='text'
            placeholder='Video Link'
            className='writeInput'
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        {loader ? (
          <button className='btnLoading'>
            <img className='' src={dotLoader} alt='dotLoader' />
          </button>
        ) : (
          <button className='writeSubmit' type='submit'>
            Publish
          </button>
        )}
      </form>
    </div>
  )
}
