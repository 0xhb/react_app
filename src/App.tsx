import ListGroup from "./components/ListGroup";

function App() {
  let Family = ["El Housseine", "Mohammed", "AbdErrahim", "Mami"];
  return (
    <div>
      <ListGroup items={Family} heading="Family" />
    </div>
  );
}

export default App;
