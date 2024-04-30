import React from 'react'

const BillingInfo = () => {
  return (
    <div className='Billing-info w-billingInfoW h-auto p-6 bg-white m-auto font-jakarta rounded-xl'>
      <div>test branch 2</div>
      <div>
        <h1 className='text-xl font-bold'>Billing Info</h1>
        <div className='flex justify-between items-center mt-1'>
          <h2 className='text-sm text-slate-500'>Please enter your billing info</h2>
          <h2 className='text-sm text-slate-500'>Step 1 of 4</h2>
        </div>
      </div>


      <div className='mt-8  flex flex-wrap gap-6'>
        <div>
          <h2 className='font-bold text-base'>Name</h2>
          <input className='mt-4 rounded-xl outline-blue-500 border-none py-4 px-8 w-96 bg-slate-100' type="text" name="asd" id="" placeholder='Your Name' />
        </div>
        <div>
          <h2 className='font-bold text-base'>Phone Number</h2>
          <input className='mt-4 rounded-xl outline-blue-500 border-none py-4 px-8 w-96 bg-slate-100' type="text" name="asd" id="" placeholder='Phone number' />
        </div>
        <div>
          <h2 className='font-bold text-base'>Address</h2>
          <input className='mt-4 rounded-xl outline-blue-500 border-none py-4 px-8 w-96 bg-slate-100' type="text" name="asd" id="" placeholder='Address' />
        </div>
        <div>
          <h2 className='font-bold text-base'>Town/City</h2>
          <input className='mt-4 rounded-xl outline-blue-500 border-none py-4 px-8 w-96 bg-slate-100' type="text" name="asd" id="" placeholder='Town or city' />
        </div>
      </div>
    </div>)
}

export default BillingInfo