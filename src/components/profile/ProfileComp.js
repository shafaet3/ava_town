import Image from "next/image";
import styles from "./profileComp.module.css";
function ProfileComp({ data }) {
  return (
    <div>
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
  );
}

export default ProfileComp;
