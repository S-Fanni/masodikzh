function toNum(input: string): number {
    if (input === "") {
        return NaN
    }
    return +input
}

function calcArea1(): void {
    const base = toNum((document.getElementById("base") as HTMLInputElement).value)
    const height = toNum((document.getElementById("height") as HTMLInputElement).value)

    if (Number.isNaN(base) || Number.isNaN(height)) {
        alert("Hibás vagy hiányzó adatok!")
        return
    }
    document.getElementById("area")!.innerText = `${base * height}`
}

function calcArea2(): void {
    const side1 = toNum((document.getElementById("side-1") as HTMLInputElement).value)
    const side2 = toNum((document.getElementById("side-2") as HTMLInputElement).value)
    const angle = toNum((document.getElementById("angle") as HTMLInputElement).value) / 180 * Math.PI

    if (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(angle)) {
        alert("Hibás vagy hiányzó adatok!")
        return
    }
    document.getElementById("area")!.innerText = `${side1 * side2 * Math.sin(angle)}`
}

function calcArea(): void {
    const method = (document.querySelector("input[name='method']:checked") as HTMLInputElement).value
    switch (method) {
        case "method-1": calcArea1(); break;
        case "method-2": calcArea2(); break;
    }
}

function changeDisabled1(value: boolean): void {
    const base = document.getElementById("base") as HTMLInputElement
    const height = document.getElementById("height") as HTMLInputElement
    base.disabled = value
    height.disabled = value

    const card = document.getElementById("card-method-1")!
    if (value) {
        card.classList.add("card-disabled")
    } else {
        card.classList.remove("card-disabled")
    }
}

function changeDisabled2(value: boolean): void {
    const side1 = document.getElementById("side-1") as HTMLInputElement
    const side2 = document.getElementById("side-2") as HTMLInputElement
    const angle = document.getElementById("angle") as HTMLInputElement
    side1.disabled = value
    side2.disabled = value
    angle.disabled = value

    const card = document.getElementById("card-method-2")!
    if (value) {
        card.classList.add("card-disabled")
    } else {
        card.classList.remove("card-disabled")
    }
}

function onMethodChanged(): void {
    const method1 = document.getElementById("method-1") as HTMLInputElement
    console.log(method1.checked)
    if (method1.checked) {
        changeDisabled1(false)
        changeDisabled2(true)
    } else {
        changeDisabled1(true)
        changeDisabled2(false)
    }
}

window.addEventListener("load", () => {
    onMethodChanged()
})