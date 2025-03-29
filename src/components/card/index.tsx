import styles from "../../styles/sass/card.module.scss";

interface CardProps {
  title: string;
  balance: string;
  percentage: string;
  icon: string;
  exportIcon: string;
  bgColor?: string;
}

const Card = ({ title, balance, percentage, icon, exportIcon }: CardProps) => {
  return (
    <div className="card">
      <div className={styles.cardContainer}>
        <div className={styles.imgWrapper}>
          <img src={icon} alt={title} />
        </div>
        <div>
          <h4>{title}</h4>
          <div>
            <img src={exportIcon} alt="export" />
            <p>{percentage} compared with last month</p>
          </div>
        </div>
      </div>
      <div>
        <h2>{balance}</h2>
      </div>
    </div>
  );
};

export default Card;
