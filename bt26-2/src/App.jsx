import './App.css'
import Header from './components/Header'

import filter from './assets/filter.png'
import arrowUp from './assets/352469_arrow_up_icon.png'
import noResult from "./assets/no_result.png"

function App() {
  return (
    <div>
      <Header />

      <div className='flex items-center gap-6 justify-center w-[1200px] mx-auto'>
        <div className='flex-[3] border border-gray-300 rounded-lg p-3'>
          <p className='text-xl font-bold flex items-center gap-2 mb-4'>
            <img src={filter} className='w-[30px]' alt="" />
            <p>FILTER</p>
          </p>
          <div>
            <p className='flex items-center justify-between'>
              <p className='text-lg font-semibold'>Type</p>
              <img src={arrowUp} className='w-[30px]' alt="" />
            </p>
            <div className='grid grid-cols-2 grid-rows-4 gap-4 py-3'>
              {['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed'].map(item => {
                return (
                  <div className='flex gap-2 items-center'>
                <input type="checkbox" name="" id="" />
                <p>{item}</p>
              </div>
                )
              })}
            </div>
          </div>
          <div className='border border-gray-300 mb-3'></div>
          <div>
            <p className='flex items-center justify-between'>
              <p className='text-lg font-semibold'>Time</p>
              <img src={arrowUp} className='w-[30px]' alt="" />
            </p>
            <input type="range" name="" id="" className='w-full' />
          </div>
          <div className='border border-gray-300 mb-3'></div>
            <p className='flex items-center justify-between'>
              <p className='text-lg font-semibold'>Rating</p>
              <img src={arrowUp} className='w-[30px]' alt="" />
            </p>
            <div>
              <div className='py-2 flex items-center gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">⭐⭐⭐⭐⭐</label>
              </div>
              <div className='py-2 flex items-center gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">⭐⭐⭐⭐</label>
              </div>
              <div className='py-2 flex items-center gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">⭐⭐⭐</label>
              </div>
              <div className='py-2 flex items-center gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">⭐⭐</label>
              </div>
              <div className='py-2 flex items-center gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">⭐</label>
              </div>
            </div>
          </div> 
        <div className='flex-[7] flex items-center justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <p className='font-bold text-2xl'>Sorry, no results were found for "cakescascas"</p>
            <div>
              <img src={noResult} alt="" />
            </div>
            <p>We have all your Independence Day sweets covered</p>
            <div className='flex items-center gap-4 mt-4'>
              <div className='text-[#F44B87FF] bg-[#fcbad1] p-1 rounded-full text-center w-[100px]'>
                Sweet cake
              </div>
              <div className='text-[#bb39ee] bg-[#e7bff7] p-1 rounded-full text-center w-[100px]'>
                Black cake
              </div>
              <div className='text-[#F44B87FF] bg-[#fcbad1] p-1 rounded-full text-center w-[100px]'>
                Pozole Verde
              </div>
              <div className='text-[#35b9f7] bg-[#a9ddf5] p-1 rounded-full text-center w-[100px]'>
                Healthy food
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
