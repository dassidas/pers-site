import React from 'react';
import PalateCleanserLaunch from '/client/components/PalateCleanserLaunch.jsx';

export default Intro = () => (
	<div>
		<img src={"/assets/intro--logo.png"} className="intro--logo" />
		<a href="https://www.linkedin.com/in/alexjhannan"><img src={"/assets/intro--linkedInIcon.svg"} className="intro--icon" /></a>
		<a href="https://www.github.com/alexjhannan"><img src={"/assets/intro--gitHubIcon.svg"} className="intro--icon" /></a>
		<div className="intro--textBox">
			<PalateCleanserLaunch />
			<p className="center">Hi! My name is Alex, and <span className="accentText">I’m a self-taught developer</span> in NYC.</p>
			<p>A year ago, I was teaching <span className="accentText">calculus</span> and <span className="accentText">physics</span> at a private high school. Disappointing career options had my eyes wandering towards other paths. The market is pushing towards tech, like it always has, and I have always been a techy at heart. It just made sense to make the switch.</p>
			<p>I was a bit skeptical of the canned education that bootcamps were offering, and I was also pretty confident in managing an educational plan. <span className="accentText">So, I taught myself how to code.</span> It didn’t hurt that I studied physics in school and had already learned many of the underlying concepts. <span className="accentText">Before I knew it, I was building and deploying web applications by myself.</span> Nowadays, I play with design on top of the full stack, and am always looking for the next skill to add to my capabilities.</p>
			<p>If you’re a part of a team that’s interested in an <span className="accentText">ambitious and independent coder</span>, or a client interested in hiring for some contract work, please <span className="accentText">feel free to email me at alexjhannan@gmail.com!</span> I am currently looking for both full-time positions and contracts.</p>
			<p className="center">Thanks, and have a great day!</p>
			<p>PS: Check out the table below for a brief overview of my skill set, my resume for a more in-depth look, or just “pick my brain” for some interesting links to get a sense of who I am.</p>
		</div>
	</div>
)
