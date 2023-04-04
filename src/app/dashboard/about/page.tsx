import Link from "next/link";
import style from "../../page.module.css";

const About = () => {
  return (
    <div className={style.main}>
      <h1>Welcome to About</h1>
      <Link href="/">
        <p className={style.description}>Back To Home ....</p>
      </Link>
    </div>
  );
};

export default About;
