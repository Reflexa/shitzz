let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{R_}", ms: 100 },
    { t: "{RE_}", ms: 100 },
    { t: "{REF_}", ms: 100 },
    { t: "{REFL_}", ms: 100 },
    { t: "{REFLE_}", ms: 100 },
    { t: "{REFLEX_}", ms: 200 },
    { t: "{REFLEXA_}", ms: 200 },
    { t: "{REFLEXA}", ms: 300 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();
