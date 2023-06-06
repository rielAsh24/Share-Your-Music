import { useState } from "react";
import "./css/login.sass";

export default function Login({ setRole, setView }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [cookie, setCookie] = useState("");

  function loginPost(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    // fetch("http://localhost:3030/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: email,
    //     password: pass,
    //   }),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((newUserInfo) => {
    //     setRole(newUserInfo.role);
    //     setView("Home");
    //   });
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
      {/* <div>
        <img src={require("./images/login_page.jpg")} />
      </div> */}
    </section>
  );
}
