import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'; 
const BaiTap1 = () => {
    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    
    return (
        <div>
            <h1>Khai báo y tế</h1>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
            <p>Name</p>
            <input {...register('Name',{
                required:true, maxLength: 20 
            })}/>
            <p>Address</p>
            <input {...register('Address',{
                required:true
            })}/>
             <p>Number</p>
             <input  {...register("Number")} />
            <p>Email</p>
            <input {...register('email',{
                
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                }
            })}
            />
            {errors.email && <div> {errors.email.message}</div>}
            <p>Trong vòng 14 ngày qua có  Triệu chứng gì?</p>
            <label htmlFor=''>Sốt
                <input type='checkbox'
                        placeholder='Sot'
                        {...register('Sot', {})}
            />
            </label>
            <label htmlFor=''>Ho
                <input type='checkbox'
                        placeholder='Ho'
                        {...register('Ho', {})}
            />
            </label>
            <label htmlFor=''>Khó thở
                <input type='checkbox'
                        placeholder='Khotho'
                        {...register('Khotho', {})}
            />
            </label>
            <label htmlFor=''>Viêm phổi
                <input type='checkbox'
                        placeholder='Viemphoi'
                        {...register('Viemphoi', {})}
            />
            </label>
            
             
            <p>Bấm submit form</p>
            <button>Submit</button>
            </form>

           
        </div>
    );
};

export default BaiTap1;