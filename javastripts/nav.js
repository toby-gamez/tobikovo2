// Získání elementu navbaru
var navbar = document.getElementById('myNavbar');

// Dynamická změna obsahu navbaru
navbar.innerHTML = `
<nav>
    <a href="index.html"><img src="images/white-logo.png" alt="Logo" width="75px"></a>
    <a href="index.html">Domů</a>
    <hr style="width: 75px;">
    <a href="mluvnice.html">Mluvnice</a>
    <a href="literatura.html">Literatura</a>
    <a href="sloh.html">Sloh</a>
    <hr style="width: 75px;">
    <a href="about.html">O nás</a>
</nav>
`;
/* Loading bar */
document.addEventListener('DOMContentLoaded', function () {
    var loadingBarContainer = document.querySelector('.loading-bar-container');
    var loadingBar = document.querySelector('.loading-bar');

    // Funkce pro zobrazení loading baru s postupně narůstající šířkou
    function showLoadingBar() {
        loadingBar.style.width = '100%';
    }

    // Po dokončení animace loading baru skryje celý container
    function hideLoadingContainer() {
        loadingBarContainer.style.display = 'none';
    }

    // Spustí simulaci načítání při načtení stránky
    simulateLoading();

    // Funkce pro simulaci načítání
    function simulateLoading() {
        setTimeout(showLoadingBar, 1000); // Simulace trvání načítání (1 sekunda)
        setTimeout(hideLoadingContainer, 3000); // Po dokončení animace skryje loading container (3 sekundy)
    }
});