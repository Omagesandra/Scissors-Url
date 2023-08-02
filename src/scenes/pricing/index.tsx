import React from "react";
import Line7 from "../../assets/Line7.png";
import check from "../../assets/check.png";
import check1 from "../../assets/check1.png";

const Pricing = () => {
  return (
    <div>
      <div className="pricing">
        <div>
          <div className="p-titles">
            <img alt="line" src={Line7} />
            <h2 className="p-title">
              A <span className="url">price perfect</span> for your needs.
            </h2>
          </div>
          <p className="p-para">
            From catering for your personal, business, event, socials, needs,
            you can be rest assured we have you in mind in our pricing.
          </p>
        </div>
        <div className="p-tag">
          <div className="tag-one">
            <h4 className="plan">Basic</h4>
            <h3 className="price">Free</h3>
            <p className="p-parag">Free plan for all users</p>
            <ul>
              <li className="list">
                <img alt="check" src={check} />
                Unlimited URL Shortening
              </li>
              <li className="list">
                <img alt="check" src={check} />
                Basic Link Analytics
              </li>
              <li className="list">
                <img alt="check" src={check} />
                Customizable Short Links
              </li>
              <li className="list">
                <img alt="check" src={check} />
                Standard Support
              </li>
              <li className="list">
                <img alt="check" src={check} />
                Ad-supported
              </li>
            </ul>
          </div>
          <div className="tag-two">
            <h4 className="plan-two">Professional</h4>
            <h3 className="price">$15/month</h3>
            <p className="p-paragh">Ideal for business creators</p>
            <ul>
              <li className="list">
                <img alt="check" src={check1} />
                Enhanced Link Analytics
              </li>
              <li className="list">
                <img alt="check" src={check1} />
                Custom Branded Domains
              </li>
              <li className="list">
                <img alt="check" src={check1} />
                Advanced Link Customization
              </li>
              <li className="list">
                <img alt="check" src={check1} />
                Priority Support
              </li>
              <li className="list" id="last">
                <img alt="check" src={check1} />
                Ad-free Experience
              </li>
            </ul>
          </div>
          <div className="tag-three">
            <h4 className="plan">Team</h4>
            <h3 className="price">$25/month</h3>
            <p className="p-parag">Share with up to 10 users</p>
            <ul>
              <li className="list">
                <img alt="check" src={check} />
                Team Collaboration
              </li>
              <li className="list">
                <img alt="check" src={check} />
                User Roles and Permissions
              </li>
              <li className="list">
                <img alt="check" src={check} />
                Enhanced Security
              </li>
              <li className="list">
                <img alt="check" src={check} />
                API Access
              </li>
              <li className="list">
                <img alt="check" src={check} />
                Dedicated Account Manager
              </li>
            </ul>
          </div>
        </div>
        <div className="p-btns">
            <button className="p-btn">Get Custom Pricing</button>
            <button className="p-btn">Select Pricing</button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
