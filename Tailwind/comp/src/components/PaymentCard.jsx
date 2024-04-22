import React from 'react'

const PaymentCard = () => {
  return (
    <div className='font-jakarta p-6 bg-white m-auto w-rentalInfoW rounded-xl'>
    <h1 className='font-bold text-xl'>Payment Method</h1>
    <div className='text-sm text-slate-500 flex justify-between mt-1'>
      <h2>Please enter your payment method</h2>
      <h2>Step 3 of 4</h2>
    </div>

    <div className='bg-slate-100 rounded-md mt-8'>

      <div className='p-6'>
<div className='flex justify-between'>
<div>
<input type="radio" />
        <label className='ml-2 font-bold text-base' htmlFor="">Credit Card</label>
</div>

        <img src={visa} alt="" />
</div>

        <div className='flex flex-wrap mt-8 gap-6'>
          <div>
            <h1 className='font-bold'>Card Number</h1>
            <input className='mt-4  w-PaymentInfoInput  border-none bg-white p-4  rounded-xl' placeholder="Card Number"></input>
          </div>
          <div>
            <h1 className='font-bold'>Expration Date</h1>
            <input className='mt-4  w-PaymentInfoInput border-none bg-white p-4  rounded-xl' placeholder="DD / MM / YY"></input>
          </div>
          <div>
            <h1 className='font-bold'>Card Holder</h1>
            <input className='mt-4  w-PaymentInfoInput  border-none bg-white p-4  rounded-xl' placeholder="Card Holder"></input>
          </div>
          <div>
            <h1 className='font-bold'>CVC</h1>
            <input className='mt-4  w-PaymentInfoInput  border-none bg-white p-4  rounded-xl' placeholder="CVC"></input>
          </div>

        </div>

      </div>

    </div>

    <div className='bg-slate-100 mt-6 rounded-md p-4 font-semibold text-base'>
      <div className='flex justify-between'>
       <div>
       <input type="radio" />
        <label className='ml-2 font-semibold text-base' htmlFor="">PayPal</label>
       </div>
<img src={paypal} alt="" />
      </div>
    </div>
    <div className='bg-slate-100 mt-6 rounded-md p-4 font-semibold text-base'>
      <div className='flex justify-between'>
        <div >
        <input type="radio" />
        <label className='ml-2 font-semibold text-base' htmlFor="">Bitcoin</label>
        </div>
<img src={bitcoin} alt="" />
      </div>
    </div>
  </div>
  )
}

export default PaymentCard