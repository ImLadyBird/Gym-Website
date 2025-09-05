import "./FooterStyle.css";
import logo from "../Images/footerlogo.png";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="logoFooter">
        <img src={logo} alt="logo" />
        <p>
          Transform Your Body with FitMaker, Your Trusted Partner in Fitness.
          With Over 5 Years of Experience, We Offer Expert Coaching, Tailored
          Workout Plans, and Comprehensive Nutritional Guidance. Join Our
          Community and Start Your Journey Towards a Healthier, Stronger You.
          Ready to Make a Change?
        </p>
      </div>
      <div className="ListContainer">
        <ul>
          <li><span className="red">Company</span></li>
          <li>About us</li>
          <li>Our Services</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Testimonial</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li><span className="red">Company</span></li>
          <li>About us</li>
          <li>Our Services</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Testimonial</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li><span className="red">Company</span></li>
          <li>About us</li>
          <li>Our Services</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Testimonial</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
