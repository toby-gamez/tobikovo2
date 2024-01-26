// Získání elementu navbaru
var navbar = document.getElementById('myNavbar');

// Dynamická změna obsahu navbaru
navbar.innerHTML = `
<nav>
    <a href="home.html"><img src="images/white-logo.png" alt="Logo" width="75px"></a>
    <a href="home.html">Domů</a>
    <a href="cesky-jazyk.html">Český jazyk</a>
    <a href="hudebni-vychova.html">Hudební výchova</a>
    <a href="matematika.html">Matema- tika</a>
    <a href="dejepis.html">Dějepis</a>
    <a href="anglictina.html">Anglický jazyk</a>
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