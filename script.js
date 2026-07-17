const scriptURL = "https://script.google.com/macros/s/AKfycbwcEpNOd_dblC-Qr_SCeXiHXiWNmGdve4AfO9TKOesLSNw238FhV1xBOY46nladqqdu6Q/exec";

document.getElementById("studentForm").addEventListener("submit", function (e) {
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
        alert("Registration Successful!");

        // Redirect to Kerala Results Website
        window.location.href = "https://results.hse.kerala.gov.in/results/";
    })
    .catch(error => {
        alert("Something went wrong!");
        console.error(error);
    });
});
