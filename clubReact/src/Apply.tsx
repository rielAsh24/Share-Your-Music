import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ActivityContext } from "./App";
import { activity, form_data } from "./customtypes";
import "./css/apply.sass";

export default function Apply() {
  const firstevent: activity = useContext(ActivityContext)[0];

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const modal = useRef(null);
  const [modal_info, setModal] = useState(<span></span>);
  const onSubmit = (data: form_data) => {
    setModal(
      <span>
        <h3>ID created!</h3>
        <p>
          Share Your Club welcomes you <em>{data.Username}</em>
        </p>
        <p>
          We are glad to invite you to our first event: {firstevent.name} on{" "}
          <em>{firstevent.date}</em>.
        </p>
        <h4>Hope to see you there!!</h4>
      </span>
    );
    modal.current.showModal();
  };

  return (
    <section className="article-content">
      <form className="membership_form" onSubmit={handleSubmit(onSubmit)}>
        <span>
          <label>{"Name"}</label>
          <input
            type="text"
            placeholder="Name"
            {...register("Name", {
              required: true,
              min: 2,
              maxLength: 30
            })}
            aria-invalid={errors.Name ? "true" : "false"}
          />
          {errors.Name && <p>Field Length should be 2 to 30 characters</p>}
        </span>

        <span>
          <label>{"Email"}</label>
          <input
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            aria-invalid={errors.Email ? "true" : "false"}
          />
          {errors.Email && <p>Email is invalid</p>}
        </span>

        <span>
          <label>{"Username"}</label>
          <input
            type="text"
            placeholder="Username"
            {...register("Username", {
              required: true,
              min: 5,
              maxLength: 20,
              pattern: /^[a-zA-Z0-9_]+$/i
            })}
            aria-invalid={errors.Username ? "true" : "false"}
          />
          {errors.Username && <p>Invalid Username</p>}
        </span>

        <span>
          <label>{"Password"}</label>
          <input
            type="password"
            placeholder="Password"
            {...register("Password", {
              required: true,
              min: 8,
              maxLength: 16
            })}
            aria-invalid={errors.Password ? "true" : "false"}
          />
          {errors.Password && <p>Invalid Password</p>}
        </span>

        <span>
          <label>{"Expectations from this club:"}</label>
          <textarea
            {...register("Comments", {
              required: true,
              maxLength: 500
            })}
            placeholder="Expectations from this club..."
            aria-required={errors.Comments ? "true" : "false"}
          />
          {errors.Comments && <p>Please provide us your expectations</p>}
        </span>

        <span>
          <label>How did you hear about us?</label>
          <select {...register("Mode", { required: true })}>
            <option value="Campus Events">Campus Events</option>
            <option value="Social Media">Social Media</option>
            <option value="School Website">School Website</option>
            <option value="Friends">Friends</option>
            <option value="Existing Members">Existing Members</option>
          </select>
        </span>

        <span className="button-group">
          <button type="submit">Join The Club</button>
          <button type="reset">Clear Form</button>
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
