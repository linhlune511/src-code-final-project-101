import { Column3 } from "./Column3";
import { Column2 } from "./Column2";
import { Column1 } from "./Column1";

export function InlineColumns() {
  const columnStyle = {
    display: "inline-block",
    width: "33%",
    height: "auto",
    padding: "10px",
  };

  return (
    <div className="inline-columns">
      <div
        className="column"
        style={{ ...columnStyle, backgroundColor: "#d0d2ff" }}
      >
        <Column1 />
      </div>
      <div
        className="column"
        style={{ ...columnStyle, backgroundColor: "#b1b5ff" }}
      >
        <Column2 />
      </div>
      <div
        className="column"
        style={{ ...columnStyle, backgroundColor: "#9298ff" }}
      >
        <Column3 />
      </div>
    </div>
  );
}
