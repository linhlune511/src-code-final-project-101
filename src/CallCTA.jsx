export function CallCTA() {
  const phoneNumber = "0946503155";
  function handleCall() {
    window.open(`tel:${phoneNumber}`);
  }
  return (
    <div className="cta-call">
      <button className="cta" onClick={handleCall}>
        Gọi
      </button>
    </div>
  );
}
