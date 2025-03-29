import styles from "../../styles/sass/dashboard.module.scss";
import Card from "../card";
import { cardData } from "../../data/card";

const Dashboard = () => {
  return (
    <section className={styles.dashboardContainer}>
      <h3>Overview</h3>
      <div className="row custom-gap">
        {cardData.map((card) => (
          <div key={card.id} className="col-6">
            <Card {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
