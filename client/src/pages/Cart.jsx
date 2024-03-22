import { Close } from '@mui/icons-material'

const Cart = () => {
    return (

        <div className='h-[calc(100vh-6rem)] w-full flex flex-col md:flex-row md:h-[calc(100vh-9rem)]'>

            {/* PRODUCT LIST */}
            <div className='p-4 flex flex-col gap-4 overflow-y-auto w-full h-1/2 md:h-full md:w-2/3 md:px-20 md:justify-center lg:w-1/2 lg:px-40'>

                {/* PRODUCT */}
                <div className='text-primary flex justify-between items-center gap-8'>
                    <img loading="lazy" className='h-[100px] w-[100px] object-contain' src="/images/adventure 4.png" alt="" />
                    <div className='flex flex-col'>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <p>Large</p>
                    </div>
                    <p className='font-bold'>$79.90</p>
                    <Close className='cursor-pointer' />
                </div>

                {/* PRODUCT */}
                <div className='text-primary flex justify-between items-center gap-8'>
                    <img loading="lazy" className='h-[100px] w-[100px] object-contain' src="/images/normal 4.png" alt="" />
                    <div className='flex flex-col'>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <p>Large</p>
                    </div>
                    <p className='font-bold'>$79.90</p>
                    <Close className='cursor-pointer' />
                </div>

                {/* PRODUCT */}
                <div className='text-primary flex justify-between items-center gap-8'>
                    <img loading="lazy" className='h-[100px] w-[100px] object-contain' src="/images/crime 4.png" alt="" />
                    <div className='flex flex-col'>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <p>Large</p>
                    </div>
                    <p className='font-bold'>$79.90</p>
                    <Close className='cursor-pointer' />
                </div>


            </div>


            {/* SUMMERY */}
            <div className='p-4 bg-primary_light text-primary flex flex-col gap-4 w-full h-1/2 md:h-full md:w-1/3 md:px-20 md:justify-center lg:w-1/2 lg:px-40'>

                <div className='flex justify-between'>
                    <span>Subtotal (3 items)</span>
                    <span>$81.70</span>
                </div>

                <div className='flex justify-between'>
                    <span>Service Cost</span>
                    <span>$0.00</span>
                </div>

                <div className='flex justify-between'>
                    <span>Delivery Cost</span>
                    <span className='uppercase text-green-500'>free!</span>
                </div>

                <hr />

                <div className='flex justify-between'>
                    <span className='uppercase'>total(incl. vat)</span>
                    <span className='font-bold'>$81.70</span>
                </div>

                <button className='px-4 py-2 uppercase text-white bg-primary rounded w-1/2 self-end'>checkout</button>

            </div>



        </div>
    )
}

export default Cart