import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/allPosts")
            .then((res) => setJobs(res.data))
            .catch((err) => console.log(err));
    }, []);

    const filteredJobs = jobs.filter(job =>
        job.profile.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>

                <button onClick={() => navigate("/")}
                    style={{ padding: "10px", cursor: "pointer" }}>
                    Home
                </button>

                <input
                    placeholder="Search jobs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ padding: "10px", width: "250px" }}
                />
            </div>

            <h1>All Jobs</h1>

            <div style={{ display: "grid", gap: "15px" }}>

                {filteredJobs.map((job, index) => (
                    <div key={index}
                        style={{
                            border: "1px solid #ddd",
                            padding: "15px",
                            borderRadius: "8px"
                        }}>

                        <h2>{job.profile}</h2>
                        <p>{job.desc}</p>
                        <p>Experience: {job.exp}</p>

                        <div>
                            {job.techs?.map((t, i) => (
                                <span key={i} style={{ marginRight: "8px" }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default AllJobs;