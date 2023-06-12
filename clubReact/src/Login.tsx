import { useRef, useState } from "react";
import "./css/login.sass";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const modal = useRef(null);
  const [modal_info, setModal] = useState(<span></span>);

  function loginPost(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setModal(
      <span>
        <h3>Hey Friend</h3>
        <p>Share Your Club welcomes you!</p>
        <p>
          I'm glad you are here and wanted to thank you for looking at my site.
        </p>
        <h4>Interested in getting connected?.</h4>
      </span>
    );
    modal.current.showModal();
  }

  return (
    <section className="article-content">
      <form className="form_content" onSubmit={(e) => loginPost(e)}>
        <span>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <span>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </span>
        <span>
          <button type="submit">Login</button>
          <h5>
            Not a member? <a href="./apply.html">Join Now!</a>
          </h5>
        </span>
      </form>
      <dialog ref={modal}>
        <div className="modal-content">
          {modal_info}
          <span>
            <button onClick={() => modal.current.close()}>Close</button>
          </span>
        </div>
      </dialog>
    </section>
  );
}
