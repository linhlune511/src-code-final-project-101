import { useRef } from "react";
import ReactPlayer from "react-player";
import IJCTSILU from "./IJCTSILU.mp3";

export function Music() {
  // const [isPlay, setIsPlay] = useState(true);
  const audioRef = useRef(null);
  // function handlePlay() {
  //   setIsPlay((isPlay) => !isPlay);
  // }
  return (
    <div className="button" style={{ paddingBottom: "20px" }}>
      <ReactPlayer
        ref={audioRef}
        url={IJCTSILU}
        playing={true}
        controls={true}
        height="50px"
        loop={true}
        muted={false}
      />
      {/* <button className="button-player" onClick={handlePlay}>
              {isPlay ? " II" : "▷ "}
            </button> */}
    </div>
  );
}
