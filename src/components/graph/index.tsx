import styles from "../../styles/sass/chart.module.scss";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { data } from "../../data/chart";

interface ChartProps {
  colors: { label1: string; label2: string };
}

const AnalyticsChart = ({ colors }: ChartProps) => {
  return (
    <div className={styles.analyticsContainer}>
      <div className={`space-between ${styles.titleBox}`}>
        <h3>Analytics</h3>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span
              className={styles.legendLabel}
              style={{ backgroundColor: colors.label1 }}
            ></span>{" "}
            Label1
          </div>
          <div className={styles.legendItem}>
            <span
              className={styles.legendLabel}
              style={{ backgroundColor: colors.label2 }}
            ></span>{" "}
            Label2
          </div>
          <button className={styles.dropdownBtn}>
            Weekly{" "}
            <img src="/assets/icons/chevron-down.svg" alt="chevron-down" />
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorLabel1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.label1} stopOpacity={0.6} />
              <stop offset="95%" stopColor={colors.label1} stopOpacity={0} />
            </linearGradient>

            <linearGradient id="colorLabel2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.label2} stopOpacity={0.6} />
              <stop offset="95%" stopColor={colors.label2} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="6 6" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            padding={{ left: 10, right: 20 }}
          />
          <YAxis
            tickFormatter={(value) => `${value / 1000}k`}
            ticks={[0, 1000, 5000, 10000, 15000, 20000]}
            domain={[0, "dataMax"]}
            allowDecimals={false}
            tickLine={false}
          />
          <Area
            type="monotone"
            dataKey="label1"
            stroke={colors.label1}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorLabel1)"
          />
          <Area
            type="monotone"
            dataKey="label2"
            stroke={colors.label2}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorLabel2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
