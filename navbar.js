function renderNavbar()
{
	let targetElement = document.querySelector("#top-navbar");
	targetElement.innerHTML = ``;

	let markUp = `
	<nav class="navbar navbar-expand navbar-dark fixed-top navy-blue">
		<div class="container-fluid justify-content-center">
			<ul class="navbar-nav list-group-horizontal">
				<li class="nav-item">
					<a id="profile-nav" class="nav-link" href="#" onclick="renderProfile()"><i class="fas fa-user-alt"></i> Profile</a>
				</li>
				<li class="nav-item">
					<a id="skills-nav" class="nav-link" href="#" onclick="renderSkills()"><i class="fas fa-code"></i> Skills</a>
				</li>
				<li class="nav-item">
					<a id="projects-nav" class="nav-link" href="#" onclick="renderProjects()"><i class="fas fa-code-branch"></i> Projects</a>
				</li>
				<li class="nav-item">
					<a id="education-nav" class="nav-link" href="#" onclick="renderEducation()"><i class="fas fa-graduation-cap"></i> Education</a>
				</li>
			</ul>
		</div>
	</nav>`;

	targetElement.innerHTML = markUp;
}