import { Clock } from "./Clock";
import { CountdownTitle } from "./CountdownTitle";

export function Countdown() {
  return (
    <div>
      <CountdownTitle />
      <Clock />
    </div>
  );
}
