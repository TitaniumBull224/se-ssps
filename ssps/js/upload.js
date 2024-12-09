const uploadArea = document.querySelector(".upload-area");
const fileInput = document.querySelector("#file-input");
const uploadedFilesContainer = document.querySelector(".uploaded-files");
const browseButton = document.querySelector(".browse-button");

browseButton.addEventListener("click", () => {
	fileInput.click();
});

const uploadedFileNames = new Set();

fileInput.addEventListener("change", (event) => {
	const files = event.target.files;
	addUploadedFiles(files);
	localStorage.setItem(
		"uploadedFileNames",
		JSON.stringify([...uploadedFileNames]),
	);
});

function addUploadedFiles(files) {
	for (const file of files) {
		if (!uploadedFileNames.has(file.name)) {
			uploadedFileNames.add(file.name);

			const uploadedFileDiv = document.createElement("div");
			uploadedFileDiv.classList.add("uploaded-file");

			const fileIcon = document.createElement("img");
			fileIcon.src = "img/upload/file_icon.svg";
			fileIcon.alt = "";
			fileIcon.classList.add("file-icon");

			const fileInfo = document.createElement("div");
			fileInfo.classList.add("file-info");

			const fileName = document.createElement("p");
			fileName.classList.add("file-name");
			fileName.textContent = file.name;

			const fileSize = document.createElement("p");
			fileSize.classList.add("file-size");
			fileSize.textContent = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

			fileInfo.appendChild(fileName);
			fileInfo.appendChild(fileSize);

			const deleteIcon = document.createElement("img");
			deleteIcon.src = "img/upload/delete_icon.svg";
			deleteIcon.alt = "";
			deleteIcon.classList.add("delete-icon");
			deleteIcon.addEventListener("click", () => {
				uploadedFilesContainer.removeChild(uploadedFileDiv);
				uploadedFileNames.delete(file.name);
				if (!uploadedFileNames.size) {
					uploadedFilesContainer.style.display = "none";
				}
				localStorage.setItem(
					"uploadedFileNames",
					JSON.stringify([...uploadedFileNames]),
				);
			});

			// Append elements to uploaded-file div
			uploadedFileDiv.appendChild(fileIcon);
			uploadedFileDiv.appendChild(fileInfo);
			uploadedFileDiv.appendChild(deleteIcon);

			// Add uploaded-file div to the container
			uploadedFilesContainer.appendChild(uploadedFileDiv);
			uploadedFilesContainer.style.display = "block";
		} else {
			alert(`File "${file.name}" is already uploaded.`);
		}
	}
}

// Optional: Add drag-and-drop functionality
uploadArea.addEventListener("dragover", (event) => {
	event.preventDefault();
	uploadArea.classList.add("dragover");
});

uploadArea.addEventListener("dragleave", () => {
	uploadArea.classList.remove("dragover");
});

uploadArea.addEventListener("drop", (event) => {
	event.preventDefault();
	uploadArea.classList.remove("dragover");
	const files = event.dataTransfer.files;
	addUploadedFiles(files);
});
