import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Rating from "react-rating";
import styles from "./itemCard.module.css";
import { faStar, faLink, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ItemCard({ uniqueId, data }) {
  const [rating, setRating] = useState(0);
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 p-0 mx-0 my-1">
      <div className={`${styles.customCard}`}>
        <Link href="/market-page">
          <Image
            src={data.imagePath}
            alt={data.imagePath}
            className={styles.avatarImg}
            width={250}
            height={250}
            priority={false}
          />
        </Link>
        <div className={`${styles.cardButton} d-flex flex-column`}>
          <button
            id={`addCart${uniqueId}`}
            className={`btn btn-sm text-light ${styles.addBtnBg}`}
            type="submit"
          >
            <FontAwesomeIcon icon={faCartPlus} className={styles.customCart} />
            Add
          </button>
        </div>

        <div className="card-body">
          <p className={styles.cardHeading}>{data.title}</p>

          <div className="d-flex justify-content-between m-0 px-1">
            {/* rating and likes start */}
            <div>
              <span className={styles.ratingsAndLikesText}>
                <Rating
                  onClick={(value) => setRating(value)}
                  placeholderRating={rating}
                  initialRating={rating}
                  emptySymbol={
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#80808069" }}
                    />
                  }
                  placeholderSymbol={
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#F9AE3F" }}
                    />
                  }
                  fullSymbol={
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#F9AE3F" }}
                    />
                  }
                />{" "}
                {rating} & {data.likes}Likes
              </span>
            </div>
            {/* rating and likes end */}

            {/* heart checkbox start */}
            <div className="custom-checkbox">
              <input type="checkbox" id={`my-checkbox-${uniqueId}`} />
              <label htmlFor={`my-checkbox-${uniqueId}`}></label>
            </div>
            {/* heart checkbox end */}
          </div>
          <div className="d-flex position-relative m-0 px-1">
            <Image
              src={data.imagePath}
              alt={data.imagePath}
              className={styles.avatarImgCircle}
              width={21}
              height={21}
              priority={false}
            />
            <span className={styles.avatarName}>{data.name}</span>
          </div>

          <div className="d-flex mt-1 px-1">
            <span className={styles.avatarPrice}>
              <span className={styles.avatarPriceIcon}>$</span> {data.price}
            </span>
          </div>
          <div className="d-flex mt-1 px-1">
            <span className={styles.blueCircle}></span>
            <span className={styles.typeText}>{data.type}</span>
          </div>

          <div className="d-flex justify-content-between mt-1 px-1 position-relative">
            <span className={styles.avatarDescription}>{data.description}</span>
            <Link href="" className={styles.tooltip}>
              <Image
                src="/images/copy.png"
                alt="/images/copy.png"
                width={13}
                height={20.8}
                priority={false}
              />
              <span className={styles.toolTipText}>
                <FontAwesomeIcon icon={faLink} className="px-1" />
                Copy Link
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
