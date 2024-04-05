import { Heading } from "../components/Heading"
import {  SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import axios from "axios";
import { useState } from "react";

export function SignIn(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return <div className="flex justify-center items-center h-screen bg-black">
        <div className="border flex flex-col p-4 items-center bg-white rounded max-w-72">
            <Heading title={"Sign In"}/>
            <SubHeading title={"Enter your credentials to access your account"}/>
            <InputBox label={"Email"} placeHolder={"pranav@example.com"} onChange={(e) => {
                setUsername(e.target.value)
            }}/>
            <InputBox label={"Password"} placeHolder={"12345"} onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <Button title={"Sign In"} onClick={async () => {
                await axios.post("http://localhost:3000/api/v1/user/signin",{
                    username,
                    password
                })
            }}/>
            <BottomWarning state={"true"}/>
        </div>
    </div>  
}

