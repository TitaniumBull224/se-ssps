const uploadArea = document.querySelector(".upload-area");
const fileInput = document.querySelector("#file-input");
const browseButton = document.querySelector(".browse-button");

browseButton.addEventListener("click", () => {
	fileInput.click();
});

fileInput.addEventListener("change", (event) => {
	handleFiles(event.target.files);
});

uploadArea.addEventListener("dragover", (event) => {
	event.preventDefault(); // Prevent default to allow drop
	uploadArea.classList.add("dragover");
});

uploadArea.addEventListener("dragleave", () => {
	uploadArea.classList.remove("dragover");
});

uploadArea.addEventListener("drop", (event) => {
	event.preventDefault();
	uploadArea.classList.remove("dragover");
	handleFiles(event.dataTransfer.files);
});

function handleFiles(files) {
	for (const file of files) {
		console.log("Uploaded file:", file.name);
		alert(`Uploaded file: ${file.name}`);

		// Add code to process the uploaded file, e.g., upload to a server
		localStorage.setItem("uploadedFileName", file.name);
	}
}
