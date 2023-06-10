import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <main>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" required placeholder="Abc" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                required
                placeholder="Abc@xyz.com"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <input
                type="text"
                required
                placeholder="Tell us about your query..."
                id="message"
              />
            </div>

            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
