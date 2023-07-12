import { AgendaItem } from "./AgendaItem";

export function Agenda() {
  return (
    <div>
      <div className="agenda-title"> Agenda </div>
      <div className="agenda-list">
        <AgendaItem />
      </div>
    </div>
  );
}
