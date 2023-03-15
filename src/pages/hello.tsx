import styles from "../app/page.module.css";

interface HelloProps {
  PhoneData: Array<any>;
}

const Hello = ({ PhoneData }: HelloProps) => {
  return (
    <div className={"styles.description"}>
      {PhoneData.map((item: any) => {
        return (
          <div key={item.id}>
            <h1 className={styles.title}>{item.title}</h1>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Hello;

interface GetStaticProps {
  [key: string]: any;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const PhoneData = data.products;

  return {
    props: {
      PhoneData,
    },
  };
};
