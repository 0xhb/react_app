import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
  });
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 9,
  });

  const handleDrink = () => {
    setDrink({ ...drink, price: drink.price + 1 });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleDrink}>Click Me</button>
    </div>
  );
}

export default App;
