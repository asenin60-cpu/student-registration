console.log("JavaScript Loaded");

const scriptURL = "https://script.google.com/macros/s/AKfycbxIENSKU74D7dh1R3u4lBvkLt_SL9WiCBwFRrclVBBxoR09wkK2ITtWQs5FLjgW5bjx5Q/exec";

document.getElementById("studentForm").addEventListener("submit", function (e) {

    console.log("Submit Clicked");

    e.preventDefault();

    const formData = new FormData();

    formData.append("registerNumber", document.getElementById("registerNumber").value);
    formData.append("dateOfBirth", document.getElementById("dob").value);
    formData.append("studentName", document.getElementById("studentName").value);
    formData.append("whatsappNumber", document.getElementById("whatsapp").value);
    formData.append("stream", document.getElementById("stream").value);
    formData.append("district", document.getElementById("district").value);

    fetch(scriptURL, {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert("Registration Successful!");
        window.location.href = "https://results.hse.kerala.gov.in/results/";
    })
    .catch(error => {
        console.error(error);
        alert("Something went wrong!");
    });

});
