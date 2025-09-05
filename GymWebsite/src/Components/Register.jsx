import "./RegisterStyle.css";
import google from "../Images/google.png";
import or from "../Images/or.png";

export default function Register() {
  return (
    <div className="RegisterContainer">
      <div className="RegisterContainerleft">
        <h1>
          Join Our <span className="red">Fitness Community</span>
        </h1>
        <p>
          Sign up now to unlock exclusive access to personalized workout plans,
          expert coaching, and a supportive community that will help you achieve
          your fitness goals.
        </p>
        <div className="RegisterCardsContainer">
          <div className="RegisterCards">
            <div>
              <h3>
                <span className="red">Personal</span> Workout Plans
              </h3>
              <p>
                Customized routines that match your level, ensuring you the best
                results in the most efficient way.
              </p>
            </div>
            <div>
              <h3>
                <span className="red">Personal</span> Workout Plans
              </h3>
              <p>
                Customized routines that match your level, ensuring you the best
                results in the most efficient way.
              </p>
            </div>
          </div>
          <div className="RegisterCards">
            <div>
              <h3>
                <span className="red">Personal</span> Workout Plans
              </h3>
              <p>
                Customized routines that match your level, ensuring you the best
                results in the most efficient way.
              </p>
            </div>
            <div>
              <h3>
                <span className="red">Personal</span> Workout Plans
              </h3>
              <p>
                Customized routines that match your level, ensuring you the best
                results in the most efficient way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Form">
        <div className="LoginButtons">
          <h5>SignUp</h5>
          <h5>LogIn</h5>
        </div>
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" placeholder="Enter your name" />
        <label htmlFor="">Email</label>
        <input type="text" name="" id="" placeholder="Enter your email" />
        <button className="SignUpBtn">Sign Up</button>
        <img src={or} alt="decorate" />
        <button className="googleBtn">
          <img src={google} alt="google icon" />
          <p>sign Up with your Google</p>
        </button>
      </div>
    </div>
  );
}
