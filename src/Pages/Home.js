// function Home(props) {
//     return <h1>Home</h1>; 
// } 

// export default Home;

/////////////////////////////////////
import "../Home.css";
// import Header from "../Components/Header"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';


function Home(props) {

	// const content = document.querySelectorAll('.main-container');

	// const observer = new IntersectionObserver((entries) => {
	// 	entries.forEach((entry) => {
	// 		if (entry.isIntersecting) {
	// 			entry.target.classList.add('main-content')
	// 		} else {
	// 			entry.target.classList.remove('main-content');
	// 		}
	// 	});
	// }, {
	// 	threshold: 0.5
	// 	});

	// for (let i =0; content.length; i++){
	// 	const el = content[i];
	// 	observer.observe(el);
	// };


	document.addEventListener('DOMContentLoaded', function() {
		const textSpan = document.querySelector('.text');
		const textContentArray = ['Web Developer', 'Creator', 'Young Leader', 'Optimist', 'Forever Learner'];
		let currentIndex = 0;
	  
		// Function to simulate typing effect
		function typeText(index) {
		  const currentText = textContentArray[index];
	  
		  if (currentText) {
			let charIndex = 0;
	  
			function typeChar() {
			  if (charIndex <= currentText.length) {
				textSpan.textContent = currentText.slice(0, charIndex);
				charIndex++;
				setTimeout(typeChar, 150); // Adjust typing speed (milliseconds)
			  } else {
				setTimeout(() => eraseText(index), 1000); // Pause before erasing
			  }
			}
	  
			typeChar();
		  }
		}
	  
		// Function to simulate erasing effect
		function eraseText(index) {
		  const currentText = textContentArray[index];
	  
		  if (currentText) {
			let charIndex = currentText.length;
	  
			function eraseChar() {
			  if (charIndex >= 0) {
				textSpan.textContent = currentText.slice(0, charIndex);
				charIndex--;
				setTimeout(eraseChar, 50); // Adjust erasing speed (milliseconds)
			  } else {
				currentIndex = (index + 1) % textContentArray.length;
				setTimeout(() => typeText(currentIndex), 500); // Pause before typing next text
			  }
			}
	  
			eraseChar();
		  }
		}
	  
		// Start typing effect initially
		typeText(currentIndex);
	  });


    return (
        //  <div class="container-hero">
	    //     <div class="hero-home hero-content"> 
		// 		<h1>SARAH <br/> AL-ASOUSI </h1>
	    //     </div>

		// 	<Header />
		// 	<div class="main-container">
		// 		<main class="main">
		// 			<div class="main-content">
		// 				<h2>Hello</h2>
		// 			</div>
		// 		</main>
		// 	</div> 
		// </div> 

		<div class="main-container">
  			<main class="main">
				<div class="left-content">
					<h1><span class="d-flex">Sarah Al-Asousi</span> <span class="text"></span></h1>
				</div>

         		<div class="right-content">
            		<h2>Hello World <FontAwesomeIcon icon={faHandPeace}/> <br/>I am a young Software Engineer with an ardent passion for creativity. I thrive on the intersection of technology and art, finding joy in crafting innovative solutions and bringing ideas to life through code. Welcome to my portfolio</h2>
					
          		</div>
  			</main>
		</div>
    );



} 

export default Home;
