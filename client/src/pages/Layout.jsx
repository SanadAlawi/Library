import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Notification from "../components/Notification"

const Layout = () => {
    return (
        <main className='flex flex-col min-h-screen'>
            <Notification />
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout