import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export function DashBoard(){
    return <>
        <div>
            <AppBar />
            <div className="mt-14">
                <Balance />
                <Users />
            </div>
        </div>
    </>
}
