import { parts } from "./App";

export function AgendaItem() {
  return (
    <div className="agenda-item">
      {parts.map((part, i) => (
        <div key={i}>{`0${i + 1}. ${part.title}`}</div>
      ))}
    </div>
  );
}
