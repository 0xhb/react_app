// import { Fragment } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // let cities = ["Attaouia", "Marrakech", "Safi", "Tangier"];
  // const handleEvent = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1); //HOOk: telling react that the var state will change
  return (
    // <Fragment>
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item was found</p>};
      {/* if (cities.length === 0)
        return <p>No item was found</p>; */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    //</Fragment>
  );
}

export default ListGroup;
