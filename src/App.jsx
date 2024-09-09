
import './App.css'
import Navbar from './component/Navbar'
import CartContainer from './component/CartContainer'



function App() {
  // const { cartItems } = useSelector((store) => store.cart)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //    dispatch(calculateTotal())
  // },[cartItems])
  
  return (
    <>
      <div className='flex justify-around items-center'>
        <h1 className="text-7xl text-center text-yellow-500 font-bold  m-10">React Redux</h1>
      <Navbar></Navbar>
      </div>

      <CartContainer></CartContainer>

     


      
    </>
  )
}

export default App
