import "./ToolsStyle.css";
import Toolone from "../Images/t1.png";
import Tooltwo from "../Images/t2.png";
import Toolthree from "../Images/t3.png";
import Toolfour from "../Images/t4.png";

export default function Tools() {
  return (
    <div className="ToolsContainer">
      <h1>
        Our Fitness <span className="red">Tools</span>
      </h1>
      <p>
        Access a variety of tools to help you reach your fitness goals more
        effectively
      </p>
      <div className="ToolsCards">
        <div className="ToolCard">
          <img src={Toolone} alt="icon" />
        </div>
        <div className="ToolCard">
          <img src={Tooltwo} alt="icon" />
        </div>
        <div className="ToolCard">
          <img src={Toolthree} alt="icon" />
        </div>
        <div className="ToolCard">
          <img src={Toolfour} alt="icon" />
        </div>
        <div className="ToolCard">
          <img src={Tooltwo} alt="icon" />
        </div>
      </div>
    </div>
  );
}
