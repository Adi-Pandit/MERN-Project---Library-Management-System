import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Members from "./pages/Members"
import AddBooks from "./pages/AddBooks"
import CheckOutBooks from "./pages/CheckOutBooks"
import Settings from "./pages/Settings"
import Help from "./pages/Help"


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/members' element={<Members />} />
        <Route path='/add_books' element={<AddBooks />} />
        <Route path='/check_out' element={<CheckOutBooks />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/help' element={<Help />} />
      </Route>
    </Routes>
  )
}

export default App
