// script.js

// Funktion, die aufgerufen wird, wenn der Titel geklickt wird
function handleTitleClick() {
    alert("Git und GitHub sind großartige Tools für die Versionskontrolle und Zusammenarbeit an Softwareprojekten.");
}

// Das HTML-Element für den Titel auswählen
const titleElement = document.querySelector("header h1");

// Dem Titel-Element einen Event-Listener hinzufügen
titleElement.addEventListener("click", handleTitleClick);
