document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('myNavbar');

    var navbarContent = `
    <link href="libs/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <!-- Mobilní hlavička -->
    <div class="mobile-header">
        <div class="logo">
            <a href="home.html">
                    <img src="images/white-logo.png" width="150px" alt="">
            </a>
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
            <li class="nav-item" >
                <a class="nav-link navMl" href="mluvnice.html">
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
                        <span>Hudba</span>
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
            <div class="version-info">25w03a</div>
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
    <a href="home.html" class="navImg" style="margin-left: auto; margin-right: auto"><img src="images/white-logo.png" width="150px"></img></a>
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
                <li class="nav-item" >
                    <a class="nav-link navMl" href="mluvnice.html">
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
                            <span>Hudba</span>
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
            </ul>
        </div>
        <div class="version-info">25w03a</div>
    </div>

            `;

    navbar.innerHTML = navbarContent;
});

// bar pro loading

document.addEventListener('DOMContentLoaded', function () {
    var loadingBar = document.querySelector('.loading-bar');

    // Funkce pro aktualizaci šířky loading baru podle pozice scrollování
    function updateLoadingBar() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight;
        var scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
        loadingBar.style.width = scrollPercent + '%';
    }

    // Aktualizace loading baru při scrollování
    window.addEventListener('scroll', updateLoadingBar);

    // Prvotní nastavení při načtení stránky
    updateLoadingBar();
});



document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar-toggler');
    const closeButton = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    function toggleMenu() {
        mobileMenu.classList.toggle('show');
        document.body.style.overflow = mobileMenu.classList.contains('show') ? 'hidden' : '';
    }

    toggleButton.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);

    // Zavření menu při kliknutí na odkaz
    const menuLinks = mobileMenu.querySelectorAll('.nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}