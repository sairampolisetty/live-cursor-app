import { useState } from "react"

export function Login({onSubmit}){
    const [username,setUsername]=useState("")
    return (
        <>
        <h1>Welcome to Live cursor App</h1>
        <p>What should people call you?</p>
        <form onSubmit={(e)=>{
            e.preventDefault()
            onSubmit(username)
        }}
        >
            <input
            type="text"
            value={username}
            placegolder="username"
            onChange={(e)=>setUsername(e.target.value)}
            />
            <input type="submit"/>

        </form>
        </>
    )
}