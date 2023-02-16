import React, { useState } from "react";
import "../App.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { ImCodepen, ImTwitter } from "react-icons/im";
import { FiAtSign, FiInstagram, FiTwitter } from "react-icons/fi";

function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex flex-col items-center my-20 gap-6 mx-8 bg-white ">
      <div className="send-message">
        <button
          className=" text-5xl font-semibold text-[#4731D3] font-serif mb-8"
          onClick={handleClick}
        >
          Send me a message!
        </button>
        {showForm && (
          <div className="form-wrapper">
            <form
              className="form"
              action="mailto:kazimnergiz123@gmail.com"
              method="POST"
            >
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">Submit</button>
              <AiFillCloseCircle
                className="close-button"
                onClick={handleClick}
              />
            </form>
          </div>
        )}
      </div>
      <h3 className=" text-2xl lg:w-[480px] text-center leading-relaxed tracking-wide ">
        Got a question or proposal, or just want to say hello? Go ahead.
      </h3>
      <a
        className=" font-sans text-xl tracking-wide underline text-[#4731D3] "
        href="mailto:kazimnergiz123@gmail.com"
      >
        kazimnergiz123@gmail
      </a>
      <div className="icons flex gap-x-6 text-4xl text-[#4731D3]">
        <FiTwitter />
        <ImCodepen />
        <FiAtSign />
        <FiInstagram />
      </div>
    </div>
  );
}

export default Footer;
