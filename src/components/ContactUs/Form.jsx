import React from "react";

function Form() {
  return (
    <div className="form">
      <span className="headForm my-4">Choose what you’d like to do</span>

      <form>
        <div className="form-container">
          <div className="input">
            <label htmlFor="name">Name</label>
            <input type="text" required className="name" />
          </div>

          <div className="input">
            <label htmlFor="name">Email</label>

            <input type="email" required className="emal " placeholder="" />
          </div>

          <div className="input">
            <label htmlFor="name">Tell Us What You’d Like to Do</label>

            <textarea className="message" required id="" rows="3"></textarea>
          </div>
        </div>

        <button className="btn-send my-4">Send</button>
      </form>
    </div>
  );
}

export default Form;
