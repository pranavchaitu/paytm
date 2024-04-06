import { useNavigate, useSearchParams } from "react-router-dom"
import { Heading } from "../components/Heading"
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { useState } from "react";

export function SendMoney(){
    const navigate = useNavigate();
    const [amount,setAmount] = useState(0);
    const [searchParams] = useSearchParams();
    const friendName = searchParams.get('name');
    const to = searchParams.get('id');

    return <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="border flex flex-col gap-2 p-4 justify-center bg-white rounded-lg max-w-72">
            <div className="flex justify-center">
                <Heading title={"Send Money"}/>    
            </div>
            <div className="flex mt-5">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white text-2xl">
                    <div className="h-full flex flex-col justify-center items-center">
                        {friendName[0].toUpperCase()}
                    </div>
                </div>
                <div className="flex flex-col justify-center ml-2 font-semibold">
                    {friendName}
                </div>
            </div>
            <div className="text-sm">
                Amount in (Rs)
            </div>
            <input onChange={(e) => {
                setAmount(e.target.value)
            }} type="number" placeholder="Enter amount" spellCheck="false" className="border border-gray-600 rounded py-2 px-2 outline-none"/>
            <div className="w-full my-2">
                <button onClick={async () => {
                    await axios.post(`${BACKEND_URL}/account/transfer`,{
                        to,
                        amount
                    },{
                        headers : {
                            Authorization : `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                    navigate('/dashboard')
                }} className="w-full text-white bg-green-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    Initiate transfer
                </button>
            </div>
        </div>
    </div>  
}

