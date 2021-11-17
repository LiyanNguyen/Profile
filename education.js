let qualifications = [
	{
		Picture: "Icons/IELTS-logo.jpg",
		QualificationName: "IELTS",
		QualificationDescription: "Listening: 7.0, Reading: 7.0, Writing: 7.5, Speaking: 7.5",
	},

	{
		Picture: "Icons/JLPT-logo.png",
		QualificationName: "JLPT",
		QualificationDescription: "Listening: TBD, Reading: TBD, Writing: TBD, Speaking: TBD",
	},
	
	{
		Picture: "Icons/vmware-logo.png",
		QualificationName: "VMware IT Academy",
		QualificationDescription: "Technical Associate",
	},
];

function renderEducation()
{
	document.querySelectorAll(".nav-link").forEach((element) => {
		element.classList.remove("active");
	});
	document.querySelector("#education-nav").classList.add("active");

	let targetElement = document.querySelector("#main-content");
	targetElement.innerHTML = ``;

	let QualificationCardComponent = ``;
	
	for (let i = 0; i < qualifications.length; i++)
	{
		QualificationCardComponent += `
		<div class="col-lg-6 mb-3">
			<div class="card">
				<div class="card-body">
					<div class="row">
						<div class="col-3">
							<img src="${qualifications[i].Picture}" class="rounded" width="100%" height="100%">
						</div>
						<div class="col-9">
							<h5 class="card-title">${qualifications[i].QualificationName}</h5>
							<p class="card-text fw-light">${qualifications[i].QualificationDescription}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		`;
	}

	let markUp = `
	<div class="row g-0 pt-5 mt-3 px-3 d-flex justify-content-start">
		<div class="col-lg-9 mb-3">
			<div class="card shadow snow-white">
				<div class="card-body">
					<div class="row">
						<div class="col-lg-6 mb-3">
							<img src="Pictures/UoW_campus.png" class="rounded mx-auto" width="100%" height="100%">
						</div>
						<div class="col-lg-6">
							<h5 class="card-title">University of Wollogong</h5>
							<p class="fw-light">UOW is one of the world's top modern universities, offering excellence in teaching, learning, and research, and an unparalleled student experience.</p>
							<hr>
							<table class="table table-borderless">
								<tbody>
									<tr>
										<th>Course Studied</th>
										<td>Bachelors in Computer Science</td>
									</tr>
									<tr>
										<th>Date</th>
										<td>2018 - 2021</td>
									</tr>
									<tr>
										<th>Grade</th>
										<td>A (Distinction)</td>
									</tr>
									<tr>
										<th>Website</th>
										<td><a href="https://www.uow.edu.au/" target="_blank">uow.edu.au</a></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row g-0 px-3 d-flex justify-content-end">
		<div class="col-lg-9 mb-3">
			<div class="card shadow snow-white">
				<div class="card-body">
					<div class="row">
						<div class="col-lg-6">
							<h5 class="card-title">Management Development Institute of Singapore</h5>
							<p class="fw-light">Founded in 1956, the Management Development Institute of Singapore (MDIS) is Singapore's oldest not-for-profit professional institute for lifelong learning.</p>
							<hr>
							<table class="table table-borderless">
								<tbody>
									<tr>
										<th>Course Studied</th>
										<td>Diploma in Information Technology and Business</td>
									</tr>
									<tr>
										<th>Date</th>
										<td>2016 - 2018</td>
									</tr>
									<tr>
										<th>Grade</th>
										<td>A (Distinction)</td>
									</tr>
									<tr>
										<th>Website</th>
										<td><a href="https://www.mdis.edu.sg/" target="_blank">mdis.edu.sg</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col-lg-6">
							<img src="Pictures/MDIS_campus.jpeg" class="rounded mx-auto" width="100%" height="100%">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row g-0 px-3 d-flex justify-content-start">
		<div class="col-lg-9 mb-3">
			<div class="card shadow snow-white">
				<div class="card-body">
					<div class="row">
						<div class="col-lg-6 mb-3">
							<img src="Pictures/UoO_campus.jpg" class="rounded mx-auto" width="100%" height="100%">
						</div>
						<div class="col-lg-6">
							<h5 class="card-title">University of Otago</h5>
							<p class="fw-light">The University of Otago is ranked in the top 1% of universities in the world. It is a public university based in Dunedin, Otago, New Zealand.</p>
							<hr>
							<table class="table table-borderless">
								<tbody>
									<tr>
										<th>Course Studied</th>
										<td>Foudation Programme in Applied Sciences</td>
									</tr>
									<tr>
										<th>Date</th>
										<td>2014 - 2015</td>
									</tr>
									<tr>
										<th>Grade</th>
										<td>GPA 9.0 out of 10</td>
									</tr>
									<tr>
										<th>Website</th>
										<td><a href="https://www.otago.ac.nz/" target="_blank">otago.ac.nz</a></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row g-0 px-3 d-flex justify-content-center">
		<div class="col-lg-12 mb-3">
			<div class="card shadow snow-white">
				<h5 class="card-header d-flex justify-content-center">Other Qualifications</h5>
				<div class="card-body">
					<div class="row">
						${QualificationCardComponent}
					</div>	
				</div>
			</div>
		</div>
	</div>`;

	targetElement.innerHTML = markUp;
}
