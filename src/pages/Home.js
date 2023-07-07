import React from "react";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="agency-section">
          <h2>Welcome to Hepta Real Estate Agency</h2>
          <p>
            We are a leading real estate agency providing top-notch services to
            help you find your dream home.
          </p>
        </div>
        <div className="houses-section">
          <h3>Featured Houses</h3>
          <div className="house-gallery">
            <div className="house-item">
              <img
                src="https://www.build-review.com/wp-content/uploads/2020/07/luxury-real-estate.jpg"
                alt="House 1"
              />
            </div>
            <div className="house-item">
              <img
                src="https://www.vanulaw.com/wp-content/uploads/2017/10/house-03.jpg"
                alt="House 2"
              />
            </div>
            <div className="house-item">
              <img
                src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Modern-House-In-Twilight-AdobeStock-368976934-copy.jpg"
                alt="House 3"
              />
            </div>
          </div>
        </div>
        <div className="benefits-section">
          <h3>Why Choose Hepta Real Estate</h3>
          <ul>
            <li>Wide selection of properties</li>
            <li>Expert real estate agents</li>
            <li>Easy property search and filtering</li>
            <li>Transparent pricing and information</li>
            <li>Responsive customer support</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
