import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { DashBoard } from './pages/DashBoard'
import { SendMoney } from './pages/SendMoney'

function App() {
  return <>
    <BrowserRouter> 
      <Routes>
        <Route path='/signup' Component={SignUp}/>
        <Route path='/signin' Component={SignIn}/>
        <Route path='/dashboard' Component={DashBoard}/>
        <Route path='/send' Component={SendMoney}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App