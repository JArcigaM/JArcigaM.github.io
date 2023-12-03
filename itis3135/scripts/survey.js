const courseList = [];
function addCourse(){
    // Creates a div container for both the input field and button. Also generates a name for the Id the input field will get.
    const container = document.createElement("div");
    const courseId = "course" + (courseList.length + 1);

    // creates the text box and then adds type text, gives the field an generated Id so that its data can be called
    // in the submit function and pushes that id to the array.
    const courseInput = document.createElement("input");
    courseInput.type = "text";
    courseInput.id = courseId;
    courseList.push(courseId);


    // Creates a delete button that removes the input box and delete button but also removes the field from the array
    const deleteBut = document.createElement("button");
    deleteBut.textContent = "X";
    deleteBut.onclick = function(){
        const index = courseList.indexOf(courseId);
        if (index !== -1){
            courseList.splice(index, 1);
        }
        container.remove();
    };


    document.getElementById("courseList").appendChild(container);
    container.appendChild(courseInput);
    container.appendChild(deleteBut);
}
function reset(){
    document.getElementById("byoForm").reset();
}

function submit(event){
    // prevents the default submission of the form
    event.preventDefault();

    //grabs the data from the form
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const caption = document.getElementById("caption").value;
    const personal = document.getElementById("personal").value;
    const professional = document.getElementById("professional").value;
    const academic = document.getElementById("academic").value;
    const background = document.getElementById("background").value;
    const platform = document.getElementById("platform").value;
    const funFact = document.getElementById("funFact").value;
    const additional = document.getElementById("additional").value;


    // Sets the corrisponding fields to the inputed data in the form.
    document.getElementById("byoName").innerText = name;
    document.getElementById("byoCaption").innerText = caption;
    document.getElementById("byoPersonal").innerText = personal;
    document.getElementById("byoProfessional").innerText = professional;
    document.getElementById("byoAcademic").innerText = academic;
    document.getElementById("byoBackground").innerText = background;
    document.getElementById("byoPlatform").innerText = platform;
    document.getElementById("byoCourseList").innerText = courseList;
    document.getElementById("byoFunFact").innerText = funFact;
    document.getElementById("byoAdditional").innerText = additional;

    var image = document.getElementById('image').files[0];
    const imageUrl = URL.createObjectURL(image);
    var text = "<img src=\"" + imageUrl + "\" >";
    document.getElementById("byoImage").innerHTML = text;
    
    // On submission removes the previously submitted list
    document.getElementById("byoCourseList").innerHTML = "";

    // Reads the course input boxes and then creates li for each one.
    for (let i = 0; i < courseList.length; i++) {
        const inputElement = document.getElementById(courseList[i]);
        if (inputElement){
            const li = document.createElement("li");
            li.textContent = inputElement.value;
            document.getElementById("byoCourseList").appendChild(li);
        }
    }

    // Unhides the hidden "Page" and hides the form
    document.getElementById('byoForm').className = 'hidden';
    document.getElementById('introPage').className = '';
}
document.getElementById('byoForm').onsubmit = submit;

function back(){
    document.getElementById('byoForm').className = '';
    document.getElementById('introPage').className = 'hidden';
}