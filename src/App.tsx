import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    name: "Spicy Pepperoni",
    toppings: ["mushroom"],
  });

  const handleClick = () => {
    // setGame({ ...game, player: { ...game.player, name: "jhon yo" } });
    // setPizza({ ...pizza, toppings: [...toppings, "cheese"] });
    // setCart({ ...cart, items: cart.items.map(item => item.id === 1 ? {...item, item.quantity + 1} : item) });
  };
}

export default App;

// const [cartItems, setCartItems] = useState(["product 1", "product 2"]);
// return (
//   <>
//     <NavBar cartItemsCount={cartItems.length}></NavBar>
//     <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
//   </>
// );

// const [person, setPerson] = useState({
//   firstname: "",
//   lastname: "",
// });
// const [drink, setDrink] = useState({
//   title: "Americano",
//   price: 9,
// });

// const handleDrink = () => {
//   setDrink({ ...drink, price: drink.price + 1 });
// };

// //updating state arrays:
// const [tags, setTags] = useState(["happy", "excited"]);
// //add
// setTags([...tags, "afraid"]);

// //remove
// setTags(tags.filter((tag) => tag !== "happy"));

// //update
// setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));

// //updating array of objects:
// const [bugs, setBugs] = useState([
//   { id: 1, name: "bug 1", fixed: false },
//   { id: 2, name: "bug 2", fixed: false },
// ]);
// //update here
// setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
// //or better:
// setBugs(
//   produce((draft) => {
//     //draft is like a copy of the bugs array
//     const bug = draft.find((bug) => bug.id === 1);
//     if (bug) bug.fixed = true;
//   })
// );

// return (
//   <div>
//     {drink.price}
//     <button onClick={handleDrink}>Click Me</button>
//   </div>
// );
