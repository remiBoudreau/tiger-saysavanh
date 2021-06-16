// React Types
import { Fragment, useState, FC, ReactElement } from "react";
import ContactModal from "../ContactModal/ContactModal";
// Styles
import "./information.scss";

const Information: FC<{ information: information }> = ({
  information,
}): ReactElement => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <div className="information-container">
        <img
          className="information-image"
          src={information.cover}
          alt="information"
        />
        <main className="tiger-container">
          <p>{information.information}</p>
          <p style={{ marginBottom: "30px" }}>CV available upon request.</p>
          <button className="button-container" onClick={() => setShow(true)}>
            CONTACT
          </button>
        </main>
        <section className="clients-container">
          <p className="clients-title">CLIENTS:</p>
          <hr />
          <div className="clients-grid">
            {information.clients.map((client) => (
              <div key={client.key} className="client-container">
                <a href={client.url} className="client-url">
                  {client.title}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      {show && <ContactModal setShow={setShow} />}
    </Fragment>
  );
};

export default Information;
