import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { BACKEND_URL } from "../../config";
import axios from "axios";

export function DashBoard(){
    const [balance,setBalance] = useState(0);
    const [name,setName] = useState(" ");

    useEffect(() => {
        axios.get(`${BACKEND_URL}/account/dashboard`,{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setBalance(res.data.balance)
                setName(res.data.name)
            })
    },[])

    return <>
        <div>
            <AppBar name={name}/>
            <div className="mt-14">
                <Balance balance={balance}/>
                <Users />
            </div>
        </div>
    </>
}
