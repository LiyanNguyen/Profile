function renderProfile()
{
	document.querySelectorAll(".nav-link").forEach(element => {element.classList.remove("active")});
	document.querySelector("#profile-nav").classList.add("active");

	let targetElement = document.querySelector("#main-content");
	targetElement.innerHTML = ``;

	let markUp = `
	<div class="row g-0 p-lg-5 mt-4">
		<div class="col-lg-4 p-lg-3">
			<img src="Pictures/Jose.png" class="img-fluid rounded-3">
		</div>
		<div class="col-lg-8 p-lg-3">
			<hr class="mx-3">
			<h2 class="px-3 animate__animated animate__fadeInUp">Hi, I am Jose Leandrino</h2>
			<p class="pt-2 px-3 animate__animated animate__fadeIn animate__delay-1s">I am a software engineer based in Singapore. I am currently focusing on Front-end Web Development and have worked on multiple projects that includes usage of certain web development frameworks such as Bootstrap, Tailwind, Vue, Angular, React, and Svelte.</p>
	
			<p class="pt-2 px-3 animate__animated animate__fadeIn animate__delay-1s">You can view my technical <a href="#" onclick="renderSkills()">skills</a> in detail or take a look at some sample of the <a href="#" onclick="renderProjects()">projects</a> I have worked on.</p>
	
			<p class="pt-2 px-3 animate__animated animate__fadeIn animate__delay-1s">My personal favorite is Vue, Svelte and even just plain vanilla JavaScript using modern JS-framework standards like usage of components, reactivity, and data binding. This website itself is made with pure vanilla JS using modern framework standards and mobile responsive design.</p>
	
			<p class="pt-2 px-3 animate__animated animate__fadeIn animate__delay-1s">I have also some experience with Game Development using Unity Engine, Autodesk Maya, Blender. As well as, Systems and Database Management using Linux OS, MySQL, MongoDB. I use Linux Mint as my daily driver and have been using it since 2021.</p>
	
			<p class="pt-2 px-3 animate__animated animate__fadeIn animate__delay-1s">I graduated from University of Wollogong (Australia) with a Bachelor's Degree in Computer Science. You can take a look at my <a href="#" onclick="renderEducation()">education</a> history and qualitications in detail.</p>
	
			<hr class="mx-3">
			<div class="animate__animated animate__fadeIn animate__delay-2s">
				<i class="fab fa-linkedin ms-3" style="font-size: 1.5rem;"></i> <a href="https://www.linkedin.com/in/joseanajao/" target="_blank">LinkedIn</a>
				<i class="fab fa-github ms-2" style="font-size: 1.5rem;"></i> <a href="https://github.com/LiyanNguyen" target="_blank">GitHub</a>

				<i class="far fa-envelope ms-2" style="font-size: 1.5rem;"></i> liyannguyenn@gmail.com
			</div>
		</div>
	</div>`;
	
	targetElement.innerHTML = markUp;
}