import "./App.scss";
import Main from "./Components/Main/Main";

const rates = [
  {
    name: "Безлимитный 300",
    price: "300",
    traffic: "10",
    quantity: "Обьем включенного трафика не ограничен",
    color: "white",
  },
  {
    name: "Безлимитный 450",
    price: "450",
    traffic: "50",
    quantity: "Обьем включенного трафика не ограничен",
    color: "white",
  },
  {
    name: "Безлимитный 550",
    price: "550",
    traffic: "100",
    quantity: "Обьем включенного трафика не ограничен",
    color: "paleturquoise",
  },
  {
    name: "Безлимитный 1000",
    price: "1000",
    traffic: "200",
    quantity: "Обьем включенного трафика не ограничен",
    color: "white",
  },
];

function App() {
  return (
    <>
      <Main arr={rates}></Main>
    </>
  );
}

export default App;
