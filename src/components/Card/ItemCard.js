import { faCartPlus, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import PriceComp from "../price/PriceComp";
import ProfileComp from "../profile/ProfileComp";
import HeartComp from "../ratingAndLikes/HeartComp";
import RatingComp from "../ratingAndLikes/RatingComp";
import styles from "./itemCard.module.css";
function ItemCard({ uniqueId, data }) {
  return (
    <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-3 p-0 mx-0 my-1">
      <div className={`${styles.customCard}`}>
        <Link href={`/item/${uniqueId}`}>
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
            <RatingComp data={data} />

            <HeartComp uniqueId={uniqueId} />
          </div>
          <div className="d-flex position-relative m-0 px-1">
            <ProfileComp data={data} />
          </div>

          <div className="d-flex mt-1 px-1">
            <PriceComp data={data} />
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
