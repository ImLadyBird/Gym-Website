import "./OurPlanStyle.css";

export default function OurPlan() {
  return (
    <div className="OurPlanContainer">
      <h1>
        <span className="red">Our</span> Plan
      </h1>
      <p>
        Select the plan that suits your fitness goals and let our expert coaches
        guide you every step of the way.
      </p>
      <div className="PlanButtons">
        <button class="toggle-btn active">Monthly</button>
        <button class="toggle-btn">Annauly</button>
      </div>
      <div className="PlanContainer">
        <div className="PlanCards">
          <span>Package</span>
          <h1>Custom plan</h1>
          <span>description</span>
          <p>
            Experience a fully tailored fitness experience with our Custom Plan.
            Work one-on-one with a dedicated trainer to achieve your goals.
          </p>
          <span>Features</span>
          <ul>
            <li>Access to All Of Our Exercise Videos</li>
            <li>Access to All Of Our Exercise Videos</li>
            <li>Access to All Of Our Exercise Videos</li>
            <li>Access to All Of Our Exercise Videos</li>
          </ul>
          <h3>140$</h3>
          <button className="PlanButton">Choose this plan</button>
        </div>
             <div className="PlanCards">
          <span>Package</span>
          <h1>Custom plan</h1>
          <span>description</span>
          <p>
            Experience a fully tailored fitness experience with our Custom Plan.
            Work one-on-one with a dedicated trainer to achieve your goals.
          </p>
          <span>Features</span>
          <ul>
            <li>Access to All Of Our Exercise Videos</li>
            <li>Access to All Of Our Exercise Videos</li>
            <li>Access to All Of Our Exercise Videos</li>
            <li>Access to All Of Our Exercise Videos</li>
          </ul>
          <h3>140$</h3>
          <button className="PlanButton">Choose this plan</button>
        </div>
      </div>
    </div>
  );
}
