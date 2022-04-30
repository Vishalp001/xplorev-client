import { Axios } from './Utility'

import './App.css'
import Home from './singlepage/home/Home.jsx'
import React, { useContext, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Loader from './components/loader/Loader'
import Quickbites from './singlepage/quickBites/Quickbitepage'
import Latestnews from './singlepage/latestnewspage/Latestnewspage'
import Knowevpage from './singlepage/knowEv/Knowevpage'
import Trendingpage from './singlepage/trandingpage/Trendingpage'
import Videos from './singlepage/videos/Videos'
// import Latestnewsblog from './singlepage/latestnewspage/latestnewsblog/Latestnewsblog'
import ScrollToTop from './components/ScrollToTop'
import FreecoursePage from './singlepage/freecourses/FreecoursePage'
import Freecourseblog from './singlepage/freecourses/freecourse blog/Freecoureblog.jsx'
import GovEvPolicies from './singlepage/govEVpolicies/GovEvPolicies'
import Dashboard from './admin/dashboard/Dashboard.jsx'
import TrendingAdminPost from './admin/trending/trendingAdminPost/TrendingAdminPost'
import WriteTrendingPost from './admin/trending/writeTrendingPost/WriteTrendingPost'
import Register from './auth/register/Register'
import Login from './auth/login/Login'
import { Context } from './context/Context'
import QuickbitesAdminPost from './admin/quickbites/quickbitesAdminPost/QuickbitesAdminPost'
import WriteQuickBitesPost from './admin/quickbites/writeQuickbitesPost/WriteQuickbitesPost'
import VideoAdminPost from './admin/video/videoAdminPost/VideoAdminPost'
import WriteVideodPost from './admin/video/writeVideoPost/WriteVideoPost'
import NewsAdminPost from './admin/news/newsAdminPost/NewsAdminPost'
import WriteNewsPost from './admin/news/writeNewsPost/WriteNewsPost'
import WriteBlogPost from './admin/blog/WriteBlogPost/WriteBlogPost'
import BlogAdminPost from './admin/blog/blogAdminPost/BlogAdminPost'
import WriteFreeCoursePost from './admin/freeCourse/writefreeCoursePost/WriteFreeCoursePost'
import FreeCourseAdminPost from './admin/freeCourse/freeCourseAdminPost/FreeCourseAdminPost'
import WriteEvPost from './admin/ev/writeEvPost/WriteEvPost'
import EvPost from './admin/ev/evAdminPost/EvAdminPost'

import WriteEvPolicies from './admin/evpolicies/writeEvPolicies/WriteEvPolicies'
import EvPoliciesAdminPost from './admin/evpolicies/EvPoliciesAdminPost/EvPoliciesAdminPost'

import WriteEBikePost from './admin/electricBike/writeEBikePost/WriteEBikePost'
import EBikeAdminPost from './admin/electricBike/eBikeAdminPost/EBikeAdminPost'
import CarSpecificationAll from './singlepage/carSpecification/carSpecificationAll/CarSpecificationAll.jsx'
// import CarSpecificationBlog from './singlepage/carSpecification/CarSpecificationblog.jsx'
// import BikeSpecificationBlog from './singlepage/bikeSpecification/BikeSpecificationblog'
import EvSpecification from './singlepage/evSpecification/EvSpecification'
import BikeSpecificationAll from './singlepage/bikeSpecification/bikeSpecificationAll/BikeSpecificationAll.jsx'
import Blog from './singlepage/blogs/blog/Blog'
import CompairCars from './singlepage/compair/CompairCars'
import CompairBikes from './singlepage/compair/CompairBikes'
import CompairUpcomingCars from './singlepage/compair/CompairUpcomingCars'
import CompairUpcomingBikes from './singlepage/compair/CompairUpcomingBikes'
import ChargingStations from './singlepage/chargingStations/ChargingStations'

function App() {
  const { user } = useContext(Context)
  const [trendings, setTrengings] = useState([])
  const [quickBites, setQuickBites] = useState([])
  const [video, setVideo] = useState([])
  const [news, setNews] = useState([])
  const [blog, setBlog] = useState([])
  const [freeCourse, setFreeCourse] = useState([])
  const [eCar, setECar] = useState([])
  const [eBike, setEBike] = useState([])
  const [upcoming, setupcoming] = useState([])
  const [upcomingBike, setupcomingBike] = useState([])
  const [upcomingCar, setupcomingCar] = useState([])
  const [policies, setPolicies] = useState([])
  const [station, setStation] = useState([])
  const [loading, setLoading] = useState(false)
  const { search } = useLocation()

  useEffect(() => {
    const fetchTrendingPost = async () => {
      setLoading(true)
      const res = await Axios.get('/trending' + search)
      setTrengings(res.data)
      setLoading(false)
    }

    const fetchQuickBitesPost = async () => {
      setLoading(true)

      const res = await Axios.get('/quickbyte' + search)
      setQuickBites(res.data)
      setLoading(false)
    }
    const fetchVideoPost = async () => {
      setLoading(true)
      const res = await Axios.get('/video')
      setVideo(res.data)
      setLoading(false)
    }
    const fetchNewsPost = async () => {
      setLoading(true)

      const res = await Axios.get('/news' + search)
      setNews(res.data)
      setLoading(false)
    }
    const fetchBlogPost = async () => {
      setLoading(true)

      const res = await Axios.get('/blog' + search)
      setBlog(res.data)
      setLoading(false)
    }
    const fetchFreeCourse = async () => {
      setLoading(true)

      const res = await Axios.get('/freecourse')
      setFreeCourse(res.data)
      setLoading(false)
    }
    const fetchECar = async () => {
      setLoading(true)
      const res = await Axios.get('/ev')
      setECar(res.data[0].car)
      setEBike(res.data[0].bike)
      setupcoming(res.data[0].upcoming)
      setupcomingBike(res.data[0].upcomingBike)
      setupcomingCar(res.data[0].upcomingCar)
      setLoading(false)
    }

    const fetchPolicies = async () => {
      setLoading(true)
      const res = await Axios.get('/evpolicies')
      setPolicies(res.data)
      setLoading(false)
    }

    fetchTrendingPost()
    fetchQuickBitesPost()
    fetchVideoPost()
    fetchNewsPost()
    fetchBlogPost()
    fetchFreeCourse()
    fetchECar()
    fetchPolicies()
  }, [search])
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          exact
          path='/'
          element={
            loading ? (
              <Loader />
            ) : (
              <Home
                trendings={trendings}
                quickBites={quickBites}
                eCar={eCar}
                eBike={eBike}
                video={video}
                news={news}
                blog={blog}
                freeCourse={freeCourse}
                upcoming={upcoming}
                upcomingBike={upcomingBike}
                upcomingCar={upcomingCar}
              />
            )
          }
        />
        <Route
          exact
          path='/quickBites'
          element={
            loading ? <Loader /> : <Quickbites quickBites={quickBites} />
          }
        />
        <Route exact path='/knowevpage' element={<Knowevpage blog={blog} />} />
        <Route exact path='/latestnews' element={<Latestnews news={news} />} />
        <Route
          exact
          path='/trendingnews'
          element={<Trendingpage trendings={trendings} />}
        />
        <Route exact path='/videos' element={<Videos video={video} />} />
        <Route
          exact
          path='/freecourses'
          element={<FreecoursePage freeCourse={freeCourse} />}
        />
        {/* <Route exact path='/latestnewsblog' element={<Latestnewsblog />} /> */}
        <Route
          exact
          path='/freecoursesblog/:id'
          element={<Freecourseblog freeCourse={freeCourse} />}
        />
        <Route
          exact
          path='/gov_ev_policies'
          element={<GovEvPolicies policies={policies} />}
        />
        <Route
          exact
          path='/blog/:id'
          element={<Blog trendings={trendings} news={news} blog={blog} />}
        />
        <Route
          exact
          path='/all_cars'
          element={<CarSpecificationAll eCar={eCar} />}
        />
        {/* <Route
          exact
          path='/e_car/:id'
          element={<CarSpecificationBlog eCar={eCar} />}
        /> */}
        <Route exact path='/ev_spec/:id' element={<EvSpecification />} />
        <Route
          exact
          path='/compair_cars/:id'
          element={<CompairCars eCar={eCar} />}
        />
        <Route
          exact
          path='/compair_bikes/:id'
          element={<CompairBikes eBike={eBike} />}
        />
        <Route
          exact
          path='/compair_upcoming_car/:id'
          element={<CompairUpcomingCars upcomingCar={upcomingCar} />}
        />
        <Route
          exact
          path='/compair_upcoming_bike/:id'
          element={<CompairUpcomingBikes upcomingBike={upcomingBike} />}
        />
        {/* --------------BIKES-------------- */}
        <Route
          exact
          path='/all_bikes'
          element={<BikeSpecificationAll eBike={eBike} />}
        />
        {/* <Route
          exact
          path='/e_bike/:id'
          element={<BikeSpecificationBlog eBike={eBike} />}
        /> */}
        {/* --------------SINGLE PAGES-------- */}
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route
          exact
          path='/charging_stations'
          element={<ChargingStations station={station} />}
        />
        {/* -----------------------------ADMIN ROUTES------------- */}
        <Route
          exact
          path='/admin'
          element={
            user ? (
              <Dashboard
                trendings={trendings}
                quickBites={quickBites}
                video={video}
                news={news}
                blog={blog}
                freeCourse={freeCourse}
                eCar={eCar}
                eBike={eBike}
                upcoming={upcoming}
                upcomingCar={upcomingCar}
                upcomingBike={upcomingBike}
                policies={policies}
              />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path='/trending_admin_post/:id'
          element={<TrendingAdminPost />}
        />
        <Route
          exact
          path='/create_trending_post'
          element={<WriteTrendingPost />}
        />
        <Route
          exact
          path='/quick_bites_admin_post/:id'
          element={<QuickbitesAdminPost />}
        />

        <Route
          exact
          path='/create_quick_bites_post'
          element={<WriteQuickBitesPost />}
        />

        <Route
          exact
          path='/video_admin_post/:id'
          element={<VideoAdminPost />}
        />

        <Route exact path='/create_video_post' element={<WriteVideodPost />} />

        <Route exact path='/news_admin_post/:id' element={<NewsAdminPost />} />

        <Route exact path='/create_news_post' element={<WriteNewsPost />} />

        <Route exact path='/blog_admin_post/:id' element={<BlogAdminPost />} />

        <Route exact path='/create_blog_post' element={<WriteBlogPost />} />

        <Route
          exact
          path='/free_course_admin_post/:id'
          element={<FreeCourseAdminPost />}
        />

        <Route
          exact
          path='/create_free_course_post'
          element={<WriteFreeCoursePost />}
        />

        <Route exact path='/ev_admin_post/:id' element={<EvPost />} />

        <Route exact path='/create_ev_post' element={<WriteEvPost />} />

        <Route
          exact
          path='/e_bike_admin_post/:id'
          element={<EBikeAdminPost />}
        />

        <Route exact path='/create_e_bike_post' element={<WriteEBikePost />} />

        <Route
          exact
          path='/evpolicies_admin_post/:id'
          element={<EvPoliciesAdminPost />}
        />
        <Route
          exact
          path='/create_evpolicies_post'
          element={<WriteEvPolicies />}
        />
      </Routes>
    </>
  )
}

export default App
