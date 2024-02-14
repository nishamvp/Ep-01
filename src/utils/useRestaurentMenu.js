import { useEffect, useState } from "react";

const useRestaurentMenu = (resId) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.2587531&lng=75.78041&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setMenu(json.data);
  };
  return menu;
};

export default useRestaurentMenu;
