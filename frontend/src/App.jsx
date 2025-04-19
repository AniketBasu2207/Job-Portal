import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Adduser from './component/Adduser'
import Home from './component/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Adduser/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
