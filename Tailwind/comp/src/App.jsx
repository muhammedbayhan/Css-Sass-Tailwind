
import car from './assets/car.png';
import carlook from './assets/carlook.png';
import BillingInfo from './components/BillingInfo';
import mountain from './assets/mountain.mp4';
import sunsetFriends from './assets/sunsetFriends.mp4';
import greenMountain from './assets/greenMountain.mp4';

function App() {

  return (


    <div className=' selection:text-black selection:bg-black'>
      <video autoPlay muted loop className=' h-screen w-screen object-cover relative  ' src={greenMountain}></video>
      <div className='py-8 px-12 absolute inset-0 '>
      <div className='flex items-center'>
        <div className='uppercase text-white font-extrabold text-2xl'>Green Mountain</div>

       <div className='ml-8 text-white  font-bold w-1/2 flex justify-evenly'>
       <button href="#">Home</button> 
       <button href="#">Online Store</button>
       <button href="#">Pricing</button>
       <button href="#">Features</button>
       <button href="#">All Products</button>
       </div>

        </div>
      </div>
      <div class="absolute inset-0  flex flex-col justify-center items-center">


        <div className=' text-center uppercase text-white font-bold font-jakarta'>
          <h1 className='text-3xl'>Building the Future</h1>
          <h2 className='text-2xl'>Yesterday's Tomorrow, Today's Decision</h2>

        </div>
      </div>
    </div>

  )
}

export default App
