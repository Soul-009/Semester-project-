const characterChoice = document.querySelector("#character-choice");
const characterPreview = document.querySelector("#character-preview");

const characterDetails = {
  "D.Va": {
    role: "Tank",
    tip: "Use Boosters to contest high ground and Defense Matrix to protect teammates."
  },
  Genji: {
    role: "Damage",
    tip: "Look for isolated targets and use Deflect to punish incoming projectiles."
  },
  Mercy: {
    role: "Support",
    tip: "Stay mobile and prioritize healing teammates who are under pressure."
  },
  Reinhardt: {
    role: "Tank",
    tip: "Lead close-range pushes and use Barrier Field to protect your team."
  },
  Tracer: {
    role: "Damage",
    tip: "Pressure isolated supports and use Recall before committing too deeply."
  },
  Winston: {
    role: "Tank",
    tip: "Dive backline targets and use Barrier Projector to create space."
  }
};

characterChoice.addEventListener("change", () => {
  if (characterChoice.value === "") {
    characterPreview.textContent = "Choose a hero to see their role and matchup tip";
  } else {
    const details = characterDetails[characterChoice.value];
    characterPreview.textContent = `${characterChoice.value} · ${details.role}\nMatchup tip: ${details.tip}`;
  }
});