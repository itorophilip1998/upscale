import React from "react";
const list = [
  "Front-End Development",
  "Backend Development",
  "UI/UX Design",
  "SAAS Development",
];
const Listchoice = () => {
  return (
    <div className="row m-0 mt-5">
      {list &&
        list.map((item, key) => (
          <button className="listedItem mr-auto " data-aos="zoom-in" data-aos-delay="600" key={key}>
            <h3>{item}</h3>
          </button>
        ))}
    </div>
  );
};

function Form() {
  return (
    <div className="form m-0" data-aos="fade-right" data-aos-delay="400">
      <span className="headForm my-4 d-none d-md-block text-left">Choose what you’d like to do</span>
      <Listchoice />
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
            <label htmlFor="name" className="text-left">Tell Us What You’d Like to Do</label>

            <textarea
              className="message border-0"
              required
              id=""
              rows="3"
            ></textarea>
          </div>
        </div>

        <button className="btn-send my-4 d-block d-md-none w-100">Send</button>
        <button className="btn-send my-4 d-none d-md-block">Send</button>
      </form>
    </div>
  );
}

export default Form;
