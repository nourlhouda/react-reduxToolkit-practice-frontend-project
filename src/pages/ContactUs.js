import React from "react";

function ContactUs() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-details">
              <h2>Contact Us</h2>
              <div className="quote-section">
                <p>
                  "Real estate cannot be lost or stolen, nor can it be carried
                  away. <br /> Purchased with common sense, paid for in full,
                  and managed with reasonable care, <br /> it is about the
                  safest investment in the world." - Franklin D. Roosevelt
                </p>
              </div>
              <div className="contact-image">
                <img
                  src="https://thrivemyway.com/wp-content/uploads/2022/04/real_estate_market_stats_.jpg"
                  alt="Real Estate"
                />
              </div>
              <p>
                Feel free to reach out to us for any inquiries or assistance.
              </p>
              <div className="contact-item">
                <h3>Email</h3>
                <p>info@example.com</p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p>+1 123-456-7890</p>
              </div>
              <div className="contact-item">
                <h3>Address</h3>
                <p>123 Main Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
