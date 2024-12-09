const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
	item.addEventListener("click", function () {
		switchers.forEach((item) =>
			item.parentElement.classList.remove("is-active"),
		);
		this.parentElement.classList.add("is-active");
	});
});

document.addEventListener("DOMContentLoaded", (event) => {
	const loginForm = document.getElementById("login-form");

	loginForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const email = loginForm.querySelector('input[name="email"]').value;
		const password = loginForm.querySelector('input[name="pswd"]').value;
		if (email === "admin@admin.com" && password === "admin") {
			window.location.href = "dashboard.html";
		} else {
			alert("Invalid credentials");
		}
	});

	const signupForm = document.getElementById("signup-form");

	signupForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const email = signupForm.querySelector('input[name="email"]').value;
		const username = signupForm.querySelector('input[name="username"]').value;
		const password = signupForm.querySelector('input[name="pswd"]').value;
		if (
			email === "admin@admin.com" &&
			username === "user" &&
			password === "user"
		) {
			window.location.href = "dashboard.html";
		} else {
			alert("Invalid credentials");
		}
	});
});
