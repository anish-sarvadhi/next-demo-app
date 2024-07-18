/** @format */

interface ProductProps {
  PhoneData: Array<any>;
}

const Product = ({ PhoneData }: ProductProps) => {
  return (
    <div className={"styles.description"}>
      {PhoneData.map((item: any) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
