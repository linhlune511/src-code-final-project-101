import { Music } from "./Music";
import { Agenda } from "./Agenda";
import { Description } from "./Description";
import { Title } from "./Title";

export function Intro() {
  return (
    <div>
      <Title />
      <Description />
      <Music />
      <Agenda />
    </div>
  );
}
