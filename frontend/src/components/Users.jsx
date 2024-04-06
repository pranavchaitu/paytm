import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const Users = () => {

    //debouncing to be added
    
    const [users,setUsers] = useState([]);
    const [filter,setFilter] = useState("");

    useEffect(() => {
        axios.get(`${BACKEND_URL}/user/bulk?filter=${filter}`)
            .then((res) => {
                setUsers(res.data.user)
            })
    },[filter])

    return <div className="mx-4">
        <div className="font-bold">
            Users
        </div>
        <input onChange={(e) => {
            setFilter(e.target.value)
        }} type="text" placeholder="search users.." spellCheck={false} className="mt-2 h-8 rounded px-2 border border-slate-300 w-full outline-none"/>
        <div className="flex flex-col gap-2 mt-4">
            {users.map((user,index) => <User key={index} firstName={user.firstName} lastName={user.lastName} id={user._id}/>)}
        </div>
    </div>
}

const User = ({firstName,lastName,id}) => {
    const navigate = useNavigate();
    return <>
        <div className="flex justify-between">
            <div className="flex">
                <div className="w-12 h-12 rounded-full bg-slate-200">
                    <div className="h-full flex flex-col justify-center items-center">
                        {firstName[0].toUpperCase()}
                    </div>
                </div>
                <div className="flex flex-col justify-center ml-2">
                    {firstName} {lastName}
                </div>
            </div>
            <div>
                <Button title={"Send Money"} onClick={() => {
                    navigate(`/send?id=${id}&&name=${firstName}`);
                }}/>
            </div>
        </div>
    </>
}