import './App.css'

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






    </div>
  )
}

export default App
