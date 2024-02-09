
import { Link } from "react-router-dom"; 

function Nav(props) {
    return (
		<body class="demo-1">
			<main>
				<nav class="menu">

					<div class="menu__item">
						<Link to="/" class="menu__item-link"> 
                			<div>HOME</div> 
            			</Link> 
						
						<div class="marquee">
							<div class="marquee__inner" aria-hidden="true">
								<span>Home</span>
								<span>Home</span>
								<span>Home</span>
								<span>Home</span>
							</div>
						</div>
					</div>

					<div class="menu__item">
						
						<Link to="/about" class="menu__item-link"> 
                			<div>ABOUT</div> 
            			</Link> 
						<div class="marquee">
							<div class="marquee__inner" aria-hidden="true">
								<span>About Me</span>
								<span>About Me</span>
								<span>About Me</span>
								<span>About Me</span>
							</div>
						</div>
					</div>

					<div class="menu__item">
						<Link to="/projects" class="menu__item-link"> 
                			<div>PROJECTS</div> 
            			</Link> 
						
						<div class="marquee">
							<div class="marquee__inner" aria-hidden="true">
								<span>My Work</span>
								<span>My Work</span>
								<span>My Work</span>
								<span>My Work</span>
							</div>
						</div>
					</div>

					<div class="menu__item">
						<Link to="/resume" class="menu__item-link"> 
                			<div>RESUME</div> 
            			</Link> 
						
						<div class="marquee">
							<div class="marquee__inner" aria-hidden="true">
								<span>Resume</span>
								<span>Resume</span>
								<span>Resume</span>
								<span>Resume</span>
							</div>
						</div>
					</div>

					<div class="menu__item">
						<Link to="/contact" class="menu__item-link"> 
                			<div>CONTACT</div> 
            			</Link> 
						
						<div class="marquee">
							<div class="marquee__inner" aria-hidden="true">
								<span>Contact</span>
								<span>Contact</span>
								<span>Contact</span>
								<span>Contact</span>
							</div>
						</div>
					</div>

				</nav>
			</main>
  	</body>




	); 
} 

export default Nav;


