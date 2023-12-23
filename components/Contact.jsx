'use client'

import { sendContactForm } from '@/lib/api';
import React, { useState } from 'react'


const initValues = { name: "", lastname: "", pName: "", pLastname: "", email: "", phone: "", weddingDate: "", weddingSize: "", survey: "", message: ""};

const initState = { values: initValues };

const Contact = () => {
  const [state, setState] = useState(initState);

  const { values } = state;
  
  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    }
  }));

  const onSubmit = async (e) => {
    
    await sendContactForm(values);
  }

  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen mb-10'>
        <h1 className='text-2xl font-bold text-center p-4 text-white'>Curious or Ready to Book? Contact Us!</h1>
        <form action="submit" className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3 rounded-md' onChange={handleChange} name='name' value={values.name} type="text" placeholder='First Name' required/>

                <input className='border shadow-lg p-3 rounded-md' onChange={handleChange} name='lastname' value={values.lastname} type="text" placeholder='Last Name' />

                <input className='border shadow-lg p-3 rounded-md' onChange={handleChange} name='pName' value={values.pName} type="text" placeholder='First Name' />

                <input className='border shadow-lg p-3 rounded-md' onChange={handleChange} name='pLastname' value={values.pLastname} type="text" placeholder='Last Name' />

                <input className='border shadow-lg p-3 rounded-md' onChange={handleChange} name='email' value={values.email} type="email" placeholder='Email' required/>

                <input className='border shadow-lg p-3 rounded-md' onChange={handleChange} name='phone' value={values.phone} type="tel" placeholder='Phone Number' required />

                <input id='date' className='border shadow-lg p-3 rounded-md' onChange={handleChange} name='weddingDate' value={values.weddingDate} type="date" required />

                <input className='border shadow-lg p-3 rounded-md' onChange={handleChange} name='weddingSize' value={values.weddingSize} type="number" placeholder='Wedding Size' required />
            </div>

            <select className='border shadow-lg p-3 w-full my-2 rounded-md' onChange={handleChange} name='survey' value={values.survey}>
              <option value="default" disabled >How did you hear from us?</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="TikTok">TikTok</option>
              <option value="Recommended by a friend">Recommended by a friend</option>
            </select>  

            <textarea className='border shadow-lg p-3 w-full resize-none rounded-md' onChange={handleChange} name='message' value={values.message} cols="30" rows="5" placeholder='Message' required></textarea>

            <button onClick={onSubmit} disabled={!values.name || !values.email || !values.phone || !values.weddingDate || !values.weddingSize || !values.message} className='border font-bold text-lg text-white shadow-lg p-3 w-full mt-2 rounded-md'>Submit</button>
        </form>
    </div>
  )
}

export default Contact