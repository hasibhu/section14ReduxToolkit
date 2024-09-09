
import CartItem from './CartItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slice/CartSlice';
import { useEffect } from 'react'
import { calculateTotal } from '../redux/slice/CartSlice'
import getCartItems from '../redux/slice/GetCartItems';

const CartContainer = () => {

    const dispatch = useDispatch()
    const { cartItems, total, amount, isLoading  } = useSelector((store) => store.cart)
    
  // Fetch cart items on mount
    useEffect(() => {
        dispatch(getCartItems());
    }, [dispatch]);


  useEffect(() => {
     dispatch(calculateTotal())
  }, [cartItems])
    
 
      if (isLoading) {
        return (
            <section className="cart">
                <header className="text-center">
                    <h2>Loading...</h2>
                </header>
            </section>
        );
    }
    
    

    if (amount < 1) {
        return <section className='cart text-center'>
            <header className=''>
                <h2>Your Bag</h2>
                <h4>You Bag is currently empty!</h4>
            </header>
        </section>
    }

    return <section>
        <header>
            <h2 className='text-4xl font-bold text-center p-5'>Your Bag</h2>
        </header>
        <div>
            {
                cartItems.map((cartItem)=> <CartItem key={cartItem.id} data={cartItem}></CartItem>)
            }
        </div>
        <div className="border-b-2 border-red-700 mt-10"></div>
        <div className='flex justify-between items-center ml-36 mr-36'>
            <p>Total</p>
            <p>{total.toFixed(2)}</p>
        </div>

        <div className='text-center mt-10'>
            <button onClick={()=> dispatch(clearCart())} className='btn btn-secondary'>Clear All</button>
        </div>
    </section>
};

export default CartContainer;