import styles from "../../styles/sass/sidebar.module.scss";

interface MenuGroup {
  label: string;
  icon: string;
  link: string;
}
interface SidebarProps {
  menuItems: {
    items?: MenuGroup[];
    list?: MenuGroup[];
    menu?: MenuGroup[];
  };
  onClose?: () => void;
}

const Sidebar = ({ menuItems, onClose }: SidebarProps) => {
  return (
    <>
      <div className={`${styles.logoContainer}`}>
        <div className={styles.logo}>
          <img src="/assets/icons/logo.svg" alt="Logo" />
        </div>
        <div className={`d-xl-none ${styles.closeIcon}`} onClick={onClose}>
          <img src="/assets/icons/close.svg" alt="close" />
        </div>
      </div>
      <ul className={styles.menuGroup}>
        {menuItems.items?.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <a href={item.link}>
              <img src={item.icon} alt={item.label} />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.lastMenu}>
        <div>
          <ul>
            {menuItems.list?.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <a href={item.link}>
                  <img src={item.icon} alt={item.label} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {menuItems.menu?.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <a href={item.link}>
                  <img src={item.icon} alt={item.label} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
