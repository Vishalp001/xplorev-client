import React from 'react'
import './footer.scss'
import logo from '../../assets/images/logo.png'
import newLogo from '../../assets/images/carlogo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container footerContainer'>
          <div className='info'>
            <div className='imgDiv'>
              <img src={newLogo} alt='newLogo' />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className='quickContact'>
            <h1>Quick Contact</h1>
            <p>
              <span></span> Rometheme Studio
            </p>
            <p>
              <span></span>99th, Arround St, Pku City
            </p>
            <p>
              <span></span> 012 345 6789
            </p>
            <p>
              <span></span> Info@yourdomain.com
            </p>
          </div>
          <div className='otherPage'>
            <h1>Other Page</h1>
            <p>
              <span></span> Privacy Policy
            </p>
            <p>
              <span></span>Term Of Service
            </p>
            <p>
              <span></span> Disclaimer
            </p>
            <p>
              <span></span> Credit
            </p>
          </div>
          <div className='socialMedia'>
            <h1>Our Social Media</h1>
            <p>
              <span></span> Facebook
            </p>
            <p>
              <span></span>Instagram
            </p>
            <p>
              <span></span> Pinterest
            </p>
            <p>
              <span></span>Linkedin
            </p>
          </div>
        </div>
        <div className='credit'>
          {/* <p>Copyright 2022 © Caroze | Made By Vishal & Saloni with ❤️</p> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
