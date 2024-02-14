import { useState } from "react";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurentMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (menu.length === 0) return <Shimmer />;
  const { name, cuisines } = menu?.cards[2]?.card?.card?.info;
  const categories =
    menu.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-8/12 m-auto p-3 my-5">
      <div className=" flex-row items-start justify-start border-gray-300 border-b-2 mb-8 ">
        <h1 className="font-bold text-3xl ">{name} </h1>
        <p className="text-gray-500 font-semibold">{cuisines.join(",")}</p>
      </div>
      <div className="">
        {categories?.map((category, index) => (
          <RestaurentCategory
            key={category.card.card.title}
            itemList={category?.card?.card}
            showIndex={showIndex === index ? true : false}
            setShowIndex={() =>
              setShowIndex((prevState) => (index === prevState ? null : index))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
