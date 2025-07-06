let display;

document.addEventListener("DOMContentLoaded", () => {
    display = document.getElementById("setdisplay");
});

function addtodisplay(item) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.slice(-1);


    if (operators.includes(item) && operators.includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += item;
}



function cleardisplay() {
    display.value = "";
}

function clearitem() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
