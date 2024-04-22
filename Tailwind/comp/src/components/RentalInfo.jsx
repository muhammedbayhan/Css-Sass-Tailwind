import React from 'react'

const RentalInfo = () => {
  return (
  

      <div className='Rental-Info font-jakarta w-rentalInfoW h-auto rounded-xl bg-white m-auto p-6'>
        <h1 className='font-bold text-xl'>Rental Info</h1>
        <div className='flex justify-between mt-1 text-sm text-slate-500'>
          <h2>Please select your rental date</h2>
          <h2>Step 2 of 4</h2>
        </div>
        <div className='mt-8'>
          <input type="radio" id='a' name='a' />
          <label className='font-semibold text-base ml-3' for="html">Pick - Up</label>


          <div className='mt-6 flex flex-wrap gap-6 '>
            <div className=''>
              <h1 className='font-bold'>Locations</h1>
              <select className='mt-4 w-96 border-none bg-slate-100 p-4  rounded-xl' name="location" id="location">
                <option value="tr">Turkey</option>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                <option value="gl">	Greenland</option>
              </select>
            </div>
            <div className=''>
              <h1 className='font-bold'>Date</h1>
              <select className='mt-4  w-96  border-none bg-slate-100 p-4  rounded-xl' name="location" id="location">
                <option value="a">01.01.2024</option>
                <option value="b">02.01.2024</option>
                <option value="c">03.01.2024</option>
                <option value="d">04.01.2024</option>
              </select>
            </div>
            <div className=''>
              <h1 className='font-bold'>Time</h1>
              <select className='mt-4  w-96  border-none bg-slate-100 p-4  rounded-xl' name="location" id="location">
                <option value="1">12:00</option>
                <option value="2">13:00</option>
                <option value="3">14:00</option>
                <option value="4">15:00</option>
              </select>
            </div>

          </div>
        </div>
        <div className='mt-8'>
          <input type="radio" id='a' name='a'/>
          <label className='font-semibold text-base ml-3' for="html">Drop - Off</label>


          <div className='mt-6 flex flex-wrap gap-6 '>
            <div className=''>
              <h1 className='font-bold'>Locations</h1>
              <select className='mt-4 w-96 border-none bg-slate-100 p-4  rounded-xl' name="location" id="location">
                <option value="tr">Turkey</option>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                <option value="gl">	Greenland</option>
              </select>
            </div>
            <div className=''>
              <h1 className='font-bold'>Date</h1>
              <select className='mt-4  w-96  border-none bg-slate-100 p-4  rounded-xl' name="location" id="location">
                <option value="a">01.01.2024</option>
                <option value="b">02.01.2024</option>
                <option value="c">03.01.2024</option>
                <option value="d">04.01.2024</option>
              </select>
            </div>
            <div className=''>
              <h1 className='font-bold'>Time</h1>
              <select className='mt-4  w-96  border-none bg-slate-100 p-4  rounded-xl' name="location" id="location">
                <option value="1">12:00</option>
                <option value="2">13:00</option>
                <option value="3">14:00</option>
                <option value="4">15:00</option>
              </select>
            </div>

          </div>
        </div>
      </div>
  

  )
}

export default RentalInfo