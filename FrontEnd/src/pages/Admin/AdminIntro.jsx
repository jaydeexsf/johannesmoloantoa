import { Form, Input } from 'antd';
import React, { useContext, useState } from 'react'
import { ModeContext } from '../../components/ModeContext';
import { Button } from 'antd/es/radio';
import TextArea from 'antd/es/input/TextArea';

const AdminIntro = () => {

  const { portfolioData } = useContext(ModeContext)
  const [ introData, setIntroData ] = useState(portfolioData.intro[0]);

    const handleData = (e) => {
    e.preventDefault();
    console.log(introData) // Prevent page reload    nn n
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIntroData(prevData => ({
      ...prevData,
      [name]: value // Update the specific field
    }));
  };

  return (
    <div className='px-4'>
      <form className='flex flex-col ' onSubmit={handleData}>
        {/* Name Input */}
        <label className='' htmlFor='welcomeText'>Welcome Text</label>
        <Input 
          id='welcomeText' 
          name='welcomeText' 
          value={introData.welcomeText} 
          onChange={handleChange} 
          className='mb-4'
        />

        {/* First Name Input */}
        <label htmlFor='fristName '>First Name</label>
        <Input 
          id='fristName' 
          name='fristName' 
          value={introData.fristName} 
          onChange={handleChange} 
          className='mb-4'
        />

        <label htmlFor='lastname '>Last Name</label>
        <Input 
          id='lastname' 
          name='lastname' 
          value={introData.lastname} 
          onChange={handleChange} 
          className='mb-4'
        />

        <label htmlFor='caption '>Caption</label>
        <Input 
          id='caption' 
          name='caption' 
          value={introData.caption} 
          onChange={handleChange} 
          className='mb-4'
        />  

<label htmlFor='description '>Description</label>
        <TextArea 
          id='description' 
          name='description' 
          value={introData.description} 
          onChange={handleChange} 
          className='mb-4'
        />  

        {/* Submit Button */}
        <button type='submit' className='py-2 mt-8 px-6 bg-secondary-secondary-3'>
          SEND
        </button>
      </form>
    </div>
  );
}

export default AdminIntro;