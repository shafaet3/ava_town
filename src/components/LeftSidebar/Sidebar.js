import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      {/* category start */}
      <div className={styles.sidebarContent}>
        <label>
          <span className={styles.sidebarTitle}>Category</span>
        </label>
        <label>
          <span className={styles.sidebarText}>Full avatar</span>
        </label>
        <label>
          <span className={styles.sidebarText}>Others</span>
        </label>
      </div>
      {/* category end */}

      {/* content start */}
      <div className={styles.sidebarContent}>
        <label>
          <span className={styles.sidebarTitle}>Contents</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>
            VRChat(Quest)
            <Image
              src="/images/ellipseGreen.png"
              alt="green"
              className={styles.ellipseGreen}
              width={12}
              height={12}
            />
          </span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>
            VRChat(PCVR)
            <Image
              src="/images/ellipseBlue.png"
              alt="blue"
              className={styles.ellipseBlue}
              width={12}
              height={12}
            />
          </span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>Others</span>
        </label>
      </div>
      {/* content end */}

      {/* price start */}
      <div className={styles.sidebarContent}>
        <label>
          <span className={styles.sidebarTitle}>Price</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>Under $10</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>$10 to $20</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>$20 to $30</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>$30 to $40</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>$40 to $50</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>$50 to $70</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>$70 & above</span>
        </label>
      </div>
      {/* price end */}

      {/* Polygon amount start */}
      <div className={styles.sidebarContent}>
        <label>
          <span className={styles.sidebarTitle}>Polygon amount</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>Under △7,500</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>△7,500 to △10,000</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>△10,000 to △15,000</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>△15,000 to △20,000</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>△20,000 to △32,000</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>△32,000 to △70,000</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>△70,000 & Above</span>
        </label>
      </div>
      {/* Polygon amount end */}

      {/* Auto upload support start */}
      <div className={styles.sidebarContent}>
        <label>
          <span className={styles.sidebarTitle}>Auto upload support</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>Supported</span>
        </label>
        <label>
          <input type="checkbox" className={styles.inputCheckBox}></input>
          <span className={styles.sidebarInputText}>Unsupported</span>
        </label>
      </div>
      {/* Auto upload support end */}
    </div>
  );
}

export default Sidebar;
