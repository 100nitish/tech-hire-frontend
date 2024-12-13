import React, { useState } from 'react'

const StudentRegForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        gender: "",
        language: "",
        country: "",
        date_of_birth: "",
      });
      
        const [errors, setErrors] = useState({});

    const handleChange = (e)=>{
        const {name,value}=e.target;
        // setFormData((prev)=({
        //     ...prev,
        //     [name]: value,
        // }));
        setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
          
    }
    const handleSubmit = ()=>{

    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <div>
      <label>
            Firstname:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
             
            />
          </label>
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
      </div>
      <div>
      <label>
            Lastname:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
             
            />
          </label>
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
      </div>
      <div>
      <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
             
            />
          </label>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      </div>
      <div>
      <label>
            Phone:
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
             
            />
          </label>
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      </div>
      <div>
      <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
             
            />
          </label>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

      </div>
      <div>
      <label>
            Confirm Password:
            <input
  type="password"
  name="password_confirmation"
  value={formData.password_confirmation}
  onChange={handleChange}
/>

          </label>
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
      </div>
      <div>
      <label htmlFor="dob">Date of Birth:</label>
      <input
  type="date"
  id="dob"
  name="date_of_birth"
  value={formData.date_of_birth}
  onChange={handleChange}
  max={new Date().toISOString().split("T")[0]}
  required
/>

          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
      </div>
      <div>
      <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            >
              <option value="">-- Select Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
      </div>
      <div>
      <label>
            Languages:
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            >
              <option value="">-- Select Languages --</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
             
            </select>
          </label>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
      </div>
     
   
         
      
      
      <div>
      <label>
            Country:
            <select
              name="languages"
              value={formData.country}
              onChange={handleChange}
              
            >
              <option value="">-- Select Country --</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="australia">Australia</option>
              <option value="india">India</option>
            </select>
          </label>
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
      </div>
     
    
     <button
     type='submit'
     >
        Submit</button>
      </form>
    </div>
  )
}

export default StudentRegForm
