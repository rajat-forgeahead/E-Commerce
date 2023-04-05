import { useState } from 'react';
import { CartCard } from './CartCard';
import { Navigation } from './Navigation';

export const Navbar = ({ cartCounter }) => {
    
    const [showCart, setShowCart] = useState(false);

    const toggleShowCart = () => {
        setShowCart(!showCart);
    }

    return (
        <div>
            {/* Navbar */}
            <div className='flex justify-between p-5'>
                {/* Navigation and Logo */}
                <Navigation />
                {/* Cart and Avatar */}
                <div className='flex gap-5 relative'>
                    {/* Cart */}
                    <div className='w-6 my-auto relative flex items-center'>
                        {/* Amount of Products in Cart */}
                        {
                            cartCounter !== 0
                                && (
                                    <span className='absolute -top-[5px] -right-1 text-[10px] font-bold text-white bg-orange px-[6px] rounded-full'>{cartCounter}</span>
                                )
                        }
                        {/* Cart Image */}
                        <button
                            onClick={ toggleShowCart }
                        >
                            <img className='w-full' src="../images/icon-cart.svg" alt="" />
                        </button>
                    </div>
                    {/* Avatar */}
                    <div className='w-6'>
                        <img className='' src="../images/image-avatar.png" alt="" />
                    </div>
            
                </div>
            </div>

            {/* Cart Card */}
            <CartCard showCart={showCart} cartCounter={cartCounter} />
        </div>
    )
}
