
import { useSelector } from 'react-redux';
import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
  const amount  = useSelector((store) => store.cart.amount );
  return (
    <>
      <nav className=''>
        <div className='nav-center'>
          
          <div className='nav-container'>
           
            <FaCartPlus className='absolute text-4xl' />
            <div className='amount-container relative -top-2 ml-9'>
              <p className='total-amount text-red-600 '>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;