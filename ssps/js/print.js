document.addEventListener("DOMContentLoaded", (event) => {
	const pageRangeSelect = document.getElementById("pageRange");
	const pageSelectedDiv = document.getElementById("pageSelect");

	pageRangeSelect.addEventListener("change", (event) => {
		if (event.target.value === "custom") {
			pageSelectedDiv.classList.remove("hidden");
		} else {
			pageSelectedDiv.classList.add("hidden");
		}
	});

	const printButton = document.getElementById("printButton");
	printButton.addEventListener("click", (event) => {
		const uploadedFileNames = JSON.parse(
			localStorage.getItem("uploadedFileNames") || "[]",
		);
		console.log(uploadedFileNames);
		alert("Printing...");
		if (uploadedFileNames) {
			for (const file of uploadedFileNames) {
				alert(file);
			}
		}

		alert("Printed successfully!");
		window.location.href = "dashboard.html";
	});
});
