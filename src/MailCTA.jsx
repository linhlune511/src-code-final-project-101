export function MailCTA() {
  const mailAddress = "phuonglinhnguyenn511@gmail.com";
  function handleMail() {
    const mailSubject = "Hello Linh béo";
    const mailUrl = `https://mail.google.com/mail/?view=cm&to=${mailAddress}&su=${encodeURIComponent(
      mailSubject
    )}`;
    window.open(mailUrl);
  }
  return (
    <div className="cta-mail">
      <button className="cta" onClick={handleMail}>
        Gửi mail
      </button>
    </div>
  );
}
