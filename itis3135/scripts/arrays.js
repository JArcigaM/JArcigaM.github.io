let users = [];
let salaries = [];
users.push('Peso');
users.push('Fren');
salaries.push(1000);
salaries.push(500);

function addSalary(){
    let user = document.getElementById('inUser').value;
    let salary = parseFloat(document.getElementById('inSalary').value);
    if (salary === '' || isNaN(salary) || user === '' || !isNaN(user)) {
        alert("Invalid input or missing input")}
    else{
        users.push(user);
        salaries.push(salary);
    }
    document.getElementById('inUser').value = '';
    document.getElementById('inSalary').value = '';
}
function displayResults(){
    let sum = 0
    for (let i = 0; i < salaries.length;i++){
        sum = sum + salaries[i];
    }
    let average = sum / salaries.length;
    average = average.toFixed(2);
    let highest = Math.max(...salaries);
    
    document.getElementById('results').className = ""
    document.getElementById('average').innerText = `Salary Average: ${average}`;
    document.getElementById('highest').innerText = `Highest Salary: ${highest}`;
}

function displaySalary(){
    document.getElementById('tableBody').innerHTML = '';
    for (let i = 0; i < users.length; i++){
        let user = users[i];
        let salary = salaries[i];
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user}</td>
        <td>${salary}</td>`;
        document.getElementById('tableBody').appendChild(row);
    }
    document.getElementById('salaries').className = ""
}