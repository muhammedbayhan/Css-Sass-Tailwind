import React from 'react'

const Confirmation = () => {
  return (
    <div className='Confirmation font-jakarta w-rentalInfoW bg-white m-auto rounded-xl p-6'>
<h1 className='font-bold text-xl'>Confirmation</h1>
  <div className='text-sm text-slate-500 flex justify-between mt-1'>
        <h2>Please enter your payment method</h2>
        <h2>Step 3 of 4</h2>
      </div>

      <div className='flex mt-8 py-4 px-8 bg-slate-100 rounded-xl'>
        <input type="checkbox" />
        <p className='text-base font-bold ml-4'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
      </div>

      <div className='flex mt-8 py-4 px-8 bg-slate-100 rounded-xl'>
        <input type="checkbox" />
        <p className='text-base font-bold ml-4'>I agree with our <span className='underline'>terms and conditions</span> and <span className='underline'>privacy policy</span>.</p>
      </div>

      <button className='mt-8 py-4 px-8 bg-indigo-600 text-white rounded-xl'>Rent Now</button>
      <img src={icsecur} alt="" className='mt-8'/>
      <h1 className='text-xl font-bold mt-4'>All your data are safe</h1>
      <h2 className='text-sm text-slate-500 mt-2'>We are using the most advanced security to provide you the best experience ever.</h2>
</div>
  )
}

export default Confirmation