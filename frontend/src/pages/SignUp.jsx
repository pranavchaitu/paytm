import { Heading } from "../components/Heading"
import {  SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import axios from "axios";
import { useState,useEffect } from "react";
import { BACKEND_URL } from "../../config"
import { useNavigate } from "react-router-dom"

export function SignUp(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate= useNavigate();
    
    useEffect(() => {
        const fetch = async () => {
            let res = await axios.get(`${BACKEND_URL}/me`,{
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            if(res.data.isAuthenticated) {
                navigate('/dashboard')
            }
        }
        fetch();
    },[])

    return <div className="flex justify-center items-center h-screen bg-slate-300">
        <div className="border flex flex-col p-4 gap-1 items-center bg-white rounded-lg">
            <Heading title={"Signup"}/>
            <SubHeading title={"Enter your information to create a account"}/>
            <InputBox label={"First Name"} placeHolder={"Pranav"} onChange={(e) => {
                setFirstName(e.target.value)
            }}/>
            <InputBox label={"Last Name"} placeHolder={"Chaitu"} onChange={(e) => {
                setLastName(e.target.value)
            }}/>
            <InputBox label={"Email"} placeHolder={"pranav@gmail.com"} onChange={(e) => {
                setUsername(e.target.value)
            }}/>
            <InputBox label={"Password"} placeHolder={"123456"} onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <div className="w-full my-2">
                <Button title={"Sign up"} onClick={async () => {
                    const res = await axios.post(`${BACKEND_URL}/user/signup`,{
                        firstName,
                        lastName,
                        username,
                        password
                    });
                    localStorage.setItem('token',res.data.token);
                    navigate('/dashboard');
                }}/>
            </div>
            <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
    </div>
}

