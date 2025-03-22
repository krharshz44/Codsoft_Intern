let history = [];

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        let result = eval(expression);
        document.getElementById("display").value = result;
        addToHistory(expression + " = " + result);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function addToHistory(entry) {
    history.unshift(entry);
    if (history.length > 10) {
        history.pop();
    }
    updateHistory();
}

function updateHistory() {
    let historyList = document.getElementById("history-list");
    historyList.innerHTML = "";
    history.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function clearHistory() {
    history = [];
    updateHistory();
}