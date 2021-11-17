let fundamentalSkills = [
	{ Picture: "Icons/C++.png", SkillName: "C++", MasteryLevel: "5/10" },
	{ Picture: "Icons/Csharp.png", SkillName: "C#", MasteryLevel: "3/10" },
	{ Picture: "Icons/JS.png", SkillName: "JavaScript", MasteryLevel: "7/10" },
	{ Picture: "Icons/Python.png", SkillName: "Python", MasteryLevel: "5/10" },
	{ Picture: "Icons/PHP.png", SkillName: "PHP", MasteryLevel: "3/10" },
	{ Picture: "Icons/Java.png", SkillName: "Java", MasteryLevel: "5/10" },
	{ Picture: "Icons/PLSQL.png", SkillName: "PL/SQL", MasteryLevel: "5/10" },
	{ Picture: "Icons/Bash.png", SkillName: "Bash", MasteryLevel: "1/10" },
	{ Picture: "Icons/HTML.png", SkillName: "HTML", MasteryLevel: "9/10" },
	{ Picture: "Icons/CSS.png", SkillName: "CSS", MasteryLevel: "5/10" },
];

let frameworkSkills = [
	{ Picture: "Icons/Bootstrap.png", SkillName: "Bootstrap", MasteryLevel: "7/10" },
	{ Picture: "Icons/React.png", SkillName: "React", MasteryLevel: "2/10" },
	{ Picture: "Icons/Tailwind.png", SkillName: "Tailwind", MasteryLevel: "4/10" },
	{ Picture: "Icons/JQuery.png", SkillName: "JQuery", MasteryLevel: "3/10" },
	{ Picture: "Icons/Angular.png", SkillName: "Angular", MasteryLevel: "2/10" },
	{ Picture: "Icons/Vue.png", SkillName: "Vue", MasteryLevel: "4/10" },
	{ Picture: "Icons/Svelte.png", SkillName: "Svelte", MasteryLevel: "4/10" },
	{ Picture: "Icons/Django.png", SkillName: "Django", MasteryLevel: "1/10" },
	{ Picture: "Icons/Laravel.png", SkillName: "Laravel", MasteryLevel: "1/10" },
	{ Picture: "Icons/Node.png", SkillName: "Node", MasteryLevel: "1/10" },
];

function renderSkills()
{
	document.querySelectorAll(".nav-link").forEach(element => {element.classList.remove("active")});
	document.querySelector("#skills-nav").classList.add("active");

	let targetElement = document.querySelector("#main-content");
	targetElement.innerHTML = ``;

	let SkillCardComponent = ``;
	let FrameworkCardComponent = ``;

	for (let i = 0; i < fundamentalSkills.length; i++)
	{
		SkillCardComponent += `
		<div class="col-lg-3 mb-3 px-2">
			<div class="card shadow snow-white">
				<div class="card-body">
					<img src="${fundamentalSkills[i].Picture}" class="img-fluid mx-auto d-block mb-3" style="width: 120px; height:120px">
					<h5 class="card-title text-center">${fundamentalSkills[i].SkillName}</h5>
					<table class="table">
						<tbody>
							<tr>
								<th>Mastery Level</th>
								<td>${fundamentalSkills[i].MasteryLevel}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>`;
	}

	for (let i = 0; i < frameworkSkills.length; i++)
	{
		FrameworkCardComponent += `
		<div class="col-lg-3 mb-3 px-2">
			<div class="card shadow snow-white">
				<div class="card-body">
					<img src="${frameworkSkills[i].Picture}" class="img-fluid mx-auto d-block mb-3" style="width: 120px; height:120px">
					<h5 class="card-title text-center">${frameworkSkills[i].SkillName}</h5>
					<table class="table">
						<tbody>
							<tr>
								<th>Mastery Level</th>
								<td>${frameworkSkills[i].MasteryLevel}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>`;
	}

	let markUp = `
	<div class="row g-0 pt-5 mt-4">
		<h1 class="px-2">Fundamentals</h1>
		${SkillCardComponent}
	</div>
	<div class="row g-0 mt-5">
		<h1 class="px-2">Frameworks</h1>
		${FrameworkCardComponent}
	</div>`;

	targetElement.innerHTML = markUp;
}