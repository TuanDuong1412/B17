import React from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form';

function ThucHanh2 (){
  
    //   const [errors, setErrors] = useState([]);
    const {register, handleSubmit, formState:{errors},watch} = useForm();
    
      /// add function when value chang
    
      console.log('errors', errors);
      
    return (
        <div>
             <h1>Đăng ký</h1>
      
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <p>nhập email:</p>
        <input {...register('email',{
            required: true,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }
        })}
        />
         {errors.email && <div> {errors.email.message}</div>}
        <p>nhập password:</p>
        <input
         {...register('password',{
            required: "Required",
            min: {
              value: 3,
              message: 'min length is 3'
            },
            max: {
              value: 20,
              message: 'min length is 20'
            }
         })}
         type="password"
        />
         {errors.password && <div> {errors.password.message}</div>}
        <p>nhập lại password:</p>
        <input
          {...register('confirmPassword', {
            required: "Required",
            min: {
              value: 3,
              message: 'min length is 3'
            },
            max: {
              value: 20,
              message: 'min length is 20'
            },
            validate: (val) => {
              if (watch('password') != val) {
                return "Your passwords do no match";
              }
            }
            })}type="password"
        />
         {errors.confirmPassword && <div> {errors.confirmPassword.message}</div>}
        <br />
        <br />
        <label>
          <input
            {...register('isRead',{
                required: "Required",
              })}
            type="checkbox"
          />I read and accept the privacy policy:
        </label>

        <p>Bấm submit form</p>
        <button>Submit nè</button>
      </form>
        </div>
    );
};

export default ThucHanh2;