//state variable to hold data, effect function to prevent infinite loop
import { useState, useEffect } from "react"; 

import "../About.css";

function About(props) { 
    // create state to hold about data 
    const [about, setAbout] = useState(null); 
    
    // create function to make api call 
    const getAboutData = async () => {
        const response = await fetch(props.URL + "about");
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => {getAboutData()}, []); 

    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h4><em>{about.email}</em></h4>
            <h4><a href={about.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></h4>
            <h4><a href={about.github} target="_blank" rel="noopener noreferrer">GitHub</a></h4>
            <p><hr></hr>{about.bio}</p>
        </div>
    );

    return about ? loaded() : <h1>Loading...</h1>;
}
    
export default About;
