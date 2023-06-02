import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BaiTap2 = () => {
 
  const [values, setValues] = useState({
    email:'',password:'',confirmPassword:'',isRead:false,
  })
  const [errors,setErrors] = useState([])

  const handleChange = (event)=>{
    event.persist();
    if(event.target.name === 'isRead'){
      setValues({
        ...values,
        [event.target.name]: !values.isRead,
      })
    }else {
      setValues({...values, [values.target.name]:event.target.name})
    }
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
  }
  const stringJson = JSON.stringify(values);
    return (
       <div>
        <h1>Đăng ký</h1>
        {errors.map((error) => (
        <p key={error}>Error: {error}</p>
      ))}
        <form onSubmit={handleSubmit}>
          <p>Nhap email:</p>
          <input name='email'
                 type='text'
                 defaultValue={values.email}
                 onChange={handleChange}/>
          <p>Nhập Password</p>
          <input name='password'
                 type='password'
                 defaultValue={values.password}
                 onChange={handleChange}/>
          <p>Nhập lại Password</p>
          <input name='confirmPassword'
                 type='password'
                 defaultValue={values.confirmPassword}
                 onChange={handleChange}/>
          <label>
            <input 
            name='isRead'
            type='checkbox'
            checked={values.isRead}
            onChange={handleChange}></input>Tôi đồng ý
          </label>
          <button>Submit</button>
        </form>
        <div className="show-json-string-setValues">{stringJson}</div>
      </div>
    );
};

export default BaiTap2;