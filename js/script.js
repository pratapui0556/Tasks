// View employee details from json
/*
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "data/employee-data.json");
var viewData = document.getElementById('viewData');

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        for (i = 0; i < this.responseText.length; i++) {
            var row = '<div class="row"> <div class="cell">this.responseText.name  </div>  <div class="cell">this.responseText.skills  </div> <div class="cell"><button >Edit</button><button >Delete</button> </div></div>';
          viewData.innerHTML += row;  
        }
    }
};
xhttp.send();

*/


var data = [{
    "id": "12345",
    "name": "XXXXX",
    "skills": "HTML,CSS"
},
{
    "id": "56789",
    "name": "YYYYY",
    "skills": "HTML,CSS,JS"
}];
var rowVal;
var section;

viewData();

// view data
function viewData() {
    var viewData = document.getElementById('viewData');
    viewData.innerHTML = '    <div class="row head"> <div class="cell">   Employee ID</div><div class="cell">       Employee Name  </div>  <div class="cell">  Skills   </div>       <div class="cell">   Actions       </div>  </div>';
    for (i = 0; i < data.length; i++) {
        var row = '<div class="row"> <div class="cell">' + data[i].id + ' </div>   <div class="cell">' + data[i].name + ' </div>  <div class="cell">' + data[i].skills + '</div> <div class="cell"><button  onclick="rowVal=' + i + ';  editRow(this)" >Edit</button><button  onclick="rowVal=' + i + '; deleteRow(this)">Delete</button> </div></div>';
        viewData.innerHTML += row;
    }
}

//add
function addRow() {
    section = "add";
    document.getElementById("updateForm").reset();
    showSection();
}

//edit
function editRow(btn) {
    section = "edit";
    showSection();
}
//delete
function deleteRow(btn) {
    data.splice(rowVal, 1);
    viewData();
}

//close Section
function closeSection() {
    section = "";
    document.getElementById('updateSection').classList.remove("show");
}

//show Section
function showSection() {
    var secName;
    if (section == "edit") {
        secName = "Edit Section"
        document.getElementById('empID').value = data[rowVal].id;
        document.getElementById('empName').value = data[rowVal].name;
        document.getElementById('skills').value = data[rowVal].skills;

    } else if (section == "add") {
        secName = "Add Section"
    }
    document.getElementsByTagName("h2")[0].innerHTML = secName;
    document.getElementById('updateSection').className = "updateSection show";
}

//update Section
function updateSection() {
    var updatedData = {
        "id": document.getElementById("empID").value,
        "name": document.getElementById("empName").value,
        "skills": document.getElementById("skills").value
    };
    if (section == "edit") {
        data[rowVal] = updatedData;
    } else if (section == "add") {
        data.push(updatedData)
    }
    viewData();
    closeSection();
}
