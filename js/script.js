function toggleForm() {
    const displayForm = document.getElementById("formSection");

    if (displayForm.classList.contains("hidden")) {
        displayForm.classList.remove("hidden");
        displayData();
    } else {
        displayForm.classList.add("hidden");
    }
    console.log("blabla");
}

function displayData() {
    document.getElementById("inputName").value =
        document.getElementById("displayName").textContent;
    console.log(document.getElementById("displayName").textContent);

    document.getElementById("inputRole").value =
        document.getElementById("displayRole").textContent;
    console.log(document.getElementById("displayRole").textContent);

    document.getElementById("inputAvailability").value =
        document.getElementById("displayAvailability").textContent;

    document.getElementById("inputAge").value =
        document.getElementById("displayAge").textContent;

    document.getElementById("inputLokasi").value =
        document.getElementById("displayLocation").textContent;

    document.getElementById("inputExperience").value =
        document.getElementById("displayExperience").textContent;

    document.getElementById("inputEmail").value =
        document.getElementById("displayEmail").textContent;
}

let submitForm = document.querySelector("#submitForm");

submitForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(event.target);
    for (const [name, value] of data) {
        console.log(value);
        document.querySelector(`#display${name}`).innerHTML = value;
    }
    const displayForm = document.getElementById("formSection");
    displayForm.classList.add("hidden");
});
