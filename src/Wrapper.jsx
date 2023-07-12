import { LoveIllustration } from "./LoveIllustration";
import { Footer } from "./Footer";
import { ItemList } from "./ItemList";
import { Intro } from "./Intro";

export function Wrapper() {
  return (
    <div>
      <Intro />
      <ItemList />
      <LoveIllustration />
      <Footer />
    </div>
  );
}
