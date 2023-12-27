// Získání elementu navbaru
var navbar = document.getElementById('myNavbar');

// Dynamická změna obsahu navbaru
navbar.innerHTML = `
<nav>
    <a href="index.html"><img src="images/white-logo.png" alt="Logo" width="75px"></a>
    <a href="index.html">Domů</a>
    <a href="cesky-jazyk.html">Český jazyk</a>
    <a href="#o-nas">hoida</a>
</nav>
`;