// function Home(props) {
//     return <h1>Home</h1>; 
// } 

// export default Home;

/////////////////////////////////////
import "../Home.css";
import Header from "../Components/Header"; 

function Home(props) {

	const content = document.querySelectorAll('.main-container');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('main-content')
			} else {
				entry.target.classList.remove('main-content');
			}
		});
	}, {
		threshold: 0.5
		});

	for (let i =0; content.length; i++){
		const el = content[i];
		observer.observe(el);
	};
     
    return (
        <div class="container-hero">
	        <div class="hero-home hero-content"> 
				<h1>SARAH <br/> AL-ASOUSI </h1>
	        </div>

			<Header />
			<div class="main-container">
				<main class="main">
					<div class="main-content">
						<h2>Hello</h2>
					</div>
				</main>
			</div>

		</div> 
    );


} 

export default Home;
