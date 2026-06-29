import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

    const navigate = useNavigate();

    return (
        <div className="container">

            <h1>Job Portal</h1>

            <button onClick={() => navigate("/add-job")}>
                Hire Talent
            </button>

            <button onClick={() => navigate("/jobs")}>
                Get Job Now
            </button>

        </div>
    );
}

export default Home;