import { useState } from "react";
import "./css/login.sass";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [cookie, setCookie] = useState("");

  function loginPost(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    fetch("http://localhost:3030/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((newUserInfo) => {
        props.roleHandler(newUserInfo.role, "home");
      });
  }

  return (
    <div className="login_content">
      <form className="login_form" onSubmit={(e) => loginPost(e)}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Login</button>

        <a href="./apply.html">Not a member? Join Now!</a>
      </form>
      <img src={require("./images/login_page.jpg")} />
    </div>
  );
}
