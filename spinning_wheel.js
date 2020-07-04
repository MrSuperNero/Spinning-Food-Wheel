let cuisines = [];
let deg = 0;
let spinButton = document.querySelector("#spin");

spinButton.onclick = function() {

    let min = 1.5 * 360;     // min value
    let max = 10 * 360;     // max value
    // deg += Math.floor(Math.random() * (max - min)) + max;    // randomly spin
    deg = 45;
    let absolute_deg = deg % 360;

    // set degree limits for cuisines
    let ethiopian = 45,
        thai = 90,
        french = 135,
        mexican = 180,
        american = 225,
        korean = 270,
        italian = 315,
        south_asian = 359;
    
    // determine which cuisine was chosen
    if (0 < absolute_deg && absolute_deg < ethiopian) {
        cuisines.push("Ethiopian");
    } else if (45 < absolute_deg && absolute_deg < thai) {
        cuisines.push("Thai");
    } else if (90 < absolute_deg && absolute_deg < french) {
        cuisines.push("French");
    } else if (135 < absolute_deg && absolute_deg < mexican) {
        cuisines.push("Mexican");
    } else if (180 < absolute_deg && absolute_deg < american) {
        cuisines.push("American");
    } else if (225 < absolute_deg && absolute_deg < korean) {
        cuisines.push("Korean");
    } else if (270 < absolute_deg && absolute_deg < italian) {
        cuisines.push("Italian");
    } else if (315 < absolute_deg && absolute_deg < south_asian) {
        cuisines.push("South Asian");
    }

    // rotate wheel
    var wheel = document.getElementById("wheel");
    wheel.style.transform = "rotate("+deg+"deg)";

    // print cuisine selected onto page after wheel finishes spinning for 5s
    setTimeout(function() {
        document.querySelector(".cuisines").innerHTML = cuisines.join("<br>");
    }, 5200);
}
