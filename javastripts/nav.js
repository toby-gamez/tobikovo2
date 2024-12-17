document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('myNavbar');

    var navbarContent = `
            <nav>
                            
                <button style="font-size: 50px; position: absolute; top: 0; right: 10px; color: #220b00;" class="openNav nav-button" onclick="openNav()">×</button>
                <a href="home.html"><img src="images/white-logo.png" alt="Logo" width="75px"></a>
                <a href="home.html">Domů</a>
                <hr>
                <a href="mluvnice.html">Mluvnice</a>
                <a href="literatura.html">Literatura</a>
                <a href="sloh.html">Sloh</a>
                <a href="hudebni-vychova.html">Hudební výchova</a>
                <a href="matematika.html">Matematika</a>
                <a href="chemie.html">Chemie</a>
                <hr>
                <a href="about.html">O mně</a>
                <a href="nazor.html">Vaše zpětná vazba</a>
                <a href="changelog.html">Deník změn</a>
                <span style="font-family: 'Outfit', sans-serif;" class="navtext">24w51b</span>

                <button class="scroll-to-top" onclick="scrollToTop()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3.293l-4.146 4.147a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1-.708.708L8 3.293z"/>
            <path fill-rule="evenodd" d="M8 12.707a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5z"/>
        </svg>
    </button>
            </nav>
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

// nav

function openNav() {
    // Získání souboru CSS
    var cssFile = document.querySelector('link[href="css/nav.css"]').sheet;

    // Projdeme všechna pravidla v souboru CSS
    for (var i = 0; i < cssFile.cssRules.length; i++) {
        var rule = cssFile.cssRules[i];

        // Najdeme pravidlo v bloku @media pro navigační panel
        if (rule.type === CSSRule.MEDIA_RULE && rule.conditionText.includes('max-width: 600px')) {
            // Projdeme pravidla uvnitř @media bloku
            for (var j = 0; j < rule.cssRules.length; j++) {
                var navRule = rule.cssRules[j];
                // Najdeme pravidlo s transformací pro 'nav'
                if (navRule.selectorText === 'nav') {
                    // Změníme hodnotu transformace
                    if (navRule.style.transform === 'translateY(0%)') {
                        navRule.style.transform = 'translateY(-100%)';
                    } else {
                        navRule.style.transform = 'translateY(0%)';
                    }
                    break; // Ukončíme cyklus po úpravě pravidla
                }
            }
            break; // Ukončíme cyklus po nalezení a úpravě @media pravidla
        }
    }
}




function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}