import "../Resume.css"; 

function Resume(props) { 

    return (
        <div className="Resume">
            <h1>Sarah Al-Asousi</h1> 
            <h2>Software Engineer | Creative Developer </h2>
            <h4>Boston, MA 02125 </h4>
            <hr></hr>
            <h3>Skills</h3>
            <p>
                <em>Technical:</em> Python, JavaScript, Html/CSS, React, Django, EJS, Node.js, AJAX, jQuery, AWS, SQL, Bootstrap, MongoDB, Qualtrics, Zoom, M365 Tools, AutoCAD, Revit, UI/UX, Adobe Studios, Heroku, Github, Command line 
                <br/>
                <em>Transferable:</em> Public speaking, customer service, leadership, inclusivity, time-management, project management, communication, technical knowledge, collaboration 
            </p>
            <h3><u>EDUCATION</u></h3>
            <p>
                <b>General Assembly Software Engineering Immersive</b>
                <br/><em>Nov 2022 - Feb 2023</em><br/> Bootcamp training program based on Full Stack Development
                <br/>
                <br/><b>University of Massachusetts Amherst</b><br/><b>Isenberg School of Management</b>
                <br/><em>May 2022</em>
                <br/>Bachelor of Business Administration in Management— Concentration in Entrepreneurship
                <br/>Minors: Computer Science and Psychology
                <ul>
                    <li>Dean’s List Scholar; Recipient of John & Abigail Adams Scholarship</li>
                </ul>
            </p>
            <h3><u>EXPERIENCE</u></h3>
            <p>
                <b>Women of Isenberg Annual Conference</b>
                <br/><em>Director of Sponsorship <br/>Spring 2021 - Spring 2022</em><br/> 
                <ul>
                    <li>Responsible for all event logistics and alternative programming for 600+ students, alumnae, and professionals</li>
                    <li>Maintained an event budget of $100,000 for advertising, promotion, swag, vendor payment</li>
                    <li>Researched and secured event keynote and 50 other speakers</li>
                    <li>Created sponsor prospectus for 40 sponsors based on various levels of donor contribution</li>
                    <li>Defined and executed the Student Ambassador program by conducting interviews and making role selections, volunteer training, and event day supervision</li>
                </ul>
                <b>Brandeis University</b>
                <br/><em>Remote Research Assistant<br/>May 2020 - May 2022</em>
                <ul>
                    <li>Conducted multidisciplinary research relevant to professor’s current projects</li>
                    <li>Recorded dictations and edited  current novel progress  and 20 other writing projects</li>
                    <li>Managed professor’s schedule by designing and enforcing agendas with strict time management plannin</li>
                    <li>Provided technical education to older professional with limited technical ability</li>
                </ul>
                <b>Mackenzie + CO. Interior Design</b>
                <br/><em>Summer Intern<br/>May - August 2019</em>
                <ul>
                    <li>Managed company’s social media  and developed conceptual project proposals with senior management using design software</li>
                </ul>
            </p>
            <h3><u>ACTIVITIES</u></h3>
            <p>
                <b>Women in Business Club at Isenberg</b>
                <br/><em>Fall 2018 - Spring 2022</em>
                <ul>
                    <li>Met with successful women in the business field and learned about their experience through series of speeches, presentations, and networking events</li>
                    <li>Participated in multiple community service events within town of Amherst and UMass campus as member of community service division</li>
                </ul>
                <b>Lead Networking Student Ambassador for Women of Isenberg (WOI)</b>
                <br/><em>Fall 2020 - Spring 2021</em>
                <ul>
                    <li>Moderated and facilitated six panels in the annual WOI conference</li>
                    <li>Designed structure of panel’s delivery and initiated conversation in a virtual conference setting</li>
                    <li>Served as a liaison between the WOI team and our sponsors, alumnae, and speakers during events</li>
                    <li>Recorded notes on panels, developed a professional toolkit, promoted social media, and marketed the conference</li>
                </ul>
                <b>Women’s Interdisciplinary Society of Entrepreneurship (WISE)</b>
                <br/><em>Fall 2019 - Spring 2020</em>
                <ul>
                    <li>Developed skills in UI/UX Design through workshops led by several representatives from Adobe</li>
                    <li>Collaborated with 12 other members in a team-based setting to create ideas and strategic methods towards improving inclusivity within workspace</li>
                    <li>Attended speeches led by prestigious entrepreneurs and CEOs who shared their stories, advise and experience</li>
                </ul>
            </p>

        </div>
    );
};

export default Resume;