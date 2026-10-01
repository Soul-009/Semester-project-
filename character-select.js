const characterChoice = document.querySelector("#character-choice");
const characterPreview = document.querySelector("#character-preview");

characterChoice.addEventListener("change", () => {
  characterPreview.textContent = characterChoice.value || "Choose a character";
});