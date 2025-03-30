import styles from "../../styles/sass/header.module.scss";

const Header = () => {
  return (
    <>
      <div className="layout">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
