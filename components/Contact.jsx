import React from 'react'

  const initValues = { name: "", lastname: "", pName: "", pLastname: "", email: "", phone: "", weddingDate: "", weddingSize: "", survey: "", message: ""};

  const initState = { values: initValues };

const Contact = () => {
  const [state, setState] = useState(initState)

  const { values } = state 


  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen mb-10'>
        <h1 className='text-2xl font-bold text-center p-4 text-white'>Curious or Ready to Book? Contact Us!</h1>
        <form action="submit" className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3 rounded-md' value={values.name} type="text" placeholder='First Name' required/>
                <input className='border shadow-lg p-3 rounded-md' value={values.lastname} type="text" placeholder='Last Name' />
                <input className='border shadow-lg p-3 rounded-md' value={values.pName} type="text" placeholder='First Name' />
                <input className='border shadow-lg p-3 rounded-md' value={values.pLastname} type="text" placeholder='Last Name' />
                <input className='border shadow-lg p-3 rounded-md' value={values.email} type="email" placeholder='Email' required/>
                <input className='border shadow-lg p-3 rounded-md' value={values.phone} type="tel" placeholder='Phone Number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                <input id='date' className='border shadow-lg p-3 rounded-md' value={values.weddingDate} type="date" required />
                <input className='border shadow-lg p-3 rounded-md' value={values.weddingSize} type="number" placeholder='Wedding Size' required />
            </div>
            <select className='border shadow-lg p-3 w-full my-2 rounded-md' value={values.survey} id="survey" name="fruit">
              <option value="default" selected disabled >How did you hear from us?</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="TikTok">TikTok</option>
              <option value="Recommended by a friend">Recommended by a friend</option>
            </select>  
            <textarea className='border shadow-lg p-3 w-full resize-none rounded-md' value={values.message} cols="30" rows="5" placeholder='Message'></textarea>
            <button className='border font-bold text-lg text-white shadow-lg p-3 w-full mt-2 rounded-md'>Submit</button>
        </form>
    </div>
  )
}

export default Contact