import CategoryList from "./CategoryList";

const RestaurentCategory = ({ itemList, setShowIndex, showIndex }) => {
  const handleClick = () => {
    setShowIndex(showIndex ? true : false);
  };

  return (
    <div className=" bg-gray-50 shadow-lg p-8 m-3">
      <div
        className="flex justify-between cursor-pointer "
        onClick={handleClick}
      >
        <h1 className="font-bold text-2xl">
          {itemList.title}({itemList.itemCards.length})
        </h1>
        <p className="text-2xl">🔽</p>
      </div>

      {itemList?.itemCards?.map((item, index) => {
        return (
          showIndex && <CategoryList key={item.card.info.id} item={item} />
        );
      })}
    </div>
  );
};

export default RestaurentCategory;
