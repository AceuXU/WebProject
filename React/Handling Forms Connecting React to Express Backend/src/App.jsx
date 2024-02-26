import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"


function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 2000)
    })
  }

  const onSubmit = async (data) => {
    // await delay(4) // simulating network delay
    let r = await fetch("http://localhost:3000/", {method :"POST", body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
  //   if(data.username !== "anushka"){
  //     setError("myform" , {message: "username not found"})
  //   }
  //   if(data.username === "ratan"){
  //     setError("blocked" , {message: "this user is blocked"})
  //   }
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)} >
          <input placeholder='username' {...register("username", {
            required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "min length is 3" },
            maxLength: { value: 8, message: "max length is 8" }
          })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password", { minLength: { value: 7, message: "min length of password is 7" } })} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
