import styles from "../../styles/sass/transaction.module.scss";
interface Transaction {
  name: string;
  date: string;
  amount: number;
  status: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className={styles.transactionBox}>
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className={`space-between ${index === transactions.length - 1 ? "" : "list-margin"}`}
        >
          <div className={styles.transactionDetails}>
            <div className={styles.transactionIcon}>
              <img src="/assets/icons/logo.svg" alt="gallery" />
            </div>
            <div className={styles.titleBox}>
              <p>{transaction.name}</p>
              <span>{transaction.date}</span>
            </div>
          </div>
          <div className="text-end">
            <p>${transaction.amount}</p>
            <span className={styles.transactionStatus}>
              {transaction.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
