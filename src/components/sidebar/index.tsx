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
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  return (
    <>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src="/assets/icons/logo.svg" alt="Logo" />
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
    </>
  );
};

export default Sidebar;
