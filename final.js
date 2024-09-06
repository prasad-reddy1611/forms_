// let fname = document.forms["forms"]["fname"].value;
// if(fname == ""){
//     alert("Please fill it");
//     return false;
// }

document.getElementById('end').addEventListener('click', function(event) {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;

    const nameRegex = /^[A-Za-z]{2,}$/;

    if (!nameRegex.test(fname)) {
        alert("Please enter a valid first name with at least 2 letters.");
        event.preventDefault();
    }

    if (!nameRegex.test(lname)) {
        alert("Please enter a valid last name with at least 2 letters.");
        event.preventDefault();
    }
});
