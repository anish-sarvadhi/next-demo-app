import Link from "next/link";
import style from "../page.module.css";

const Dashboard = () => {
  return (
    <div className={style.main}>
      <h1>Welcome to Dashboard</h1>
      <a href="/dashboard/about">
        <p className={style.description}>Go to next component ....</p>
      </a>
    </div>
  );
};

export default Dashboard;
