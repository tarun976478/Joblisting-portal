import { useState } from "react";
import api from "../services/api";

function AddJob() {

    const [profile, setProfile] = useState("");
    const [desc, setDesc] = useState("");
    const [exp, setExp] = useState(0);
    const [techs, setTechs] = useState("");

    const submitJob = async (e) => {

        e.preventDefault();

        const job = {
            profile,
            desc,
            exp: Number(exp),
            techs: techs.split(",").map(t => t.trim())
        };

        try {

            const response = await api.post("/post", job);

            alert("Job Posted Successfully!");

            console.log(response.data);

            setProfile("");
            setDesc("");
            setExp(0);
            setTechs("");

        } catch (error) {

            console.log(error);

            alert("Failed to post job.");

        }

    }

    return (

        <div>

            <h2>Add Job</h2>

            <form onSubmit={submitJob}>

                <div>

                    <label>Profile</label>

                    <br />

                    <input
                        type="text"
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                    />

                </div>

                <br />

                <div>

                    <label>Description</label>

                    <br />

                    <textarea
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />

                </div>

                <br />

                <div>

                    <label>Experience</label>

                    <br />

                    <input
                        type="number"
                        value={exp}
                        onChange={(e) => setExp(e.target.value)}
                    />

                </div>

                <br />

                <div>

                    <label>Technologies</label>

                    <br />

                    <input
                        type="text"
                        placeholder="Java, Spring Boot, MongoDB"
                        value={techs}
                        onChange={(e) => setTechs(e.target.value)}
                    />

                </div>

                <br />

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>

    );

}

export default AddJob;