import { parts } from "./App";
import { Item } from "./Item";

export function ItemList() {
  return (
    <div className="wrapper">
      {parts.map((part, i) => (
        <Item
          title={part.title}
          id={i + 1}
          key={i + 1}
          content={part.content}
          src={part.src}
          alt={part.alt}
        />
      ))}
    </div>
  );
}
