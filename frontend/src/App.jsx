import { BrowserRouter,Route,Routes,Navigate, useNavigate } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { DashBoard } from './pages/DashBoard'
import { SendMoney } from './pages/SendMoney'
import { useEffect } from 'react'

function App() {
    return <>
        <BrowserRouter > 
            <Routes>
                <Route index path='/' Component={Start}/>
                <Route path='/signup' Component={SignUp}/>
                <Route path='/signin' Component={SignIn}/>
                <Route path='/dashboard' Component={DashBoard}/>
                <Route path='/send' Component={SendMoney}/>
            </Routes>   
        </BrowserRouter>
    </>
}

const Start = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/signup')
    },[])
}

export default App