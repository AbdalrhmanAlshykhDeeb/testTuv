// import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItems: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItems }: Props) => {
  //   let items: string[] = [
  //     "Ne York",
  //     "San Francisco",
  //     "Tokyo",
  //     "London",
  //     "Paris",
  //   ];
  //   items = [];

  //   const handele = (event: MouseEvent) => console.log(event);

  const [selectedIndex, setSelectedIndex] = useState(0);


  return (
    <>
      <h1>{heading}</h1>
      {items?.length === 0 ? <p>No items found</p> : null}
      {items?.length === 0 && <p>No items found</p>}
      <ul className="list-group m-5">
        {items?.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={`${item}-list-country`}
            id={`list-item-${item}`}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItems(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* with key index element */}
      {/* <ul className="list-group m-5">
        {items.map((item, index) => (
          <li className="list-group-item" key={index} id={`list-item${index}`}>
            {item}
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default ListGroup;
