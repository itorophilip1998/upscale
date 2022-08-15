import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import axios from "axios";
/* eslint-disable */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const list = [
  "Front-End Development",
  "Backend Development",
  "UI/UX Design",
  "SAAS Development",
];

function Form() {
  // const form = useRef();
  const [select, setForm] = useState(null);
  const [loader, setLoader] = useState(false);
  const setFormData = (e) => {
    const { value, name } = e.target;
    setForm({
      ...select,
      [name]: value,
    });
  };
  const url = "http://localhost:8000/api/send-mail";
  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    if (!select?.option) {
      setLoader(false);
      return toast.warning("Select what you will like to do");
    }

    axios
      .post(url, select)
      .then((result) => {
        setLoader(false);
        toast.success("Successfully send!");
      })
      .catch((err) => {
        setLoader(false);
        toast.error("Unable to send!");
      });
  };
  const setOption = (item) => {
    setForm({
      ...select,
      option: item,
    });
  };
  return (
    <div className="form m-0" data-aos="fade-right" data-aos-delay="400">
      <span className="headForm my-4 d-none d-md-block text-left">
        Choose what you’d like to do
      </span>
      {/* list choice */}
      <div className="row m-0 mt-5">
        {list &&
          list.map((item, key) => (
            <button
              className="listedItem mr-auto "
              data-aos="zoom-in"
              data-aos-delay="600"
              key={key}
              onClick={(e) => setOption(item)}
              // name="option"
              // type="button"
            >
              <h3>{item}</h3>
            </button>
          ))}
      </div>
      <form onSubmit={sendEmail}>
        <div className="form-container">
          <div className="input">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              required
              className="name"
              name="user_name"
              onChange={setFormData}
              // value={"itoro"}
            />
          </div>

          <div className="input">
            <label htmlFor="user_email">Email</label>

            <input
              type="email"
              required
              className="email "
              placeholder=""
              name="user_email"
              onChange={setFormData}
              // value={"itorophilip1998@gmail.com"}
            />
          </div>
          <div className="input">
            <label htmlFor="user_phone">Phone</label>

            <input
              type="text"
              required
              className="phone "
              placeholder=""
              name="user_phone"
              onChange={setFormData}
              // value={"090671621"}
            />
          </div>

          <div className="input">
            <label htmlFor="name" className="text-left">
              Tell Us What You’d Like to Do
            </label>

            <textarea
              className="message"
              required
              id=""
              rows="3"
              name="message"
              onChange={setFormData}
              // value={`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos facilis odio, deserunt consequuntur delectus fugit culpa possimus praesentium sapiente, id earum voluptatem harum ratione aut totam vero assumenda aspernatur?   `}
            ></textarea>
          </div>
          {/* {console.log(loader)} */}
        </div>

        <div>
          <button
            disabled={!loader ? false : true}
            className="btn-send my-4 d-block d-md-none w-100 "
          >
            {!loader ? "Send" : "Please wait..."}
          </button>
          <button
            disabled={!loader ? false : true}
            className="btn-send my-4 d-none d-md-block "
          >
            {!loader ? "Send" : "Please wait..."}
          </button>
        </div>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Form;
