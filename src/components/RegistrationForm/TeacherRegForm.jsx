import React from 'react'
import { useState } from 'react'

const TeacherRegForm = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
        gender: "",
        address: "",
        country: "",
        languages: [], 
        proficiency: "",
      });
      
  const [errors,setErrors]=useState({})
  const [isSubmitted,setIsSubmitted]=useState(false)

  const validate = () => {
    const errors = {};
    if (!formData.firstname.trim()) {
      errors.firstname = "This Field is Required";
    }
    if (!formData.lastname.trim()) {
      errors.lastname = "This Field is Required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      errors.phone = "This Field is Required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!formData.confirmpassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmpassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!formData.gender.trim()) {
      errors.gender = "This Field is Required";
    }
    if (!formData.address.trim()) {
      errors.address = "This Field is Required";
    }
    if (!formData.country.trim()) {
      errors.country = "This Field is Required";
    }
    if (formData.languages.length === 0) {
      errors.languages = "This Field is Required";
    }
    if (!formData.proficiency.trim()) {
      errors.proficiency = "This Field is Required";
    }
  
    return errors;
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        languages: checked
          ? [...prev.languages, value]
          : prev.languages.filter((lang) => lang !== value), 
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log("Form data submitted:", formData);
    } else {
      setIsSubmitted(false);
    }
  };
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <div>
      <label>
            Firstname:
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
             
            />
          </label>
          {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
      </div>
      <div>
      <label>
            Lastname:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
             
            />
          </label>
          {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
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
  name="confirmpassword"
  value={formData.confirmpassword}
  onChange={handleChange}
/>

          </label>
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
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
             
            />
          </label>
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </div>
      <div>
      <label>
            Country:
            <select
              name="country"
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
      <div>
      <label>Languages:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="English"
                checked={formData.languages.includes("English")}
                onChange={handleChange}
              />
              English
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Spanish"
                checked={formData.languages.includes("Spanish")}
                onChange={handleChange}
              />
              Spanish
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="French"
                checked={formData.languages.includes("French")}
                onChange={handleChange}
              />
              French
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="German"
                checked={formData.languages.includes("German")}
                onChange={handleChange}
              />
              German
            </label>
            {errors.languages && <p className="text-red-500 text-sm">{errors.languages}</p>}
      </div>
      </div>
      <div>
      <label>
            Proficiency:
            <select
              name="proficiency"
              value={formData.proficiency}
              onChange={handleChange}
              
            >
              <option value="">-- Select Proficiency --</option>
              <option value="begginer">begginer</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>
          {errors.proficiency && <p className="text-red-500 text-sm">{errors.proficiency}</p>}
      </div>
     <button
     type='submit'
     >
        Submit</button>
      </form>
    </div>
  )
}

export default TeacherRegForm
