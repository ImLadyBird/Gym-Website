import "./BlogStyle.css";
import picOne from "../Images/picOneMobile.png";
import picTwo from "../Images/picTwoMobile.png";
import picThree from "../Images/picdESKTOP.png";

export default function Blog() {
  return (
    <div className="BlogContainer">
      <h1>
        Fitmaker <span className="red">Blog Posts</span>
      </h1>
      <p>
        Discover essential tips to maximize your workout results and reach your
        fitness goals faster.
      </p>
      <div className="imageMobile">
        <img src={picOne} alt="fitness pictures" />
        <img src={picTwo} alt="fitness pictures" />
      </div>
      <img src={picThree} alt="fitness pictures"  className="imageDesktop"/>
    </div>
  );
}
