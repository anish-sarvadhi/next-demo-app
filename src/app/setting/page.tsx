"use client";

import style from "../page.module.css";
import { useRouter } from "next/navigation";

const Setting = () => {
  const router = useRouter();
  return (
    <>
      <div className={style.main}>
        <h1>My First Component </h1>
        <div className={style.description}>
          <button type="button" onClick={() => router.push("/dashboard")}>
            Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default Setting;
