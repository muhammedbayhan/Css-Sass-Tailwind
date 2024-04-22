
import car from './assets/car.png';

function App() {

  return (

    <div className="bg-lightwhite h-screen flex font-jakarta sm:bg-black md:bg-yellow-500 lg:bg-green-500 xl:bg-purple-500 2xl:bg-red-500">
      <div className="bg-white w-80  h-96 m-auto  p-6 rounded-xl">

<div className="flex justify-between">
  <div>
    <h1 className='font-bold text-xl hover:scale-125 duration-300'>CR-V</h1>
    <h2 className="mt-1 font-bold text-sm text-slate-400 hover:scale-125 duration-300">SUV</h2>
  </div>
  <svg className="h-6 w-6 hover:scale-125 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fb1313" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>        </div>

<div className='flex justify-center mt-12 hover:scale-125 duration-300'>
  <img className='bg-center' src={car} alt="" />
</div>

<div className='flex justify-between mt-8'>
  <div className='flex items-center hover:scale-125 duration-300'>
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d0d5dc" d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z" /></svg>
    <p className='pl-2 text-sm text-slate-400'>80L</p>
  </div>
  <div className='flex items-center hover:scale-125 duration-300'>
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#c5cad3" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
    <p className='pl-2 text-sm text-slate-400'>Manual</p>

  </div>

  <div className='flex items-center hover:scale-125 duration-300'>
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ced2da" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>

    <p className='pl-2 text-sm text-slate-400'>6 People</p>

  </div>
</div>

<div className='flex justify-between mt-6 items-center'>
  <h1 className='font-bold text-xl hover:scale-125 duration-300'>$80.00/ <span className='text-slate-400 text-sm'>day</span></h1>
  <button 
  className='bg-blue-500 rounded-md font-semibold text-lg text-white py-3 px-5 hover:bg-blue-400  duration-300'>Rent Now</button>
</div>
</div>

    </div>

  )
}

export default App
