import styles from "../../styles/sass/dashboard.module.scss";
import Card from "../card";
import { cardData } from "../../data/card";
import BudgetCard from "../progress";
import { budgets } from "../../data/budget";
import AnalyticsChart from "../graph";
import { labelColors } from "../../data/chart";

const Dashboard = () => {
  return (
    <>
      <div className="layout">
        <section className={styles.overviewBox}>
          <h3>Overview</h3>
          <div className="row custom-gap">
            {cardData.map((card) => (
              <div key={card.id} className="col-6">
                <Card {...card} />
              </div>
            ))}
          </div>
        </section>
        <section className={styles.planBox}>
          <div className={`  ${styles.planTitle}`}>
            <h3>Saving Plan</h3>
            <a href="">See all</a>
          </div>
          <div>
            {budgets.map((budget, index) => (
              <div
                key={index}
                className={index === budgets.length - 1 ? "" : styles.margin}
              >
                <BudgetCard {...budget} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section>
        <AnalyticsChart colors={labelColors} />
      </section>
    </>
  );
};

export default Dashboard;
