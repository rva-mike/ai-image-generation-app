import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'



const CreatePost = () => {
  //navigates back to home page once post is created
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleSurpriseMe = () => {
    
  }


  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Create imaginative and visually stunning images generated through DALL-E AI and share them with the community</p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit} action="">
        <div className='flex flex-col gap-5'>
          <FormField
            labelName="Your name"
            type='text'
            name='name'
            placeholder='Johnny Nameson'
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type='text'
            name='prompt'
            placeholder='Dracula walking down the street of New York City in the 1920s, black and white photography'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost