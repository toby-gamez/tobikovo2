// Kontrola, zda je uživatel přihlášen
if (!localStorage.getItem("loggedInUser")) {
  window.location.href = "login.html";
}

// Získání přihlášeného uživatele
const loggedInUsername = localStorage.getItem("loggedInUser");
const usernameDisplay = document.getElementById("usernameDisplay");
const emailDisplay = document.getElementById("emailDisplay");
const registrationDateDisplay = document.getElementById(
  "registrationDateDisplay",
);
const statusDisplay = document.getElementById("statusDisplay");
const profileImage = document.getElementById("profileImage");
const activityList = document.querySelector(".activity-list");

// Načtení a zobrazení informací o uživateli
fetch("users.json")
  .then((response) => response.json())
  .then((users) => {
    // Najít přihlášeného uživatele
    const currentUser = users.find(
      (user) => user.username === loggedInUsername,
    );

    if (currentUser) {
      // Zobrazení informací o uživateli
      usernameDisplay.textContent = currentUser.username;
      emailDisplay.textContent = currentUser.email || "Není nastaveno";

      // Formátování data registrace
      if (currentUser.registrationDate) {
        const registrationDate = new Date(currentUser.registrationDate);
        registrationDateDisplay.textContent =
          registrationDate.toLocaleDateString("cs-CZ");
      } else {
        registrationDateDisplay.textContent = "Není k dispozici";
      }

      // Nastavení statusu
      if (currentUser.status) {
        statusDisplay.textContent =
          currentUser.status === "active" ? "Aktivní" : "Neaktivní";
        statusDisplay.className =
          currentUser.status === "active" ? "status-active" : "status-inactive";
      } else {
        statusDisplay.textContent = "Aktivní";
        statusDisplay.className = "status-active";
      }

      // Nastavení profilového obrázku
      if (currentUser.profileImage) {
        profileImage.src = currentUser.profileImage;
      }

      // Zobrazení historie aktivit
      activityList.innerHTML = "";
      if (currentUser.accountActions && currentUser.accountActions.length > 0) {
        currentUser.accountActions.forEach((action) => {
          const actionDate = new Date(action.date);
          const formattedDate = actionDate.toLocaleDateString("cs-CZ");

          const activityItem = document.createElement("div");
          activityItem.className = "activity-item";
          activityItem.innerHTML = `
                        <div class="activity-date">${formattedDate}</div>
                        <div class="activity-description">${action.action}</div>
                    `;
          activityList.appendChild(activityItem);
        });
      } else {
        // Ukázkové aktivity, pokud nejsou k dispozici v JSON souboru
        const demoActivities = [
          { date: "13.3.2025", description: "Poslední přihlášení" },
          { date: "10.3.2025", description: "Vytvoření účtu" },
        ];

        demoActivities.forEach((activity) => {
          const activityItem = document.createElement("div");
          activityItem.className = "activity-item";
          activityItem.innerHTML = `
                        <div class="activity-date">${activity.date}</div>
                        <div class="activity-description">${activity.description}</div>
                    `;
          activityList.appendChild(activityItem);
        });
      }
    }
  })
  .catch((error) => {
    console.error("Chyba při načítání dat uživatele:", error);
    // Zobrazit výchozí hodnoty při chybě
    usernameDisplay.textContent = loggedInUsername;
    emailDisplay.textContent = "Není k dispozici";
    registrationDateDisplay.textContent = "Není k dispozici";
    statusDisplay.textContent = "Aktivní";
  });

// Odhlášení
document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
});

// Funkce pro mobilní menu
function toggleMenu() {
  const navbarContent = document.getElementById("navbarContent");
  navbarContent.classList.toggle("show");
}

// Informační zprávy pro tlačítka bez reálné funkcionality
document
  .getElementById("changePassword")
  .addEventListener("click", function () {
    alert("Tato funkce není v demo verzi k dispozici.");
  });

document.getElementById("updateEmail").addEventListener("click", function () {
  alert("Tato funkce není v demo verzi k dispozici.");
});

document.getElementById("deleteAccount").addEventListener("click", function () {
  if (confirm("Opravdu chcete smazat svůj účet? Tato akce je nevratná.")) {
    alert("V demo verzi nelze účet skutečně smazat, ale budete odhlášeni.");
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  }
});

document
  .querySelector(".btn-change-avatar")
  .addEventListener("click", function () {
    alert("Tato funkce není v demo verzi k dispozici.");
  });
