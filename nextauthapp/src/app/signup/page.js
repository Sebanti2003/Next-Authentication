"use client"
import React from "react"
import { useRouter } from "next/navigation"
import {axios} from "axios"
import Link from "next/link"
export default function SignUp(){
    const [user,setuser]=React.useState({
        username:"",
        email:"",
        password:""
    })
    const onSignup=async()=>{
        console.log(user);
    }
    return(
        <div className="w-screen min-h-screen flex flex-col gap-3 justify-center items-center bg-white text-black ">
            <h1 className="text-2xl text-black">Sign Up</h1>
            <input onChange={(e)=>setuser({...user,[e.target.id]:e.target.value})} type="text" id="username" placeholder="Name..."                       className="p-2 w-[40%] rounded-lg border-2 border-black" />
            <input onChange={(e)=>setuser({...user,[e.target.id]:e.target.value})} type="email" name="" id="email" placeholder="Email..."       className="p-2 w-[40%] rounded-lg border-2 border-black" />
            <input onChange={(e)=>setuser({...user,[e.target.id]:e.target.value})} type="password" name="" id="password" placeholder="Password..." className="p-2 w-[40%] rounded-lg border-2 border-black" />
            <button onClick={onSignup} className="w-[20%] p-1 bg-blue-800 rounded-lg text-white">Sign Up</button>
            <p>Already have an account? <span className="text-green-500"><Link href='/login'>Login</Link></span></p>
        </div>
    )
}