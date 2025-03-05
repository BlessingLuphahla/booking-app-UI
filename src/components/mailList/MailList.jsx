import "./mailList.css";

function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time , save Money</h1>
      <span className="mailDesc">
        Sign Up and we will send the best details to you
      </span>

      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>

    </div>
  );
}

export default MailList;
