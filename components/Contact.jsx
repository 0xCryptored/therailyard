import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen my-16'>
        <h1 className='text-2xl font-bold text-center p-4'>Curious or Ready to Book? Contact Us!</h1>
        <form action="submit" className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='First Name' required/>
                <input className='border shadow-lg p-3' type="text" placeholder='Last Name' />
                <input className='border shadow-lg p-3' type="text" placeholder='First Name' />
                <input className='border shadow-lg p-3' type="text" placeholder='Last Name' />
                <input className='border shadow-lg p-3' type="email" placeholder='Email' required/>
                <input className='border shadow-lg p-3' type="tel" placeholder='Phone Number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                <input id='date' className='border shadow-lg p-3' type="date" required />
                <input className='border shadow-lg p-3' type="number" placeholder='Wedding Size' required />
            </div>
            <select className='border shadow-lg p-3 w-full my-2' id="survey" name="fruit">
              <option value="default" selected disabled >How did you hear from us?</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="TikTok">TikTok</option>
              <option value="Recommended by a friend">Recommended by a friend</option>
            </select>  
            <textarea className='border shadow-lg p-3 w-full resize-none' cols="30" rows="5" placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact