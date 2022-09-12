import XD from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "GeForce RTX 3070 Ti",
      price: 659.99,
      date: new Date(2021, 2, 26),
    },
    {
      title: "GeForce RTX 3070 Ti",
      price: 659.99,
      date: new Date(2021, 2, 26),
    },
    {
      title: "GeForce RTX 3070 Ti",
      price: 659.99,
      date: new Date(2021, 2, 26),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <XD
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      ></XD>
      <XD
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      ></XD>
      <XD
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      ></XD>
    </div>
  );
}

export default App;
