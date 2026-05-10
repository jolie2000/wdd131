const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

if (currentYearElement) {
  currentYearElement.textContent = currentYear;
}

if (lastModifiedElement) {
  lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
}
