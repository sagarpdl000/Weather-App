import React from 'react'
import cloudy from '../Assets/cloudy.png'
import drizzle from '../Assets/drizzle.png'
import rain from '../Assets/rain.png'
import search from '../Assets/search.png'
import snow from '../Assets/snow.png'
import sunny from '../Assets/sunny.png'
import thunderstrom from '../Assets/thunderstrom.png'
import humidity from '../Assets/humidity.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faWind } from '@fortawesome/free-solid-svg-icons'




const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='bg-gradient-to-r from-zinc-500 to-slate-600 rounded-xl'>

        <div className='my-8 mx-8'>

          <div  className='flex'>
              <input type="text" name="" id="" placeholder='Search' className='border-black bg-blue-100 rounded-2xl mr-2 text-black-500 px-10 py-2'/>
              <FontAwesomeIcon icon={faMagnifyingGlass}  className=' bg-blue-100  p-3 rounded-full'/>
          </div>

          <div className='flex justify-center mt-6'>
            <img src={rain} alt="" className='h-36' />
          </div>

          <div className=' flex justify-center'>
            <h1 className='text-white text-6xl'>16&deg;c</h1>
          </div>

          <div className=' flex justify-center mt-2'>
            <h1 className='text-white text-2xl'>Kathmandu</h1>
          </div>

          <div className='flex justify-between mt-6'>
            <div>
              <img src={humidity} alt="" className='h-6'/>
              <div className='text-white'>
                <p>50%</p>
                <p className=' text-sm'>Humidity</p>
              </div>
            </div>

            <div>
            <FontAwesomeIcon icon={faWind} className='' />
            <div className='text-white'>
                <p>12 km/h</p>
                <p className=' text-sm'>Wind speed</p>
              </div>
            </div>
          </div>

          

        </div>


      </div>


    </div>
  )
}

export default Home