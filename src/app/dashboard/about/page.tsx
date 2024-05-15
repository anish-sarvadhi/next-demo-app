
import style from "../../page.module.css";

const About = () => {
  return (
    <div className={style.main}>
      <h1>Welcome to About</h1>
      <a href="/">
        <p className={style.description}>Back To Home ....</p>
      </a>
    </div>
  );
};

export default About;
