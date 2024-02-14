import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import { clearItems } from "../utils/cartSlice";
const Cart = () => {
const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems)
const dispatch = useDispatch()

const handleClearItem = ()=>{
dispatch(clearItems())
}
  return (
    <div className="mt-8 w-8/12 m-auto bg-gray-100 p-4 rounded-lg ">
      <h1 className="text-center font-semibold text-2xl">Cart</h1>
      <div className="flex justify-end items-center">
        <button className="bg-red-500 font-semibold rounded-lg p-1.5 m-1.5  text-white" onClick={handleClearItem}>
          Clear Cart
        </button>
      </div>
      {cartItems.map((item) => (
        <div className="">
          <CategoryList key={item.card.info.id} item={item} />
        </div>
      ))}
    </div>
  );
};

export default Cart;
