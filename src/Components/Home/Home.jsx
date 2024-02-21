import React, { useState } from 'react'
import humidity from '../Assets/humidity.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faWind } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'





const Home = () => {

  const [location, setLocation] = useState('');
  const [data, setData] = useState({})
 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6a16285e801a4c484cbeb0531fd1e787`


  const searchLocation = (event) =>{

    
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })

    .catch((error)=>{
      
    })
    setLocation('')
  
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchLocation();
    }
  };

  const handleClick = () => {
    searchLocation();
  };

  
  return (
    <div className='flex justify-center items-center h-screen bg-[url(https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-no-repeat bg-cover bg-center ' >

      <div className='bg-gradient-to-r from-zinc-500 to-slate-600 rounded-xl'>

        <div className='my-8 mx-8'>




          <div  className='flex'>

              <input type="text" name="" id="" placeholder='Search' value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress = {handleKeyPress}
              className='border-black bg-blue-100 rounded-2xl mr-2 text-black-500 px-4 md:px-10 py-2'/>

              <FontAwesomeIcon icon={faMagnifyingGlass}  className=' bg-blue-100  p-3 rounded-full' onClick={handleClick}/>
          </div>

       



          <div className='flex justify-center mt-6'>
         {data.weather ? <p className='text-xl text-white'>{data.weather[0].main}</p>:null }
            
          </div>



          <div className=' flex justify-center'>

          {data.main ? <h1 className='text-white text-2xl md:text-6xl'>{data.main.temp.toFixed()}&deg;c</h1>:null }
            
          </div>



          <div className=' flex justify-center mt-2'>
            <h1 className='text-white text-xl md:text-2xl'>{data.name}</h1>
          </div>




          <div className='flex justify-between mt-6'>
            <div>
              <img src={humidity} alt="" className='h-6'/>
              <div className='text-white'>
              {data.main ? <p>{data.main.humidity.toFixed()}%</p>:null}
                <p className=' text-sm'>Humidity</p>
              </div>
            </div>



            <div>
            <FontAwesomeIcon icon={faWind} className='' />
            <div className='text-white'>
                {data.wind ? <p>{data.wind.speed} km/h</p>:null}
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