import React from 'react'
import ElectricBikes from '../../components/electricBikes/ElectricBikes'
import ElectricCar from '../../components/electricCar/ElectricCar'
import Evknowledge from '../../components/evKnowledge/Evknowledge'
import KnowEv from '../../components/knowEv/KnowEv'
import LetestNews from '../../components/letestNews/LetestNews'
import Quickbytes from '../../components/quickbytes/Quickbytes'
import Subscribe from '../../components/subscribe/Subscribe'
import Topbar from '../../components/topBar/Topbar'
import Trending from '../../components/trending/Trending'
// import Find from '../../components/find/Find'
import OurVideos from '../../components/ourVideos/OurVideos'
import UpcomingEv from '../../components/upcomingEv/UpcomingEv'
import Footer from '../../components/footer/Footer'

const Home = (props) => {
  return (
    <>
      <Topbar />
      <Trending trendings={props.trendings} />
      <UpcomingEv
        upcoming={props.upcoming}
        upcomingBike={props.upcomingBike}
        upcomingCar={props.upcomingCar}
      />
      {/* <Find /> */}
      <Quickbytes quickBites={props.quickBites} />
      <ElectricCar eCar={props.eCar} />
      <ElectricBikes eBike={props.eBike} />
      <OurVideos video={props.video} />
      <LetestNews news={props.news} />
      <Evknowledge freeCourse={props.freeCourse} />
      <KnowEv blog={props.blog} />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home
