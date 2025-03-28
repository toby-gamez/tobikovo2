document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("myNavbar");

  var navbarContent = `
    <link href="libs/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <!-- Mobilní hlavička -->
    <div class="mobile-header">
        <div>
            <a href="home.html">
                    <img class="navImg" src="images/white-logo.png" width="150px" alt="">
            </a>
        </div>
        <div>
        <i class="bi bi-sun"></i>
        <label class="switch">
            <input type="checkbox" id="dark-mode-toggle-mobile">
            <span class="slider round"></span>
        </label>
        <i class="bi bi-moon"></i>
        </div>
        <div class="nav-link-content">
            <span id="openSearch"><i class="bi bi-search"></i></span>
        </div>

        <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
            <i class="bi bi-list"></i>
        </button>
    </div>

    <!-- Mobilní menu -->
    <div class="mobile-menu">
        <ul class="nav flex-column">
                      <li class="nav-item">
                <a class="nav-link navHo" href="home.html">
                    <div class="nav-link-content">
                        <i class="bi bi-house-door"></i>
                        <span>Domů</span>
                    </div>
                </a>
            </li>
            <li class="nav-item" style="padding-top: 3rem">
                <a class="nav-link navAb" href="mluvnice.html">
                    <div class="nav-link-content">
                        <i class="bi bi-journal-text"></i>
                        <span>Mluvnice</span>
                    </div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link navLi" href="literatura.html">
                    <div class="nav-link-content">
                        <i class="bi bi-book"></i>
                        <span>Literatura</span>
                    </div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link navSl" href="sloh.html">
                    <div class="nav-link-content">
                        <i class="bi bi-pen"></i>
                        <span>Sloh</span>
                    </div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link navHu" href="hudebni-vychova.html">
                    <div class="nav-link-content">
                        <i class="bi bi-music-note"></i>
                        <span>Hudební výchova</span>
                    </div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link navMa" href="matematika.html">
                    <div class="nav-link-content">
                        <i class="bi bi-calculator"></i>
                        <span>Matematika</span>
                    </div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link navCh" href="chemie.html">
                    <div class="nav-link-content">
                        <i class="bi bi-balloon"></i>
                        <span>Chemie</span>
                    </div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link navFy" href="fyzika.html">
                    <div class="nav-link-content">
                        <i class="bi bi-gear"></i>
                        <span>Fyzika</span>
                    </div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link navFy" href="prirodopis.html">
                    <div class="nav-link-content">
                        <i class="bi bi-flower2"></i>
                        <span>Přírodopis</span>
                    </div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link navFy" href="zemepis.html">
                    <div class="nav-link-content">
                        <i class="bi bi-globe-americas"></i>
                        <span>Zeměpis</span>
                    </div>
                </a>
            </li>
            <li class="nav-item" style="padding-top: 3rem">
                <a class="nav-link navAb" href="about.html">
                    <div class="nav-link-content">
                        <i class="bi bi-info-circle"></i>
                        <span>O mně</span>
                    </div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link navNa" href="kalendar.html">
                    <div class="nav-link-content">
                        <i class="bi bi-calendar-week"></i>
                        <span>Kalendář</span>
                    </div>
                </a>
                </li>
            <li class="nav-item">
                <a class="nav-link navNa" href="nazor.html">
                    <div class="nav-link-content">
                        <i class="bi bi-question-circle"></i>
                        <span>Zpětná vazba</span>
                    </div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link navCha" href="changelog.html">
                    <div class="nav-link-content">
                        <i class="bi bi-file-text"></i>
                        <span>Deník změn</span>
                    </div>
                </a>
            </li>
            <div class="version-info">25w12a</div>

           <li class="nav-item" style="padding-top: 3rem">
                <a class="nav-link" href="#">
                    <div class="nav-link-content">
                    </div>
                </a>
            </li>
        </ul>
    </div>

    <!-- Desktop sidebar -->
    <div id="MyNavBar">
        <a href="home.html" style="margin-left: auto; margin-right: auto"><img class="navImg" src="images/white-logo.png" width="150px"></img></a>
        <div class="scrollable-menu">
            <ul class="nav flex-column w-100">
                <li class="nav-item">
                    <a class="nav-link navHo" href="home.html">
                        <div class="nav-link-content">
                            <i class="bi bi-house-door"></i>
                            <span>Domů</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a id="openSearch" href="#" class="nav-link">
                        <span><i class="bi bi-search"></i>   Hledat</span>
                        <span class="key-icon">K</span>
                    </a>
                </li>
                <li class="nav-item" style="padding-top: 3rem">
                    <a class="nav-link navAb" href="mluvnice.html">
                        <div class="nav-link-content">
                            <i class="bi bi-journal-text"></i>
                            <span>Mluvnice</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navLi" href="literatura.html">
                        <div class="nav-link-content">
                            <i class="bi bi-book"></i>
                            <span>Literatura</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navSl" href="sloh.html">
                        <div class="nav-link-content">
                            <i class="bi bi-pen"></i>
                            <span>Sloh</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navHu" href="hudebni-vychova.html">
                        <div class="nav-link-content">
                            <i class="bi bi-music-note"></i>
                            <span>Hudební výchova</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navMa" href="matematika.html">
                        <div class="nav-link-content">
                            <i class="bi bi-calculator"></i>
                            <span>Matematika</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navCh" href="chemie.html">
                        <div class="nav-link-content">
                            <i class="bi bi-balloon"></i>
                            <span>Chemie</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navFy" href="fyzika.html">
                        <div class="nav-link-content">
                            <i class="bi bi-gear"></i>
                            <span>Fyzika</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navFy" href="prirodopis.html">
                        <div class="nav-link-content">
                            <i class="bi bi-flower2"></i>
                            <span>Přírodopis</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navFy" href="zemepis.html">
                        <div class="nav-link-content">
                            <i class="bi bi-globe-americas"></i>
                            <span>Zeměpis</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item" style="padding-top: 3rem">
                    <a class="nav-link navAb" href="about.html">
                        <div class="nav-link-content">
                            <i class="bi bi-info-circle"></i>
                            <span>O mně</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                <a class="nav-link navNa" href="kalendar.html">
                    <div class="nav-link-content">
                        <i class="bi bi-calendar-week"></i>
                        <span>Kalendář</span>
                    </div>
                </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navNa" href="nazor.html">
                        <div class="nav-link-content">
                            <i class="bi bi-question-circle"></i>
                            <span>Zpětná vazba</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navCha" href="changelog.html">
                        <div class="nav-link-content">
                            <i class="bi bi-file-text"></i>
                            <span>Deník změn</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                        <div class="nav-link-content nav-text">
                        <i class="bi bi-sun"></i>
                            <label class="switch">
                                <input type="checkbox" id="dark-mode-toggle">
                                <span class="slider round"></span>
                            </label>
                            <i class="bi bi-moon"></i>
                        </div>
                </li>
            </ul>
        </div>
        <div class="version-info">25w12a</div>
    </div>

        <div id="searchModal" class="modal">
                <div class="modal-content">
                    <span id="closeSearch">&times;</span>
                    <input type="text" id="search" placeholder="Hledat...">
                    <div id="results"></div>
                </div>
            </div>
        <div id="cookie-consent" style="display: none;">
            <p>Tento web používá cookies. Pokud nesouhlasíte, budou se posílat jen nezbytné cookies.</p>
            <button onclick="acceptCookies()">Souhlasím</button>
            <button class="decline" onclick="declineCookies()">Nesouhlasím</button>
        </div>
      <script src="https://unpkg.com/lunr/lunr.js"></script>
    `;

  navbar.innerHTML = navbarContent;

  // Dark mode toggle functionality
  function initDarkMode() {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const toggleButtonMobile = document.getElementById(
      "dark-mode-toggle-mobile",
    );
    const body = document.body;
    let darkingmode = "";

    function enableDarkMode() {
      body.classList.add("dark-mode");
      document
        .querySelectorAll(
          "footer, p, h2, ul, li, .grid-item, .opinion-meta, div, section, .verybig, .opinion-card, #cookie-consent, .search-snippet, .key-icon, button, #MyNavBar, h5, .modal-content, #results, #results div, .scrollable-menu, .nav-text, .underlined, .version-info, #search, table, th, td, textarea, .opinion-input, .nav-link, h3, h4, img, video, hr, a, .button-container, .button-container a, .footer-content, .navImg, .Mcard, .Minfo, .Mnadpis, .mobile-header, .loading-bar, .mobile-menu",
        )
        .forEach((element) => {
          element.classList.add("dark-mode");
        });
      localStorage.setItem("darkMode", "enabled");
      darkingmode = "dark-mode";
    }

    function disableDarkMode() {
      body.classList.remove("dark-mode");
      document
        .querySelectorAll(
          "footer, p, h2, ul, li, .grid-item, .search-snippet, div, .verybig, section, .opinion-meta, #cookie-consent, .opinion-card, .key-icon, button, #MyNavBar, h5, .modal-content, #results, #results div, .scrollable-menu, .nav-text, .underlined, .version-info, #search, textarea, .opinion-input, .nav-link, th, td, h3, h4, hr, a, img, video, .button-container, .button-container a, .footer-content, .navImg, .Mcard, .Minfo, .Mnadpis, .mobile-header, .loading-bar, .mobile-menu",
        )
        .forEach((element) => {
          element.classList.remove("dark-mode");
        });
      localStorage.setItem("darkMode", "disabled");
      darkingmode = "";
    }

    // Apply dark mode if previously enabled
    if (localStorage.getItem("darkMode") === "enabled") {
      enableDarkMode();
      if (toggleButton) toggleButton.checked = true;
      if (toggleButtonMobile) toggleButtonMobile.checked = true;
    }

    if (toggleButton) {
      toggleButton.addEventListener("change", function () {
        if (body.classList.contains("dark-mode")) {
          disableDarkMode();
        } else {
          enableDarkMode();
        }
      });
    }

    if (toggleButtonMobile) {
      toggleButtonMobile.addEventListener("change", function () {
        if (body.classList.contains("dark-mode")) {
          disableDarkMode();
        } else {
          enableDarkMode();
        }
      });
    }
  }
  initDarkMode();
});
document.addEventListener("DOMContentLoaded", function () {
  var footers = document.querySelectorAll(".footer-content");

  var footerContent = `
    <p>© 2025, Všechna práva vyhrazena</p>
    <a href="privacy-policy-cs.html">Zásady ochrany osobních údajů</a>
    <a href="about.html">O mně</a>
  `;

  footers.forEach(function (footer) {
    footer.innerHTML = footerContent;
  });
});
// bar pro loading

