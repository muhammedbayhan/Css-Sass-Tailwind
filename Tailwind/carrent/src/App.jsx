import './App.css'
import car from './assets/car.png';
import car2 from './assets/car2.png';
function App() {

  return (
    <div className="container font-jakarta">

      <div className='flex justify-between py-10 items-center'>
        <div className='flex-1'>
          <a href="#" className='pl-16 pr-16 text-3xl text-blue-500 uppercase tracking-wider font-extrabold'>carrent</a>

          <input type="text"
            className='
           
           
           pl-5 border-2 rounded-2xl border-slate-200  p-2   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
w-1/3'
            placeholder='Search something here' />
        </div>


        <div className='flex'>
          <div className=' mr-5 flex justify-center items-center rounded-full border border-slate-200 w-11 h-11 '><i class="fa-solid fa-heart text-slate-700 text-2xl"></i> </div>
          <div className=' mr-5 flex justify-center items-center rounded-full border border-slate-200 w-11 h-11 '><i class="fa-solid fa-bell text-slate-700 text-2xl"></i> </div>
          <div className=' mr-5 flex justify-center items-center rounded-full border border-slate-200 w-11 h-11 '><i class="fa-solid fa-gear text-slate-700 text-2xl"></i> </div>
          <div className=' mr-5 flex justify-center items-center rounded-full border border-slate-200 w-11 h-11 '><i class="fa-solid fa-user text-slate-700 text-2xl"></i> </div>
        </div>
      </div>

      <div class="flex px-16 py-8 ml-auto mr-auto bg-slate-50">
        <div class="basis-1/2 bg-gradient-to-l bg-blue-500 from-blue-700 mr-8 text-slate-50 py-6 px-6 ">
          <h1 className='text-3xl w-6/12 pb-4'>The Best Platform for Car Rental</h1>
          <h2 className='text-xl w-6/12 pb-5'>Ease of doing a car rental safely and reliably. Of course at a low price.</h2>
          <button className='bg-blue-800 rounded-sm py-3 px-6 text-lg'>Rental Car</button>
          <img src={car} alt="" className='relative bottom-0 mr-auto ml-auto' />

        </div>
        <div class="basis-1/2 bg-gradient-to-l bg-blue-700 from-blue-500 mr-8 text-slate-50 py-6 px-6 ">
          <h1 className='text-3xl w-6/12 pb-4'>Easy way to rent a car at a low price</h1>
          <h2 className='text-xl w-6/12 pb-5'>Providing cheap car rental services and safe and comfortable facilities.</h2>
          <button className='bg-blue-800 rounded-sm py-3 px-6 text-lg'>Rental Car</button>
          <img src={car2} alt="" className='relative bottom-0 mr-auto ml-auto' />

        </div>
      </div>

      





    </div>
  )
}

export default App
