import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='flex flex-col  md:flex-row m-10'>
        <h2 className='justify-center items-center text-sm m-2'>
          Robert Noble is a Filipino-American (and British) writer and attorney living in Brooklyn, New York. 
          He has contributed to works at TASCHEN and Bushwick Daily. 
          He can be found smiling awkwardly in photos on Instagram at{' '}
          <span>
            <Link to="https://www.instagram.com/bobmeetsworld">
              @bobmeetsworld
            </Link>
          </span>.
        </h2>
        <img src = "/images/bobbywindow.webp" className='w-[30%]'/>
      </div>
    </div>
  )
}

export default About