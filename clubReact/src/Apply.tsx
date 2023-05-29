import { useState } from "react";
import "./css/apply.sass";

export default function Apply() {
  const [fname, setFname] = useState("");
  const [em, setEm] = useState("");
  const [uname, setUname] = useState("");
  const [pw, setPw] = useState("");
  const [comment, setComment] = useState("");
  const [how, setHow] = useState("");
  const [modalShow, SetModalShow] = useState("show");

  let message: JSX.Element;

  if (fname.length < 2) message = <p>Name is not valid</p>;
  else if (uname.length < 3) message = <p>Username is too short</p>;
  else if (pw.length < 8) message = <p>Password too short or not confirmed.</p>;
  else {
    message = (
      <p>
        Welcome <em>{fname}</em>, your email is <em>{em}</em>, and you had the
        following comments: <em>{comment}</em>
        <br />
        Our first event is an Ice Breaker Session on <em>September 17th</em>.
        Hope to see you there!!
      </p>
    );
  }

  function FormField(
    fieldLabel: string,
    fieldName: string,
    setFunction: React.Dispatch<React.SetStateAction<string>>
  ) {
    return (
      <span>
        <label>{fieldLabel}</label>
        <input
          type={fieldLabel === "Password" ? "password" : "text"}
          placeholder={fieldLabel}
          value={fieldName}
          onChange={(e) => setFunction(e.target.value)}
          // required
        />
      </span>
    );
  }

  const isValid = () => {
    return fname && em && uname && pw && comment && how;
  };

  return (
    <section className="article-content">
      <form className="membership_form">
        {FormField("Name", fname, setFname)}

        {FormField("Email", em, setEm)}

        {FormField("Username", uname, setUname)}

        {FormField("Password", pw, setPw)}

        <span>
          <label>Expectations from this club:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="expect.."
          />
        </span>

        <span>
          <label>How did you hear about us?</label>
          <select
            placeholder=""
            value={how}
            onChange={(e) => setHow(e.target.value)}
            required
          >
            <option>Select One</option>
            <option value="School">From your school</option>
            <option value="SocialMedia">On Social Media</option>
            <option value="Ads">Ads on websites</option>
            <option value="Friends">Friends</option>
          </select>
        </span>

        <span className="button-group">
          <button onClick={() => SetModalShow("show")}>Sign Up</button>
          <button type="reset">Clear</button>
        </span>
      </form>

      <article id="ThanksDialog" className={modalShow}>
        <div id="theMsg">
          <span>{message}</span>
          <span>
            <button
              onClick={() => {
                SetModalShow("hide");
              }}
            >
              Close
            </button>
          </span>
        </div>
      </article>
    </section>
  );
}
