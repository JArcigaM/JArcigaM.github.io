let charactersPressed = []

// adds character to global array and display all pressed keys in the console
function add(value){
    charactersPressed.push(value);
    for (var i = 0; i < charactersPressed.length; i++){
        console.log(charactersPressed[i]);
    }
}

// clears the array
function clearA(){
    charactersPressed = [];
}

function calculator(){
    let firstSection = "";
    let secondSection = "";
    let symbol = "";
    let total = 0;
    // Splits the numbers before +-/* into first section. Then saves what ever symbol that was at symbol. Then puts rest of the numbers in section 2.
    for (var i = 0; i < charactersPressed.length; i++){
        if (charactersPressed[i] === "+" || charactersPressed[i] === "-" || charactersPressed[i] === "*" || charactersPressed[i] === "/") {
            symbol = charactersPressed[i];
        } else if (symbol === "") {
            firstSection += charactersPressed[i];
        } else {
            secondSection += charactersPressed[i];
        }

    total = parseFloat(firstSection);
    // determines what way it needs to calculate
    if (symbol == "+") {
        total += parseFloat(secondSection);
    } else if (symbol == "-") {
        total -= parseFloat(secondSection);
    } else if (symbol == "*") {
        total *= parseFloat(secondSection);
    } else if (symbol == "/") {
        total /= parseFloat(secondSection);
    }
    }
    alert(total);
}