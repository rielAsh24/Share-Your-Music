import { useEffect, useRef, useState } from "react";
import "./css/apply.sass";

type form_data = {
  fname: string;
  em: string;
  uname: string;
  pw: string;
  comment: string;
  how: string;
};

export default function Apply() {
  const [form_info, setForm] = useState<form_data>({
    fname: "",
    em: "",
    uname: "",
    pw: "",
    comment: "",
    how: "",
  });

  const modal = useRef(null);

  // useEffect(() => {
  //   console.log(form_info);
  // }, [form_info]);

  let message: string;

  // if (form_info.fname.length < 2) message = <p>Name is not valid</p>;
  // else if (uname.length < 3) message = <p>Username is too short</p>;
  // else if (pw.length < 8) message = <p>Password too short or not confirmed.</p>;
  // else {
  //   message = (
  //     <p>
  //       Welcome <em>{fname}</em>, your email is <em>{em}</em>, and you had the
  //       following comments: <em>{comment}</em>
  //       <br />
  //       Our first event is an Ice Breaker Session on <em>September 17th</em>.
  //       Hope to see you there!!
  //     </p>
  //   );
  // }

  // const isValid = () => {
  //   return fname && em && uname && pw && comment && how;
  // };

  return (
    <section className="article-content">
      <form className="membership_form">
        <span>
          <label>{"Name"}</label>
          <input
            type="text"
            placeholder={"Name"}
            value={form_info.fname}
            onChange={(e) => setForm({ ...form_info, fname: e.target.value })}
            minLength={2}
            maxLength={20}
            required
          />
        </span>

        <span>
          <label>{"Email"}</label>
          <input
            type="email"
            placeholder={"Email"}
            value={form_info.em}
            onChange={(e) => setForm({ ...form_info, em: e.target.value })}
            maxLength={20}
            required
          />
        </span>

        <span>
          <label>{"Username"}</label>
          <input
            type="text"
            placeholder={"Username"}
            value={form_info.uname}
            onChange={(e) => setForm({ ...form_info, uname: e.target.value })}
            minLength={2}
            maxLength={20}
            required
          />
        </span>

        <span>
          <label>{"Password"}</label>
          <input
            type="text"
            // placeholder={"Password"}
            value={form_info.pw}
            onChange={(e) => setForm({ ...form_info, pw: e.target.value })}
            minLength={7}
            maxLength={16}
            required
          />
        </span>

        <span>
          <label>{"Expectations from this club:"}</label>
          <textarea
            value={form_info.comment}
            onChange={(e) => setForm({ ...form_info, comment: e.target.value })}
            placeholder="If you have any comments, please enter them here."
          />
        </span>

        <span>
          <label>How did you hear about us?</label>
          <select
            value={form_info.how}
            onChange={(e) => setForm({ ...form_info, how: e.target.value })}
          >
            <option>Select One</option>
            <option value="School">From your school</option>
            <option value="SocialMedia">On Social Media</option>
            <option value="Ads">Ads on websites</option>
            <option value="Friends">Friends</option>
          </select>
        </span>

        <span className="button-group">
          <button
            onClick={() => {
              modal.current.showModal();
            }}
          >
            Sign Up
          </button>
          <button type="reset">Clear</button>
        </span>
      </form>

      <dialog ref={modal}>
        <div className="modal-content">
          <span>{message}</span>
          <span>
            <button onClick={() => modal.current.close()}>Close</button>
          </span>
        </div>
      </dialog>
    </section>
  );
}
