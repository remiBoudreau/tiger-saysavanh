import { Fragment, FC, ReactElement } from "react";
import "./contactModal.scss";
import emailjs from "emailjs-com";

const ContactModal: FC<{ setShow: Function }> = ({ setShow }): ReactElement => {
  //@ts-ignore
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        //@ts-ignore
        e.target,
        process.env.REACT_APP_USER_ID!
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Fragment>
      <section className="get-in-touch">
        <h1 className="title">Get in touch</h1>
        <form className="contact-form row" onSubmit={sendEmail}>
          <div className="form-field col x-50">
            <input
              name="name"
              id="name"
              className="input-text js-input"
              type="text"
              required
              onChange={(event) => {
                if (event.target.value !== "") {
                  document.getElementById("name")!.classList.add("not-empty");
                } else {
                  document
                    .getElementById("name")!
                    .classList.remove("not-empty");
                }
              }}
            />
            <label className="label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="form-field col x-50">
            <input
              name="email"
              id="email"
              className="input-text js-input"
              type="email"
              required
              onChange={(event) => {
                if (event.target.value !== "") {
                  document.getElementById("email")!.classList.add("not-empty");
                } else {
                  document
                    .getElementById("email")!
                    .classList.remove("not-empty");
                }
              }}
            />
            <label className="label" htmlFor="email">
              E-mail
            </label>
          </div>
          <div className="form-field col x-100">
            <textarea
              name="message"
              id="message"
              className="input-text js-input"
              required
              style={{
                height: "200px",
                fontFamily: `"Source Sans Pro", "Helvetica", sans-serif`,
              }}
              onChange={(event) => {
                if (event.target.value !== "") {
                  document
                    .getElementById("message")!
                    .classList.add("not-empty");
                } else {
                  document
                    .getElementById("message")!
                    .classList.remove("not-empty");
                }
              }}
            />
            <label className="label message-label" htmlFor="message">
              Message
            </label>
          </div>
          <div className="form-field col x-100 align-center">
            <input className="submit-btn" type="submit" value="Send" />
          </div>
        </form>
      </section>
      <div className="modal-overlay" onClick={() => setShow(false)} />
    </Fragment>
  );
};

export default ContactModal;
