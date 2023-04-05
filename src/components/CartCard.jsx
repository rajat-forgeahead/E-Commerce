import { CartProducts } from "./CartProducts";

export const CartCard = ({showCart, cartCounter}) => {
  return (
    <>
        {
            showCart && (
                <div className='absolute p-2 w-full z-50 rounded-xl'>
                    <div className='flex flex-col w-full bg-white border-black rounded-xl shadow-2xl'>

                        {/* Cart span */}
                        <div className='p-5 border-b border-grayish-blue'>
                            <span className='font-bold text-sm'>Cart</span>
                        </div>

                        {/* Products in the Cart */}
                        <div className='p-5'>
                            {
                                (cartCounter === 0) 
                                    ? (<div className="flex h-36 justify-center items-center">
                                            <span className="font-bold text-dark-grayish-blue text-lg">Your cart is empty.</span>
                                       </div>
                                    )
                                    : (<CartProducts cartCounter={cartCounter} />)
                            }
                        </div>
                    </div>
                </div>
            )
        }
    </>
  )
}
