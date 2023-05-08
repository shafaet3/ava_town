import styles from "./heartComp.module.css";
function HeartComp({ uniqueId }) {
  return (
    <div className={styles.customCheckbox}>
      <input type="checkbox" id={`my-checkbox-${uniqueId}`} />
      <label htmlFor={`my-checkbox-${uniqueId}`}></label>
    </div>
  );
}

export default HeartComp;
