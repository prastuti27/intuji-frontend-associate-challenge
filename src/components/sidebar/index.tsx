import styles from '../../styles/sass/sidebar.module.scss';

interface MenuItem {
    menuItems: {
      label: string;
      icon: string;
      link: string;
    }[];
  }
  

const Sidebar = ({menuItems}:MenuItem) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/assets/icons/logo.svg" alt="Logo" />
      </div>
      <ul className={styles.menuGroup}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <a href={item.link}>
              <img src={item.icon} alt={item.label} />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
