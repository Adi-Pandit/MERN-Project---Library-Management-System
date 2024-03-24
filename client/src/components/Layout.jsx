import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"

const Layout = () => {
  return (
    <div className="bg-[#F9F9F9] h-screen overflow-auto">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Layout