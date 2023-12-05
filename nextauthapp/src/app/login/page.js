"use client"
import React from "react"
import {axios} from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function LoginPage(){
    const [user,setuser]=React.useState({
        email:"",
        password:""
    })
    const onloginup=async()=>{
        console.log(user);
    }
    return(
        <div className="w-screen min-h-screen flex flex-col gap-3 justify-center items-center bg-white text-black ">
        <h1 className="text-2xl text-black">Log-In</h1>
        <input onChange={(e)=>setuser({...user,[e.target.id]:e.target.value})} type="email" name="" id="email" placeholder="Email..."       className="p-2 w-[40%] rounded-lg border-2 border-black" />
        <input onChange={(e)=>setuser({...user,[e.target.id]:e.target.value})} type="password" name="" id="password" placeholder="Password..." className="p-2 w-[40%] rounded-lg border-2 border-black" />
        <button onClick={onloginup} className="w-[20%] p-1 bg-blue-800 rounded-lg text-white">Log In</button>
        <p>Already have an account? <span className="text-green-500"><Link href='/signup'>Signup</Link></span></p>
    </div>
    )
}