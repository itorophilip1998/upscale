import React from "react";

function Form() {
  return (
    <div className="form">
      <span>Choose what you’d like to do</span>

      <form>
        <input type="text" required className="name" placeholder="Name" />
        <input type="email" required className="emal" placeholder="Email" />
        <textarea
          className="message"
          required
          id=""
          placeholder="Tell Us What You’d Like to Do"
          cols="30"
          rows="10"
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}

export default Form;
