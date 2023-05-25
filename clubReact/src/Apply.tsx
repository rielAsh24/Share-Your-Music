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
      <>
        <label>{fieldLabel}</label>
        <input
          type="text"
          placeholder="Name"
          value={fieldName}
          onChange={(e) => setFunction(e.target.value)}
          required
        />
      </>
    );
  }

  const ApplyForm = () => {
    const isValid = () => {
      return fname && em && uname && pw && comment && how;
    };

    return (
      <form className="membership_form">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
        {/* {FormField("Name", fname, setFname)} */}

        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={em}
          onChange={(e) => setEm(e.target.value)}
          required
        />

        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          minLength={8}
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          required
        />

        <label>Expectations from this club:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="expect.."
        />

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

        <button onClick={isValid}>Sign Up</button>

        <button type="reset">Clear</button>
      </form>
    );
  };

  return (
    <>
      <main className="apply_content">
        <ApplyForm />
      </main>
      <section id="ThanksDialog" className={modalShow}>
        <div id="theMsg">
          {message}
          <button
            className="confirm_button"
            onClick={() => {
              SetModalShow("show");
            }}
          >
            Close
          </button>
        </div>
      </section>
    </>
  );
}
