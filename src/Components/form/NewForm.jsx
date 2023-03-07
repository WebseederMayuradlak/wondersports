import React, { useState } from "react";
import "./newForm.css";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: true,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "dark",
};

const NewForm = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  let handleSubmit = (e) => {
    console.log(data);
  };

  let handleValidation = (e) => {
    e.preventDefault();
    const { name, email, contact, message } = data;
    if (name.length < 3) {
      toast.error("length should be greater than 3", toastOptions);
      return;
    }
    if (email === "") {
      toast.error("Email cannot be empty", toastOptions);
      return;
    }
    if (contact.length !== 10) {
      toast.error("Contact length should not be > or < than 10", toastOptions);
      return;
    }
    if (message.length < 10) {
      toast.error("length should be greater than 3", toastOptions);
      return;
    }
    handleSubmit();
  };

  let handleChange = (e) => {
    let setName = e.target.name;
    let val = e.target.value;
    setData({ ...data, [setName]: val });
  };

  return (
    <div className="newForm">
      <form onSubmit={handleValidation} autoComplete="off">
        <h1>Contact Us!</h1>
        <input
          name="name"
          placeholder="name"
          type="text"
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => handleChange(e)}
        />
        <input
          name="email"
          placeholder="email"
          type="email"
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => handleChange(e)}
        />
        <input
          name="contact"
          placeholder="contact"
          type="number"
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => handleChange(e)}
        />
        <input
          name="message"
          placeholder="message"
          type="text"
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewForm;
