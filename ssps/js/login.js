const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
	item.addEventListener("click", function () {
		switchers.forEach((item) =>
			item.parentElement.classList.remove("is-active"),
		);
		this.parentElement.classList.add("is-active");
	});
});

function Login() {
	alert("Login Successful");
	window.location.href = "dashboard.html";
}
