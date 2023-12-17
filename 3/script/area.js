function toNum(input) {
    if (input === "") {
        return NaN;
    }
    return +input;
}
function calcArea1() {
    var base = toNum(document.getElementById("base").value);
    var height = toNum(document.getElementById("height").value);
    if (Number.isNaN(base) || Number.isNaN(height)) {
        alert("Hibás vagy hiányzó adatok!");
        return;
    }
    document.getElementById("area").innerText = "".concat(base * height);
}
function calcArea2() {
    var side1 = toNum(document.getElementById("side-1").value);
    var side2 = toNum(document.getElementById("side-2").value);
    var angle = toNum(document.getElementById("angle").value) / 180 * Math.PI;
    if (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(angle)) {
        alert("Hibás vagy hiányzó adatok!");
        return;
    }
    document.getElementById("area").innerText = "".concat(side1 * side2 * Math.sin(angle));
}
function calcArea() {
    var method = document.querySelector("input[name='method']:checked").value;
    switch (method) {
        case "method-1":
            calcArea1();
            break;
        case "method-2":
            calcArea2();
            break;
    }
}
function changeDisabled1(value) {
    var base = document.getElementById("base");
    var height = document.getElementById("height");
    base.disabled = value;
    height.disabled = value;
    var card = document.getElementById("card-method-1");
    if (value) {
        card.classList.add("card-disabled");
    }
    else {
        card.classList.remove("card-disabled");
    }
}
function changeDisabled2(value) {
    var side1 = document.getElementById("side-1");
    var side2 = document.getElementById("side-2");
    var angle = document.getElementById("angle");
    side1.disabled = value;
    side2.disabled = value;
    angle.disabled = value;
    var card = document.getElementById("card-method-2");
    if (value) {
        card.classList.add("card-disabled");
    }
    else {
        card.classList.remove("card-disabled");
    }
}
function onMethodChanged() {
    var method1 = document.getElementById("method-1");
    console.log(method1.checked);
    if (method1.checked) {
        changeDisabled1(false);
        changeDisabled2(true);
    }
    else {
        changeDisabled1(true);
        changeDisabled2(false);
    }
}
window.addEventListener("load", function () {
    onMethodChanged();
});
