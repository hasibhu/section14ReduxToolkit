/* eslint-disable react/prop-types */
 import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from "../redux/slice/CartSlice";


const CartItem = ({ data }) => {
    const {id, img, title, price, amount}= data
    const dispatch = useDispatch();
    

  return (
    <article className='cart-item border border-yellow-400 m-1'>
        <div className="flex justify-around items-center">
            <div className="flex justify-around items-center">
                <img className="w-28 h-28" src={img} alt={title} />
                
                  <div>
                      <h4>{title}</h4>
                    <h4 className='item-price'>${price}</h4>
                        
                    <button
                    className='btn btn-accent'
                    onClick={() => {
                        dispatch(removeItem(id));
                    }}>
                    Remove
                    </button> 
                      
                  </div>
            </div>
          
            {/* up/down button  */}
            <div>
          
          <button
                className='amount-btn'
                onClick={() => {
                  dispatch(increase(id)); // Pass only the id directly
                }}
              >
                <FaChevronUp />
          </button>

                  
                <p className='amount'>{amount}</p>
                
          <button
                className='amount-btn'
                onClick={() => {
                    if (amount === 1) {
                    dispatch(removeItem(id));
                    return;
                    }
                    dispatch(decrease({ id }));
                }}
                >
                
                        <FaChevronDown />
                </button>
            </div>
        </div>
              
    </article>
  );
};
export default CartItem;
