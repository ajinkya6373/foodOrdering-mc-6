import { cuisineData, restaurantsData } from "../../dummyData";
import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuCard } from "../../components";

export default function HomePage() {
  const [selectCuisine, setSelectCuisine] = useState("");
  const [sortedRestaurant, setSortedRestaurant] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setSortedRestaurant(
      restaurantsData.filter((i) => i.cuisine_id === selectCuisine)
    );
  }, [selectCuisine]);
  const handleMenuCardClick = (restaurantId) => {
    console.log(restaurantId);
    navigate(`/restaurant-detail/${restaurantId}`);
  };
  return (
    <div className="pageWrraper">
      <h1>Food Ordering App</h1>
      <h3>Select Your Cuisine :</h3>
      <div className="btnContainer">
        {cuisineData.map((i) => {
          return (
            <button
              variant="contained"
              key={i.id}
              className="btn"
              onClick={() => setSelectCuisine(i.id)}
            >
              {i.name}
            </button>
          );
        })}
      </div>

      <div>
        {sortedRestaurant.map((restaurant) => {
          const { name, menu, id } = restaurant;
          return (
            <div>
              <h1>Dishes by {name}</h1>
              <div className="cardWrapper">
                {menu.map((m) => {
                  return (
                    <div  onClick={() => handleMenuCardClick(id)}>
                        <MenuCard
                          menuData={m}
                          restaurantName={name}
                          key={m.id}
                         
                        />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
