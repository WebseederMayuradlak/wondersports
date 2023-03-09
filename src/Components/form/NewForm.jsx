import React, { useState, useEffect } from "react";
import "./newForm.css";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

  let [phone, setPhone] = useState("");

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
    if (contact === "") {
      toast.error("Contact cannot be empty", toastOptions);
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

  useEffect(() => {
    setData({ ...data, contact: phone });
  }, [phone]);

  const PhoneInp = () => {
    return (
      <>
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(e) => {
            setPhone(e);
          }}
          containerStyle={{
            outline: "none",
            border: "none",
          }}
          inputStyle={{ outline: "none", border: "none" }}
          dropdownStyle={{
            outline: "none",
            border: "none",
            backgroundColor: "#232323",
            color: "rgb(62, 65, 59)",
          }}
          searchStyle={{
            outline: "none",
            border: "none",
          }}
          buttonStyle={{ outline: "none", border: "none" }}
        />
      </>
    );
  };

  return (
    <div className="newForm">
      <div className="newForm-left">
        <img
          src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
        />
      </div>

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
        <PhoneInp />
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

{
  /* <input
            name="contact"
            placeholder="contact"
            type="number"
            onFocus={(e) => {
              e.target.select();
            }}
            onChange={(e) => handleChange(e)}
          /> */
}
