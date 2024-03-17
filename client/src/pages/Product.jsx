import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Notification from '../components/Notification'

const Product = () => {
    return (
        <main className='flex flex-col min-h-screen'>
            <Notification />
            <Navbar />

            <div className='p-4 h-screen gap-8 flex flex-col md:flex-row md:items-center text-primary lg:px-20 xl:p-40'>
                <div className='relative w-full h-1/2 md:h-[70vh]'>
                    <img className='absolute object-cover w-full h-full rounded' src="https://source.unsplash.com/milk-and-honey-by-rupi-kaur-book-on-side-table-CXYPfveiuis" alt="" />
                </div>

                <div className='flex flex-col justify-center gap-4 h-1/2 md:h-[70vh] '>
                    <h1 className='font-bold text-4xl'>sicillian</h1>
                    <p>
                        Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.
                    </p>
                    <p className='font-bold text-2xl'>$24.90</p>

                    <div className='flex gap-2'>
                        <button className='bg-primary text-white rounded px-4 py-2'>Small</button>
                        <button className='border border-primary text-primary rounded px-4 py-2'>Medium</button>
                        <button className='border border-primary text-primary rounded px-4 py-2'>Large</button>
                    </div>

                    <div className='flex'>
                        <div className='flex-1 flex justify-between items-center border border-primary p-1'>
                            <h1 className='flex-1'>Quantity</h1>
                            <div className='flex items-center gap-2'>
                                <span> &lt; </span>
                                <span> 1 </span>
                                <span> &gt; </span>
                            </div>
                        </div>
                        <button className='text-white bg-primary px-4 py-2 uppercase'>add to cart</button>
                    </div>

                </div>

            </div>

            <Footer />
        </main>
    )
}

export default Product