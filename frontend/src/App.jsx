import { BrowserRouter,Route,Routes, useNavigate } from 'react-router-dom'
import React, { useEffect, Suspense } from 'react'
import { Loader } from './components/Loader';
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { DashBoard } from './pages/DashBoard'
import { SendMoney } from './pages/SendMoney'

function App() {
    return <>
        <BrowserRouter > 
            <Routes>
                <Route index Component={Start}/>
                <Route path='/signup' element={<Suspense fallback={<Loader />}><SignUp /></Suspense>}/>
                <Route path='/signin' element={<Suspense fallback={<Loader />}><SignIn /></Suspense>}/>
                <Route path='/dashboard' element={<Suspense fallback={<Loader />}><DashBoard /></Suspense>}/>
                <Route path='/send' element={<Suspense fallback={<Loader />}><SendMoney /></Suspense>}/>
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