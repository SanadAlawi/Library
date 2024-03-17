import Notification from '../components/Notification'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Features from '../components/Features'
import Offer from '../components/Offer'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <Notification />
      <Navbar />
      <Slider />
      <Features />
      <Offer />
      <Footer />
    </main>
  )
}

export default Home