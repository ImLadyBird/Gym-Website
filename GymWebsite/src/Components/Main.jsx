import Blog from "./Blog";
import OurPlan from "./OurPlan";
import Register from "./Register";
import Tools from "./Tools";

export default function Main(){
    return(
        <div>
            <OurPlan/>
            <Tools/>
            <Blog/>
            <Register/>
        </div>
    )
}