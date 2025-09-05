import "./HeaderStyle.css";
import mobileBanner from "../Images/bannermobile.png";
import mobileBannerTxt from "../Images/bannermobiletxt.png";
import line from "../Images/Line 4.png";
import DesktopBanner from "../Images/bannerDesktop.png";
import desktopBannerTxt from "../Images/bannerDesktopTxt.png";
import Hline from "../Images/hLine 4.png";

export default function Header() {
  return (
    <div>
      <div className="HeadeerMobileContainer">
        <div className="HeaderImage">
          <img src={mobileBannerTxt} alt="banner" />
          <img src={mobileBanner} alt="banner" />
        </div>
        <p className="HeaderText">
          "Join the Fitmaker community and transform your fitness journey. Our
          expert coaches and personalized programs are designed to help you
          achieve your goals and exceed your expectations. Ready to make a
          change?"
        </p>
        <div className="buttons">
          <button className="HeaderButton">Start Your Journey</button>
          <button className="HeaderButton">explore programs</button>
        </div>
        <div className="HeaderInfo">
          <div>
            <h2>
              <span className="red">96%</span> Client Satisfaction
            </h2>
            <p>Our members love their results and experience</p>
            <img src={line} alt="" />
          </div>
          <div>
            <h2>
              <span className="red">+5</span> years of Experience
            </h2>
            <p>Our members love their results and experience</p>
            <img src={line} alt="" />
          </div>
          <div>
            <h2>
              <span className="red">+800 </span> Active Members
            </h2>
            <p>Our members love their results and experience</p>
            <img src={line} alt="" />
          </div>
          <div>
            <h2>
              <span className="red">24/7</span> Support Available
            </h2>
            <p>Our members love their results and experience</p>
          </div>
        </div>
      </div>
      <div className="HeadeerDesktopContainer">
        <div className="HeaderDesktopTxt">
          <img src={desktopBannerTxt} alt="banner" />
          <p>
            "Join the Fitmaker community and transform your fitness journey. Our
            expert coaches and personalized programs are designed to help you
            achieve your goals and exceed your expectations. Ready to make a
            change?"
          </p>
          <div className="HeaderDesktopButtons">
            <button className="HeaderButton">Start Your Journey</button>
            <button className="HeaderButton">explore programs</button>
          </div>
        </div>
        <img src={DesktopBanner} alt="" />
      </div>

      <div className="HeaderInfoDesktop">
        <div>
          <h2>
            <span className="red">96%</span> Client Satisfaction
          </h2>
          <p>Our members love their results and experience</p>
        </div>
        <img src={Hline} alt="line" />
        <div>
          <h2>
            <span className="red">+5</span> years of Experience
          </h2>
          <p>Our members love their results and experience</p>
        </div>
        <img src={Hline} alt="line" />
        <div>
          <h2>
            <span className="red">+800 </span> Active Members
          </h2>
          <p>Our members love their results and experience</p>
        </div>
        <img src={Hline} alt="line" />
        <div>
          <h2>
            <span className="red">24/7</span> Support Available
          </h2>
          <p>Our members love their results and experience</p>
        </div>
      </div>
    </div>
  );
}
