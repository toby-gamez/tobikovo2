document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('myNavbar');

    var navbarContent = `
            <nav>
                <button style="font-size: 50px; position: absolute; top: 0; right: 10px;" class="openNav nav-button" onclick="openNav()">×</button>
                <a href="index.html"><img src="images/white-logo.png" alt="Logo" width="75px"></a>
                <a href="index.html">Domů</a>
                <hr>
                <a href="mluvnice.html">Mluvnice</a>
                <a href="literatura.html">Literatura</a>
                <a href="sloh.html">Sloh</a>
                <a href="hudebni-vychova.html">Hudební výchova</a>
                <a href="matematika.html">Matematika</a>
                <a href="chemie.html">Chemie</a>
                <hr>
                <a href="about.html">O mně</a>
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
