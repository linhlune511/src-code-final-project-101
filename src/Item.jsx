import { useState, useRef } from "react";

export function Item({ title, id, content, src, alt }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();

  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item-wrapper ${isOpen ? "active" : ""}`}>
      <div className="item">
        <div className="item-cover" onClick={handleOpen}>
          <div className="item-id">{id < 10 ? `0${id}` : id}</div>
          <div
            className="item-title"
            data-index={0}
            style={{ fontSize: "25px" }}
          >
            {title}
          </div>
        </div>
        <div
          className="content-outer"
          // style={{
          // height: isOpen ? contentRef.current.clientHeight : 0,
          // }}
          style={{ height: isOpen ? "100%" : "0" }}
        >
          {/* <div className="content" ref={contentRef}></div> */}
          <div style={{ textAlign: "center" }}>
            <img src={src} alt={alt} />
          </div>

          <div
            className="content"
            // className={`content${isOpen ? "" : "-outer"}`}
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
}
