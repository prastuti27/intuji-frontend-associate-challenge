import styles from "../../styles/sass/dashboard.module.scss";
import Card from "../card";
import { cardData } from "../../data/card";
import BudgetCard from "../progress";
import { budgets } from "../../data/budget";
import AnalyticsChart from "../graph";
import { labelColors } from "../../data/chart";
import TransactionList from "../transactionBox";
import { transactions } from "../../data/transaction";

const Dashboard = () => {
  return (
    <>
      <div className="layout">
        <div>

        <section className={styles.overviewBox}>
          <h3>Overview</h3>
          <div className="row custom-gap">
            {cardData.map((card) => (
              <div key={card.id} className={`col-md-6 ${styles.cardBox}`}>
                <Card {...card} />
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <AnalyticsChart colors={labelColors} />
        </section>
      </div>
        <div className={styles.planBox}>
      
        <section>
          <div className={`  ${styles.planTitle}`}>
            <h3>Saving Plan</h3>
            <a href="">See all</a>
          </div>
          <div>
            {budgets.map((budget, index) => (
              <div
                key={index}
                className={index === budgets.length - 1 ? "" : "list-margin"}
              >
                <BudgetCard {...budget} />
              </div>
            ))}
          </div>
        </section>
        <section >
          <div className={`  ${styles.planTitle}`}>
            <h3>Recent Transaction</h3>
            <a href="">See all</a>
            
          </div>
          <div>
            <TransactionList transactions={transactions} />
          </div>
        </section>
        </div>
      {/* </div> */}
      {/* <div className="layout"> */}
       
 
      </div>
    </>
  );
};

export default Dashboard;
