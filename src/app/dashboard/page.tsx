/** @format */

import { apiGetProducts } from "@/services/product";
import Link from "next/link";
import style from "../page.module.css";
import Product from "./Product";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Dashboard = async () => {
  const { data }: any = await apiGetProducts();

  return (
    <div className={style.main}>
      <h1>Welcome to Dashboard</h1>
      <div>
        <Product PhoneData={data} />
      </div>
      <Link href="/dashboard/about">
        <p className={style.description}>Go to next component ....</p>
      </Link>
    </div>
  );
};

export default Dashboard;
