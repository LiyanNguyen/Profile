let projects = [
	{
		Picture: "Icons/HawkIDS.png",
		ProjectName: "Hawk IDS",
		ProjectType: "Mobile Application for Intrusion Detection System",
		ProjectLink: "https://liyannguyen.github.io/Hawk-IDS-App/index.html",
	},

	{
		Picture: "Icons/JPRestaurant.png",
		ProjectName: "Japanese Restaurant App",
		ProjectType: "Mobile Application for ordering food inside restaurant",
		ProjectLink: "https://liyannguyen.github.io/Japanese-Restaurant/",
	},
];

function renderProjects()
{
	document.querySelectorAll(".nav-link").forEach((element) => {
		element.classList.remove("active");
	});
	document.querySelector("#projects-nav").classList.add("active");

	let targetElement = document.querySelector("#main-content");
	targetElement.innerHTML = ``;

	let ProjectCardComponent = ``;

	for (let i = 0; i < projects.length; i++)
	{
		ProjectCardComponent += `
		<div class="col-lg-3 mb-3 px-2">
			<div class="card shadow snow-white">
				<div class="card-body">
					<img src="${projects[i].Picture}" class="img-fluid rounded mx-auto d-block" style="width: 150; height:150">
					<h5 class="card-title text-center my-2">${projects[i].ProjectName}</h5>
					<h6 class="my-2 text-muted text-center">${projects[i].ProjectType}</h6>
					<hr>
					<div class="d-flex justify-content-center my-2">
						<a href="${projects[i].ProjectLink}" class="btn btn-outline-primary" target="_blank">Try Demo</a>
					</div>
				</div>
			</div>
		</div>`;
	}

	let markUp = `
	<div class="row g-0 pt-5 mt-4">
		${ProjectCardComponent}
	</div>`;

	targetElement.innerHTML = markUp;
}
