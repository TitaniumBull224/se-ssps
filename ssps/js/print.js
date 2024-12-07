document.addEventListener("DOMContentLoaded", (event) => {
	const uploadedFileNames = localStorage.getItem("uploadedFileNames");

	if (uploadedFileNames) {
		for (const file of uploadedFileNames) {
			console.log(file);
		}
	}
});
