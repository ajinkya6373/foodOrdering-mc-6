import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { restaurantsData } from "../../dummyData";
import { ModalCustom } from "../../components";
import "./detail.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function RestaurantDetailPage() {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState({});
  const [avgRating, setAvgRating] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("1");
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { name, address, menu, } = restaurantDetail;
  const navigate =useNavigate()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const foundRestaurant = restaurantsData.find((restaurant) => restaurant.id.toString() === id);
    if (foundRestaurant) {
      setRestaurantDetail(foundRestaurant);
      setReviews(foundRestaurant.ratings);
    }
  }, [id]);

  useEffect(() => {
    const totalRating = reviews.reduce((acc, { rating }) => acc + rating, 0);
    const average = totalRating / reviews.length || 0;
    setAvgRating(average.toFixed(1));
  }, [reviews]);

  const AllMenus = menu?.map((item) => item.name);

  const handleAddReview = () => {
    const review = {
      rating: parseInt(rating),
      comment: comment,
      revName: "Ajinkya",
      pp:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
    };
    setReviews((prev) => [...prev, review]);
    handleClose();
  };

  return (
    <div id="wrapper">
      <ArrowBackIcon onClick={()=>navigate('/')}/>
      <div id="header">
      <h1>{name}</h1>
      <span>{AllMenus?.join(", ")}</span>
      <span>Average rating : {avgRating}</span>
      <span>{address}</span>
      <button onClick={handleOpen}>Add Review</button>
      </div>
      <div>
          <h2>Reviews</h2>
        {reviews?.map((review, index) => {
          const { rating, comment, revName, pp } = review;
          return (
            <div key={index} className="commentBox">
                <div className="commnetHeader">
                    <img src={pp} alt="avatar" className="avatar"/>
                    <span>{revName}</span>
                </div>
              <span>{comment}</span>
              <div className="ratingbadge">{rating}</div>
            </div>
          );
        })}
      </div>

      <ModalCustom open={open} onClose={handleClose}>
        <div className="reviewBox">
            <h4>Add Your Review</h4>
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="Write a comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <select
            name="rating"
            id="rating"
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={handleAddReview}>submit</button>
        </div>
      </ModalCustom>
    </div>
  );
}
