import styles from "../../styles/sass/budget.module.scss";
interface BudgetCardProps {
  title: string;
  amount: string;
  target: number;
  percentage: number;
  color: string;
  bgColor: string;
}

const BudgetCard = ({
  title,
  amount,
  target,
  percentage,
  color,
  bgColor,
}: BudgetCardProps) => {
  return (
    <div className={styles.budgetItem}>
      <div className={`space-between ${styles.budgetTitle}`}>
        <h4 className="fw-500">{title}</h4>
        <span>Target: August 25, 2022</span>
      </div>

      <div className={`${styles.budgetAmount} space-between`}>
        <p>
          ${amount}
          <span> / ${target}</span>
        </p>
        <p className={color}>{percentage}%</p>
      </div>

      <div className={styles.progressBar}>
        <div
          className={` ${styles.progressValue} ${bgColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default BudgetCard;
