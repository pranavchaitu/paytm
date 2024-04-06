import { Heading } from "../components/Heading"
import {  SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../../config"
import { useNavigate } from "react-router-dom"

export function SignIn(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    return <div className="flex justify-center items-center h-screen bg-slate-300">
        <div className="border flex flex-col gap-1 p-4 items-center bg-white rounded-lg max-w-72">
            <Heading title={"Sign In"}/>
            <SubHeading title={"Enter your credentials to access your account"}/>
            <InputBox label={"Email"} placeHolder={"pranav@example.com"} onChange={(e) => {
                setUsername(e.target.value)
            }}/>
            <InputBox label={"Password"} placeHolder={"123456"} onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <div className="w-full my-2">
                <Button title={"Sign In"} onClick={async () => {
                    const res = await axios.post(`${BACKEND_URL}/user/signin`,{
                        username,
                        password
                    })
                    localStorage.setItem('token',res.data.token)
                    navigate('/dashboard')
                }}/>
            </div>
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
    </div>  
}

