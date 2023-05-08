import styles from "./priceComp.module.css";

function PriceComp({ data }) {
  return (
    <span className={styles.avatarPrice}>
      <span className={styles.avatarPriceIcon}>$</span> {data.price}
    </span>
  );
}

export default PriceComp;
