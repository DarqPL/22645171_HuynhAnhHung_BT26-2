import logo from '../assets/logo.jpg'
import recepiebox from '../assets/recepiebox.png'
import nouser from '../assets/nouser.jpg'
import searchIcon from '../assets/search.png'

const Header = () => {
  return (
    <div className='px-4 py-2 flex items-center justify-between'>
        <img src={logo} className='' />
        <div className='relative'>
          <input type='text' className='w-[400px] bg-gray-200 p-2 rounded-md mr-4' />
          <img src={searchIcon} className='absolute w-[20px] top-[10px] right-[25px]' />
        </div>
        <ul className='flex items-center gap-2'>
          <li className='p-2 text-gray-500'>What to cook</li>
          <li className='p-2 text-gray-500'>Recepies</li>
          <li className='p-2 text-gray-500'>Ingredients</li>
          <li className='p-2 text-gray-500'>Occasions</li>
          <li className='p-2 text-gray-500'>About us</li>
        </ul>
        <button className='text-[#F44B87FF] bg-[#FEF0F5FF] flex items-center justify-center border-0 rounded-md gap-2 px-4 py-2 text-lg'> 
          <img src={recepiebox} className='w-[30px]' alt="" />
          Your recepie box
        </button>
        <div className='w-[60px]'>
          <img src={nouser} className='rounded-full'/>
        </div>
      </div>
  )
}

export default Header
