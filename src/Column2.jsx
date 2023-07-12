import { useState } from "react";

export function Column2() {
  const [relationshipStatus, setRelationshipStatus] = useState("together");
  const [count, setCount] = useState(0);

  const handleBreakup = () => {
    setCount(count + 1);
    if (relationshipStatus !== "breakup") {
      setRelationshipStatus("breakup");
    }
  };

  const handleReconciliation = () => {
    setCount(count);
    setRelationshipStatus("breakup");
  };

  return (
    <div>
      <h2>Hiện tại</h2>
      <h3>Chia tay lần thứ #{count}</h3>
      {relationshipStatus === "together" ? (
        <>
          <p>Chúng ta yêu nhau thật nồng cháy</p>
          <button onClick={handleBreakup}>Chia tay</button>
        </>
      ) : (
        <>
          <p>Chúng ta chia tay. Kết thúc rồi</p>
          <button onClick={handleReconciliation}>Quay lại</button>
          <p>
            {relationshipStatus === "together"
              ? ""
              : "Kết thúc rồi không ấn được nữa đâu"}
          </p>
        </>
      )}
    </div>
  );
}
