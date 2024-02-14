import { Link } from "react-router-dom";
import { CARD_URL } from "../utils/constants";
import { useContext } from "react";
import userContext from "../utils/userContext";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resData.info;
  const data = useContext(userContext);

  return (
    <div
      data-testid="resCard"
      className="w-[250px] h-[500px]  bg-yellow-50 rounded-lg p-4 hover:bg-yellow-100"
    >
      <img
        className="object-cover w-full h-64 rounded-lg "
        src={CARD_URL + cloudinaryImageId}
        alt="img"
      />
      <h2 className="my-3 font-bold">{name}</h2>
      <p className="break-words">{cuisines.join(",")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <p>{sla.slaString}</p>
      {/* <p>{data.name}</p> */}
    </div>
  );
};

export const isHaveOffer = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute px-2 py-1 font-semibold text-white bg-green-500 rounded-lg">
          {props?.resData?.info?.aggregatedDiscountInfoV3?.header}
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
