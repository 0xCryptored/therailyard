'use client'

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';


const Contact = () => {
  
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }
  
  return (
    <div className='max-w-[1240px] mx-auto pb-16 px-4'>
        <h1 className='text-2xl font-bold text-center p-4 text-white'>Curious or Ready to Book? Contact Us!</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[600px] mx-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3 rounded-md' name='name' type="text" placeholder='First Name' {...register('name', { required: true })} />

                <input className='border shadow-lg p-3 rounded-md' name='lastname' type="text" placeholder='Last Name' {...register('lastname', { required: false })} />

                <input className='border shadow-lg p-3 rounded-md' name='pName' type="text" placeholder='First Name' {...register('pName', { required: false })}/>

                <input className='border shadow-lg p-3 rounded-md' name='pLastname' type="text" placeholder='Last Name' {...register('pLastname', { required: false })}/>

                <input className='border shadow-lg p-3 rounded-md' name='email' type="email" placeholder='Email' {...register('email', { required: true })} />

                <input className='border shadow-lg p-3 rounded-md' name='phone' type="tel" placeholder='Phone Number' {...register('phone', { required: false })} />

                <input className='border shadow-lg p-3 rounded-md' name='eventDate' type="date" {...register('eventDate', { required: true })} />

                <input className='border shadow-lg p-3 rounded-md' name='eventSize' type="number" placeholder='Event Size' {...register('eventSize', { required: true })} />
            </div>

            <select className='border shadow-lg p-3 w-full my-2 rounded-md' name='survey' {...register('survey', { required: false })}>
              <option value="default" selected disabled >How did you hear from us?</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="TikTok">TikTok</option>
              <option value="Recommended by a friend">Recommended by a friend</option>
            </select>  

            <textarea className='border shadow-lg p-3 w-full resize-none rounded-md' name='message' cols="30" rows="5" placeholder='Message' {...register('message', { required: true })}></textarea>

            <button onClick={onSubmit} className='border font-bold text-lg text-white shadow-lg p-3 w-full mt-2 rounded-md'>Submit</button>
        </form>
    </div>
  )
}

export default Contact