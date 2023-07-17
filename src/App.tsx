import Button from "./components/button";
function App() {
  const handleClick = () => console.log("Clicked");
  return (
    <div>
      <Button color="secondary" onClick={handleClick}>
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
