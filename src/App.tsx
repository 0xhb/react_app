import Alert from "./components/alert";
function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
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
