import React, { useRef } from "react";
import "../../font.css";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_69wnz9u",
        "template_gpjpwzb",
        form.current,
        "YWsLkSmHbdMsZpo5F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  }

  return (
    <div className="App container googleFont">
      <header className="my-5">
        <h1 className="googleFont">Contact</h1>
      </header>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group m-3">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" required />
        </div>
        <div className="form-group m-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" name="email" required />
        </div>
        <div className="form-group m-3">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" name="message" required />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </form>
    </div>
  );
}
