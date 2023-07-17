import ListGroup from "./components/ListGroup";

function App() {
  let Family = ["El Housseine", "Mohammed", "AbdErrahim", "Mami"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={Family}
        heading="Family"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
