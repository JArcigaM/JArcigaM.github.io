function currentDate(){
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById("currentDate").innerHTML = "Date and time: " + date + "  " + time;
}
currentDate();

function greeting(){
    let name = document.getElementById("name").value;
    let mood = document.getElementById("mood").value;
    document.getElementById("greeting").innerHTML = "Hello " + name + "!" + " We hope you are having a great day and hope your "
     + mood + " is adding on to a positive day";
}
function polygon(){
    const polygons = ["henagon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
    let polygonVal = document.getElementById("polygon").value;
    polygonVal = Math.round(polygonVal);
    if (polygonVal >= 0 && polygonVal <= 10){
        alert("Your favorite number is a " + polygons[polygonVal - 1] + " polygon.");
    } else if (polygonVal < 0){
        polygonVal = Math.abs(polygonVal);
        alert("Your favorite number is a " + polygons[polygonVal - 1] + " polygon.");
    }

}

function tellJoke(){
    alert("Why did the aardwolf start a comedy club for other animals? Because it wanted to create a howl-arious environment!")
}
function tellFact(){
    const facts = ["Aardwolves primarily feed on termites and insects, consuming thousands in a single night using their long, sticky tongues.",
    "These small mammals are nocturnal by nature, preferring to hunt and roam during the cover of the night.", 
    "While generally quiet, aardwolves are known for their ability to mimic the sounds of other animals, adding a touch of mystery to their nocturnal activities." 
]
    let num = Math.floor(Math.random() * 3);
    alert(facts[num]);
}
