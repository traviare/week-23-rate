import "./Main.scss";
import Card from "../Card/Card";

function Main({ arr }) {
  return (
    <div className="container">
      {arr.map((item) => (
        <Card
          name={item.name}
          price={item.price}
          traffic={item.traffic}
          quantity={item.quantity}
          color={item.color}
        ></Card>
      ))}
    </div>
  );
}

export default Main;
