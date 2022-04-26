import React, { useEffect } from 'react'
import './latestnewsblog.scss'
import Topbarpage from '../../topbarpage/Topbarpage'
import { GrTwitter, GrFacebook } from 'react-icons/gr'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { HiMail } from 'react-icons/hi'
import ReadingBar from '../../../components/readingbar/ReadingBar'
import axios from 'axios'

const Latestnewsblog = () => {
  // const location = useLocation()
  // const path = location.pathname.split('/')[2]
  // const [post, setPost] = useState({})

  // useEffect(() => {
  //   const GetPost = async () => {
  //     const res = await axios.get(`/ecar/${path}`)
  //     setPost(res.data)
  //   }
  //   GetPost()
  // }, [path])

  return (
    <>
      <Topbarpage />
      <ReadingBar />
      <div className='lnBlog'>
        <div className='lnHead'>
          <h1 className='title'>
            Sigachi Industries’ record breaking IPO pop Industries
          </h1>
          <div className='lncatAndDate'>
            <p className='lndate'>25 March 2021</p>
            <p className='lncat'>Webflow</p>
          </div>
        </div>
        <div className='lnImgDiv'>
          <img
            src='https://d3jlwjv6gmyigl.cloudfront.net/images/2021/11/Thumbnail-2.O-sigachi-1.png'
            alt='lnImgDiv'
          />
        </div>

        <div className='lndescAndShare'>
          <div className='lndesc'>
            <div className='fs22'>
              Most company websites include a blog as a part of their content
              production strategy, and it’s with good reason. Blogs provide the
              chance to connect with an audience and give readers a space to
              find the information they want to learn more about. Just like any
              part of a web design, there are many different ways to approach a
              blog design.
            </div>
            <p>
              Along with podcasts, social media, email newsletters, and other
              content, a company blog can be another important part of
              businesses' overall content strategy.
            </p>
            <br />
            <p>
              A company’s blog layout can include many things. It can contain
              case studies, company news, infographics, behind-the-scenes
              stories, as well as other relevant content that a potential
              customer would like to know. Blogging adds authenticity to a
              businesses' digital marketing and helps forge a more personal
              connection with their audience.
            </p>
            <br />
            <p>
              Great content is just one part of having a small business or
              corporate blog. Along with well researched and well written posts,
              a successful blog also needs to have a clear organization. Tagging
              posts, and otherwise categorizing them can go a long way in making
              this content accessible.
            </p>
            <br />
            <p>
              Blogging also has another valuable benefit, and that's in helping
              with search engine optimization. When a website’s content is kept
              new and updated through active blogging, web crawlers scan through
              it, and recognize that it’s not a forgotten dead end. Blog posts
              are full of relevant content and keywords that will also help web
              crawlers in identifying what a website is about. A business blog
              not only helps out your target customers, but may help in its SEO
              ranking. And the great thing about Webflow for blogging is that it
              doesn’t rely on heavy plugins platforms like WordPress use. This
              ensures your content loads quickly and there is no need to keep up
              with constant updates.
            </p>
            <div className='fs22'>
              Most company websites include a blog as a part of their content
              production strategy, and it’s with good reason. Blogs provide the
              chance to connect with an audience and give readers a space to
              find the information they want to learn more about. Just like any
              part of a web design, there are many different ways to approach a
              blog design.
            </div>
            <p>
              Along with podcasts, social media, email newsletters, and other
              content, a company blog can be another important part of
              businesses' overall content strategy.
            </p>
            <br />
            <p>
              A company’s blog layout can include many things. It can contain
              case studies, company news, infographics, behind-the-scenes
              stories, as well as other relevant content that a potential
              customer would like to know. Blogging adds authenticity to a
              businesses' digital marketing and helps forge a more personal
              connection with their audience.
            </p>
            <br />
            <p>
              Great content is just one part of having a small business or
              corporate blog. Along with well researched and well written posts,
              a successful blog also needs to have a clear organization. Tagging
              posts, and otherwise categorizing them can go a long way in making
              this content accessible.
            </p>
            <br />
            <p>
              Blogging also has another valuable benefit, and that's in helping
              with search engine optimization. When a website’s content is kept
              new and updated through active blogging, web crawlers scan through
              it, and recognize that it’s not a forgotten dead end. Blog posts
              are full of relevant content and keywords that will also help web
              crawlers in identifying what a website is about. A business blog
              not only helps out your target customers, but may help in its SEO
              ranking. And the great thing about Webflow for blogging is that it
              doesn’t rely on heavy plugins platforms like WordPress use. This
              ensures your content loads quickly and there is no need to keep up
              with constant updates.
            </p>
            <div className='fs22'>
              Most company websites include a blog as a part of their content
              production strategy, and it’s with good reason. Blogs provide the
              chance to connect with an audience and give readers a space to
              find the information they want to learn more about. Just like any
              part of a web design, there are many different ways to approach a
              blog design.
            </div>
            <p>
              Along with podcasts, social media, email newsletters, and other
              content, a company blog can be another important part of
              businesses' overall content strategy.
            </p>
            <br />
            <p>
              A company’s blog layout can include many things. It can contain
              case studies, company news, infographics, behind-the-scenes
              stories, as well as other relevant content that a potential
              customer would like to know. Blogging adds authenticity to a
              businesses' digital marketing and helps forge a more personal
              connection with their audience.
            </p>
            <br />
            <p>
              Great content is just one part of having a small business or
              corporate blog. Along with well researched and well written posts,
              a successful blog also needs to have a clear organization. Tagging
              posts, and otherwise categorizing them can go a long way in making
              this content accessible.
            </p>
            <br />
            <p>
              Blogging also has another valuable benefit, and that's in helping
              with search engine optimization. When a website’s content is kept
              new and updated through active blogging, web crawlers scan through
              it, and recognize that it’s not a forgotten dead end. Blog posts
              are full of relevant content and keywords that will also help web
              crawlers in identifying what a website is about. A business blog
              not only helps out your target customers, but may help in its SEO
              ranking. And the great thing about Webflow for blogging is that it
              doesn’t rely on heavy plugins platforms like WordPress use. This
              ensures your content loads quickly and there is no need to keep up
              with constant updates.
            </p>
          </div>
          <div className='lnShare'>
            <div className='lnShareDiv'>
              <p className='lnshareText'>Share this</p>
              <div className='lnShareIcons'>
                <p>
                  <GrTwitter />
                </p>
                <p>
                  <FaLinkedinIn />
                </p>
                <p>
                  <FaFacebookF />
                </p>
                <p>
                  <IoLogoWhatsapp />
                </p>
                <p>
                  <HiMail />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Latestnewsblog
