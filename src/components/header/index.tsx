import { useState, useEffect } from "react";
import Sidebar from "../sidebar";
import { menuItems } from "../../data/sidebar";
import styles from "../../styles/sass/header.module.scss";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={`${styles.searchContainer}`}>
          <input
            type="text"
            placeholder="Search here ..."
            className={`${styles.searchInput}`}
          />
          <button className={styles.searchBtn}>
            <img
              src="/assets/icons/search.svg"
              alt="Search Icon"
              className={styles.searchIcon}
            />
          </button>
        </div>
        <div className={styles.userContainer}>
          <button className={styles.userItem}>
            <img src="/assets/icons/bell.svg" alt="Notification" />
          </button>
          <button className={styles.userItem}>
            <img src="/assets/icons/text.svg" alt="Messages" />
          </button>
          <div className={styles.userProfile}>
            <div className={styles.userImage}>
              <img src="/assets/icons/logo.svg" alt="User profile" />
            </div>
            <h4>Mirie Kiritani</h4>
            <button>
              <img src="/assets/icons/arrow-down.svg" alt="Dropdown" />
            </button>
            <button
              className=" d-xl-none"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <img src="/assets/icons/menu.svg" alt="Dropdown" />
            </button>
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
      )}
      <div
        className={`d-lg-block ${styles.smallSidebar} ${isSidebarOpen ? styles.open : ""}`}
      >
        <div className={styles.mobileSidebar}>
          <Sidebar
            menuItems={menuItems}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
