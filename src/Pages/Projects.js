import { useState, useEffect } from "react"; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import "../Projects.css";

function Projects(props) { 
    // create state to hold projects 
    const [projects, setProjects] = useState(null); 


    //create function to make api call 
    const getProjectsData = async() => { 
        //make api call and get response 
        const response = await fetch(props.URL + "projects"); 
        
        // turn response into javascript object 
        const data = await response.json(); 
        
        // set the projects state to the data 
        setProjects(data); 
    }; 
    
    
    useEffect(() => {getProjectsData()}, []); 
    
    // const loaded = () => { 
    //     return projects.map((project) => ( 
    //         <div> 
    //             <h1>{project.name}</h1> 

    //             <img src={project.image} /> 

    //             <a href={project.git}> 
    //                 <button>Github</button> 
    //             </a> 

    //             <a href={project.live}> 
    //                 <button>live site</button> 
    //             </a> 
    //         </div> 
    //     )); 
    // }; 

    const Accordion = (project) => {
        const [isActive, setIsActive] = useState(false);

        return(
            <div className="accordion-container">
            <div className="accordion">
                <div className="accordion-item" >
                    <a className="accordion-link" onClick={() => setIsActive(!isActive)}>
                        <div className="flex">
                            <h1>{project.name}</h1> 
                        </div>

                        {isActive ? <FontAwesomeIcon icon={faArrowRight}/> : <FontAwesomeIcon icon={faArrowDown} />}
                    </a>
                    {isActive && <div className="answer">
                            <p> <img src={project.image} alt=""/> 
                                <a href={project.git} target="_blank" rel="noopener noreferrer"> 
                                    <button className="button">
                                        <div className="button__bg"></div><span>GitHub</span>
                                    </button> 
                                </a>

                                <a href={project.live} target="_blank" rel="noopener noreferrer"> 
                                    <button className="button">
                                        <div className="button__bg"></div><span>Live Site</span>
                                    </button> 
                                </a> 

                               
                            </p>
                        </div>}
                        <hr></hr>
                        </div>
                    </div> 
                </div>
        );
    };

    

    const loaded = () => { 
        return ( 
            <div className="accordion">
                {projects.map((project) => (
                    <Accordion name={project.name} image={project.image} git={project.git} live={project.live}/>
                ))}
            </div>
        ); 
    };


    return projects ? loaded() : <h1>Loading...</h1>; 
} 

export default Projects;

