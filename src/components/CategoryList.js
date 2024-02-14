import { CARD_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const CategoryList = ({ item }) => {
  const { price, name, description, imageId } = item.card.info;
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div className="flex justify-center items-center  border-b-2" data-testid='fooditem'>
      <div className="  w-10/12 ">
        <h2 className="font-semibold text-lg">{name}</h2>
        <h2 className="font-medium">₹ {price / 100}</h2>
        <p>{description}</p>
      </div>
      <div className=" relative w-2/12 mb-2  ">
        <button
          data-testid="addBtn"
          className=" w-full absolute bottom-0 rounded-b-lg   px-1 bg-green-600 text-white font-bold  "
          onClick={() => handleAddItems(item)}
        >
          Add +
        </button>
        <img
          className=" rounded-lg   object-cover   "
          src={CARD_URL + imageId}
        ></img>
      </div>
    </div>
  );
};

export default CategoryList;
