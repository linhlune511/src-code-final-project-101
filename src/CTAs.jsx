import { MailCTA } from "./MailCTA";
import { CallCTA } from "./CallCTA";

export function CTAs() {
  return (
    <div className="ctas">
      <CallCTA />
      <MailCTA />
    </div>
  );
}
