document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('myNavbar');
    var storedNavbar = localStorage.getItem('navbar');

    if (storedNavbar) {
        navbar.innerHTML = storedNavbar;
    } else {
        var navbarContent = `
        <nav>
            <a href="index.html"><img src="images/white-logo.png" alt="Logo" width="75px"></a>
            <a href="index.html">Domů</a>
            <hr style="width: 75px;">
            <a href="mluvnice.html">Mluvnice</a>
            <a href="literatura.html">Literatura</a>
            <a href="sloh.html">Sloh</a>
            <hr style="width: 75px;">
            <a href="kalendar.html">Kalendář na písemky</a>
            <hr style="width: 75px;">
            <a href="about.html">O mně</a>
        </nav>
        `;
        navbar.innerHTML = navbarContent;
        localStorage.setItem('navbar', navbarContent);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var loadingBarContainer = document.querySelector('.loading-bar-container');
    var loadingBar = document.querySelector('.loading-bar');

    // Funkce pro zobrazení loading baru s postupně narůstající šířkou
    function showLoadingBar() {
        loadingBar.style.width = '100%';
    }

    // Po dokončení animace loading baru skryje celý container
    function hideLoadingContainer() {
        loadingBarContainer.style.opacity = '0';
        setTimeout(() => {
            loadingBarContainer.style.display = 'none';
        }, 500); // Ponecháme 500ms pro plynulé skrytí
    }

    // Spustí simulaci načítání při načtení stránky
    simulateLoading();

    // Funkce pro simulaci načítání
    function simulateLoading() {
        setTimeout(showLoadingBar, 1000); // Simulace trvání načítání (1 sekunda)
        setTimeout(hideLoadingContainer, 3000); // Po dokončení animace skryje loading container (3 sekundy)
    }
});

// button



let styleSheet = null;
const SPARK_ELEMENT_WIDTH = 30;
const DISTANCE = 40;
const RANDOMNESS_ON = true;

function createTransformSteps() {
    if (arguments.length === 0) {
        throw new Error("arguments to createTransformSteps should never be empty!");
    }

    const inputSteps = Array.from(arguments);
    const outputSteps = [inputSteps.shift()];
    inputSteps.forEach((step, i) => {
        outputSteps.push(`${outputSteps[i]} ${step}`);
    });

    return outputSteps;
}

const dynamicAnimation = (name, rotation) => {
    if (!styleSheet) {
        styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        document.head.appendChild(styleSheet);
    }

    const randomDist = RANDOMNESS_ON
        ? Math.floor((Math.random() - 0.5) * DISTANCE * 0.7)
        : 0;

    const [s1, s2, s3] = createTransformSteps(
        `translate(-50%, -50%) rotate(${rotation}deg) translate(10px, 0px)`,
        `translate(${DISTANCE + randomDist}px, 0px) scale(0.5, 0.5)`,
        `translate(${SPARK_ELEMENT_WIDTH / 2}px, 0) scale(0, 0)`
    );

    styleSheet.sheet.insertRule(
        `@keyframes ${name} {
         0% {
           transform: ${s1};
         }
         70% {
           transform: ${s2};
         }
         100% {
           transform: ${s3};
         }
      }`,
        styleSheet.sheet.cssRules.length
    );
};

document.querySelectorAll('button[type="button"], button.button').forEach(button => {
    button.addEventListener("click", (e) => {
        const center = { x: e.pageX, y: e.pageY };
        makeBurst(center);
    });
});

const makeBurst = (center) => {
    for (let i = 0; i < 8; i++) {
        const randomSpace = RANDOMNESS_ON
            ? Math.floor(-17 + Math.random() * 34)
            : 0;
        makeSpark(center, 45 * i + randomSpace);
    }
};

const makeSpark = (center, rotation) => {
    const div = document.createElement("div");
    const aniName = `disappear_${rotation}`;
    dynamicAnimation(aniName, rotation);

    div.classList.add("spark");
    div.style.left = `${center.x}px`;
    div.style.top = `${center.y}px`;
    div.style.animation = `${aniName} 500ms ease-out both`;
    document.body.append(div);
    setTimeout(() => {
        document.body.removeChild(div);
    }, 1000);
};
