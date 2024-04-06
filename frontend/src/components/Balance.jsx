import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../../config"

export const Balance = () => {
    const [balance,setBalance] = useState(0);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/account/balance`,{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setBalance(res.data.balance)
            })
    },[])

    return <div className="h-14 flex flex-col justify-center px-4">
        <div className="flex">
            <span className="font-bold mr-4">
                Your Balance
            </span>
            <span>
                Rs.{Math.ceil(balance)}
            </span>
        </div>
    </div>
}