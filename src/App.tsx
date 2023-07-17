import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Huh Me
      </Button>
    </div>
  );
}

export default App;

// import ListGroup from "./components/ListGroup";
// let Family = ["El Housseine", "Mohammed", "AbdErrahim", "Mami"];
// const handleSelectItem = (item: string) => {
//   console.log(item);
// };
// {
/* <ListGroup
  items={Family}
  heading="Family"
  onSelectItem={handleSelectItem}
  /> */
// }
