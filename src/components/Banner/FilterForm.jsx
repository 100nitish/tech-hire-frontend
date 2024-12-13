import React, { useState } from 'react'

const FilterForm = () => {
    const [formData,setFormData]=useState("");

    const handleChange = () => {
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));
    }


    const handleSubmit = () =>{
        e.preventDefault();

    }
  return (
    <div>
      <from onSubmit={handleSubmit} className=" text-center items-center">
        <div  className='flex space-x-3'>
        <div>
        <label className='text-2xl font-semibold text-blue-500'>
            Country:
            <br></br>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className='p-2 rounded-xl m-2'
            >
              <option value="">-- Select Country --</option>
              <option value="australia">Australia</option>
              <option value="china">China</option>
              <option value="canada">Canada</option>
              <option value="Egypt">Egypt</option>
              <option value="india">India</option>
              <option value="us">United States</option>
            </select>
          </label>
        </div>
        <div>
        <label className='text-2xl font-semibold text-blue-500'>
            Languages:
            <br></br>
            <select
              name="languages"
              value={formData.language}
              onChange={handleChange}
              className='p-2 rounded-xl m-2'
            >
              <option value="">-- Select Languages --</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="punjabi">Punjabi</option>
              <option value="urdu">Urdu</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </label>
        </div>
        <div>
        <label className='text-2xl font-semibold text-blue-500'>
            Level:
            <br></br>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
               className='p-2 rounded-xl m-2'
            >
              <option value="">-- Select Level --</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
             
            </select>
          </label>
        </div>
        </div>
        <div className='flex justify-center mt-2'>
        <button className='bg-blue-600 hover:bg-blue-800 p-3 rounded-md text-white'
         type='submit'
         >Submit</button>
         </div>

      </from>
    </div>
  )
}

export default FilterForm
