import { useState } from "react";

export function Column3() {
  const [relationshipStatus, setRelationshipStatus] = useState("breakup");
  const [count, setCount] = useState(0);

  // const handleBreakup = () => {
  //   setCount(count + 1);
  //   if (relationshipStatus !== "breakup") {
  //     setRelationshipStatus("breakup");
  //   }
  // };
  const handleReconciliation = () => {
    setCount(count + 1);
    setRelationshipStatus("together");
  };

  return (
    <div>
      <h2>Tương lai?</h2>
      <h3>
        {relationshipStatus === "breakup"
          ? `Chia tay lần thứ n`
          : "Bên nhau mãi mãi"}
      </h3>
      {relationshipStatus === "together" ? (
        <>
          <p>Quay lại bên nhau mãi mãi ❤️‍🔥</p>
          {/* <button onClick={handleBreakup}>Break Up</button> */}
        </>
      ) : (
        <>
          <p>Chúng ta chia tay. Kết thúc rồi</p>
          <button onClick={handleReconciliation}>Quay lại</button>
        </>
      )}
    </div>
  );
}