document.addEventListener("DOMContentLoaded", function () {
  var loadingBar = document.querySelector(".loading-bar");

  // Funkce pro aktualizaci šířky loading baru podle pozice scrollování
  function updateLoadingBar() {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    loadingBar.style.width = scrollPercent + "%";
  }

  // Aktualizace loading baru při scrollování
  window.addEventListener("scroll", updateLoadingBar);

  // Prvotní nastavení při načtení stránky
  updateLoadingBar();
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar-toggler");
  const closeButton = document.querySelector(".close-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  function toggleMenu() {
    mobileMenu.classList.toggle("show");
    document.body.style.overflow = mobileMenu.classList.contains("show")
      ? "hidden"
      : "";
  }

  toggleButton.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);

  // Zavření menu při kliknutí na odkaz
  const menuLinks = mobileMenu.querySelectorAll(".nav-link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", function () {
  let index, pages;

  // Funkce pro odstranění diakritiky
  function normalizeText(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  // Načtení JSON indexu
  fetch("javastripts/search-index.json")
    .then((response) => response.json())
    .then((data) => {
      pages = data;
      index = lunr(function () {
        this.ref("url");
        this.field("title");
        this.field("content");

        data.forEach((page) => {
          page.title = normalizeText(page.title);
          page.content = normalizeText(page.content);
          this.add(page);
        });
      });
    });

  // Událost při psaní do vyhledávače
  document.getElementById("search").addEventListener("input", function () {
    let query = normalizeText(this.value.trim());
    let resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (query.length < 2) return; // Minimální délka dotazu

    let results = index.search(`*${query}*`); // Hledá části slov (fuzzy search)

    if (results.length === 0) {
      resultsContainer.innerHTML = "<p>Žádné výsledky.</p>";
      return;
    }

    results.forEach((result) => {
      let page = pages.find((p) => p.url === result.ref);
      let div = document.createElement("div");
      div.innerHTML = `<a href="${page.url}">${page.title}</a>`;
      resultsContainer.appendChild(div);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let index, pages;

  // Funkce pro normalizaci textu (odstranění diakritiky a převedení na malá písmena)
  function normalizeText(text) {
    if (!text) return "";
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  // Funkce pro nalezení a zvýraznění celého pojmu
  function findAndHighlightTerm(content, query) {
    if (!content) return "";

    const normalizedQuery = normalizeText(query);
    // Rozdělení obsahu podle čárek a následné ořezání mezer
    const terms = content.split(",").map((term) => term.trim());

    for (let term of terms) {
      if (normalizeText(term).includes(normalizedQuery)) {
        // Najdeme pozici hledaného výrazu v normalizovaném termínu
        const normalizedTerm = normalizeText(term);
        const queryIndex = normalizedTerm.indexOf(normalizedQuery);

        if (queryIndex !== -1) {
          // Rozdělíme podle přesné pozice výrazu
          const prefix = term.substring(0, queryIndex);
          const match = term.substring(queryIndex, queryIndex + query.length);
          const suffix = term.substring(queryIndex + query.length);

          return prefix + "<strong>" + match + "</strong>" + suffix;
        }

        return term; // Vrátíme celý pojem, i když nemůžeme přesně lokalizovat hledaný výraz
      }
    }

    return ""; // Pokud nic nenajdeme
  }

  // Funkce pro přepínání scrollování
  function toggleScrollLock(lock) {
    if (lock) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
  }

  // Načtení dat z indexu
  fetch("javastripts/search-index.json")
    .then((response) => response.json())
    .then((data) => {
      pages = data;
      index = lunr(function () {
        this.ref("url");
        this.field("title");
        this.field("content");

        data.forEach((page) => {
          this.add(page);
        });
      });
    })
    .catch((error) => {
      console.error("Chyba při načítání indexu:", error);
    });

  // Ovládání modalního okna pro hledání
  const modal = document.getElementById("searchModal");
  const closeBtn = document.getElementById("closeSearch");
  const searchInput = document.getElementById("search");
  const openBtns = document.querySelectorAll("#openSearch");
  openBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      modal.classList.add("active");
      toggleScrollLock(true); // Zamkne scrollování
      searchInput.focus();
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
    toggleScrollLock(false); // Odemkne scrollování
    searchInput.value = "";
    document.getElementById("results").innerHTML = "";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("active");
      toggleScrollLock(false); // Odemkne scrollování
      searchInput.value = "";
      document.getElementById("results").innerHTML = "";
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.classList.remove("active");
      toggleScrollLock(false); // Odemkne scrollování
      searchInput.value = "";
      document.getElementById("results").innerHTML = "";
    }

    const activeElement = document.activeElement.tagName.toLowerCase();
    const isTyping =
      activeElement === "input" ||
      activeElement === "textarea" ||
      activeElement === "select";

    if (event.key.toLowerCase() === "k" && !isTyping) {
      event.preventDefault();
      event.stopPropagation();
      modal.classList.add("active");
      toggleScrollLock(true); // Zamkne scrollování
      searchInput.focus();
    }
  });

  // Otevření prvního výsledku při stisknutí Enter
  window.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const firstResult = document.querySelector(".search-result"); // Hledáme první výsledek místo odkazu
      if (firstResult && firstResult.dataset.url) {
        window.location.href = firstResult.dataset.url; // Použijeme URL z data atributu
      }
    }
  });

  // Funkce pro hledání
  function search(query) {
    if (!pages || query.length < 2) return [];

    const results = [];
    const normalizedQuery = normalizeText(query);

    pages.forEach((page) => {
      let score = 0;
      let foundInTitle = false;
      let foundInContent = false;
      let highlightedTerm = "";

      // Hledání v názvu
      if (normalizeText(page.title).includes(normalizedQuery)) {
        score += 10;
        foundInTitle = true;
      }

      // Hledání v obsahu
      if (
        page.content &&
        normalizeText(page.content).includes(normalizedQuery)
      ) {
        score += 5;
        foundInContent = true;
        highlightedTerm = findAndHighlightTerm(page.content, query);
      }

      if (score > 0) {
        results.push({
          title: page.title,
          url: page.url,
          score: score,
          highlightedTerm: highlightedTerm,
          foundInTitle: foundInTitle,
          foundInContent: foundInContent,
        });
      }
    });

    // Seřazení výsledků podle skóre
    results.sort((a, b) => b.score - a.score);
    return results;
  }

  // Funkce pro zobrazení výsledků vyhledávání
  function displaySearchResults(query) {
    if (query.length < 2) return;

    const results = search(query);
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
      resultsContainer.innerHTML =
        "<div class='no-results'>Žádné výsledky nenalezeny</div>";
      return;
    }

    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("search-result");
      resultItem.dataset.url = result.url; // Uložíme URL jako data atribut
      resultItem.style.cursor = "pointer"; // Změníme kurzor na pointer pro indikaci klikatelnosti

      // Připravíme text pro pravý sloupec
      let snippetText = result.highlightedTerm;

      // Pokud jsme našli výsledek v titulku, ale ne v obsahu, zobrazíme informační text
      if (result.foundInTitle && !result.foundInContent) {
        snippetText = "V textu není zmínka";
      }

      // Vytvoříme HTML pro výsledek: vlevo odkaz na stránku, vpravo ukazatel
      resultItem.innerHTML = `
                <div class="result-title">${result.title}</div>
                <p class="search-snippet">${snippetText}</p>
            `;

      // Přidáme event listener pro kliknutí na celý div
      resultItem.addEventListener("click", function () {
        window.location.href = result.url;
      });

      resultsContainer.appendChild(resultItem);
    });
  }

  // Vyhledávání při zadání textu
  searchInput.addEventListener("input", function () {
    const query = searchInput.value;
    if (query.length >= 2) {
      displaySearchResults(query);
    } else {
      document.getElementById("results").innerHTML = "";
    }
  });
});

function acceptCookies() {
  localStorage.setItem("cookieConsent", "true");
  document.getElementById("cookie-consent").style.display = "none";

  console.log("User accepted cookies.");
  gtag("consent", "update", {
    analytics_storage: "granted",
  });

  loadGoogleAnalytics();
}

function declineCookies() {
  localStorage.setItem("cookieConsent", "false");
  document.getElementById("cookie-consent").style.display = "none";

  console.log("User declined cookies.");
  gtag("consent", "update", {
    analytics_storage: "denied",
  });
}

window.onload = function () {
  let consent = localStorage.getItem("cookieConsent");

  if (consent === "true") {
    console.log("Consent found: Accepted");
    acceptCookies();
  } else if (consent === "false") {
    console.log("Consent found: Declined");
    declineCookies();
  } else {
    console.log("No consent found, showing cookie banner.");
    document.getElementById("cookie-consent").style.display = "flex";
  }
};

document
  .getElementById("removeConsentBtn")
  .addEventListener("click", function () {
    localStorage.removeItem("cookieConsent"); // Vymaže pouze položku cookieConsent
    alert("Váš souhlas byl odebrán a data cookies byla vymazána.");
    location.reload();
  });
