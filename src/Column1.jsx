import { useState } from "react";

export function Column1() {
  const [relationshipStatus, setRelationshipStatus] = useState("together");
  const [count, setCount] = useState(0);

  const handleBreakup = () => {
    setCount(count + 1);
    setRelationshipStatus("breakup");
  };

  const handleReconciliation = () => {
    setCount(count + 1);
    setRelationshipStatus("together");
  };

  return (
    <div>
      <h2>Quá khứ</h2>
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
        </>
      )}
    </div>
  );
}
