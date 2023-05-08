import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Rating from "react-rating";
import styles from "./ratingComp.module.css";
function RatingComp({ data }) {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <span className={styles.ratingsAndLikesText}>
        <Rating
          onClick={(value) => setRating(value)}
          placeholderRating={rating}
          initialRating={rating}
          emptySymbol={
            <FontAwesomeIcon
              icon={faStar}
              style={{
                color: "#80808069",
              }}
            />
          }
          placeholderSymbol={
            <FontAwesomeIcon
              icon={faStar}
              style={{
                color: "#F9AE3F",
              }}
            />
          }
          fullSymbol={
            <FontAwesomeIcon
              icon={faStar}
              style={{
                color: "#F9AE3F",
              }}
            />
          }
        />{" "}
        {rating} & {data.likes}
        Likes
      </span>
    </div>
  );
}

export default RatingComp;
